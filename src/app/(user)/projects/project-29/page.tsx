import Image from 'next/image'
import Link from 'next/link'

export default function AerationStationReconstructionPage() {
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
					<li>Реконструкция станции аэрации</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Реконструкция станции аэрации</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/5aea99cea3d6f92db4c9f0e60f10b5e8.png"
						alt="Реконструкция станции аэрации"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2007-2008 г.</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Крупнейшая очистная станция Санкт-Петербурга в поселке Ольгино была оснащена: 32 датчиками кислорода для аэротенков, 6 анализаторами аммония и фосфатов в очищенной воде, датчиками взвешенных веществ для всех стадий очистки, 12 датчиками уровня ила для резервуаров вторичного отстаивания, автоматическими пробоотборниками.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Установка данного оборудования привела к снижению энергозатрат на аэрацию и перекачку осадка, улучшение качества очистки.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Водоканал Санкт-Петербурга</div>
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