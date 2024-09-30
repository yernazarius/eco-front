import LaboratoryCards from "@/components/Services/LaboratoryCards"
import VerticalSliderMenu from "@/components/VerticalSliderMenu"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: 'Услуги',
}

export default function AboutCompanyPage() {
	return (

		<div className="md:w-3/4 w-full">
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link>  | <Link href="/services"><span>Социальная ответственность
				</span></Link>
			</div>
			<h1 className="text-4xl font-medium mb-6">Социальная ответственность
			</h1>
			<p>ООО ««Экоинструмент - Алматы»» не только является ведущим дистрибьютором аналитического оборудования и оборудования для мониторинга окружающей среды, но также, в рамках своих возможностей, занимается благотворительностью.

			</p>
			<p className='mt-6'>Мы взаимодействуем с несколькими благотворительными фондами, основным направлением деятельности которых является помощь детям. Дети – наше будущее, поэтому «Экоинструмент - Алматы» стремится не только сохранить для них чистую природу и воду, но и помочь им вырасти здоровыми и счастливыми.

			</p>
			<p className='mt-6'>В рамках данного сотрудничества, наша компания помогла уже многим детям. Все отчеты о благотворительной деятельности нашей компании публикуются в данном разделе.

			</p>
			<p className='mt-6'>
				Мы проявляем высокую Корпоративную Социальную Ответственность. Мы хотели бы поделиться своим многолетним опытом мониторинга качества воды не только со специалистами, но также с самой широкой общественностью, главным образом  - с молодежью, в чьи руки мы передадим бесценные водные ресурсы страны.

			</p>
			<h3 className='text-center text-3xl font-medium my-12'>Именно для этих целей нами был учрежден Некоммерческий Экологический Фонд «Без Рек Как Без Рук»

			</h3>



		</div>

	)
}
