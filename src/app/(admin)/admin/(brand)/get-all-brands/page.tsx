"use client"
import { useEffect, useState } from 'react'
import { AxiosDefault, axiosWithAuth } from '@/api/interceptors'
import Header from '@/components/Header'
import Link from 'next/link'

interface Brand {
	id: number
	name: string
}

const AdminDeleteBrandPage = () => {
	const [categories, setCategories] = useState<Brand[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await AxiosDefault.get('/brands/')
				console.log('response:', response.data.data)
				setCategories(response.data.data)
			} catch (error) {
				setError('Ошибка при загрузке категории')
				console.error('Ошибка при загрузке категории :', error)
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [])

	const handleDelete = async (brandId: number) => {
		try {
			await axiosWithAuth.delete(`/brands/${brandId}`)
			setCategories(categories.filter(brand => brand.id !== brandId))
		} catch (error) {
			setError('Ошибка при удалении категории')
			console.error('Ошибка при удалении категории:', error)
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
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Удаление брэндов</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{categories.map(brand => (
						<div key={brand.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
							<p className="text-lg font-semibold text-gray-800">{brand.name}</p>
							<button
								onClick={() => handleDelete(brand.id)}
								className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200 ease-in-out"
							>
								Удалить
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default AdminDeleteBrandPage
