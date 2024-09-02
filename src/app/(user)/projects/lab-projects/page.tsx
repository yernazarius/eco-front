import Image from 'next/image'
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: 'Проекты',
}

const projects = [
	{
		src: '/projects/svyatoi_istichnik.jpg',
		alt: 'Оснащение завода напитков',
		title: 'Оснащение завода напитков',
		desc: 'Лаборатория контроля качества на заводе по производству питьевой воды "Святой источник"',
		client: 'Заказчик: Завод "Святой источник"',
		link: '/projects/project-1'
	},
	{
		src: '/projects/7094b847b66beb3d3b60c2d04352bf3d.png',
		alt: 'Оснащение лаб.комплекса',
		title: 'Оснащение лаб.комплекса',
		desc: 'Оснащение лабораторного комплекса контроля качества воды',
		client: 'Заказчик: Завод "Акваника"',
		link: '/projects/project-2'

	},
	{
		src: '/projects/cf34cf363a11251c9b95e36e02f45288.png',
		alt: 'Проект лабораторного комплекса',
		title: 'Проект лабораторного комплекса',
		desc: 'Проект по строительству лабораторного комплекса',
		client: 'Заказчик: ООО "КАРГИЛЛ"',
		link: '/projects/project-3'

	},

]

export default function HistoryPage() {
	return (
		<div className="md:w-3/4 w-full">
			<div className="text-sm text-gray-500 my-4">
				<Link href="/"><span>Главная</span></Link> | <Link href="/services"><span>Проекты</span></Link>
			</div>
			<h1 className="text-4xl font-medium mb-6">Лабораторные проекты
			</h1>
			<p className='text-primary_text'>
				За 30 лет работы наша компания накопила огромный опыт, как в полном оснащении производственных лабораторий, так и в реализации крупных промышленных проектов, таких как обеспечение бесперебойной работы оборудования в процессах водоподготовки и очистки сточных вод. В данном разделе вы можете ознакомиться с самыми масштабными реализованными проектами.
			</p>
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-wrap gap-3 space-x-4">
					{projects.map((project, index) => (
						<Link href={project.link} key={index} className='border w-[30%] flex flex-col mb-6'>
							<div className='flex flex-col h-full'>
								<div className="relative w-full h-48">
									<Image src={project.src} layout="fill" objectFit="cover" className="rounded" alt={project.alt} />
								</div>
								<div className='px-2 pb-12'>
									<h2 className='text-center font-medium mt-5'>{project.title}</h2>
									<p className='text-primary_text text-center text-sm mt-2'>{project.desc}</p>
									<div className='bg-primary_blue w-1/4 h-[.2rem] mx-auto mt-3 rounded-md'></div>
									<p className='text-primary_text text-center text-sm mt-2'>{project.client}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
