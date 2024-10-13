"use client"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AxiosDefault } from '@/api/interceptors'

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

const PopularProductsCarousel = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await AxiosDefault.get('/products/?page=1&limit=100')
                setProducts(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке продуктов:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    // Filter only favourite products
    const favouriteProducts = products.filter(product => product.favourite)

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 3,
            spacing: 15,
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: {
                    perView: 1,
                    spacing: 10,
                },
            },
            "(max-width: 1200px)": {
                slides: {
                    perView: 2,
                    spacing: 10,
                },
            },
        },
    })

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 mt-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 text-center">Популярные товары</h2>
            <div ref={sliderRef} className="keen-slider">
                {favouriteProducts.map(product => (
                    <Link key={product.id} href={`/products/${product.id}`} passHref>
                        <div className="keen-slider__slide bg-white p-4 cursor-pointer flex flex-col justify-center text-center h-full">
                            <Image
                                width={300}
                                height={300}
                                src={`${process.env.NEXT_PUBLIC_S3_URL}${product.thumbnail}`}
                                alt={product.title}
                                className="w-full h-auto object-contain rounded mb-4"
                            />
                            <h3 className="text-md font-bold mb-2">{product.title}</h3>
                            <button className="hover:bg-primary_blue hover:text-white border border-primary_blue text-black py-2 px-4 mt-auto">
                                Подробнее
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Link href="/products">
                    <div className="hover:bg-primary_blue hover:text-white border border-primary_blue text-black py-2 px-4">
                        Все товары
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PopularProductsCarousel
