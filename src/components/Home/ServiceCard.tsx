import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
    imageSrc: string;
    title: string;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, link }) => {
    return (
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg group">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-75">
                <div className="text-center text-white flex-col items-baseline justify-start">
                    <h3 className="text-lg w-3/4 mx-auto font-bold">{title}</h3>
                    <Link href={link}>
                        <div className="mt-2 inline-block px-4 py-2 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition duration-300">Подробнее</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
