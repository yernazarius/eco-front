import Image from 'next/image'
import Link from 'next/link'

export default function ChlorineTurbidityMonitoringPage() {
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
					<li>Мониторинг хлора и мутности</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Мониторинг хлора и мутности</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/74f355cd4cb0200659934cf00a9fb837.jpg"
						alt="Мониторинг хлора и мутности"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2017 г.&nbsp;</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Специалисты нашей компании нашли решение для устранения проблемы качества питьевой воды: разработка и установка нескольких сетей станций контроля мутности и хлора с беспроводной GSM-связью на основе датчиков мутности&nbsp;и общего остаточного хлора.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Обеспечен постоянный контроль качества питьевого водоснабжения жителей Москвы.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Мосводоканал</div>
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
