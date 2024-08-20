"use client"
import { AxiosDefault } from '@/api/interceptors'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
    created_at: string
    child_category_id: number
    child_category: {
        id: number
        name: string
    }
}

interface Category {
    id: number
    name: string
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [searchResults, setSearchResults] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await AxiosDefault.get('/products')
                console.log('Products:', response.data)
                setProducts(response.data.data)
                setSearchResults(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке продуктов:', error)
            } finally {
                setLoading(false)
            }
        }

        const fetchCategories = async () => {
            try {
                const response = await AxiosDefault.get('/category_child/')
                console.log('Categories:', response.data)
                setCategories(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке категорий:', error)
            }
        }

        fetchProducts()
        fetchCategories()
    }, [])

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(categoryId)
    }

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const response = await AxiosDefault.get(`/products/?search=${searchQuery}`)
            setSearchResults(response.data.data)
        } catch (error) {
            console.error('Ошибка при поиске продуктов:', error)
        }
    }

    const filteredProducts = selectedCategory
        ? searchResults.filter(product => product.child_category_id === selectedCategory)
        : searchResults

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        )
    }

    return (
        <>
            <div className="container mx-auto px-20 mt-12">
                <div className="container mx-auto px-4 flex">
                    <aside className="w-1/4 pr-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Категории</h2>
                        <ul>
                            <li
                                className={`mb-2 ${selectedCategory === null ? 'font-bold' : ''}`}
                                onClick={() => setSelectedCategory(null)}
                            >
                                <button className="text-gray-800 hover:text-gray-600">Все</button>
                            </li>
                            {categories.map(category => (
                                <li
                                    key={category.id}
                                    className={`mb-2 ${selectedCategory === category.id ? 'font-bold' : ''}`}
                                    onClick={() => handleCategoryClick(category.id)}
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
                            {filteredProducts.map(product => (
                                <Link key={product.id} href={`/products/${product.id}`} passHref>
                                    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer">
                                        <img
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
                                        <p className="text-gray-500 text-sm">Дата создания: {new Date(product.created_at).toLocaleDateString()}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
