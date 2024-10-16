import Image from 'next/image'
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: 'Проекты',
}

const projects = [
	{
		src: '/projects/svyatoi_istichnik.jpg',
		alt: 'Оснащение завода напитков',
		title: 'Оснащение завода напитков',
		desc: 'Лаборатория контроля качества на заводе по производству питьевой воды "Святой источник"',
		client: 'Заказчик: Завод "Святой источник"',
		link: '/projects/project-1'
	},
	{
		src: '/projects/7094b847b66beb3d3b60c2d04352bf3d.png',
		alt: 'Оснащение лаб.комплекса',
		title: 'Оснащение лаб.комплекса',
		desc: 'Оснащение лабораторного комплекса контроля качества воды',
		client: 'Заказчик: Завод "Акваника"',
		link: '/projects/project-2'

	},
	{
		src: '/projects/cf34cf363a11251c9b95e36e02f45288.png',
		alt: 'Проект лабораторного комплекса',
		title: 'Проект лабораторного комплекса',
		desc: 'Проект по строительству лабораторного комплекса',
		client: 'Заказчик: ООО "КАРГИЛЛ"',
		link: '/projects/project-3'

	},
	{
		src: '/projects/0c386f961d5f64349445366a252d62c4.jpg',
		alt: 'Оптимизация контроля хлора',
		title: 'Оптимизация контроля хлора',
		desc: 'Поставка 9 насосных станций с передачей информации в центр управления.',
		client: 'Заказчик: Новосибирск водоканал',
		link: '/projects/project-4'

	},
	{
		src: '/projects/74f355cd4cb0200659934cf00a9fb837.jpg',
		alt: 'Мониторинг хлора и мутности',
		title: 'Мониторинг хлора и мутности',
		desc: 'Удаленный мониторинг хлора и мутности на очистных сооружениях питьевой воды',
		client: 'Заказчик: Мосводоканал',
		link: '/projects/project-5'

	},
	{
		src: '/projects/78953f53dad41c38984be47dca36825b.jpg',
		alt: 'Оборудование для модернизации аэротенков',
		title: 'Оборудование для модернизации аэротенков',
		desc: 'Поставка оборудования для модернизации аэротенков',
		client: 'Заказчик: Санкт-Петербург водоканал',
		link: '/projects/project-6'

	},
	{
		src: '/projects/6a92ebac2722770bf48f5e03d110344d.jpg',
		alt: 'Автономный пост мониторинга',
		title: 'Автономный пост мониторинга',
		desc: 'Организация автономного поста мониторинга сточных вод',
		client: 'Заказчик: Очистные сооружения Мосводоканала',
		link: '/projects/project-7'

	},
	{
		src: '/projects/28e707f4567f89bb8abf50c66490b574.jpg',
		alt: 'Оборудование для контроля питьевой воды',
		title: 'Оборудование для контроля питьевой воды',
		desc: 'Оборудование для новой установки очистки питьевой воды',
		client: 'Заказчик: Водоканал села Нюксеница',
		link: '/projects/project-8'

	},
	{
		src: '/projects/cdc818b1bcfe14016b8c7f54344939a1.png',
		alt: 'Мониторинг сети сточных вод',
		title: 'Мониторинг сети сточных вод',
		desc: 'Проектирование и монтаж сети мониторинга сточных вод',
		client: 'Заказчик: Целлюлозно-бумажный комбинат "International Paper"',
		link: '/projects/project-9'

	},
	{
		src: '/projects/129ac476368e5841639cf5255eccc618.jpg',
		alt: 'Контроль питьевой воды',
		title: 'Контроль питьевой воды',
		desc: 'Контроль входящей и очищенной питьевой воды',
		client: 'Заказчик: Валаамская водопроводная станция',
		link: '/projects/project-10'

	},
	{
		src: '/projects/CEIrL4KUgpY.jpg',
		alt: 'Мониторинг дозирования хлора',
		title: 'Мониторинг дозирования хлора',
		desc: 'Контроль процесса дезинфекции на центральной станции очистки питьевой воды.',
		client: 'Заказчик: Новосибирск водоканал',
		link: '/projects/project-11'

	},
	{
		src: '/projects/dbebd546109da31665f82e14170e2850.jpg',
		alt: 'Экомониторинг сточных вод',
		title: 'Экомониторинг сточных вод',
		desc: 'Экомониторинг сточных вод от металлургического завода до реки Ингулец',
		client: 'Заказчик: ПАО "АрселорМиттал", Кривой Рог',
		link: '/projects/project-12'

	},
	{
		src: '/projects/6ad2112baf624ab84c09e6b40d55de7e.png',
		alt: 'Мониторинг сточных вод',
		title: 'Мониторинг сточных вод',
		desc: 'Мониторинг вод на очистных сооружениях',
		client: 'Заказчик: Новокузнецк водоканал',
		link: '/projects/project-13'

	},
	{
		src: '/projects/b55921c5f5f614fcb478942e49afb4a7.png',
		alt: 'Реконструкция очистных сооружений',
		title: 'Реконструкция очистных сооружений',
		desc: 'Реконструкция и автоматизация очистных сооружений',
		client: 'Заказчик: Винница водоканал',
		link: '/projects/project-14'

	},
	{
		src: '/projects/83f2fbb85aa7d1ecc252c9fa6a0d6026.jpg',
		alt: 'Система химического контроля',
		title: 'Система химического контроля',
		desc: 'Внедрение систем автоматического химического контроля в системе водоснабжения Южной зоны Санкт-Петербурга',
		client: 'Заказчик: Водоканал Санкт-Петербурга',
		link: '/projects/project-15'

	},
	{
		src: '/projects/bca57282db4be33508fee307e8cc707b.png',
		alt: 'Контроль фосфора',
		title: 'Контроль фосфора',
		desc: 'Контроль химического удаления фосфора на очистных сооружениях',
		client: 'Заказчик: «Japan Tobacco»',
		link: '/projects/project-16'

	},
	{
		src: '/projects/93867e86e96c7f8aa80f673b542f2fbf.jpg',
		alt: 'Система контроля качества воды',
		title: 'Система контроля качества воды',
		desc: 'Автоматическая система контроля качества воды Тунгусского водохранилища',
		client: 'Заказчик: Хабаровск водоканал',
		link: '/projects/project-17'

	},
	{
		src: '/projects/afe599e7064218ec0ec4760bcd91c619.png',
		alt: 'Мониторинг pH в сточных водах',
		title: 'Мониторинг pH в сточных водах',
		desc: 'Мониторинг pH в сточных водах различных производств на заводе «Фосфорит»',
		client: 'Заказчик: ООО «Еврохим»; ОАО "Фосфорит"',
		link: '/projects/project-18'

	},
	{
		src: '/projects/016983ea40ae5c28a5d6226a69ed2d86.png',
		alt: 'Оптимизация очистных сооружений',
		title: 'Оптимизация очистных сооружений',
		desc: 'Оптимизация очистных сооружений, мониторинг работ по биоочистке',
		client: 'Заказчик: Завод "Эрманн", Подмосковье',
		link: '/projects/project-19'

	},
	{
		src: '/projects/2776f4bb2aada227458973344dde84e5.png',
		alt: 'Мониторинг ливневых канализационных колодцев',
		title: 'Мониторинг ливневых канализационных колодцев',
		desc: 'Мониторинг ливневых канализационных колодцев и химически загрязненных сточных вод',
		client: 'Заказчик: ООО «Еврохим»; ОАО Невинномысский Азот',
		link: '/projects/project-20'

	},
	{
		src: '/projects/22cf804b837e4db32b49b809d9cfbf71.png',
		alt: 'Реконструкция очистных сооружений',
		title: 'Реконструкция очистных сооружений',
		desc: 'Реконструкция и строительство установок биологической очистки сточных вод',
		client: 'Заказчик: Подольск водоканал',
		link: '/projects/project-21'

	},
	{
		src: '/projects/588167ca7acd6010b5152cb88ae667cb.png',
		alt: 'Модернизация очистных сооружений',
		title: 'Модернизация очистных сооружений',
		desc: 'Автоматизация воздуходувок и модернизация очистных сооружений',
		client: 'Заказчик: Новокузнецк водоканал',
		link: '/projects/project-22'

	},
	{
		src: '/projects/15d62cb7dc8482cf1fc6cbfb79444bb6.png',
		alt: 'Система мониторинга сточных вод',
		title: 'Система мониторинга сточных вод',
		desc: 'Система мониторинга химически загрязненных сточных вод ОАО «Нижнекамскнефтехим»',
		client: 'Заказчик: ПАО Татнефть, Нижнекамск',
		link: '/projects/project-23'

	},
	{
		src: '/projects/08596a0f016c13626106366e757063fe.png',
		alt: 'Контроль сточных вод',
		title: 'Контроль сточных вод',
		desc: 'Контроль сточных вод на водонасосной станции',
		client: 'Заказчик: Мосводоканал',
		link: '/projects/project-24'

	},
	{
		src: '/projects/adc27402b48f223d1a9f824477ed584f.png',
		alt: 'Мониторинг работы аэротенков',
		title: 'Мониторинг работы аэротенков',
		desc: 'Мониторинг работы аэротенков на насосной станции',
		client: 'Заказчик: Фонд Нурманена (Санкт-Петербургский водоканал)',
		link: '/projects/project-25'

	},
	{
		src: '/projects/3dbb9115fe3efc53d2295df0e52afc2f.png',
		alt: 'Автоматизация аэротенковой системы',
		title: 'Автоматизация аэротенковой системы',
		desc: 'Автоматизация аэротенковой системы аэрации на локальной очистной установке «Киришинефтеоргсинтез» (Кинеф)',
		client: 'Заказчик: Сургутнефтегаз (завод Кинеф)',
		link: '/projects/project-26'

	},
	{
		src: '/projects/b675a0a4ec039c44a1f097090e502e7a.png',
		alt: 'рН контроль стоков',
		title: 'рН контроль стоков',
		desc: 'рН контроль стоков на заводе «Капролактам»',
		client: 'Заказчик: СИБУР Нефтехим',
		link: '/projects/project-27'

	},
	{
		src: '/projects/79ded257b12821e43717bad7a0aaf03f.png',
		alt: 'Автоматизация станции аэрации',
		title: 'Автоматизация станции аэрации',
		desc: 'Автоматизация Центральной станции аэрации',
		client: 'Заказчик: Водоканал Санкт-Петербурга',
		link: '/projects/project-28'

	},
	{
		src: '/projects/5aea99cea3d6f92db4c9f0e60f10b5e8.png',
		alt: 'Реконструкция станции аэрации',
		title: 'Реконструкция станции аэрации',
		desc: 'Реконструкция Северной станции аэрации',
		client: 'Заказчик: Водоканал Санкт-Петербурга',
		link: '/projects/project-29'

	}
]

