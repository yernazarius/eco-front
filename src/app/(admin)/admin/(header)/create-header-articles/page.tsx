"use client"
import { AxiosDefault, axiosWithAuth } from '@/api/interceptors'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface SubHeaderTab {
	id: number
	name: string
}

interface ContentItem {
	type: 'text' | 'image'
	value: string
}

const CreateHeaderArticlePage = () => {
	const [formData, setFormData] = useState({
		title: '',
		content: [{ type: 'text', value: '' }] as ContentItem[],
		sub_header_tabs_id: 1,
	})

	const [subHeaderTabs, setSubHeaderTabs] = useState<SubHeaderTab[]>([])
	const [selectedTab, setSelectedTab] = useState<number>(1)

	const fetchSubHeaderTabs = async () => {
		try {
			const response = await AxiosDefault.get('/sub_header_tabs')
			setSubHeaderTabs(response.data.data)
			if (response.data.data.length > 0) {
				setSelectedTab(response.data.data[0].id)
			}
		} catch (error) {
			console.error('Error fetching sub-header tabs', error)
		}
	}

	useEffect(() => {
		fetchSubHeaderTabs()
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value
		})
	}

	const handleContentChange = (index: number, field: string, value: string) => {
		const newContent = formData.content.map((item, i) =>
			i === index ? { ...item, [field]: value } : item
		)
		setFormData({ ...formData, content: newContent })
	}

	const addContentItem = () => {
		setFormData({
			...formData,
			content: [...formData.content, { type: 'text', value: '' }]
		})
	}

	const removeContentItem = (index: number) => {
		setFormData({
			...formData,
			content: formData.content.filter((_, i) => i !== index)
		})
	}

	const router = useRouter()
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await axiosWithAuth.post('/header_articles', {
				...formData,
				sub_header_tabs_id: selectedTab,
			})

			if (response.data) {
				router.replace('/admin/articles')
			}
		} catch (error) {
			console.error('Error creating article', error)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center py-24">
			<div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
				<h1 className="text-2xl font-bold mb-5 text-center text-gray-800">
					Создать статью
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
						<label className="block text-gray-700 mb-2">Подзаголовок</label>
						<select
							name="sub_header_tabs_id"
							value={selectedTab}
							onChange={(e) => setSelectedTab(parseInt(e.target.value))}
							className="w-full p-2 border border-gray-300 rounded"
							required
						>
							{subHeaderTabs.map(tab => (
								<option key={tab.id} value={tab.id}>
									{tab.name}
								</option>
							))}
						</select>
					</div>
					{formData.content.map((contentItem, index) => (
						<div key={index} className="mb-4">
							<div className="flex items-center mb-2">
								<select
									value={contentItem.type}
									onChange={(e) => handleContentChange(index, 'type', e.target.value)}
									className="w-1/3 p-2 border border-gray-300 rounded"
								>
									<option value="text">Текст</option>
									<option value="image">Изображение</option>
								</select>
								<button
									type="button"
									onClick={() => removeContentItem(index)}
									className="ml-2 p-2 text-red-600"
								>
									Удалить
								</button>
							</div>
							{contentItem.type === 'text' ? (
								<textarea
									value={contentItem.value}
									onChange={(e) => handleContentChange(index, 'value', e.target.value)}
									className="w-full p-2 border border-gray-300 rounded"
									placeholder="Введите текст"
								/>
							) : (
								<input
									type="text"
									value={contentItem.value}
									onChange={(e) => handleContentChange(index, 'value', e.target.value)}
									className="w-full p-2 border border-gray-300 rounded"
									placeholder="Введите URL изображения"
								/>
							)}
						</div>
					))}
					<button
						type="button"
						onClick={addContentItem}
						className="w-full bg-green-500 text-white p-2 rounded mb-4 hover:bg-green-600 transition duration-200"
					>
						Добавить контент
					</button>
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

export default CreateHeaderArticlePage
