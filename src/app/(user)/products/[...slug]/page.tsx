"use client"
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AxiosDefault } from '@/api/interceptors'
import ImageSlider from '@/components/Products/ImageSlider'
import Link from 'next/link'
import PopularProductsCarousel from '@/components/Home/HomePopularProducts'

interface Product {
    id: number
    title: string
    description: string
    price: number
    discount_percentage: number
    rating: number
    stock: number
    brands_id: string
    brand: {
        id: number
        name: string
    }
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

const ProductPage = () => {
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const pathname = usePathname()

    // Extract slug and product ID from the URL
    const pathSegments = pathname.split('/').filter(Boolean)
    const productId = pathSegments[pathSegments.length - 1]

    useEffect(() => {
        if (!productId) return

        const fetchProduct = async () => {
            try {
                const response = await AxiosDefault.get(`/products/${productId}`)
                console.log('Product:', response.data.data)
                setProduct(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке продукта:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [productId])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Продукт не найден</div>
            </div>
        )
    }

    return (
        <>
            <div className="container mx-auto mt-8 md:mt-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-full md:w-1/2">
                        <ImageSlider thumbnail={product.thumbnail} images={product.images} />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">{product.title}</h1>
                        <p className="text-gray-600 mb-2">В наличии: {product.brand.name}</p>
                        <p className="text-gray-600 mb-2">Категория: {product.child_category.name}</p>
                        <div className="mt-6">
                            <Link href="tel:+77075246868" className="px-6 py-3 border border-primary_blue text-black rounded-sm hover:bg-primary_blue hover:text-white">
                                Задать вопрос
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-6">
                <PopularProductsCarousel />
            </div>
        </>
    )
}

export default ProductPage