export default function HistoryPage() {
	return (
		<div className="w-full md:w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
			{/* Breadcrumb */}
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link> | <Link href="/services"><span>Проекты</span></Link>
			</div>

			{/* Title */}
			<h1 className="text-3xl sm:text-4xl font-medium mb-6">Проекты</h1>

			{/* Description */}
			<p className="text-primary_text mb-8">
				За 30 лет работы наша компания накопила огромный опыт, как в полном оснащении производственных лабораторий, так и в реализации крупных промышленных проектов, таких как обеспечение бесперебойной работы оборудования в процессах водоподготовки и очистки сточных вод. В данном разделе вы можете ознакомиться с самыми масштабными реализованными проектами.
			</p>

			{/* Project Cards */}
			<div className="container mx-auto py-8">
				<div className="flex flex-wrap justify-between gap-6">
					{projects.map((project, index) => (
						<Link href={project.link} key={index} className="w-full md:w-[48%] lg:w-[30%] flex flex-col mb-6">
							<div className="flex flex-col h-full border rounded-lg shadow-md hover:shadow-lg transition-shadow">
								{/* Image */}
								<div className="relative w-full h-48">
									<Image src={project.src} layout="fill" objectFit="cover" className="rounded-t-lg" alt={project.alt} />
								</div>
								{/* Text Content */}
								<div className="px-4 py-6 flex-grow">
									<h2 className="text-lg font-medium text-center">{project.title}</h2>
									<p className="text-primary_text text-center text-sm mt-2">{project.desc}</p>
									<div className="bg-primary_blue w-1/4 h-1 mx-auto mt-3 rounded-md"></div>
									<p className="text-primary_text text-center text-sm mt-2">{project.client}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
