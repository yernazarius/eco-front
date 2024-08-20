"use client"
import { AxiosDefault, axiosWithAuth, AxiosS3 } from '@/api/interceptors'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Category {
    id: number
    name: string
    parent_category_id: string
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
        child_category_id: 0,
        favourite: false,
        recomended: false,
    })

    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
    const [imageFiles, setImageFiles] = useState<File[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchCategories = async () => {
        try {
            const response = await AxiosDefault.get('/category_child/')
            setCategories(response.data.data)
        } catch (error) {
            console.error('Error fetching categories', error)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target

        setFormData({
            ...formData,
            [name]: type === 'number' || name === 'child_category_id'
                ? parseInt(value)
                : (type === 'select-one' && (name === 'favourite' || name === 'recomended'))
                    ? value === 'true'
                    : value
        })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target
        if (name === 'thumbnail' && files && files[0]) {
            setThumbnailFile(files[0])
        } else if (name === 'images' && files) {
            setImageFiles(Array.from(files))
        }
    }

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

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            // Upload the thumbnail and images to S3
            let thumbnailPath = ''
            const imagePaths: string[] = []

            if (thumbnailFile) {
                thumbnailPath = await uploadFileToS3(thumbnailFile, 'front')
            }

            if (imageFiles.length > 0) {
                for (const file of imageFiles) {
                    const imagePath = await uploadFileToS3(file, 'front')
                    imagePaths.push(imagePath)
                }
            }

            // Prepare form data with S3 paths
            const data = {
                ...formData,
                thumbnail: thumbnailPath,
                images: imagePaths,
            }

            console.log('data', data)
            const response = await axiosWithAuth.post('/products/', data)
            if (response.data) {
                router.replace('/admin')
            }
        } catch (err) {
            setError('Error creating product')
            console.error('Error:', err)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center py-24">
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
                            name="child_category_id"
                            value={formData.child_category_id}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        >
                            <option value={0} disabled>
                                Выберите категорию
                            </option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Избранный продукт</label>
                        <select
                            name="favourite"
                            value={formData.favourite ? 'true' : 'false'}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        >
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Рекомендуемый продукт</label>
                        <select
                            name="recomended"
                            value={formData.recomended ? 'true' : 'false'}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        >
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
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
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Загрузка...' : 'Создать'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct
