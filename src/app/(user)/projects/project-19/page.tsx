import Image from 'next/image'
import Link from 'next/link'

export default function OptimizationPage() {
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
					<li>Оптимизация очистных сооружений</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Оптимизация очистных сооружений</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/016983ea40ae5c28a5d6226a69ed2d86.png"
						alt="Оптимизация очистных сооружений"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2011 г.&nbsp;</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Для оптимизации работы было решено установить промышленные анализаторы растворенного кислорода и фосфора. В рамках проекта была произведена необходимая замена неработающих кислородных датчиков Endress + Hauser и установка системы контроля фосфатов также в иловой смеси аэротенков локальных очистных сооружений. Первые недели эксплуатации анализатора фосфатов показали очень хорошую конвергенцию результатов промышленного и лабораторного мониторинга фосфатов. Промышленный анализатор проводит измерения каждые 10 минут (около 140 измерений в день), что гарантирует детальный мониторинг процесса и точную дозировку хлорида железа.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Снижение затрат на аэрацию и защиту от штрафов со стороны регулирующих органов.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Завод &quot;Эрманн&quot;, Подмосковье</div>
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
