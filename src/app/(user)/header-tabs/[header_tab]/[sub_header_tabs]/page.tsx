"use client"
import { AxiosDefault } from '@/api/interceptors'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface HeaderTab {
	id: number
	name: string
}

interface SubHeaderTab {
	id: number
	name: string
	header_tab_id: number
}

interface ContentItem {
	type: 'text' | 'image'
	value: string
}

interface Article {
	id: number
	title: string
	content: ContentItem[]
	sub_header_tabs_id: number
	created_at: string
}

export default function Page({ params }: { params: { header_tab: string; sub_header_tabs: string } }) {
	const [headerTab, setHeaderTab] = useState<HeaderTab | null>(null)
	const [subHeaderTab, setSubHeaderTab] = useState<SubHeaderTab | null>(null)
	const [articles, setArticles] = useState<Article[]>([])

	console.log('Params:', params)

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch header tab data
				const headerResponse = await AxiosDefault.get(`/header_tabs?search=${params.header_tab}`)
				if (headerResponse.data.data.length > 0) {
					setHeaderTab(headerResponse.data.data[0])
					console.log('Fetched header tab:', headerResponse.data.data[0])
				} else {
					console.warn('No header tab found for:', params.header_tab)
				}

				// Fetch sub header tab data
				console.log
				// const subHeaderResponse = await AxiosDefault.get(`/sub_header_tabs?page=1&limit=10&name=${params.sub_header_tabs}`)
				const subHeaderResponse = await AxiosDefault.get(`/sub_header_tabs?search=${params.sub_header_tabs}`)
				if (subHeaderResponse.data.data.length > 0) {
					const subHeaderTab = subHeaderResponse.data.data[0]
					setSubHeaderTab(subHeaderTab)
					console.log('Fetched SUB HEADER tab:', subHeaderTab)

					// Fetch all articles
					const articlesResponse = await AxiosDefault.get('/header_articles/?page=1&limit=10')
					console.log('Fetched articles:', articlesResponse.data.articles)

					if (articlesResponse.data.articles) {
						// Filter articles that belong to the current subHeaderTab
						const filteredArticles = articlesResponse.data.articles.filter((article: Article) => {
							console.log('Checking article:', article)
							return article.sub_header_tabs_id === subHeaderTab.id
						})
						console.log('Filtered articles:', filteredArticles)
						setArticles(filteredArticles)
					} else {
						setArticles([]) // Ensure the articles state is empty if no articles are found
						console.log('No articles found.')
					}
				} else {
					console.warn('No sub header tab found for:', params.sub_header_tabs)
				}
			} catch (error) {
				console.error('Error fetching tab data:', error)
			}
		}

		fetchData()
	}, [params.header_tab, params.sub_header_tabs])

	return (
		<div className="container mx-auto  mt-10">
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link> | <Link href={`/header/${headerTab?.name}`}><span>{headerTab?.name}</span></Link> | <span>{subHeaderTab?.name}</span>
			</div>
			<div className="flex flex-col gap-8">
				<div className="">
					<h1 className="text-4xl font-medium mb-6">{subHeaderTab?.name}</h1>
					<p>Просмотрите наши последние статьи и новости, связанные с этим подразделом. {params.sub_header_tabs}</p>
				</div>
			</div>
			<div className="container mx-auto py-8">
				{articles.length > 0 ? (
					articles.map(article => (
						<div key={article.id} className="bg-white mb-8 p-6 rounded-lg shadow-lg">
							<h2 className="text-2xl font-bold mb-4">{article.title}</h2>
							<div className="space-y-4">
								{article.content.map((contentItem, index) => (
									<div key={index} className="mb-4">
										{contentItem.type === 'text' ? (
											<p className="text-gray-700">{contentItem.value}</p>
										) : (
											<img src={contentItem.value} alt="article content" className="w-full max-h-64 object-contain" />
										)}
									</div>
								))}
							</div>
						</div>
					))
				) : (
					<div className="text-center text-gray-500 text-lg">
						Нет данных пока
					</div>
				)}
			</div>
		</div>
	)
}
