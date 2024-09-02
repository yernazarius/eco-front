import Image from 'next/image'
import Link from 'next/link'

export default function AutonomousMonitoringPostPage() {
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
					<li>Автономный пост мониторинга</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Автономный пост мониторинга</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/6a92ebac2722770bf48f5e03d110344d.jpg"
						alt="Автономный пост мониторинга"
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
					Для автономного контрольного дренажного поста с питанием от батареи и беспроводной системой передачи данных наши инженеры установили в скважине следующее контрольное оборудование: датчик органического излучения, датчик нефтепродукта, датчик суспензий, датчики pH и проводимости.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					После установки контрольного поста повысилась эффективность очистки сточных вод и достигнут высочайший уровень оценки качества очистки.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Очистные сооружения Мосводоканала</div>
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
