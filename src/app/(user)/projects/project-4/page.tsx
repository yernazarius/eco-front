import Image from 'next/image'
import Link from 'next/link'

export default function ChlorineControlOptimizationPage() {
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
					<li>Оптимизация контроля хлора</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Оптимизация контроля хлора</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/0c386f961d5f64349445366a252d62c4.jpg"
						alt="Оптимизация контроля хлора"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">
					2017 г.&nbsp;
				</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Анализатор хлора, панель управления хлором, датчики мутности Solitax, контроллер, всего 9 комплектов были поставлены для контроля общего остаточного, свободного остаточного хлора и мутности на 9 насосных станциях с передачей информации в центр управления.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Оптимизация процесса контроля общего остаточного, свободного остаточного хлора и мутности позволила повысить эффективность очистки сточных вод.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Новосибирск водоканал</div>
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
