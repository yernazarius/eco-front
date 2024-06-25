import LaboratoryCards from "@/components/Services/LaboratoryCards";
import VerticalSliderMenu from "@/components/VerticalSliderMenu";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Услуги',
}

export default function Services_Umnye_Resheniya_Page() {
    return (

        <div className="md:w-3/4 w-full">
            <div className="text-sm text-gray-500 my-4">
                <Link href="/"><span>Главная</span></Link>  | <Link href="/services"><span>Услуги</span></Link> | <span>Умные решения для вашей лаборатории</span>
            </div>
            <h1 className="text-4xl font-medium mb-6">Умные решения для вашей лаборатории</h1>
            <p>Сотрудники нашей компании имеют огромный опыт работы, что позволяет им понимать тонкую специфику запросов клиента.
                Опираясь на это, они способны предложить оптимальные решения, как и при покупке одного вида оборудования,
                так и при комплексном оснащении лабораторий. Исходя из поставленных задач, они способны подобрать лучшие варианты,
                в рамках потребностей и бюджета клиента, чтоб сделать работу его лабораторий продуктивной, комфортной и точной.</p>

            <LaboratoryCards />
        </div>

    )
}
