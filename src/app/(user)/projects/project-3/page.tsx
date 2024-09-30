import Image from 'next/image'
import Link from 'next/link'

export default function LabProjectPage() {
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
					<li>Проект лабораторного комплекса</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Проект лабораторного комплекса</h1>

			<div className="mb-8">
				<div className="relative w-2/3 mx-auto mb-4">
					<Image
						src="/projects/cf34cf363a11251c9b95e36e02f45288.png"
						alt="Проект лабораторного комплекса"
						width={1000}
						height={1000}
						className="rounded"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Задача:</h3>
				<p className="mb-4">
					Проект по строительству лабораторного комплекса на маслоэкстракционном заводе Каргилл.
				</p>
				<h3 className="font-semibold mb-2">Реализация:</h3>
				<p className="mb-4">
					Специалисты «Экоинструмент - Алматы» оснастили лаборатории завода Каргилл оборудованием, необходимым для всестороннего контроля всех технологических процессов производства, строгого контроля всей производственной цепочки, а также для хранения реагентов и других лабораторных материалов и инструментов.
				</p>
				<p className="mb-4">
					Соответствующие условия были предоставлены для проведения экспериментов и исследований, начиная с получения сырья и заканчивая выпуском готовой продукции; проверка соответствия требованиям к качеству материалов, сырья, полуфабрикатов и готовой продукции на соответствие техническим требованиям, органолептическим и физико-химическим требованиям стандартов; обеспечение полноты и точности анализа, достоверности, объективности и точности результатов.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>ООО &quot;КАРГИЛЛ&quot;</div>
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
