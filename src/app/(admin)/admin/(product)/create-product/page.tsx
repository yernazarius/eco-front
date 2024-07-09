"use client";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { AxiosDefault, axiosWithAuth } from '@/api/interceptors';
import config from '@/config/config';


interface Category {
    id: number;
    name: string;
}

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: 0,
        discount_percentage: 0,
        rating: 0,
        stock: 0,
        brand: '',
        thumbnail: '',
        images: [''],
        category_id: 1,
        is_published: true,
    });

    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchCategories = async () => {
        try {
            const response = await AxiosDefault.get('/categories');
            setCategories(response.data.data);
        } catch (error) {
            console.error('Error fetching categories', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

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

    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                if (key !== 'images') {
                    data.append(key, (formData as any)[key]);
                }
            });

            if (thumbnailFile) {
                data.append('thumbnail', thumbnailFile);
            }

            imageFiles.forEach((file, index) => {
                data.append('images', file);
            });

            // Debugging: Output FormData values
            data.forEach((value, key) => {
                console.log(`${key}:`, value);
            });

            const response = await axiosWithAuth.post('/products', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data) {
                router.replace('/admin');
            }
        } catch (error) {
            console.error('Error uploading images', error);
        }
    };



    return (
        <div className="min-h-screen  flex items-center justify-center py-24">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-5 text-center text-gray-800 flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    Создать продукт
                </h1>
                <form onSubmit={handleSubmit}>
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
                            required
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
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Создать
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
