import Image from 'next/image'
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Услуги',
}

const projects = [
    {
        src: '/services/servisnoe/img_1.jpeg',
        title: 'Сервисное обслуживание',
        button_text: 'Подробнее',
        link: '/services/servisnoe-obsluzhivanie-vashikh-priborov/servisnoe-obsluzh'
    },
    {
        src: '/services/servisnoe/img_1.jpeg',
        title: 'Метрологическая и методическая поддержка',
        button_text: 'Подробнее',
        link: '/services/servisnoe-obsluzhivanie-vashikh-priborov/certificate'
    },
]

export default function Services_Servisnoe_Obsluzhivanie_Page() {
    return (
        <div className="w-full md:w-3/4 mx-auto px-8 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 my-4">
                <Link href="/"><span>Главная</span></Link>  | <Link href="/services"><span>Услуги</span></Link> | <span>Сервисное обслуживание ваших приборов</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-medium mb-6">Сервисное обслуживание ваших приборов</h1>

            {/* Description */}
            <p className="text-primary_text mb-8">
                Основная миссия ТОО «Экоинструмент - Алматы» в первую очередь связана с тем, чтобы нашим клиентам было комфортно и приятно работать с оборудованием ведущих производителей лабораторных и промышленных аналитических приборов. Именно поэтому наш Сервисный центр всегда готов предоставить всю необходимую техническую, методическую и метрологическую поддержку оборудования, расходные материалы, обучение, гарантийный послегарантийный ремонт и договор на обслуживание. Наши высококвалифицированные опытные инженеры помогут и выполнят для вас все возможные виды работ: от замены батарей, до монтажа и капитального переоснащения промышленных объектов.
            </p>

            {/* Project Cards */}
            <div className="container mx-auto py-8">
                <div className="flex flex-wrap justify-between gap-4">
                    {projects.map((project, index) => (
                        <Link href={project.link} key={index} className="w-full md:w-[48%] lg:w-[30%] flex flex-col mb-6">
                            <div className="flex flex-col h-full">
                                {/* Image */}
                                <div className="relative w-full h-48">
                                    <Image src={project.src} layout="fill" objectFit="cover" className="rounded" alt={project.title} />
                                </div>
                                {/* Text Content */}
                                <div className="px-2 flex flex-col flex-grow pb-8">
                                    <h2 className="text-center font-medium mt-5 mb-2">{project.title}</h2>
                                    <div className="mt-auto text-center">
                                        <button className="border border-primary_blue px-4 py-2 rounded-sm">{project.button_text}</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
