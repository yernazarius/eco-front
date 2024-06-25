import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Услуги',
}

export default function Services_Proizvodstvennye_Laboratorii_Page() {
    return (
        <div className="container mx-auto px-20 mt-10">
            <div className="text-sm text-gray-500 my-4">
                <Link href="/"><span>Главная</span></Link>  | <Link href="/services"><span>Услуги</span></Link> | <Link href="/services/umnye-resheniya-dlya-vashey-laboratorii"><span>Умные решения для вашей лаборатории</span></Link> | <span>Производственные лаборатории</span>
            </div>
            <div className="flex flex-row justify-between gap-8">
                <img src="/services/umnye-resheniya-dlya-vashey-laboratorii/prod_labs.jpeg" alt="Производственные лаборатории" className="h-full w-full" />
                <div className="">
                    <h1 className="text-4xl font-medium mb-6">Производственные лаборатории</h1>
                    <p>Мы предлагаем решения для комплексного оснащения производственных лабораторий, под ваш бюджет и задачи.</p>
                </div>
            </div>
            <div className="container mx-auto py-8">
                <div className="bg-gray-100 p-4 rounded-t-lg">
                    <h2 className="text-lg font-semibold">Описание</h2>
                </div>
                <div className="bg-white p-6 rounded-b-lg shadow-lg">
                    <p className="mb-6">
                        Мы знаем, как важна работа на производстве. За годы работы мы накопили
                        большой опыт в оснащении лабораторий с различных сферах производства,
                        поэтому можем предложить как готовые решения, так и разработать
                        специальный проект под цели и задачи клиента.
                    </p>
                    <h3 className="text-xl font-semibold mb-4">Как мы работаем</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Обсуждение целей клиента</li>
                        <li>Согласование аналитических задач лаборатории</li>
                        <li>
                            Разработка или согласование индивидуального плана лаборатории
                        </li>
                        <li>
                            Подбор оборудования, расходных материалов и мебели в соответствии с
                            задачами лаборатории и бюджетом клиента
                        </li>
                        <li>
                            Поверка оборудования, если есть такая необходимость
                        </li>
                        <li>Оплата и доставка</li>
                        <li>Пусконаладочные работы и обучение</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-8 mb-4">Что вы получаете</h3>
                    <p>
                        Подобный комплексный подход позволяет сэкономить ваше время и избавить
                        от лишних поисков необходимого оборудования у разных продавцов. Вы
                        получаете полностью оборудованную, готовую к работе лабораторию,
                        отвечающую задачам вашего производства.
                    </p>
                </div>
            </div>
        </div >
    )
}
