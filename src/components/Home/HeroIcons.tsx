import React from 'react';
import Image from 'next/image';

type FeatureProps = {
    icon: string;
    text: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, text }) => (
    <div className="flex flex-col items-center justify-center w-1/5 px-4">
        <Image src={icon} alt={text} width={65} height={65} />
        <div className="flex items-center justify-center h-16 mt-2">
            <span className="text-center text-lg">{text}</span>
        </div>
    </div>
);

const HeroIcons: React.FC = () => {
    const features = [
        { icon: '/home_images/home_icons/hero-1.png', text: 'Бесплатная онлайн консультация' },
        { icon: '/home_images/home_icons/hero-2.png', text: 'Гарантия на все товары' },
        { icon: '/home_images/home_icons/hero-3.png', text: 'Быстрая отгрузка и доставка' },
        { icon: '/home_images/home_icons/hero-4.png', text: 'Доставка по всей России' },
        { icon: '/home_images/home_icons/hero-5.png', text: 'Поверка СИ' },
    ];

    return (
        <div className="flex flex-wrap justify-around items-center container mx-auto px-16 mt-12">
            {features.map((feature, index) => (
                <Feature key={index} icon={feature.icon} text={feature.text} />
            ))}
        </div>
    );
};

export default HeroIcons;
