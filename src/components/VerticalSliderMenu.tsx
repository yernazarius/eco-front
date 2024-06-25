import React from 'react';
import Link from 'next/link';

const VerticalSliderMenu: React.FC = () => {
    return (
        <div className="w-full md:w-1/4 p-3 mr-4  borter-t">
            <ul className="space-y-2">
                <li>
                    <Link href="/services/verification-measurement">
                        <div className="block text-gray-700 hover:bg-primary_blue hover:text-white px-4 py-2 rounded transition duration-300">Поверка средств измерений</div>
                    </Link>
                </li>
                <li>
                    <Link href="/services/faq-equipment">
                        <div className="block text-gray-700 hover:bg-primary_blue hover:text-white px-4 py-2 rounded transition duration-300">FAQ оборудование</div>
                    </Link>
                </li>
                <li>
                    <Link href="/services/electronic-brochures">
                        <div className="block text-gray-700 hover:bg-primary_blue hover:text-white px-4 py-2 rounded transition duration-300">Электронные брошюры</div>
                    </Link>
                </li>
                <li>
                    <Link href="/services/quality-certificates">
                        <div className="block text-gray-700 hover:bg-primary_blue hover:text-white px-4 py-2 rounded transition duration-300">Паспорта качества</div>
                    </Link>
                </li>
                <li>
                    <Link href="/services/smart-solutions-labs">
                        <div className="block text-gray-700 hover:bg-primary_blue hover:text-white px-4 py-2 rounded transition duration-300">Умные решения для вашей лаборатории</div>
                    </Link>
                </li>
                <li>
                    <Link href="/services/service-maintenance">
                        <div className="block text-gray-700 hover:bg-primary_blue hover:text-white px-4 py-2 rounded transition duration-300">Сервисное обслуживание ваших приборов</div>
                    </Link>
                </li>
                <li>
                    <Link href="/services/online-industrial-solutions">
                        <div className="block text-gray-700 hover:bg-primary_blue hover:text-white px-4 py-2 rounded transition duration-300">Промышленные решения ON-LINE</div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default VerticalSliderMenu;
