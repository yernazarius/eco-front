// components/LaboratoryCards.tsx
import React from 'react';
import Link from 'next/link';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, link }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="w-full md:w-1/3">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-600 mt-4">{description}</p>
                </div>
                <Link className='mt-4' href={link}>
                    <div className="inline-block px-4 py-2 border border-blue-500 text-black font-normal  hover:bg-blue-500 hover:text-white transition duration-300 mt-4 md:mt-0 self-start">
                        Подробнее
                    </div>
                </Link>
            </div>
        </div>
    );
};

const LaboratoryCards: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Card
                imageSrc="/services/umnye-resheniya-dlya-vashey-laboratorii/prod_labs.jpeg"
                title="Производственные лаборатории"
                description="Мы предлагаем решения для комплексного оснащения производственных лабораторий, под ваш бюджет и задачи."
                link="/services/umnye-resheniya-dlya-vashey-laboratorii/proizvodstvennye-laboratorii"
            />
            <Card
                imageSrc="/services/umnye-resheniya-dlya-vashey-laboratorii/lab-water.jpeg"
                title="Лаборатории контроля сточных вод"
                description="Мы предлагаем универсальное решение, подходящее для любой лаборатории очистных сооружений, и, в то же время, легко адаптирующееся под конкретные требования."
                link="/services/umnye-resheniya-dlya-vashey-laboratorii/laboratorii-kontrolya-kachestva-stochnykh-vod"
            />
        </div>
    );
};

export default LaboratoryCards;
