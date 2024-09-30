import Image from 'next/image'
import Link from 'next/link'

export default function LabComplexPage() {
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
					<li>Оснащение лаб.комплекса</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Оснащение лаб.комплекса</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/7094b847b66beb3d3b60c2d04352bf3d.png"
						alt="Оснащение лаб.комплекса"
						width={800}
						height={800}
						className="h-full w-full "
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Задача:</h3>
				<p className="mb-4">
					Оснащение лабораторного комплекса контроля качества воды на заводе, производящем напитки на основе воды, добываемой непосредственно из реликтовых озер.
				</p>
				<h3 className="font-semibold mb-2">Реализация:</h3>
				<p className="mb-4">
					Основным лабораторным оборудованием для контроля физико-химических параметров воды являются спектрофотометры, а также электрохимические приборы от Hanna Instruments и WTW. Задачи контроля качества для ПЭТ-тары решались с помощью испытательного оборудования AGR, а такие параметры, как содержание сахара в напитках на заключительном этапе контроля, выполняются на устройствах всемирно известных производителей: Anton Paar, Bellingham и Stanley.
				</p>
				<p className="mb-4">
					Особое внимание следует уделить первоклассной микробиологической лаборатории, оснащенной самыми современными анализаторами и вспомогательным оборудованием для обнаружения патогенных микробов в воде. Специалисты ««Экоинструмент - Алматы»» использовали имеющийся опыт отечественной науки и самые передовые технологии зарубежных производителей, что позволило строго контролировать микробиологический фон в процессе производства и вплоть до упаковки продуктов.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Завод &quot;Акваника&quot;</div>
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
