import Image from 'next/image'
import Link from 'next/link'

export default function PHControlPage() {
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
					<li>рН контроль стоков</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">рН контроль стоков</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/b675a0a4ec039c44a1f097090e502e7a.png"
						alt="рН контроль стоков"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2008 г.</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Основными продуктами производства СИБУР-Нефтехим являются этиленоксид, этиленгликоли и др. Эти продукты используются в качестве сырья для нефтехимических и химических предприятий, а также для предприятий других отраслей. Поэтому своевременная нейтрализация сточных вод имеет первостепенное значение. В качестве решения этой масштабной проблемы наши специалисты предложили и успешно реализовали интеграцию датчиков дифференциального pH с автоматической системой очистки.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Такое решение позволило контролировать нейтрализацию сточных вод, а также увеличить интервал обслуживания с одной недели до 6 месяцев и продлить жизненный цикл датчиков на несколько лет.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>СИБУР Нефтехим</div>
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
