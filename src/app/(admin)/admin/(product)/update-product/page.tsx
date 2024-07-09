"use client";
import { useEffect, useState } from 'react';
import { AxiosDefault, axiosWithAuth } from '@/api/interceptors';
import Header from '@/components/Header';
import Link from 'next/link';
import Modal from '@/components/Admin/Modal';
import config from '@/config/config';

interface Category {
    id: number;
    name: string;
}

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
    category_id: number;
    is_published: boolean;
}

const AdminUpdateProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: 0,
        discount_percentage: 0,
        rating: 0,
        stock: 0,
        brand: '',
        category_id: 0,
        thumbnail: '',
        images: [''],
        is_published: true,
    });
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    useEffect(() => {
        const fetchProductsAndCategories = async () => {
            try {
                const productResponse = await AxiosDefault.get('/products');
                const categoryResponse = await AxiosDefault.get('/categories');
                setProducts(productResponse.data.data);
                setCategories(categoryResponse.data.data);
            } catch (error) {
                setError('Ошибка при загрузке продуктов или категорий');
                console.error('Ошибка при загрузке продуктов или категорий:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductsAndCategories();
    }, []);

    const handleUpdate = async (productId: number) => {
        try {
            const jsonPayload = { ...formData, category_id: parseInt(formData.category_id.toString(), 10) };

            if (thumbnailFile) {
                jsonPayload.thumbnail = await uploadFile(thumbnailFile);
            }

            if (imageFiles.length > 0) {
                jsonPayload.images = await Promise.all(imageFiles.map(file => uploadFile(file)));
            }
            console.log('jsonPayload:', jsonPayload);
            const response = await axiosWithAuth.put(`/products/${productId}`, jsonPayload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data) {
                setProducts(products.map(product =>
                    product.id === productId ? { ...product, ...formData } : product
                ));
                setIsModalOpen(false);
                setCurrentProduct(null);
                setFormData({
                    title: '',
                    description: '',
                    price: 0,
                    discount_percentage: 0,
                    rating: 0,
                    stock: 0,
                    brand: '',
                    category_id: 0,
                    thumbnail: '',
                    images: [''],
                    is_published: true,
                });
                setThumbnailFile(null);
                setImageFiles([]);
            }
        } catch (error) {
            setError('Ошибка при обновлении продукта');
            console.error('Ошибка при обновлении продукта:', error);
        }
    };

    const uploadFile = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await axiosWithAuth.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data.path;
    };

    const openModal = (product: Product) => {
        setCurrentProduct(product);
        setFormData({
            title: product.title,
            description: product.description,
            price: product.price,
            discount_percentage: product.discount_percentage,
            rating: product.rating,
            stock: product.stock,
            brand: product.brand,
            category_id: product.category_id,
            thumbnail: product.thumbnail,
            images: product.images,
            is_published: product.is_published,
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProduct(null);
        setFormData({
            title: '',
            description: '',
            price: 0,
            discount_percentage: 0,
            rating: 0,
            stock: 0,
            brand: '',
            category_id: 0,
            thumbnail: '',
            images: [''],
            is_published: true,
        });
        setThumbnailFile(null);
        setImageFiles([]);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'price' || name === 'discount_percentage' || name === 'rating' || name === 'stock' || name === 'category_id' ? parseInt(value) : value
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (name === 'thumbnail' && files && files[0]) {
            setThumbnailFile(files[0]);
        } else if (name === 'images' && files) {
            setImageFiles(Array.from(files));
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto px-20 mt-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Обновление продуктов</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map(product => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <img
                                src={`${config.BASE_URL}/${product.thumbnail}`}
                                alt={product.title}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                            <h2 className="text-lg font-bold mb-1">{product.title}</h2>
                            <p className="text-gray-900 font-semibold mb-1">${product.price}</p>
                            <p className="text-gray-600 mb-1">В наличии: {product.stock}</p>
                            <p className="text-gray-600 mb-1">Бренд: {product.brand}</p>
                            <button
                                onClick={() => openModal(product)}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 ease-in-out"
                            >
                                Обновить
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <div className="p-6 max-h-[80vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">Обновить продукт</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(currentProduct!.id); }}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Название</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Описание</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Цена</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Скидка (%)</label>
                                <input
                                    type="number"
                                    name="discount_percentage"
                                    value={formData.discount_percentage}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Рейтинг</label>
                                <input
                                    type="number"
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Количество на складе</label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Бренд</label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Категория</label>
                                <select
                                    name="category_id"
                                    value={formData.category_id}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                >
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Миниатюра</label>
                                <input
                                    type="file"
                                    name="thumbnail"
                                    onChange={handleFileChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Изображения</label>
                                <input
                                    type="file"
                                    name="images"
                                    onChange={handleFileChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    multiple
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                            >
                                Сохранить
                            </button>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default AdminUpdateProductsPage;
