"use client"

import { axiosWithAuth } from '@/api/interceptors'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

interface Tab {
	id: string
	name: string
}

const DeleteHeaderTab = () => {
	const [tabs, setTabs] = useState<Tab[]>([])
	const [selectedTab, setSelectedTab] = useState<string>('')

	const router = useRouter()

	useEffect(() => {
		// Fetch header tabs from API
		const fetchTabs = async () => {
			try {
				const response = await axiosWithAuth.get('/header_tabs')
				console.log('Fetched tabs:', response.data.data) // Debugging line

				// Ensure response.data is an array
				if (Array.isArray(response.data.data)) {
					setTabs(response.data.data)
				} else {
					console.error('Expected array but got:', typeof response.data)
				}
			} catch (err) {
				console.log('Error fetching tabs', err)
			}
		}

		fetchTabs()
	}, [])

	const handleDelete = async () => {
		if (!selectedTab) return

		try {
			const response = await axiosWithAuth.delete(`/header_tabs/${selectedTab}`)
			if (response.data) {
				console.log('Tab deleted', response)
				router.push('/admin')
			}
		} catch (err) {
			console.log('Error deleting tab', err)
		}
	}

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
				<h1 className="text-2xl font-bold mb-5 text-center text-gray-800 flex items-center justify-center">
					<Trash2 className="w-6 h-6 mr-2" />
					Удалить элемент в шапке
				</h1>
				<div className="mb-4">
					<label className="block text-gray-700 mb-2">Выберите элемент</label>
					<select
						name="tab"
						value={selectedTab}
						onChange={(e) => setSelectedTab(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded"
						required
					>
						<option value="" disabled>Выберите элемент</option>
						{/* Check if tabs is an array before mapping */}
						{Array.isArray(tabs) && tabs.length > 0 ? (
							tabs.map((tab) => (
								<option key={tab.id} value={tab.id}>
									{tab.name}
								</option>
							))
						) : (
							<option disabled>Нет доступных элементов</option>
						)}
					</select>
				</div>
				<button
					onClick={handleDelete}
					className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
				>
					Удалить
				</button>
			</div>
		</div>
	)
}

export default DeleteHeaderTab
