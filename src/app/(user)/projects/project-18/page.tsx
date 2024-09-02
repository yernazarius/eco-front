import Image from 'next/image'
import Link from 'next/link'

export default function PhMonitoringPage() {
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
					<li>Мониторинг pH в сточных водах</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Мониторинг pH в сточных водах</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/afe599e7064218ec0ec4760bcd91c619.png"
						alt="Мониторинг pH в сточных водах"
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
					Промышленная группа «Фосфорит» является одним из ведущих производителей фосфорных удобрений и кормовых фосфатов. Перед специалистами нашей компании была поставлена многогранная задача по обеспечению мониторинга стоков различных отраслей на одном заводе. В рамках этого проекта было установлено следующее оборудование: различные цифровые дифференциальные датчики pH, контролирующие автоматическую систему отбора проб для фиксации образцов, превышающих допустимый уровень pH.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Автономный оперативный мониторинг состава сточных вод для всех объектов завода.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>ООО «Еврохим»; ОАО &quot;Фосфорит&quot;</div>
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
