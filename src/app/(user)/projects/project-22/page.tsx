import Image from 'next/image'
import Link from 'next/link'

export default function ModernizationPage() {
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
					<li>Модернизация очистных сооружений</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Модернизация очистных сооружений</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/588167ca7acd6010b5152cb88ae667cb.png"
						alt="Модернизация очистных сооружений"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2009 - 2013 г.&nbsp;</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Работы проводились поэтапно: первый этап - автоматизация воздуходувок с установкой 20 датчиков растворенного кислорода; Второй этап - установка постов для мониторинга сточных вод на КНС и на входе в очистные сооружения. Настройка датчиков взвеси, датчиков ХПК, анализаторов аммония, анализаторов фосфатов.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					После установки контрольного поста для двух потоков сточных вод эффективность очистки сточных вод была повышена.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Новокузнецк водоканал</div>
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
