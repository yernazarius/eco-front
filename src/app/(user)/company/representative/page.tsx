import PartnerCard from '@/components/Company/PartnersCard'
import LaboratoryCards from "@/components/Services/LaboratoryCards"
import VerticalSliderMenu from "@/components/VerticalSliderMenu"
import { Metadata } from "next"
import Image from 'next/image'
import Link from "next/link"

export const metadata: Metadata = {
	title: 'Услуги',
}

export default function HistoryPage() {
	return (
		<div className="md:w-3/4 w-full">
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link> | <Link href="/services"><span>О комании</span></Link> | <Link href="/services"><span>Представительства</span></Link>
			</div>
			<h1 className="text-4xl font-medium mb-6">Представительства</h1>
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-row justify-between space-x-4">
					{[
						{ src: '/company/almaty.jpg', alt: 'almaty office', title: '«Экоинструмент - Алматы» - Алматы' },
						{ src: '/company/ural.jpg', alt: 'ural office', title: '«Экоинструмент - Алматы» - Урал' },
						{ src: '/company/volga.jpeg', alt: 'volga office', title: '«Экоинструмент - Алматы» - Волга' },
					].map((office, index) => (
						<div key={index} className='border w-[30%] flex flex-col'>
							<div className='flex flex-col p-3 h-full'>
								<div className="relative w-full h-48">
									<Image src={office.src} layout="fill" objectFit="cover" className="rounded" alt={office.alt} />
								</div>
								<h2 className='text-center text-lg mt-5'>{office.title}</h2>
								<div className='bg-primary_blue w-1/4 h-[.2rem] mx-auto mt-3 rounded-md'></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
