"use client"
import { AxiosDefault } from '@/api/interceptors'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Blog {
    id: number
    title: string
    text: string
    image: string
    createdAt: string
}

const BlogsPage = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await AxiosDefault.get('/blogs')
                console.log('response:', response.data.data)
                setBlogs(response.data.data)
            } catch (error) {
                console.error('Error fetching blogs:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchBlogs()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return <>
        <div className="container mx-auto px-20 mt-12">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-10">
                Новости
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${blog.image}`} alt={blog.title} className="w-full h-48 object-cover mb-4 rounded" />
                        {/* <div className="text-gray-600 text-sm mb-2">{new Date(blog.createdAt).toLocaleDateString()}</div> */}
                        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                        <p className="text-gray-700">{blog.text.slice(0, 100)}...</p>
                        <Link href={`/blog/${blog.id}`}>
                            <div className="hover:bg-primary_blue hover:text-white border border-primary_blue text-black w-2/5 py-2 px-4 block mt-4 text-center">Читать далее</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default BlogsPage
