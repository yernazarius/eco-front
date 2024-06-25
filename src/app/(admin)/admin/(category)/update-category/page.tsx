"use client";
import { useEffect, useState } from 'react';
import { AxiosDefault, axiosWithAuth } from '@/api/interceptors';
import Header from '@/components/Header';
import Link from 'next/link';
import Modal from '@/components/Admin/Modal';

interface Category {
    id: number;
    name: string;
}

const AdminUpdateCategoryPage = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
    const [newName, setNewName] = useState<string>('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await AxiosDefault.get('/categories');
                console.log('response:', response.data.data);
                setCategories(response.data.data);
            } catch (error) {
                setError('Ошибка при загрузке категорий');
                console.error('Ошибка при загрузке категорий :', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleUpdate = async (categoryId: number) => {
        try {
            const response = await axiosWithAuth.put(`/categories/${categoryId}`, { name: newName });
            if (response.data) {
                setCategories(categories.map(category =>
                    category.id === categoryId ? { ...category, name: newName } : category
                ));
                setIsModalOpen(false);
                setCurrentCategory(null);
                setNewName('');
            }
        } catch (error) {
            setError('Ошибка при обновлении категории');
            console.error('Ошибка при обновлении категории:', error);
        }
    };

    const openModal = (category: Category) => {
        setCurrentCategory(category);
        setNewName(category.name);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentCategory(null);
        setNewName('');
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Обновление категории</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map(category => (
                        <div key={category.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                            <p className="text-lg font-semibold text-gray-800">{category.name}</p>
                            <button
                                onClick={() => openModal(category)}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 ease-in-out"
                            >
                                Обновить
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">Обновить категорию</h2>
                        <label className="block text-gray-700 mb-2">Новое название</label>
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <button
                            onClick={() => handleUpdate(currentCategory!.id)}
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Сохранить
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default AdminUpdateCategoryPage;
