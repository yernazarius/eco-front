"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AxiosDefault } from '@/api/interceptors'
import config from '@/config/config'

interface HeaderTab {
    id: number
    name: string
}
interface SubHeaderTab {
    id: number
    name: string
    header_tab_id: number
    header_tab: {
        id: number
        name: string
    }
}

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
    const [subHeaderTabs, setSubHeaderTabs] = useState<SubHeaderTab[]>([])
    const [headerTabs, setHeaderTabs] = useState<HeaderTab[]>([])


    useEffect(() => {
        const fetchHeaderTabs = async () => {
            try {
                const response = await AxiosDefault.get('/header_tabs')
                console.log('HeaderTabs:', response.data)
                setHeaderTabs(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке категорий:', error)
            }
        }
        const fetchSubHeaderTabs = async () => {
            try {
                const response = await AxiosDefault.get('/sub_header_tabs')
                console.log('SubHeaderTabs:', response.data.data)
                setSubHeaderTabs(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке категорий:', error)
            }
        }

        fetchHeaderTabs()
        fetchSubHeaderTabs()
    }, [])

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(prevCategoryId => prevCategoryId === categoryId ? null : categoryId)
    }

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault()
        if (searchQuery.trim() === '') {
            setSearchResults([])
            setShowDropdown(false)
            return
        }

        try {
            const response = await AxiosDefault.get(`/products/?search=${searchQuery}`)
            setSearchResults(response.data.data)
            setShowDropdown(true)
        } catch (error) {
            console.error('Error fetching search results:', error)
            setShowDropdown(false)
        }
    }

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
        if (event.target.value.trim() === '') {
            setSearchResults([])
            setShowDropdown(false)
        }
    }

    const handleResultClick = () => {
        setShowDropdown(false)
        setSearchQuery('')
    }

    return (
        <header className="container mx-auto px-20">
            <div className="flex justify-between items-center p-4 bg-gray-100">
                <a href="#" className="mr-6 text-blue-500 underline">Заказать звонок</a>
                <div className='flex justify-between w-1/4'>
                    <a href="#" className="text-red-500">Проезд на склад</a>
                    <a href="#" className="text-gray-500">RU</a>
                    <a href="#" className="text-gray-500">EN</a>
                </div>
            </div>

            <div className="flex justify-between items-center py-4">
                <Link href='/' className="flex items-center">
                    <Image width={280} height={56} src="/logo.png" alt="Logo" className="h-12 mr-4" />
                </Link>
                <div className="flex items-center space-x-4">
                    <form onSubmit={handleSearch} className="flex items-center relative">
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchQuery}
                            onChange={handleSearchInput}
                            className="px-4 py-2 border rounded-md"
                        />
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded ml-2">Search</button>
                        {showDropdown && (
                            <div className="absolute top-12 left-0 mt-2 w-full bg-white border rounded shadow-lg z-10">
                                {searchResults.length > 0 ? (
                                    searchResults.map((result: any) => (
                                        <Link href={`/products/${result.id}`} key={result.id} passHref>
                                            <div className='flex flex-row justify-between p-1'>

                                                <div
                                                    className="flex flex-col px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                    onClick={handleResultClick}
                                                >
                                                    {result.title}
                                                </div>
                                                <img
                                                    src={`${config.BASE_URL}/${result.thumbnail}`}
                                                    alt={result.title}
                                                    className="w-[20%] h-auto"
                                                />
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="px-4 py-2 text-gray-700">No results found</div>
                                )}
                            </div>
                        )}
                    </form>
                    <div className="flex items-baseline flex-col text-left justify-center ml-4">
                        <a href="tel:+74957452290" className="text-gray-700">+7 (707) 524 68 68</a>
                        <a href="mailto:mail@ecoinstrument.ru" className="ml-2 text-blue-500">info@ecoinstrument.kz</a>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Задать вопрос</button>
                </div>
            </div>

            <nav className="flex justify-around items-center py-2 border-y">
                <div className="relative group">
                    <a
                        href="#"
                        className="text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md"
                    >
                        Компания
                    </a>
                    <div
                        className="absolute z-20 left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">О компании</Link>
                        <Link href="/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">История</Link>
                        <Link href="/responsibility" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Социальная ответственность</Link>
                        <Link href="/partners" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Партнеры</Link>
                        <Link href="/video-gallery" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Видеогалерея</Link>
                        <Link href="/representatives" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Представительства</Link>
                        <Link href="/vacancies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Вакансии</Link>
                        <Link href="/sustainability" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Устойчивое развитие</Link>
                    </div>
                </div>
                <div className="relative group">
                    <a
                        href="#"
                        className="text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md"
                    >
                        Промышленный анализ
                    </a>
                    <div
                        className="absolute z-20 left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <Link href="/industrial/analysis1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Analysis 1</Link>
                        <Link href="/industrial/analysis2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Analysis 2</Link>
                        <Link href="/industrial/analysis3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Analysis 3</Link>
                    </div>
                </div>
                <Link href="/lab-equipment" className="text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md">Лабораторное оборудование</Link>
                <Link href="/projects" className="text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md">Проекты</Link>
                <Link href="/service-center" className="text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md">Сервис центр</Link>
                <Link href="/promotions" className="text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md">Акции</Link>
                <Link href="/news" className="text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md">Новости</Link>
                <Link href="/contacts" className="text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md">Контакты</Link>
                {headerTabs.map(headerTab => (
                    <div key={headerTab.id} className="">
                        <button
                            onClick={() => handleCategoryClick(headerTab.id)}
                            className={`mb-2 ${selectedCategory === headerTab.id ? 'font-bold' : ''}`}
                        >
                            <span className="text-gray-800 hover:text-gray-600">
                                {headerTab.name}
                            </span>
                        </button>
                        {selectedCategory === headerTab.id && (
                            <div className="absolute z-40 left-0 mt-2 w-full bg-white shadow-lg ">
                                {subHeaderTabs.filter(subHeaderTab => subHeaderTab.header_tab_id === headerTab.id).map(subHeaderTab => (
                                    <Link
                                        key={subHeaderTab.id}
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 w-1/4 hover:bg-gray-200"
                                    >
                                        {subHeaderTab.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </header>
    )
}

export default Header
