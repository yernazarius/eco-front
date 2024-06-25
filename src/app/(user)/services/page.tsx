import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Услуги',
}

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-20 mt-10">
            <div className="text-sm text-gray-500 my-4">
                <Link href="/"><span>Главная</span></Link>  | <span>Услуги</span>
            </div>
            <h1 className="text-4xl font-medium mb-6">Каталог услуг</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/services/umnye-resheniya-dlya-vashey-laboratorii">
                    <div className="relative group overflow-hidden">
                        <img
                            src="/services/bg-image-1.jpeg"
                            alt="Умные решения для вашей лаборатории"
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
                        />
                        <div className="absolute bottom-0 bg-gray-800 bg-opacity-75 text-white p-2 w-full text-center">
                            Умные решения для вашей лаборатории
                        </div>
                    </div>
                </Link>
                <Link href="/services/servisnoe-obsluzhivanie-vashikh-priborov">
                    <div className="relative group overflow-hidden">
                        <img
                            src="/services/bg-image-2.jpeg"
                            alt="Сервисное обслуживание ваших приборов"
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
                        />
                        <div className="absolute bottom-0 bg-gray-800 bg-opacity-75 text-white p-2 w-full text-center">
                            Сервисное обслуживание ваших приборов
                        </div>
                    </div>
                </Link>
                <Link href="/services/promyshlennye-resheniya-on-line">
                    <div className="relative group overflow-hidden">
                        <img
                            src="/services/bg-image-3.jpeg"
                            alt="Промышленные решения ON-LINE"
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
                        />
                        <div className="absolute bottom-0 bg-gray-800 bg-opacity-75 text-white p-2 w-full text-center">
                            Промышленные решения ON-LINE
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
