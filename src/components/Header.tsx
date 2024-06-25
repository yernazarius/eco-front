import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="container mx-auto px-20">
            <div className="flex justify-between items-center p-4 bg-gray-100">
                <a href="#" className="mr-6 text-blue-500 underline">Заказать звонок</a>
                <div className='flex justify-between w-1/4'>
                    <a href="#" className="text-red-500">Проезд на склад</a>
                    <a href="#" className="text-gray-500">RU</a>
                    <a href="#" className="text-gray-500">EN</a>
                </div>

            </div>


            <div className="flex justify-between items-center py-4 ">
                <Link href='/' className="flex items-center">
                    <Image width={280} height={56} src="/logo.png" alt="Logo" className="h-12 mr-4" />

                </Link>
                <div className="flex items-center space-x-4">

                    <div className="flex items-baseline flex-col text-lef justify-center">
                        <a href="tel:+74957452290" className="text-gray-700">+7 (495) 745 22 90</a>
                        <a href="mailto:mail@ecoinstrument.ru" className="ml-2 text-blue-500">mail@ecoinstrument.ru</a>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Задать вопрос</button>
                </div>
            </div>
            <nav className="flex justify-around  py-2 border-y ">
                <a href="#" className="text-gray-700">Компания</a>
                <Link href="/products" className="text-gray-700">Продукция</Link>
                <Link href="/blog" className="text-gray-700">Новости</Link>
                <a href="#" className="text-gray-700">Контакты</a>

            </nav>
        </header>
    );
};

export default Header;
