import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Услуги',
}

export default function ContactsPage() {
    return (
        <div className="container mx-auto">
            <div className="text-sm text-gray-500 my-4">
                <Link href="/"><span>Главная</span></Link>  | <span>Контакты</span>
            </div>
            <h1 className="text-4xl font-medium mb-6">Контактная информация</h1>
            <div className="">
                <div>
                    <h1 className="text-lg font-medium">ТОО «Экоинструмент»</h1>
                    <div className="flex flex-col mt-5 gap-5 w-full">
                        <div className="flex flex-row gap-10 w-full">
                            <p className="w-1/4">Адрес:	</p>
                            <p className="w-1/2">050008, Алматы, улица 24 июня, д 27 оф. 304</p>
                        </div>
                        <div className="flex flex-row gap-10 w-full">
                            <p className="w-1/4">Телефоны:	</p>
                            <p className="w-1/2">+7 (707) 524 68 68</p>
                        </div>
                        <div className="flex flex-row gap-10 w-full">
                            <p className="w-1/4">Эл. почта:	</p>
                            <p className="w-1/2 text-blue-400">info@ecoinstrument.kz</p>
                        </div>
                        <div className="flex flex-row gap-10 w-full">
                            <p className="w-1/4">Сервисный центр:</p>
                            <p className="w-1/2 text-blue-400">service@ecoinstrument.kz</p>
                        </div>
                        <div className="flex flex-row gap-10 w-full">
                            <p className="w-1/4">Режим работы:	</p>
                            <p className="w-1/2">Понедельник–пятница, с 9:00 до 18:00
                                Суббота, Воскресенье — выходной</p>
                        </div>
                    </div>
                    <h1 className="text-red-600 font-medium text-xl mt-10">
                        Почтовый адрес: 050008, г. Алматы, ул. 24 июня, д.27, офис 304. ВСЮ КОРРЕСПОНДЕНЦИЮ НАПРАВЛЯТЬ ПО ДАННОМУ АДРЕСУ!!!
                    </h1>
                    <div>
                        <h4 className="text-3xl font-medium mt-10 mb-4">Уважаемые клиенты!</h4>
                        <p>О своем визите информируйте, пожалуйста, заранее. Для выписки отгрузочных документов, передачи их на склад требуется время.</p>
                        <p>Заявки на выдачу товаров на завтрашний день принимаются до 16:00 московского времени. Заявки, присланные после этого времени могут быть отгружены только через сутки.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
