"use client"
import { AxiosDefault } from '@/api/interceptors'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Blog {
    id: number
    title: string
    text: string
    image: string
    createdAt: string
}

const BlogPage = () => {
    const [blog, setBlog] = useState<Blog | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const { id } = useParams()
    console.log('id:', id)

    useEffect(() => {
        if (!id) return

        const fetchBlog = async () => {
            try {
                const response = await AxiosDefault.get(`/blogs/${id}`)
                console.log('response:', response.data)
                setBlog(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке блога:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchBlog()
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        )
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Блог не найден</div>
            </div>
        )
    }

    return (
        <>
            <div className="container mx-auto py-10 ">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                        <div className="mr-4">
                            <i className="far fa-calendar-alt"></i> {new Date(blog.createdAt).toLocaleDateString()}
                        </div>
                        <div className="mr-4">
                            <i className="far fa-clock"></i> 00:00
                        </div>
                        <div className="mr-4">
                            <i className="far fa-eye"></i> 86
                        </div>
                        <div>
                            <i className="far fa-clock"></i> Время чтения: 2 минуты
                        </div>
                    </div>
                    <Image src={`${process.env.NEXT_PUBLIC_S3_URL}${blog.image}`} alt={blog.title} className="w-1/2 h-auto mx-auto  mb-4 rounded" width={1000} height={1000} />
                    <p className="text-gray-700 mb-6">{blog.text}</p>
                </div>
                <div className="mt-10 px-4">
                    <h2 className="text-2xl font-bold mb-4">Последние новости</h2>
                    <ul className="list-disc list-inside">
                        {/* <li>
                            <Link href="/blogs/1">
                                <dic className="text-blue-500 hover:underline">Применяете приборы ЭКОСТАБ? Участвуйте в акции и выигрывайте призы!</a>
                            </Link>
                            <div className="text-gray-600 text-sm">04-06-2024</div>
                        </li>
                        <li>
                            <Link href="/blogs/2">
                                <a className="text-blue-500 hover:underline">Портативный фотометр ЭКОСТАБ АкваПрайм в Госреестре СИ!</a>
                            </Link>
                            <div className="text-gray-600 text-sm">23-05-2024</div>
                        </li> */}
                        {/* Add more news items here */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BlogPage
