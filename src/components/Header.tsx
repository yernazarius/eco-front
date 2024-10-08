"use client"
import { AxiosDefault } from '@/api/interceptors'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface HeaderTab {
    id: number
    name: string
}

interface SubHeaderTab {
    id: number
    name: string
    grand_category_id: number
    image_path: string
}

interface ChildCategory {
    id: number
    name: string
    parent_category_id: number
}

const Header = () => {
    const [isDropdownHovered, setIsDropdownHovered] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
    const [parentCategory, setparentCategory] = useState<SubHeaderTab[]>([])
    const [grandCategory, setgrandCategory] = useState<HeaderTab[]>([])
    const [childCategories, setChildCategories] = useState<ChildCategory[]>([])

    useEffect(() => {
        const fetchgrandCategory = async () => {
            try {
                const response = await AxiosDefault.get('/category_grand/')
                console.log('grandCategory:', response.data)
                setgrandCategory(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке категорий:', error)
            }
        }

        const fetchparentCategory = async () => {
            try {
                const response = await AxiosDefault.get('/category_parent/')
                console.log('parentCategory:', response.data.data)
                setparentCategory(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке категорий:', error)
            }
        }

        const fetchChildCategories = async () => {
            try {
                const response = await AxiosDefault.get('/category_child/')
                console.log('ChildCategories:', response.data.data)
                setChildCategories(response.data.data)
            } catch (error) {
                console.error('Ошибка при загрузке подкатегорий:', error)
            }
        }

        fetchgrandCategory()
        fetchparentCategory()
        fetchChildCategories()
    }, [])

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(prevCategoryId => (prevCategoryId === categoryId ? null : categoryId))
    }

    const closeDropdown = () => {
        setSelectedCategory(null)
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
        <header className="container mx-auto ">
            <div className="flex justify-between items-center p-4 bg-gray-100">
                <a href="#" className="mr-6 text-blue-500 underline">Заказать звонок</a>
                <div className='flex justify-between w-1/4'>
                    <Link href='/contacts' className="text-red-500">Проезд на склад</Link>
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

                        {/* Dropdown */}
                        {showDropdown && (
                            <div
                                className="absolute top-12 left-0 mt-2 w-full bg-white border rounded shadow-lg z-10"
                                onMouseEnter={() => setIsDropdownHovered(true)}
                                onMouseLeave={() => setIsDropdownHovered(false)}
                            >
                                {searchResults.length > 0 ? (
                                    searchResults.map((result: any) => (
                                        <Link href={`/products/${result.id}`} key={result.id} passHref>
                                            <div className='flex flex-row justify-between p-1'>
                                                <div
                                                    className="flex flex-col px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer truncate"
                                                    onClick={handleResultClick}
                                                    style={{ maxHeight: '2.5rem', overflow: 'hidden' }} // Max height with truncation
                                                >
                                                    {result.title}
                                                </div>
                                                <Image
                                                    width={100} height={100}
                                                    src={`${process.env.NEXT_PUBLIC_S3_URL}/${result.thumbnail}`}
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
                    <Link href="tel:+77075246868" className="px-4 py-2 bg-blue-500 text-white rounded">Задать вопрос</Link>
                </div>
            </div>

            <nav className="flex justify-around items-center border-y relative m-0 p-0">
                <div className="relative group">
                    <div
                        className="text-gray-700  hover:bg-primary_blue hover:text-white px-3 py-3"
                    >
                        Компания
                    </div>
                    <div
                        className="absolute hidden group-hover:block z-20 left-0  w-48 bg-white border rounded shadow-lg"
                    >
                        <Link href="/company/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">О компании</Link>

                        {/* <Link href="/company/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">История</Link> */}
                        {/* <Link href="/company/social-responsibility" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Социальная ответственность</Link> */}
                        <Link href="/company/partners" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Партнеры</Link>
                        {/* <Link href="/video-gallery" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Видеогалерея</Link> */}
                        {/* <Link href="/company/representative" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Представительства</Link> */}
                        {/* <Link href="/vacancies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Вакансии</Link> */}
                        <Link href="/company/sustainability" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Устойчивое развитие</Link>
                    </div>
                </div>
                {grandCategory.map(headerTab => (
                    <div key={headerTab.id} className=" group">
                        <button
                            onClick={() => handleCategoryClick(headerTab.id)}
                            className={`px-3 py-2  ${selectedCategory === headerTab.id ? 'font-bold bg-blue-600 text-white' : 'text-gray-700 hover:text-white hover:bg-primary_blue'}`}
                        >
                            {headerTab.name}
                        </button>
                        {selectedCategory === headerTab.id && (
                            <div className="absolute left-0 w-full bg-white shadow-lg z-20 mt-2">
                                <div className="grid grid-cols-4 gap-4 p-4">
                                    {parentCategory
                                        .filter(subHeaderTab => subHeaderTab.grand_category_id === headerTab.id)
                                        .map(subHeaderTab => (
                                            <div key={subHeaderTab.id} className=''>
                                                <Image
                                                    priority
                                                    width={1000}
                                                    height={1000}
                                                    alt={subHeaderTab.name}
                                                    src={`${process.env.NEXT_PUBLIC_S3_URL}${subHeaderTab.image_path}`}
                                                    className="w-1/3 h-auto mx-auto object-cover rounded"
                                                />
                                                <Link
                                                    href={{
                                                        pathname: `/products`,
                                                        query: {
                                                            grand_category: headerTab.name,
                                                            parent_category: subHeaderTab.name.toLowerCase(),
                                                        },
                                                    }}
                                                    className="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-200"
                                                    onClick={closeDropdown}  // Close dropdown when clicked
                                                >
                                                    {subHeaderTab.name}
                                                </Link>
                                                {/* Render child categories if they exist */}
                                                {childCategories
                                                    .filter(child => child.parent_category_id === subHeaderTab.id)
                                                    .map(child => (
                                                        <Link
                                                            key={child.id}
                                                            href={{
                                                                pathname: `/products`,
                                                                query: {
                                                                    grand_category: headerTab.name,
                                                                    parent_category: subHeaderTab.name.toLowerCase(),
                                                                    child_category: child.name.toLowerCase(),
                                                                },
                                                            }}
                                                            className="block px-4 py-1 ml-4 text-gray-600 hover:bg-gray-100"
                                                            onClick={closeDropdown}  // Close dropdown when clicked
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div className="relative group">
                    <Link href='/products'
                        className="text-gray-700 hover:bg-primary_blue hover:text-white px-3 py-3 "
                    >
                        Промышленный анализ
                    </Link>
                    {/* <div
                        className="absolute hidden group-hover:block z-20 left-0 w-48 bg-white border rounded shadow-lg"
                    >
                        <Link href="/industrial/analysis1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Analysis 1</Link>
                        <Link href="/industrial/analysis2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Analysis 2</Link>
                        <Link href="/industrial/analysis3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Analysis 3</Link>
                    </div> */}
                </div>
                <Link href="/products" className="text-gray-700 hover:bg-primary_blue hover:text-white px-3 py-3 ">Лабораторное оборудование</Link>
                <div className="relative group">
                    <div
                        className="text-gray-700  hover:bg-primary_blue hover:text-white px-3 py-3"
                    >
                        Проекты
                    </div>
                    <div
                        className="absolute hidden group-hover:block z-20 left-0  w-48 bg-white border rounded shadow-lg"
                    >

                        <Link href="/projects/lab-projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Лабораторное проекты</Link>
                        <Link href="/projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Промышленные проекты</Link>
                    </div>
                </div>                <Link href="/services/servisnoe-obsluzhivanie-vashikh-priborov" className="text-gray-700 hover:bg-primary_blue hover:text-white px-3 py-3 ">Сервис центр</Link>
                <Link href="/blog" className="text-gray-700 hover:bg-primary_blue hover:text-white px-3 py-3 ">Акции</Link>
                <Link href="/blog" className="text-gray-700 hover:bg-primary_blue hover:text-white px-3 py-3 ">Новости</Link>
                <Link href="/contacts" className="text-gray-700 hover:bg-primary_blue hover:text-white px-3 py-3 ">Контакты</Link>


            </nav>
        </header>
    )
}

export default Header
