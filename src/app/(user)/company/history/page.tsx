import LaboratoryCards from "@/components/Services/LaboratoryCards"
import VerticalSliderMenu from "@/components/VerticalSliderMenu"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: 'Услуги',
}

export default function HistoryPage() {
	return (

		<div className="md:w-3/4 w-full">
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link> | <Link href="/services"><span>О комании</span></Link> | <Link href="/services"><span>История</span></Link>
			</div>
			<h1 className="text-4xl font-medium mb-6">История</h1>
			<p className='text-primary_text'>В 1993 небольшая группа единомышленников, выходцев с географического факультета МГУ, объединилась для разработки нового иономера – прибора для измерения ионного состава природных вод в целях экологического мониторинга. Проект оказался успешен и вскоре компания открыла свой первый зарубежный офис в Нидерландах, дополнив предлагаемые решения датчиками и анализаторами зарубежного производства. Сохранив первоначальный коллектив профессиональных химиков, метрологов и инженеров до сегодняшнего дня, Экоинструмен - Алматы постоянно развивался, создав и расширяя дилерскую сеть продаж, а также открывая представительства в региональных центрах России и СНГ.
			</p>
			<ul className='pl-6 mt-8 list-disc flex flex-col gap-4'>
				<li>1995 год: офис в Голландии
					<ul>
						<li className='ml-6 text-primary_text mb-1'>Открытие офиса в Голландии и начало сотрудничества с зарубежными производителями аналитического оборудования</li>
					</ul>
				</li>
				<li>1998 год: Создание дилерской сети
					<ul>
						<li className='ml-6 text-primary_text mb-1'>Организация дилерской сети поставок лабораторного оборудования в Российской Федерации					</li>
					</ul>

				</li>
				<li>1999 год:Gorex analyt GmbH
					<ul>
						<li className='ml-6 text-primary_text mb-1'>Открытие представительства в Германии Gorex Analyt GmbH					</li>
					</ul>
				</li>
				<li>2000 год:Экоинструмен - Алматы-Волга
					<ul>
						<li className='ml-6 text-primary_text mb-1'>региональный офис Экоинструмен - Алматы-Волга в Нижнем Новгороде
						</li>

					</ul>
				</li>
				<li>2001 год:Экоинструмен - Алматы-Урал


					<ul>
						<li className='ml-6 text-primary_text mb-1'>региональный офис Экоинструмен - Алматы-Урал в Екатеринбурге
						</li>
					</ul>

				</li>
				<li>2012 год:Экоинструмен - Алматы-Алматы
					<ul>

						<li className='ml-6 text-primary_text mb-1'>представительство в Казахстане Экоинструмен - Алматы-Алматы
						</li>
					</ul>

				</li>
				<li>2013 год:Официальный представитель ключевых производителей
					<ul>

						<li className='ml-6 text-primary_text mb-1'>вывод ключевых производителей лабораторного оборудования на российский рынок
						</li>
					</ul>

				</li>

				<li>2018 год:НК Фонд &quot;Без Рек как без Рук&quot;
					<ul>

						<li className='ml-6 text-primary_text mb-1'>Открытие офиса в Голландии и начало сотрудничества с зарубежными производителями аналитического оборудования</li>
					</ul>

				</li>
				<li>2022 год:Появление торговой марки ECOSTAB
					<ul>

						<li className='ml-6 text-primary_text mb-1'>Регистрация товарного знака ЭКОСТАБ
						</li>
					</ul>

				</li>
			</ul>
		</div>
	)
}
