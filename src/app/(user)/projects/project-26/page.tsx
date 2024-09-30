import Image from 'next/image'
import Link from 'next/link'

export default function AerationSystemAutomationPage() {
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
					<li>Автоматизация аэротенковой системы</li>
				</ol>
			</div>
			<h1 className="text-4xl font-medium mb-6">Автоматизация аэротенковой системы</h1>

			<div className="mb-8">
				<div className="relative w-1/2 mb-4 mx-auto">
					<Image
						src="/projects/3dbb9115fe3efc53d2295df0e52afc2f.png"
						alt="Автоматизация аэротенковой системы"
						width={800}
						height={800}
						className="h-full w-full"
					/>
				</div>
			</div>

			<div className="text-lg text-justify">
				<h3 className="font-semibold mb-2">Сроки:</h3>
				<p className="mb-4">2008 - 2010 г.&nbsp;</p>
				<h3 className="font-semibold mb-2">Описание:</h3>
				<p className="mb-4">
					Деятельность холдинга Сургутнефтегаз охватывает всю технологическую цепочку от геологоразведки и добычи углеводородного сырья до его переработки. Инженеры «Экоинструмент - Алматы» обеспечили установку 14 цифровых оптических датчиков кислорода для контроля подачи сжатого воздуха в аэротенки в присутствии сульфидов и нефтепродуктов.
				</p>
				<h3 className="font-semibold mb-2">Результат:</h3>
				<p>
					Оптимизация рабочего процесса системы аэрации и снижение эксплуатационных расходов.
				</p>
			</div>

			<div className="mt-8">
				<div className="font-semibold">Заказчик:</div>
				<div>Сургутнефтегаз (завод Кинеф)</div>
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
