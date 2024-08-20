"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LucideIcon, ListPlus } from 'lucide-react'
import { axiosWithAuth } from '@/api/interceptors'

interface ParentCategory {
	id: number
	name: string
	image_path: string
}

const CreateCategory = () => {
	const [parentCategories, setParentCategories] = useState<ParentCategory[]>([])

	const [formData, setFormData] = useState({
		name: '',
		parent_category_id: 0
	})

	const router = useRouter()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: name === 'parent_category_id' ? parseInt(value) : value
		})
	}


	const fetchCategories = async () => {
		try {
			const response = await axiosWithAuth.get('/category_parent')
			console.log('response', response.data.data)
			setParentCategories(response.data.data)
			if (response.data.data.length > 0) {
				// Set initial header_tab_id to the first HeaderTab's id
				setFormData(prevFormData => ({
					...prevFormData,
					header_tab_id: response.data.data[0].id
				}))
			}
		} catch (error) {
			console.error('Error fetching parent category', error)
		}
	}
	useEffect(() => {
		fetchCategories()
	}, [])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await axiosWithAuth.post('/category_child', formData)
			if (response.data) {
				console.log('response', response)
				router.push('/admin')
			}

		} catch (err) {
			console.log('error', err)
		}
		console.log(formData)
		// router.push('/admin/categories');r
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
							name="parent_category_id"
							value={formData.parent_category_id}
							onChange={handleChange}
							className="w-full p-2 border border-gray-300 rounded"
							required
						>
							{parentCategories.map(item => (
								<option key={item.id} value={item.id}>
									{item.name}
								</option>
							))}
						</select>
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
	)
}

export default CreateCategory
