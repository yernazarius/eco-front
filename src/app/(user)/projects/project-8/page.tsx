import Image from 'next/image'
import Link from 'next/link'

export default function DrinkingWaterMonitoringPage() {
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
						<Link href="/projects/proizvodstvennye-proekty/" className="hover:underline">
							Промышленные проекты
						</Link>
					</li>
					<li> / </li>
					<li>Оборудование для контроля питьевой воды</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Оборудование для контроля питьевой воды</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/28e707f4567f89bb8abf50c66490b574.jpg"
						alt="Оборудование для контроля питьевой воды"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2016 г.&nbsp;</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Наши специалисты могут предложить различные решения для очистки и контроля качества питьевой воды, всегда адаптируясь к условиям клиента. В рамках этого проекта на новой установке очистки питьевой воды были установлены: датчики мутности, цвета воды, диоксида хлора, pH, анализаторы щелочности и алюминия, ультрафиолетовые датчики органического материала с пересчетом на ХПК-Mn.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Был обеспечен постоянный контроль качества питьевой воды.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Водоканал села Нюксеница</div>
			</div>

			<div className="mt-8">
				<Link href="/projects/" className="inline-flex items-center text-primary_blue hover:underline">
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
