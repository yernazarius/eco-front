import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceCards: React.FC = () => {
    return (
        <div className="container mx-auto px-40 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ServiceCard
                    imageSrc="/services/bg-image-1.jpeg"
                    title="Умные решения для вашей лаборатории"
                    link="/services/umnye-resheniya-dlya-vashey-laboratorii"
                />
                <ServiceCard
                    imageSrc="/services/bg-image-2.jpeg"
                    title="Сервисное обслуживание ваших приборов"
                    link="/services/servisnoe-obsluzhivanie-vashikh-priborov"
                />
                <ServiceCard
                    imageSrc="/services/bg-image-3.jpeg"
                    title="Промышленные решения ON-LINE"
                    link="/services/promyshlennye-resheniya-on-line"
                />
            </div>
        </div>
    );
};

export default ServiceCards;
