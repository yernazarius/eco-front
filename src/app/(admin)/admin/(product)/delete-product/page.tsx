"use client"
import { AxiosDefault, axiosWithAuth } from '@/api/interceptors'
import { useEffect, useState } from 'react'


interface Product {
    id: number
    title: string
    description: string
    price: number
    stock: number
    brand: string
    thumbnail: string
    is_published: boolean
}

const AdminDeleteProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await AxiosDefault.get('/products')
                console.log('response:', response.data.data)
                setProducts(response.data.data)
            } catch (error) {
                setError('Ошибка при загрузке продуктов')
                console.error('Ошибка при загрузке продуктов:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const handleDelete = async (productId: number) => {
        try {
            await axiosWithAuth.delete(`/products/${productId}`)
            setProducts(products.filter(product => product.id !== productId))
        } catch (error) {
            setError('Ошибка при удалении продукта')
            console.error('Ошибка при удалении продукта:', error)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-red-500">{error}</div>
            </div>
        )
    }

    return (
        <>
            <div className="container mx-auto px-20 mt-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Удаление продуктов</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map(product => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${product.thumbnail}`}
                                alt={product.title}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                            <h2 className="text-lg font-bold mb-1">{product.title}</h2>
                            <p className="text-gray-900 font-semibold mb-1">${product.price}</p>
                            <p className="text-gray-600 mb-1">В наличии: {product.stock}</p>
                            <p className="text-gray-600 mb-1">Бренд: {product.brand}</p>
                            <button
                                onClick={() => handleDelete(product.id)}
                                className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AdminDeleteProductsPage
