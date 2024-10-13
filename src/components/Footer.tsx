"use client"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="container mx-auto py-6 px-4">
			{/* Logo and Contact Info */}
			<div className="flex flex-col sm:flex-row justify-between items-center py-4">
				<Link href="/" className="flex items-center mb-4 sm:mb-0">
					<Image width={280} height={56} src="/logo.png" alt="Logo" className="h-12 mr-4" />
				</Link>
				<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center">
					<a href="tel:+74957452290" className="text-gray-700 hover:text-blue-500">+7 (707) 524 68 68</a>
					<a href="mailto:mail@ecoinstrument.ru" className="text-gray-700 hover:text-blue-500">info@ecoinstrument.kz</a>
				</div>
			</div>

			{/* Navigation and Copyright */}
			<div className="flex flex-col sm:flex-row justify-between items-center py-4 border-t mt-4">
				<nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center">
					<Link href="/company/" className="text-gray-700 hover:text-blue-500">О компании</Link>
					<Link href="/projects/lab-projects" className="text-gray-700 hover:text-blue-500">Лабораторные проекты</Link>
					<Link href="/projects" className="text-gray-700 hover:text-blue-500">Промышленные проекты</Link>
					<Link href="/contacts" className="text-gray-700 hover:text-blue-500">Контакты</Link>
				</nav>
				<div className="text-gray-600 text-sm mt-4 sm:mt-0">
					© 2024 EcoInstrument. Все права защищены.
				</div>
			</div>
		</footer>
	)
}

export default Footer
