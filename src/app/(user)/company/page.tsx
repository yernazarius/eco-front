import LaboratoryCards from "@/components/Services/LaboratoryCards"
import VerticalSliderMenu from "@/components/VerticalSliderMenu"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: 'Услуги',
}

export default function AboutCompanyPage() {
	return (

		<div className="md:w-3/4 w-full">
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link>  | <Link href="/services"><span>О комании</span></Link>
			</div>
			<h1 className="text-4xl font-medium mb-6">О компании</h1>
			<p>Наша компания была создана в 1993 г. сотрудниками географического факультета Московского Государственного Университета им. М.В. Ломоносова, основной сферой научных интересов которых были экологический мониторинг и оценка вредного воздействия на окружающую среду</p>
			<p className='mt-6'>Это сказалось на всей последующей деятельности компании: мы всегда были ориентированы на качественные и надежные приборы, показаниям которых можно доверять и при проведении измерений в экстремальных условиях. Именно наша компания вывела на российский рынок такие известные мировые марки, как HANNA Instruments, HACH-Lange, WTW, Eijkelkamp, KERN, Haws, GSSI и другие.</p>
			<p className='mt-6'>На протяжении всех лет компания динамично росла и развивалась, но неизменным оставалось наше стремление не только поставлять клиентам качественное аналитическое оборудование, но и обеспечить надлежащий сервис, обучение и методическую поддержку. К услугам наших клиентов: оперативный склад, сеть региональных представительств, сервисный центр, квалифицированные и внимательные менеджеры.</p>
			<p className='mt-6'>
				ООО «ЭКОИНСТРУМЕНТ» - поставщик лабораторных, портативных и промышленных приборов контроля качества водных сред в России и странах СНГ с более чем 30-летним опытом и репутацией ответственного партнера. Пять офисов компании и широкая дилерская сеть делают доступными современные аналитические технологии для лабораторий любого масштаба и в любой точке страны.</p>
			<h3 className='text-center text-3xl font-medium my-12'>ООО «ЭКОИНСТРУМЕНТ» - российский производитель готовых тест-кювет для определения ХПК – основного показателя загрязнённости вод.</h3>
			<p className='mt-6'>В сотрудничестве с ведущими проектными и инжиниринговыми компаниями отдел промоборудования ООО &quot;ЭКОИНСТРУМЕНТ&quot; успешно реализует масштабные проекты в области автоматизации экологического контроля, контроля качества питьевой воды и реконструкции очистных сооружений.</p>
			<h3 className=' text-3xl font-medium my-8'>Основные направления деятельности:</h3>
			<ul>
				<li>- поставка и обслуживание аналитического оборудования от ведущих зарубежных и лучших российских производителей</li>
				<li>- комплексное оснащение лабораторий</li>
				<li>- подготовка и содействие в аккредитации лабораторий</li>
				<li>- разработка и поставка передвижных лабораторий</li>
				<li>- поставка оборудования для контроля и управления промышленными процессами</li>
				<li>- сертификация, сервисное обслуживание и техническая поддержка приборов</li>
				<li>- пуско-наладка оборудования</li>
				<li>- методическое сопровождение и консультации</li>
			</ul>
			<h3 className=' text-3xl font-medium mt-6'>Почему мы:</h3>
			<ul className='list-disc pl-8 mt-4'>
				<li >Качественные товары по доступным ценам. Мы делаем их недорогими и качественными, чтобы они удовлетворяли потребности всех наших клиентов. Компания работает над дизайном продукции, учитывая потребности клиентов.
				</li>
				<li>Мы за экологичность. Развивая наш бизнес, мы стремимся оказывать положительное влияние на экологию нашей планеты.
				</li>
				<li>Компания развивается вместе с людьми. Наши сотрудники играют важную роль в развитии компании. Мы видим талант и стараемся раскрыть потенциал каждого.
				</li>
			</ul>


		</div>

	)
}
