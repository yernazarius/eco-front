import Image from 'next/image'
import Link from 'next/link'

export default function ProjectPage() {
	return (
		<div className="md:w-3/4 w-full">

			<div className="text-sm text-gray-500 my-4">
				<ol className="flex space-x-2">
					<li>
						<Link href="/" className="hover:underline">
							Главная
						</Link>
					</li>
					<li> / </li>
					<li>
						<Link href="/projects/" className="hover:underline">
							Проекты
						</Link>
					</li>
					<li> / </li>
					<li>
						<Link href="/projects/it-proekty/" className="hover:underline">
							Лабораторные проекты
						</Link>
					</li>
					<li> / </li>
					<li>Оснащение завода напитков</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Оснащение завода напитков</h1>

			<div className="mb-8">
				<div className="relative w-full h-96 mb-4">
					<Image
						src="/projects/svyatoi_istichnik.jpg"
						alt="Оснащение завода напитков"
						fill
						className="rounded"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Задача:</h3>
				<p className="mb-4">
					Оснащение лаборатории от мебели до аналитических приборов на заводе по производству питьевой воды и напитков &quot;Святой источник&quot;.
				</p>
				<h3 className="font-semibold mb-2">Реализация:</h3>
				<p>
					ЭКОИНСТРУМЕНТ выиграл конкурс и был выбран генеральным поставщиком лабораторного оборудования для нового завода, строящегося под Дмитровом в Подмосковье. Проект предусматривает поставку аналитических и вспомогательных приборов, а также расходных материалов для контроля качества продукции и упаковки. Лаборатория оснащена спектрофотометрами, титраторами, pH-метрами, весами ведущих мировых компаний, а также мебелью, вытяжным шкафом. Кроме того, заключен договор на поставку реактивов и микробиологических сред на один год работы.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Завод &quot;Святой источник&quot;</div>
			</div>

			<div className="mt-8 ">
				<Link href="/projects/" className='inline-flex items-center text-primary_blue  hover:underline'>
					<svg
						className="w-4 h-4 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Вернуться
				</Link>
			</div>
		</div>


	)
}
