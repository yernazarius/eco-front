"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LucideIcon, ListPlus } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'
import { axiosWithAuth, AxiosS3 } from '@/api/interceptors'

interface GrandCategory {
	id: number
	name: string
}

const CreateParentCategory = () => {
	const [grand_category, setGrandCategory] = useState<GrandCategory[]>([])

	const [formData, setFormData] = useState({
		name: '',
		grand_category_id: 0
	})
	const [thumbnail, setThumbnail] = useState<File | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const fetchHeaderTabs = async () => {
		try {
			const response = await axiosWithAuth.get('/category_grand')
			console.log('response', response.data.data)
			setGrandCategory(response.data.data)
			if (response.data.data.length > 0) {
				// Set initial header_tab_id to the first HeaderTab's id
				setFormData(prevFormData => ({
					...prevFormData,
					grand_category_id: response.data.data[0].id
				}))
			}
		} catch (error) {
			console.error('Error fetching Header tabs', error)
		}
	}

	useEffect(() => {
		fetchHeaderTabs()
	}, [])

	const router = useRouter()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: name === 'grand_category_id' ? parseInt(value) : value
		})
	}

	const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setThumbnail(e.target.files[0])
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

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		setError(null)

		let thumbnailPath = ''

		try {
			if (thumbnail) {
				thumbnailPath = await uploadFileToS3(thumbnail, 'front')
			}

			const response = await axiosWithAuth.post('/category_parent', { ...formData, image_path: thumbnailPath })
			if (response.data) {
				console.log('response', response)
				router.push('/admin')
			}
		} catch (err) {
			setError('Error creating category')
			console.log('error', err)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
				<h1 className="text-2xl font-bold mb-5 text-center text-gray-800 flex items-center justify-center">
					<ListPlus className="w-6 h-6 mr-2" />
					Создать категорию
				</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700 mb-2">Название</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full p-2 border border-gray-300 rounded"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 mb-2">Категория</label>
						<select
							name="grand_category_id"
							value={formData.grand_category_id}
							onChange={handleChange}
							className="w-full p-2 border border-gray-300 rounded"
							required
						>
							{grand_category.map(item => (
								<option key={item.id} value={item.id}>
									{item.name}
								</option>
							))}
						</select>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 mb-2">Изображение</label>
						<input
							type="file"
							accept="image/*"
							onChange={handleThumbnailChange}
							className="w-full text-gray-700"
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

export default CreateParentCategory
