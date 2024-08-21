"use client"
import { AxiosDefault } from '@/api/interceptors'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

interface Product {
    id: number
    title: string
    description: string
    price: number
    discount_percentage: number
    rating: number
    stock: number
    brand: string
    thumbnail: string
    images: string[]
    is_published: boolean
    child_category_id: number
    child_category: {
        id: number
        name: string
        parent_category_id: number
        parent_category: {
            name: string
            grand_category_id: number
            grand_category: {
                id: number
                name: string
            }
        }
    }
}

interface Category {
    id: number
    name: string
}

function ProductsPageContent() {
    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [searchResults, setSearchResults] = useState<Product[]>([])
    const [searchQuery, setSearchQuery] = useState<string>('')

    const searchParams = useSearchParams()
    const grandCategory = searchParams.get('grand_category')
    const parentCategory = searchParams.get('parent_category')
    const childCategory = searchParams.get('child_category')

    const router = useRouter()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await AxiosDefault.get('/products?page=1&limit=100')
                console.log('Products:', response)
                setProducts(response.data.data)
                setSearchResults(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке продуктов:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    useEffect(() => {
        if (!loading) {
            let filtered = products

            if (grandCategory) {
                filtered = filtered.filter(product =>
                    product.child_category.parent_category.grand_category.name.toLowerCase() === grandCategory.toLowerCase()
                )
            }

            if (parentCategory) {
                filtered = filtered.filter(product =>
                    product.child_category.parent_category.name.toLowerCase() === parentCategory.toLowerCase()
                )
            }

            if (childCategory) {
                filtered = filtered.filter(product =>
                    product.child_category.name.toLowerCase() === childCategory.toLowerCase()
                )
            }

            setSearchResults(filtered)
        }
    }, [loading, grandCategory, parentCategory, childCategory, products])

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const response = await AxiosDefault.get(`/products/?search=${searchQuery}`)
            setSearchResults(response.data.data)
        } catch (error) {
            console.error('Ошибка при поиске продуктов:', error)
        }
    }

    const clearFilters = () => {
        setSearchResults(products)
        router.push('/products')  // This will navigate to /products and clear query parameters
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-20 mt-12">
            <div className="container mx-auto px-4 flex">
                <aside className="w-1/4 pr-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Категории</h2>
                    <ul>
                        <li
                            className={`mb-2 ${!parentCategory && !childCategory ? 'font-bold' : ''}`}
                            onClick={clearFilters}  // Clear the filters when "Все" is clicked
                        >
                            <button className="text-gray-800 hover:text-gray-600">Все</button>
                        </li>
                        {categories.map(category => (
                            <li
                                key={category.id}
                                className={`mb-2 ${childCategory === category.name.toLowerCase() || parentCategory === category.name.toLowerCase() ? 'font-bold' : ''}`}
                                onClick={() => setSearchResults(products.filter(product => product.child_category.name.toLowerCase() === category.name.toLowerCase()))}
                            >
                                <button className="text-gray-800 hover:text-gray-600">
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className="w-3/4">
                    <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
                        <ShoppingCart className="w-8 h-8 mr-2" />
                        Продукция
                    </h1>
                    <form onSubmit={handleSearch} className="mb-8 flex justify-center">
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="px-4 py-2 border rounded-md w-1/2"
                        />
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded ml-2">Search</button>
                    </form>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {searchResults.map(product => (
                            <Link key={product.id} href={`/products/${product.child_category.name.toLowerCase()}/${product.id}`}
                                passHref>
                                <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={`${process.env.NEXT_PUBLIC_S3_URL}${product.thumbnail}`}
                                        alt={product.title}
                                        className="w-full h-48 object-cover rounded mb-4"
                                    />
                                    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                                    <p className="text-gray-700 mb-2">{product.description}</p>
                                    <p className="text-gray-900 font-semibold mb-2">{product.price}тг</p>
                                    <p className="text-gray-600 mb-2">В наличии: {product.stock}</p>
                                    <p className="text-gray-600 mb-2">Бренд: {product.brand}</p>
                                    <p className="text-gray-600 mb-2">Категория: {product.child_category.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Загрузка...</div>}>
            <ProductsPageContent />
        </Suspense>
    )
}
