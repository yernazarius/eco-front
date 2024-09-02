import PartnerCard from '@/components/Company/PartnersCard'
import LaboratoryCards from "@/components/Services/LaboratoryCards"
import VerticalSliderMenu from "@/components/VerticalSliderMenu"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: 'Услуги',
}

export default function HistoryPage() {
	const partners = [
		{
			id: 'bx_3218110189_9404',
			name: 'Производитель спектрофотометров и реагентов',
			href: '/company/partners/_hach-lange/',
			imgSrc: '/upload/iblock/bd3/kartinka-_-izobrazhenie-skryto.jpg',
			imgAlt: 'Производитель спектрофотометров и реагентов',
		},
		{
			id: 'bx_3218110189_9406',
			name: 'HANNA Instruments',
			href: '/company/partners/hanna_instruments/',
			imgSrc: '/upload/iblock/e35/HANNA%20Instrumets.png',
			imgAlt: 'HANNA Instruments',
		},
		{
			id: 'bx_3218110189_9429',
			name: 'WTW',
			href: '/company/partners/wtw/',
			imgSrc: '/upload/iblock/424/1138416de6b93b44d753cd27e3f06c3a.jpg',
			imgAlt: 'WTW',
		},
		{
			id: 'bx_3218110189_9428',
			name: 'VELP SCIENTIFICA',
			href: '/company/partners/_velp/',
			imgSrc: '/upload/iblock/171/velp.png',
			imgAlt: 'VELP SCIENTIFICA',
		},
		{
			id: 'bx_3218110189_9395',
			name: 'Bellingham and Stanley',
			href: '/company/partners/_b_s/',
			imgSrc: '/upload/iblock/d86/BS%20mini.jpg',
			imgAlt: 'Bellingham and Stanley',
		},
		{
			id: 'bx_3218110189_9422',
			name: 'SI Analytics (SCHOTT)',
			href: '/company/partners/si-analytics-schott/',
			imgSrc: '/upload/iblock/8c2/SI_Analytics.jpg',
			imgAlt: 'SI Analytics (SCHOTT)',
		},
		{
			id: 'bx_3218110189_9411',
			name: 'Kern & Sohn GmbH',
			href: '/company/partners/_kern/',
			imgSrc: '/upload/iblock/e89/Kern.jpg',
			imgAlt: 'Kern & Sohn GmbH',
		},
		{
			id: 'bx_3218110189_9407',
			name: 'HAWS',
			href: '/company/partners/_haws/',
			imgSrc: '/upload/iblock/a95/Haws.jpg',
			imgAlt: 'HAWS',
		},
		{
			id: 'bx_3218110189_9398',
			name: 'EIJKELKAMP',
			href: '/company/partners/_eijkelkamp/',
			imgSrc: '/upload/iblock/fd3/EIJKELKAMP.png',
			imgAlt: 'EIJKELKAMP',
		},
		{
			id: 'bx_3218110189_9403',
			name: 'GSSI',
			href: '/company/partners/_gssi/',
			imgSrc: '/upload/iblock/643/Logo.png',
			imgAlt: 'GSSI',
		},
		{
			id: 'bx_3218110189_9414',
			name: 'Meinsberg',
			href: '/company/partners/meinsberg/',
			imgSrc: '/upload/iblock/cc1/meinsberg.png',
			imgAlt: 'Meinsberg',
		},
		{
			id: 'bx_3218110189_9427',
			name: 'Trios',
			href: '/company/partners/_trios/',
			imgSrc: '/upload/iblock/c8b/Trios.jpg',
			imgAlt: 'Trios',
		},
		{
			id: 'bx_3218110189_9426',
			name: 'Testo',
			href: '/company/partners/_testo/',
			imgSrc: '/upload/iblock/fb4/testo.jpg',
			imgAlt: 'Testo',
		},
		{
			id: 'bx_3218110189_9425',
			name: 'Systea S.p.A',
			href: '/company/partners/_SysteaSpA/',
			imgSrc: '/upload/iblock/7f1/Systea.jpg',
			imgAlt: 'Systea S.p.A',
		},
		{
			id: 'bx_3218110189_9424',
			name: 'Steinfurth',
			href: '/company/partners/_steinfurth/',
			imgSrc: '/upload/iblock/cab/Steinfurth.jpg',
			imgAlt: 'Steinfurth',
		},
		{
			id: 'bx_3218110189_9421',
			name: 'SEIBOLD',
			href: '/company/partners/_seibold/',
			imgSrc: '/upload/iblock/372/SEIBOLD.png',
			imgAlt: 'SEIBOLD',
		},
		{
			id: 'bx_3218110189_9418',
			name: 'Pneumac',
			href: '/company/partners/_pneumac/',
			imgSrc: '/upload/iblock/453/db40f89ffe094e2fe5284b24ca29246f.jpg',
			imgAlt: 'Pneumac',
		},
		{
			id: 'bx_3218110189_9417',
			name: 'Nabertherm',
			href: '/company/partners/_nabertherm/',
			imgSrc: '/upload/iblock/115/Nabertherm.jpg',
			imgAlt: 'Nabertherm',
		},
		{
			id: 'bx_3218110189_9416',
			name: 'METOP',
			href: '/company/partners/_metop/',
			imgSrc: '/upload/iblock/703/metop.png',
			imgAlt: 'METOP',
		},
		{
			id: 'bx_3218110189_9415',
			name: 'Memmert',
			href: '/company/partners/_memmert/',
			imgSrc: '/upload/iblock/bbe/memmert.jpg',
			imgAlt: 'Memmert',
		},
		{
			id: 'bx_3218110189_9412',
			name: 'KRUSS',
			href: '/company/partners/_kruss/',
			imgSrc: '/upload/iblock/d5e/KRUSS.jpg',
			imgAlt: 'KRUSS',
		},
		{
			id: 'bx_3218110189_9410',
			name: 'Ismatec',
			href: '/company/partners/_ismatec/',
			imgSrc: '/upload/iblock/dbc/Ismatec.jpg',
			imgAlt: 'Ismatec',
		},
		{
			id: 'bx_3218110189_9409',
			name: 'HUBER',
			href: '/company/partners/_huber/',
			imgSrc: '/upload/iblock/9f4/huber.jpg',
			imgAlt: 'HUBER',
		},
		{
			id: 'bx_3218110189_9408',
			name: 'HORIBA',
			href: '/company/partners/_horiba/',
			imgSrc: '/upload/iblock/d04/d5262aa0c322d4f82313c4c3a4dc9b59.jpg',
			imgAlt: 'HORIBA',
		},
		{
			id: 'bx_3218110189_9405',
			name: 'Hamilton',
			href: '/company/partners/_hamilton/',
			imgSrc: '/upload/iblock/590/Hamilton%20mini.jpg',
			imgAlt: 'Hamilton',
		},
		{
			id: 'bx_3218110189_9401',
			name: 'Gebrueder Heyl Analysentechnik',
			href: '/company/partners/_GebruederHeylAnalysentechnik/',
			imgSrc: '/upload/iblock/e0f/Gebrueder%20Heyl%20Analysentechnik.jpg',
			imgAlt: 'Gebrueder Heyl Analysentechnik',
		},
		{
			id: 'bx_3218110189_9400',
			name: 'Funke Gerber',
			href: '/company/partners/_funke_gerber/',
			imgSrc: '/upload/iblock/663/Funke%20Gerber.jpg',
			imgAlt: 'Funke Gerber',
		},
		{
			id: 'bx_3218110189_9399',
			name: 'Elma',
			href: '/company/partners/_elma/',
			imgSrc: '/upload/iblock/d66/Elma%20mini.jpg',
			imgAlt: 'Elma',
		},
		{
			id: 'bx_3218110189_9397',
			name: 'Ebro',
			href: '/company/partners/_Ebro/',
			imgSrc: '/upload/iblock/b90/EBRO.jpg',
			imgAlt: 'Ebro',
		},
		{
			id: 'bx_3218110189_9396',
			name: 'Binder',
			href: '/company/partners/_binder/',
			imgSrc: '/upload/iblock/dfb/BINDER_Logo.jpg',
			imgAlt: 'Binder',
		},
		{
			id: 'bx_3218110189_9393',
			name: 'A&D',
			href: '/company/partners/_AD/',
			imgSrc: '/upload/iblock/9ec/AND.jpg',
			imgAlt: 'A&D',
		},
	]
	return (

		<div className="md:w-3/4 w-full">
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link> | <Link href="/services"><span>О комании</span></Link> | <Link href="/services"><span>Партнеры</span></Link>
			</div>
			<h1 className="text-4xl font-medium mb-6">Партнеры</h1>
			<p className='text-primary_text'>ООО &quot;ЭКОИНСТРУМЕНТ&quot; всегда было ориентировано на качественные и надежные приборы, показаниям которых можно доверять даже при проведении измерений в экстремальных условиях. Именно наша компания вывела на российский рынок такие известные мировые марки, как HANNA Instruments, HACH-Lange, WTW, Eijkelkamp, KERN, Haws, GSSI и другие.
			</p>
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-12 gap-4">
					{partners.map((partner) => (
						<PartnerCard
							key={partner.id}
							id={partner.id}
							name={partner.name}
							href={partner.href}
							imgSrc={`https://www.ecoinstrument.ru${partner.imgSrc}`}
							imgAlt={partner.imgAlt}
						/>
					))}
				</div>
			</div>

		</div>
	)
}
