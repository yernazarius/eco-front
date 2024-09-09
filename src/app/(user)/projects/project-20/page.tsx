import Image from 'next/image'
import Link from 'next/link'

export default function MonitoringPage() {
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
					<li>Мониторинг ливневых канализационных колодцев</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Мониторинг ливневых канализационных колодцев</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/2776f4bb2aada227458973344dde84e5.png"
						alt="Мониторинг ливневых канализационных колодцев"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2010 - 2014 г.&nbsp;</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					«Невинномысский Азот» - химическая компания, крупнейший производитель азотных удобрений и аммиака в России. Инженеры Экоинструмен - Алматы установили в скважинах датчики азотнокислого и аммонийного азота, рН и органического содержания (ХПК), которые используются для прецизионных анализаторов азота с системами пробоподготовки для химически загрязненных стоков.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Постоянный мониторинг состояния ливневых канализационных колодцев и химически загрязненных стоков в режиме реального времени.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>ООО «Еврохим»; ОАО Невинномысский Азот</div>
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
