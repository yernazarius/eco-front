import LaboratoryCards from "@/components/Services/LaboratoryCards"
import VerticalSliderMenu from "@/components/VerticalSliderMenu"
import { Metadata } from "next"
import Image from 'next/image'
import Link from "next/link"

export const metadata: Metadata = {
	title: 'Услуги',
}

export default function AboutCompanyPage() {
	return (

		<div className="md:w-3/4 w-full">
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link>  | <Link href="/services"><span>Устойчивое развитие
				</span></Link>
			</div>
			<h1 className="text-4xl font-medium mb-6">Устойчивое развитие
			</h1>
			<p>Друзья. Мы рады представить вам Отчеты об устойчивом развитии Группы компаний «Экоинструмент - Алматы».


			</p>
			<p className='mt-6'>Несмотря на непростые внешние факторы и обстоятельства мы продолжали нашу эффективную работу в соответствии с Целями устойчивого развития ООН, из которых 2 цели имеют непосредственное отношение к деятельности Группы компаний «Экоинструмент - Алматы».

			</p>
			<p className='mt-6'>В предлагаемом вашему вниманию отчёте, мы расскажем почему бизнес и наука должны идти рука об руку в современном мире, как микропластик оказался в Белом море, сколько конечных благополучателей стоит за деятельностью компании и много других интересных фактов.

			</p>
			<p className='mt-6'>
				Желаем вам приятного чтения.


			</p>
			<div className='flex flex-col lg:flex-row gap-3 mt-12'>
				<Image src="/company/book_1.jpg" width={400} height={1000} alt='book 1' />
				<Image src="/company/book_2.png" width={400} height={1000} alt='book 2' />
			</div>


		</div>

	)
}
