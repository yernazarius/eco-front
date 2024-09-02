import Image from 'next/image'
import Link from 'next/link'

export default function PhosphorusControlPage() {
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
					<li>Контроль фосфора</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Контроль фосфора</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/bca57282db4be33508fee307e8cc707b.png"
						alt="Контроль фосфора"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2012 г.&nbsp;</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Специалисты нашей компании установили систему контроля фосфатов в частично очищенных сточных водах для автоматической дозировки коагулянта на локальные очистные сооружения. Уже первые недели работы анализатора фосфатов показали очень хорошую сходимость результатов промышленного и лабораторного контроля содержания фосфатов. Промышленный анализатор проводит измерения каждые 10 минут или около 140 измерений в день, что обеспечивает подробный мониторинг процесса и точную дозировку хлорида железа в автоматическом режиме.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Значительное (более 20%) снижение потребления коагулянта, выравнивание ситуаций пиковых разрядов.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>«Japan Tobacco»</div>
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
