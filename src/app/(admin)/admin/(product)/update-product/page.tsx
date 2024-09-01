"use client"
import { AxiosDefault, axiosWithAuth, AxiosS3 } from '@/api/interceptors'
import Modal from '@/components/Admin/Modal'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Category {
    id: number
    name: string
}

interface Brand {
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
    brands_id: number
    thumbnail: string
    images: string[]
    child_category_id: number
    is_published: boolean
    favourite: boolean
    recomended: boolean
}

const AdminUpdateProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [brands, setBrands] = useState<Brand[]>([])
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
                const productResponse = await AxiosDefault.get('/products?page=1&limit=100')
                const categoryResponse = await AxiosDefault.get('/category_child')
                const brandResponse = await AxiosDefault.get('/brands')

                setProducts(productResponse.data.data)
                setCategories(categoryResponse.data.data)
                setBrands(brandResponse.data.data)
            } catch (error) {
                setError('Ошибка при загрузке продуктов, категорий или брендов')
                console.error('Ошибка при загрузке данных:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProductsAndCategories()
    }, [])

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

    const handleUpdate = async (productId: number) => {
        try {
            const changes: Partial<Product> = {}

            if (formData.child_category_id !== undefined && formData.child_category_id !== currentProduct?.child_category_id) {
                changes.child_category_id = Number(formData.child_category_id)
            }

            if (formData.brands_id !== undefined && formData.brands_id !== currentProduct?.brands_id) {
                changes.brands_id = Number(formData.brands_id)
            }

            if (thumbnailFile) {
                changes.thumbnail = await uploadFileToS3(thumbnailFile, 'front')
            }

            if (imageFiles.length > 0) {
                changes.images = await Promise.all(imageFiles.map(file => uploadFileToS3(file, 'front')))
            }

            Object.keys(formData).forEach(key => {
                const typedKey = key as keyof Product
                if (formData[typedKey] !== currentProduct?.[typedKey]) {
                    changes[typedKey] = formData[typedKey] as any
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
            const fieldName = name === 'category_id' ? 'child_category_id' : name === 'brand_id' ? 'brands_id' : name
            setFormData(prevState => ({
                ...prevState,
                [fieldName]: value,
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
                                <select
                                    name="brand_id"
                                    value={formData.brands_id || 0}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                >
                                    <option value={0} disabled>
                                        Выберите брэнд
                                    </option>
                                    {brands.map(brand => (
                                        <option key={brand.id} value={brand.id}>
                                            {brand.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Категория</label>
                                <select
                                    name="category_id"
                                    value={formData.child_category_id || 0}
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
