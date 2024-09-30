import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
	title: 'Сервисное обслуживание',
}

export default function ServisnoeObsluzhivaniePage() {
	return (
		<div className="container mx-auto mt-10">
			{/* Breadcrumbs */}
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link>  | <Link href="/services"><span>Услуги</span></Link> | <Link href="/services/servisnoe-obsluzhivanie-vashikh-priborov"><span>Сервисное обслуживание ваших приборов</span></Link> | <span>Сервисное обслуживание</span>
			</div>

			{/* Main Content */}
			<div className="flex flex-col lg:flex-row justify-between gap-8">
				<div className="lg:w-1/2">
					<Image src="/services/servisnoe/obsluzh_1.jpg" alt="Сервисное обслуживание" title="Сервисное обслуживание" width={450} height={337} className="w-full h-auto rounded" />
				</div>
				<div className="lg:w-1/2">
					<h1 className="text-4xl font-medium mb-6">Сервисное обслуживание</h1>
					<p className="mb-4 text-gray-700">Члены команды нашего Сервисного центра являются высоко квалифицированными специалистами по эксплуатации, ремонту и обслуживанию оборудования, которое вы используете каждый день.</p>
					<p className="mb-4 text-gray-700">
						<strong>Заявки отправлять на почту: </strong>
						<a href="mailto:service@ecoinstrument.kz" className="text-primary_blue font-semibold">service@ecoinstrument.kz</a>
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
						Поставляемое нашей компанией лабораторное оборудование надежно и готово к длительной эксплуатации. Однако никакое оборудование не застраховано от поломки. Чтобы защитить пользователя от такой проблемы, наш Сервисный центр предлагает заключить договор на обслуживание.
					</p>
					<h3 className="text-xl font-semibold mb-4">Как мы работаем</h3>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						<li>Первичная диагностика оборудования (если оборудование не новое)</li>
						<li>Периодическая диагностика, калибровка и настройка оборудования</li>
						<li>Выполнение текущего обслуживания</li>
						<li>Подготовка и передача для настройки</li>
						<li>Поддержание запаса расходных материалов на складе</li>
					</ul>
					<p className="mt-4 mb-6 text-gray-700">
						В дополнение к этим услугам мы предоставляем скидки на дополнительные посещения и работу, которая может потребоваться за рамками договора.
					</p>
					<h3 className="text-xl font-semibold mb-4">Что вы получаете</h3>
					<p className="text-gray-700">
						Гарантированное обслуживание вашего прибора для более надежной и долговечной эксплуатации.
					</p>
					<h3 className="text-xl font-semibold mt-8 mb-4">Подготовка к передаче в сервисный центр</h3>
					<p className="text-gray-700">
						К сдаваемым на диагностику и ремонт приборам необходимо приложить сопроводительное письмо с подробным описанием неисправности и контактными данными для связи. Если прибор на гарантии, то он должен быть предоставлен в полной комплектации (оригинальная упаковка, сертификат / паспорт производителя, электрод / датчик, флаконы с растворами и т. п.). Также обязательно приложить оригинал рекламации на бланке организации с указанием номера счёта, по которому прибор приобретался у компании ««Экоинструмент - Алматы»».
					</p>
					<p className="mt-4 text-gray-700">
						В холодное время приборы, электроды, датчики, стандарты, реагенты и прочие сосуды с жидкостями необходимо транспортировать в тепле во избежание выхода из строя.
					</p>
					<Image src="/services/servisnoe/obsluzh_2.jpg" alt="Сервисный центр" title="Сервисный центр" width={400} height={248} className="mt-4 rounded" />
				</div>
			</div>
		</div>
	)
}
