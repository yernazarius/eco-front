"use client"
import { AxiosDefault, axiosWithAuth } from '@/api/interceptors'
import Modal from '@/components/Admin/Modal'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Category {
    id: number
    name: string
}

interface Product {
    id: number
    title: string
    description: string
    price: number
    discount_percentage: number
    rating: number
    stock: number
    brand: string
    thumbnail: string
    images: string[]
    category_id: number
    is_published: boolean
    favourite: boolean
    recomended: boolean
}

const AdminUpdateProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null)
    const [formData, setFormData] = useState<Partial<Product>>({})
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
    const [imageFiles, setImageFiles] = useState<File[]>([])

    useEffect(() => {
        const fetchProductsAndCategories = async () => {
            try {
                const productResponse = await AxiosDefault.get('/products')
                const categoryResponse = await AxiosDefault.get('/category_child')
                setProducts(productResponse.data.data)
                setCategories(categoryResponse.data.data)
            } catch (error) {
                setError('Ошибка при загрузке продуктов или категорий')
                console.error('Ошибка при загрузке продуктов или категорий:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProductsAndCategories()
    }, [])

    const handleUpdate = async (productId: number) => {
        try {
            const changes: Partial<Product> = {}

            if (formData.category_id !== undefined) {
                changes.category_id = parseInt(formData.category_id.toString(), 10)
            }

            if (thumbnailFile) {
                changes.thumbnail = await uploadFile(thumbnailFile)
            }

            if (imageFiles.length > 0) {
                changes.images = await Promise.all(imageFiles.map(file => uploadFile(file)))
            }

            // Compare each form data field with the current product data
            Object.keys(formData).forEach(key => {
                if (formData[key as keyof Product] !== currentProduct?.[key as keyof Product]) {
                    // @ts-ignore
                    changes[key as keyof Product] = formData[key as keyof Product]
                }
            })

            const response = await axiosWithAuth.put(`/products/${productId}`, changes, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.data) {
                setProducts(products.map(product =>
                    product.id === productId ? { ...product, ...changes } : product
                ))
                closeModal()
            }
        } catch (error) {
            setError('Ошибка при обновлении продукта')
            console.error('Ошибка при обновлении продукта:', error)
        }
    }

    const uploadFile = async (file: File): Promise<string> => {
        const formData = new FormData()
        formData.append('file', file)
        const response = await axiosWithAuth.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return response.data.path
    }

    const openModal = (product: Product) => {
        setCurrentProduct(product)
        setFormData(product)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setCurrentProduct(null)
        setFormData({})
        setThumbnailFile(null)
        setImageFiles([])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target

        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement
            setFormData(prevState => ({
                ...prevState,
                [name]: checked,
            }))
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }))
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target
        if (name === 'thumbnail' && files && files[0]) {
            setThumbnailFile(files[0])
        } else if (name === 'images' && files) {
            setImageFiles(Array.from(files))
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-500">Загрузка...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-red-500">{error}</div>
            </div>
        )
    }

    return (
        <>
            <div className="container mx-auto px-20 mt-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Обновление продуктов</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map(product => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <Image width={500} height={500}
                                src={`${process.env.NEXT_PUBLIC_S3_URL}${product.thumbnail}`}
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

            {isModalOpen && currentProduct && (
                <Modal onClose={closeModal}>
                    <div className="p-6 max-h-[80vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">Обновить продукт</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(currentProduct.id) }}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Название</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Описание</label>
                                <textarea
                                    name="description"
                                    value={formData.description || ''}
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
                                    value={formData.price || 0}
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
                                    value={formData.discount_percentage || 0}
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
                                    value={formData.rating || 0}
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
                                    value={formData.stock || 0}
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
                                    value={formData.brand || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Категория</label>
                                <select
                                    name="category_id"
                                    value={formData.category_id || 0}
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
                            <div className="mb-4 flex items-center">
                                <label className="block text-gray-700 mr-4">Избранный</label>
                                <input
                                    type="checkbox"
                                    name="favourite"
                                    checked={formData.favourite || false}
                                    onChange={handleChange}
                                    className="h-5 w-5"
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="block text-gray-700 mr-4">Рекомендованный</label>
                                <input
                                    type="checkbox"
                                    name="recomended"
                                    checked={formData.recomended || false}
                                    onChange={handleChange}
                                    className="h-5 w-5"
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
    )
}

export default AdminUpdateProductsPage
