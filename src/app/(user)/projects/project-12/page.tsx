import Image from 'next/image'
import Link from 'next/link'

export default function WastewaterEcomonitoringPage() {
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
					<li>Экомониторинг сточных вод</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Экомониторинг сточных вод</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/dbebd546109da31665f82e14170e2850.jpg"
						alt="Экомониторинг сточных вод"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2013 - 2015 г.&nbsp;</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					АрселорМиттал Кривой Рог — металлургический завод, крупнейшее металлургическое предприятие Украины. Установка постов автономного мониторинга окружающей среды для мониторинга очищенных сточных вод по следующим показателям: рН, ХПК, общее содержание железа, хлоридов, взвешенных веществ, нефтепродуктов. Станция №1 — Река Ингулец. Станция №2 — водозаборный канал на реке Ингулец.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Установка этих автономных постов позволила проводить постоянный мониторинг качества сточных вод, что привело к снижению процента загрязнения реки.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>ПАО &quot;АрселорМиттал&quot;, Кривой Рог</div>
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
