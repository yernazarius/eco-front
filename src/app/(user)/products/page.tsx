"use client"
import { AxiosDefault } from '@/api/interceptors'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface Product {
    id: number
    title: string
    description: string
    price: number
    discount_percentage: number
    rating: number
    stock: number
    brands_id: number
    brand: {
        id: number
        name: string
    }
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

interface GrandCategory {
    id: number
    name: string
    parent_categories: ParentCategory[]
}

interface ParentCategory {
    id: number
    name: string
    grand_category_id: number
    child_categories: ChildCategory[]
}

interface ChildCategory {
    id: number
    name: string
    parent_category_id: number
}

interface Brands {
    id: number
    name: string
}

function ProductsPageContent() {
    const [products, setProducts] = useState<Product[]>([])
    const [grandCategories, setGrandCategories] = useState<GrandCategory[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [searchResults, setSearchResults] = useState<Product[]>([])
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [brands, setBrands] = useState<Brands[]>([])
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

    const searchParams = useSearchParams()
    const grandCategory = searchParams.get('grand_category')
    const parentCategory = searchParams.get('parent_category')
    const childCategory = searchParams.get('child_category')

    const router = useRouter()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await AxiosDefault.get('/products?page=1&limit=100')
                setProducts(response.data.data)
                setSearchResults(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке продуктов:', error)
            } finally {
                setLoading(false)
            }
        }

        const fetchBrands = async () => {
            try {
                const response = await AxiosDefault.get('/brands')
                setBrands(response.data.data)
                console.log('brands', response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке брендов:', error)
            } finally {
                setLoading(false)
            }
        }

        const fetchCategories = async () => {
            try {
                const grandResponse = await AxiosDefault.get('/category_grand')
                const parentResponse = await AxiosDefault.get('/category_parent')
                const childResponse = await AxiosDefault.get('/category_child')

                const grandCategories = grandResponse.data.data.map((grand: GrandCategory) => ({
                    ...grand,
                    parent_categories: parentResponse.data.data
                        .filter((parent: ParentCategory) => parent.grand_category_id === grand.id)
                        .map((parent: ParentCategory) => ({
                            ...parent,
                            child_categories: childResponse.data.data.filter(
                                (child: ChildCategory) => child.parent_category_id === parent.id
                            )
                        }))
                }))

                setGrandCategories(grandCategories)
            } catch (error) {
                console.error('Ошибка при загрузке категорий:', error)
            }
        }

        fetchProducts()
        fetchCategories()
        fetchBrands()
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

            if (selectedBrand) {
                filtered = filtered.filter(product =>
                    product.brand.name.toLowerCase() === selectedBrand.toLowerCase()
                )
            }

            setSearchResults(filtered)
        }
    }, [loading, grandCategory, parentCategory, childCategory, selectedBrand, products])

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
        setSelectedBrand(null)
        router.push('/products')  // Clear query parameters
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto  mt-12">
            <div className="container mx-auto px-4 flex">
                <aside className="w-1/4 pr-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Категории</h2>
                    <ul>
                        <li
                            className={`mb-2 ${!parentCategory && !childCategory ? 'font-bold' : ''}`}
                            onClick={clearFilters}
                        >
                            <button className="text-gray-800 hover:text-gray-600 transition-transform transform active:scale-95">Все</button>
                        </li>
                        {grandCategories.map(grandCategory => (
                            <li key={grandCategory.id} className="mb-2">
                                <button
                                    className={`font-bold text-gray-800 hover:text-gray-600 transition-transform transform active:scale-95 ${grandCategory.name.toLowerCase() === searchParams.get('grand_category') ? 'text-blue-600' : ''}`}
                                    onClick={() => router.push(`/products?grand_category=${grandCategory.name}`)}
                                >
                                    {grandCategory.name}
                                </button>
                                <ul className="pl-4">
                                    {grandCategory.parent_categories.map(parentCategory => (
                                        <li key={parentCategory.id} className="mb-2">
                                            <button
                                                className={`font-medium text-left text-gray-700 hover:text-gray-900 transition-transform transform active:scale-95 ${parentCategory.name.toLowerCase() === searchParams.get('parent_category') ? 'text-blue-600' : ''}`}
                                                onClick={() => router.push(`/products?grand_category=${grandCategory.name}&parent_category=${parentCategory.name}`)}
                                            >
                                                {parentCategory.name}
                                            </button>
                                            <ul className="pl-4">
                                                {parentCategory.child_categories.map(childCategory => (
                                                    <li key={childCategory.id} className="mb-2 text-left">
                                                        <button
                                                            className={`text-gray-600 hover:text-gray-800 transition-transform transform active:scale-95 ${childCategory.name.toLowerCase() === searchParams.get('child_category') ? 'font-bold' : ''}`}
                                                            onClick={() =>
                                                                router.push(`/products?grand_category=${grandCategory.name}&parent_category=${parentCategory.name}&child_category=${childCategory.name}`)
                                                            }
                                                        >
                                                            {childCategory.name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Бренды</h2>
                    <ul>
                        <li
                            className={`mb-2 ${!selectedBrand ? 'font-bold' : ''}`}
                            onClick={() => setSelectedBrand(null)}
                        >
                            <button className="text-gray-800 hover:text-gray-600 transition-transform transform active:scale-95">Все бренды</button>
                        </li>
                        {brands.map(brand => (
                            <li key={brand.id} className="mb-2">
                                <button
                                    className={`text-gray-800 hover:text-gray-600 transition-transform transform active:scale-95 ${selectedBrand === brand.name ? 'font-bold' : ''}`}
                                    onClick={() => setSelectedBrand(brand.name)}
                                >
                                    {brand.name}
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
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded ml-2 transition-transform transform active:scale-95">Search</button>
                    </form>
                    <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {searchResults.map(product => (
                            <CSSTransition
                                key={product.id}
                                timeout={500}
                                classNames="product"
                            >
                                <Link href={`/products/${product.child_category.name.toLowerCase()}/${product.id}`} passHref>
                                    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer h-full flex flex-col justify-between">
                                        <div className="flex-grow">
                                            <Image
                                                width={500}
                                                height={500}
                                                src={`${process.env.NEXT_PUBLIC_S3_URL}${product.thumbnail}`}
                                                alt={product.title}
                                                className="w-full  rounded mb-4"
                                            />
                                            <h2 className="text-md font-bold mb-2">{product.title}</h2>
                                            <p className="text-gray-900 font-semibold mb-2">{product.price}тг</p>
                                            <p className="text-gray-600 mb-2">Бренд: {product.brand.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
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
