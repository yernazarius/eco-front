import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
	title: 'Метрологическая и методическая поддержка',
}

export default function MetrologicalSupportPage() {
	return (
		<div className="container mx-auto mt-10">
			{/* Breadcrumbs */}
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link>  | <Link href="/services"><span>Услуги</span></Link> | <Link href="/services/servisnoe-obsluzhivanie-vashikh-priborov"><span>Сервисное обслуживание ваших приборов</span></Link> | <span>Метрологическая и методическая поддержка</span>
			</div>

			{/* Title */}
			<h1 className="text-4xl font-medium mb-6">Метрологическая и методическая поддержка</h1>

			{/* Main Content */}
			<div className="flex flex-col lg:flex-row justify-between gap-8">
				<div className="lg:w-1/2">
					<Image src="/services/servisnoe/img_2.png" alt="Метрологическая и методическая поддержка" title="Метрологическая и методическая поддержка" width={450} height={317} className="w-full h-auto rounded" />
				</div>
				<div className="lg:w-1/2">
					<p className="mb-4 text-gray-700">Мы предлагаем услуги по первичной и периодической поверке приобретенных вами приборов.</p>
					<p className="mb-4 text-gray-700">
						<strong>Заявки направлять на почту:&nbsp;</strong>
						<a href="mailto:metrology@ecoinstrument.ru" className="text-primary_blue font-semibold">metrology@ecoinstrument.ru</a>
					</p>
					<Link href="#more-info" className="text-primary_blue font-semibold">
						Подробнее
					</Link>
				</div>
			</div>

			{/* Detailed Information */}
			<div className="container mx-auto py-8" id="more-info">
				<div className="bg-gray-100 p-4 rounded-t-lg">
					<h2 className="text-lg font-semibold">Описание</h2>
				</div>
				<div className="bg-white p-6 rounded-b-lg shadow-lg">
					<p className="mb-6 text-gray-700">
						Поверка средств измерений&nbsp;— совокупность операций, выполняемых с целью подтверждения соответствия средств измерений установленным метрологическим требованиям.
					</p>
					<p className="mb-6 text-gray-700">
						Обязательной поверке должны подвергаться СИ, которые применяются в сфере Государственного регулирования обеспечения единства измерений.
					</p>
					<p className="mb-6 text-gray-700">
						На большинство наших приборов получено свидетельство об утверждении типа СИ, поскольку ЭКОИНСТРУМЕНТ является официальным представителем производителей в России.
					</p>
					<p className="mb-6 text-gray-700">
						Мы предлагаем услуги по первичной и периодической поверке приобретенных вами приборов. Мы сотрудничаем только с проверенными годами заведениями, поэтому гарантируем, что поверка производится в соответствии с государственной поверочной схемой и методикой поверки, установленной при утверждении типа средств измерений.
					</p>

					<h3 className="text-xl font-semibold mb-4">Как мы работаем</h3>
					<h4 className="font-semibold underline mb-2">Первичная поверка</h4>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						<li>При приобретении прибора у нас или у наших дилеров менеджер всегда интересуется, нужна ли будет поверка.</li>
						<li>Если подобная необходимость есть – прибор поверяется перед поставкой клиенту.</li>
						<li>Оплата и доставка.</li>
					</ul>

					<h4 className="font-semibold underline mt-6 mb-2">Периодическая поверка</h4>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						<li>Для периодической поверки прибор присылается в наш сервис-центр.</li>
					</ul>

					<p className="mt-4 mb-6 text-red-500 italic">
						!!! Для приема прибор должен быть чистым, в рабочем состоянии, без повреждений, без следов вскрытия, в комплекте также должно быть предыдущее свидетельство о поверке !!!
					</p>

					<ul className="list-disc list-inside space-y-2 text-gray-700">
						<li>Наши специалисты проверяют прибор и готовят его к поверке.</li>
						<li>Прибор передается в поверку.</li>
						<li>После получения нового свидетельства прибор возвращается клиенту.</li>
					</ul>

					<h3 className="text-xl font-semibold mt-8 mb-4">Что вы получаете</h3>
					<p className="text-gray-700">
						Вы получаете свидетельство о поверке Вашего прибора в соответствии с государственной поверочной схемой и методикой поверки, а также гарантию на возможность периодической поверки в нашем сервис-центре. Мы берем ответственность за получение свидетельства о поверке для новых приборов и после ремонта.
					</p>

				</div>
			</div>
		</div>
	)
}
