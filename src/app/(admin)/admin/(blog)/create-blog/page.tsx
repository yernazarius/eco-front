"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { axiosWithAuth, AxiosS3 } from '@/api/interceptors'

export default function CreateBlogPage() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    // Function to upload file to S3
    const uploadFileToS3 = async (file: File, dir: string) => {
        const uuidv4Name = uuidv4()
        const fileExtension = file.name.split('.').pop()
        const newFileName = `${dir}/${uuidv4Name}.${fileExtension}`
        const renamedFile = new File([file], newFileName, { type: file.type })

        const formDataForUpload = new FormData()
        formDataForUpload.append('file', renamedFile)

        try {
            const s3Response = await AxiosS3.post(`upload?dir=${dir}&name_of_file=${uuidv4Name}.${fileExtension}`, formDataForUpload)
            if (s3Response.status !== 200) {
                throw new Error('Failed to upload file to S3')
            }
            return s3Response.data.file_path || newFileName
        } catch (error) {
            throw new Error('Error uploading file to S3')
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            let imagePath = ''
            // If file is selected, upload it to S3
            if (file) {
                imagePath = await uploadFileToS3(file, 'blogs')
            }

            // Prepare the form data
            const formData = new FormData()
            formData.append('title', title)
            formData.append('text', content)
            if (imagePath) {
                formData.append('image', imagePath)
            }

            // Submit blog data

            await axiosWithAuth.post('/blogs/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            router.push('/admin')
        } catch (err) {
            setError('Ошибка при создании блога')
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-10">
                Создать новый блог
            </h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Заголовок
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        Контент
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                        Изображение
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Создание...' : 'Создать блог'}
                    </button>
                </div>
                {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
            </form>
        </div>
    )
}
