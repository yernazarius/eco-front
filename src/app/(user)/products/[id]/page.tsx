"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { AxiosDefault } from '@/api/interceptors';
import Header from '@/components/Header';
import ImageSlider from '@/components/Products/ImageSlider';


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discount_percentage: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
    images: string[];
    is_published: boolean;
    created_at: string;
    category_id: number;
    category: {
        id: number;
        name: string;
    };
}

const ProductPage = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { id } = useParams();
    console.log('ID:', id);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const response = await AxiosDefault.get(`/products/${id}`);
                console.log('Product:', response.data.data);
                setProduct(response.data.data);
            } catch (error) {
                console.error('Ошибка при загрузке продукта:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Продукт не найден</div>
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto px-20 mt-12">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:w-1/2 w-full">
                        <ImageSlider thumbnail={product.thumbnail} images={product.images} />
                    </div>
                    <div className="md:w-1/2 w-full md:pl-8 mt-8 md:mt-0">
                        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                        <p className="text-gray-900 font-semibold mb-2">${product.price}</p>
                        <p className="text-gray-600 mb-2">В наличии: {product.stock}</p>
                        <p className="text-gray-600 mb-2">Бренд: {product.brand}</p>
                        <p className="text-gray-600 mb-2">Категория: {product.category?.name}</p>
                        <p className="text-gray-500 text-sm">Дата создания: {new Date(product.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
