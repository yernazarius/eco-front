import Image from 'next/image'
import Link from 'next/link'

export default function AerationTankUpgradePage() {
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
					<li>Оборудование для модернизации аэротенков</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Оборудование для модернизации аэротенков</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/78953f53dad41c38984be47dca36825b.jpg"
						alt="Оборудование для модернизации аэротенков"
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
					В качестве решения для модернизации наши инженеры поставили и установили следующий комплекс оборудования: 8 оптических кислородных датчиков с автоматической системой очистки, 2 дифференциальных датчика pH и 2 датчика концентрации осадка&nbsp;в одной измерительной сети на базе контроллера.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Такая модернизация позволила вернуть качество сточных вод к требуемым стандартам качества.
				</p>
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
