import Image from 'next/image'
import Link from 'next/link'

export default function DrinkingWaterControlPage() {
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
					<li>Контроль питьевой воды</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Контроль питьевой воды</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/129ac476368e5841639cf5255eccc618.jpg"
						alt="Контроль питьевой воды"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2015 г.&nbsp;</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Наши специалисты успешно установили безреагентные датчики для контроля ХПК, датчиков pH, анализаторов железа и цвета, используемые для мониторинга поступающей и очищенной питьевой воды по ряду критических параметров с использованием оборудования с минимальными требованиями к обслуживанию.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					После реализации этого проекта было достигнуто значительное улучшение качества питьевой воды.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Валаамская водопроводная станция</div>
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
