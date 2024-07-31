"use client"
import { AxiosDefault, axiosWithAuth } from '@/api/interceptors'
import { ListPlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface HeaderTab {
	id: number
	name: string
}

const CreateSubHeaderTab = () => {
	const [headerTabs, setHeaderTabs] = useState<HeaderTab[]>([])

	const [formData, setFormData] = useState({
		name: '',
		header_tab_id: 0,
	})

	const router = useRouter()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: name === 'header_tab_id' ? parseInt(value) : value
		})
	}

	const fetchHeaderTabs = async () => {
		try {
			const response = await AxiosDefault.get('/header_tabs')
			console.log('response', response.data.data)
			setHeaderTabs(response.data.data)
		} catch (error) {
			console.error('Error fetching Header tabs', error)
		}
	}

	useEffect(() => {
		fetchHeaderTabs()
	}, [])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await axiosWithAuth.post('/sub_header_tabs', formData)
			if (response.data) {
				console.log('response', response)
				router.push('/admin')
			}
		} catch (err) {
			console.log('error', err)
		}
	}

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
				<h1 className="text-2xl font-bold mb-5 text-center text-gray-800 flex items-center justify-center">
					<ListPlus className="w-6 h-6 mr-2" />
					Создать элемент в шапке
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
							name="header_tab_id"
							value={formData.header_tab_id}
							onChange={handleChange}
							className="w-full p-2 border border-gray-300 rounded"
							required
						>
							{headerTabs.map(headerTab => (
								<option key={headerTab.id} value={headerTab.id}>
									{headerTab.name}
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

export default CreateSubHeaderTab
