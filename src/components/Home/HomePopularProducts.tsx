"use client"
import { AxiosDefault } from '@/api/interceptors'
import Image from 'next/image'

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
    category_id: number
    is_published: boolean
    favourite: boolean
    recomended: boolean
}

export default function HomePageProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await AxiosDefault.get('/products/?page=1&limit=100')
                console.log('Products:', response.data)
                setProducts(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке продуктов:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        )
    }

    // Filter only favourite products
    const favouriteProducts = products.filter(product => product.favourite)

    return (
        <div className="container mx-auto px-40 mt-12">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center w-full">Популярные товары</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {favouriteProducts.map(product => (
                    <Link key={product.id} href={`/products/${product.id}`} passHref>
                        <div className="bg-white p-4 cursor-pointer flex flex-col justify-center text-center">
                            <Image width={300} height={300}
                                src={`${process.env.NEXT_PUBLIC_S3_URL}${product.thumbnail}`}
                                alt={product.title}
                                className="w-full h-40 object-cover rounded mb-4"
                            />
                            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                            <button className="hover:bg-primary_blue hover:text-white border border-primary_blue text-black py-2 mx-4">Подробнее</button>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Link href="/products">
                    <div className="hover:bg-primary_blue hover:text-white border border-primary_blue text-black py-2 px-4">Все товары</div>
                </Link>
            </div>
        </div>
    )
}
