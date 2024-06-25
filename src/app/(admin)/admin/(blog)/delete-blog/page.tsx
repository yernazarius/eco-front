"use client";
import { useEffect, useState } from 'react';
import { AxiosDefault, axiosWithAuth } from '@/api/interceptors';
import Header from '@/components/Header';
import Link from 'next/link';

interface Blog {
    id: number;
    title: string;
    image: string;
}

const AdminDeleteBlogPage = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await AxiosDefault.get('/blogs');
                console.log('response:', response.data.data);
                setBlogs(response.data.data);
            } catch (error) {
                setError('Ошибка при загрузке новостей');
                console.error('Ошибка при загрузке новостей :', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (blogId: number) => {
        try {
            await axiosWithAuth.delete(`/blogs/${blogId}`);
            setBlogs(blogs.filter(blog => blog.id !== blogId));
        } catch (error) {
            setError('Ошибка при удалении новостей');
            console.error('Ошибка при удалении новостей:', error);
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Удаление новостей</h2>
                <div className="space-y-6">
                    {blogs.map(blog => (
                        <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                            <img src={`http://localhost:8000/${blog.image}`} alt={blog.title} className="w-full h-96 object-cover mb-4 rounded" />
                            <p className="text-lg font-semibold text-gray-800">{blog.title}</p>
                            <button
                                onClick={() => handleDelete(blog.id)}
                                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200 ease-in-out"
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminDeleteBlogPage;
