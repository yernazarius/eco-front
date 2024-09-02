import Image from 'next/image'
import Link from 'next/link'

export default function WastewaterMonitoringPage() {
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
					<li>Мониторинг сточных вод</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Мониторинг сточных вод</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/6ad2112baf624ab84c09e6b40d55de7e.png"
						alt="Мониторинг сточных вод"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2013&nbsp;г.&nbsp;</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Специалисты нашей компании установили готовый пост для контроля двух потоков очищенных стоков, смонтированный в термоконтейнере с установкой: 2 комбинированных датчиков ХПК, NO<sub>2</sub> и NO<sub>3</sub>, 2 датчика взвешенных веществ, двухканальных анализаторов аммония.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Непрерывный контроль на соответствие требованиям Федерального закона-219.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Новокузнецк водоканал</div>
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
