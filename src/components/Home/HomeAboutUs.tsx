import Image from 'next/image'
import React from 'react'

const HomeAboutUs: React.FC = () => {
    return (
        <div className="container mx-auto px-40 mt-12 text-left">
            <h2 className="text-3xl text-center font-semibold mb-8">Основные направления</h2>
            <div className="relative mb-8">
                <Image
                    src="/home_images/about_us.png"
                    alt="Main Page About Us"
                    width={800}
                    height={400}
                    layout="responsive"
                    className="mx-auto px-10"
                />
            </div>
            <p className="text-lg mb-4">
                &emsp;&emsp;«Экоинструмент - Алматы» - поставщик лабораторных, портативных и промышленных приборов контроля качества водных сред в Казахстане и странах СНГ с 30 летним опытом и репутацией ответственного партнера. Пять офисов компании и широкая дилерская сеть делают доступными современные аналитические технологии для лабораторий любого масштаба и в любой точке страны.
            </p>
            <p className="text-lg mb-8">
                &emsp;&emsp;«Экоинструмент - Алматы» единственный казахстанский производитель готовых тест-наборов для определения ХПК – основного показателя загрязненности вод.
                В сотрудничестве с ведущими проектными и инжиниринговыми компаниями отдел промоборудования ООО &quot;«Экоинструмент - Алматы»&quot; успешно реализует масштабные проекты в области автоматизации экологического контроля, контроля качества питьевой воды и реконструкции очистных сооружений.
            </p>
            <div className="flex flex-wrap justify-around items-baseline mx-24 my-16">
                <div className="flex flex-col items-center justify-start w-1/4">
                    <h3 className="text-4xl font-bold text-blue-500">863</h3>
                    <p className="mt-2 text-lg w-full text-center">Проекта реализовано</p>
                </div>
                <div className="flex flex-col items-center justify-start w-1/4">
                    <h3 className="text-4xl font-bold text-blue-500">6</h3>
                    <p className="mt-2 text-lg w-full text-center">Представительств</p>
                </div>
                <div className="flex flex-col items-center justify-start w-1/4">
                    <h3 className="text-4xl font-bold text-blue-500">544</h3>
                    <p className="mt-2 text-lg w-full text-center">Успешных работ в своей отрасли</p>
                </div>
                <div className="flex flex-col items-center justify-start w-1/4">
                    <h3 className="text-4xl font-bold text-blue-500">19 064</h3>
                    <p className="mt-2 text-lg w-full text-center">Клиента в РФ, ТС, Украине</p>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutUs
