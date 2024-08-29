"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LucideIcon, ListPlus } from 'lucide-react'
import { axiosWithAuth } from '@/api/interceptors'

const CreateBrand = () => {
	const [formData, setFormData] = useState({
		name: '',
	})

	const router = useRouter()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await axiosWithAuth.post('/brands', formData)
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
					Создать брэнд
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

export default CreateBrand
