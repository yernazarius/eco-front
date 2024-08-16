"use client"
import AdminManage from '@/components/Admin/AdminManage'
import Loader from '@/components/Loader'
import { useProfile } from '@/hooks/useProfile'
import { useState } from 'react'

export default function AdminPage() {
    const { data, isLoading } = useProfile()
    console.log(data)

    const [errorText, setErrorText] = useState('')
    const paths = [
        {
            category: "catalog", items: [
                { title: "Создать каталог", desc: "Управляйте созданием каталога", link: "create-category" },
                { title: "Удалить каталог", desc: "Управляйте удалением каталога", link: "delete-category" },
                { title: "Обновить каталог", desc: "Управляйте обновлением каталога", link: "update-category" },
            ]
        },
        {
            category: "product", items: [
                { title: "Создать продукт", desc: "Управляйте созданием продукта", link: "create-product" },
                { title: "Удалить продукт", desc: "Управляйте удалением продукта", link: "delete-product" },
                { title: "Обновить продукт", desc: "Управляйте обновлением продукта", link: "update-product" },
            ]
        },
        {
            category: "blog", items: [
                { title: "Добавить блог", desc: "Управляйте добавлением блога", link: "create-blog" },
                { title: "Удалить блог", desc: "Управляйте удалением блога", link: "delete-blog" },
                { title: "Обновить блог", desc: "Управляйте обновлением блога", link: "update-blog" },
            ]
        },
        {
            category: "header elements", items: [
                { title: "Добавить элемент в шапку", desc: "Управляйте добавлением элементов в шапку", link: "create-header-tab" },
                { title: "Удалить элемент из шапки", desc: "Управляйте добавлением элементов в шапку", link: "delete-header-tab" },

                { title: "Добавить подэлемент в шапку", desc: "Управляйте добавлением подэлементов в шапку", link: "create-sub-header-tab" },
                { title: "Добавить продукты в шапку", desc: "Управляйте добавлением продуктов в шапку", link: "create-header-product" },
                { title: "Добавить Статью в шапку", desc: "Управляйте добавлением продуктов в шапку", link: "create-header-articles" }

            ]
        }

    ]

    const user = {
        name: "Ecoinstrument Admin" // Replace with dynamic data if needed
    }

    return isLoading ? (
        <Loader />
    ) : (
        <div className="container mx-auto mt-40 bg-white">
            <h1 className="text-center text-3xl font-bold text-gray-800">
                Admin Dashboard - Welcome, {data?.data.full_name || "DOES NOT WORK"}!
            </h1>
            {paths.map((section) => (
                <div key={section.category}>
                    <h2 className="text-2xl font-bold text-gray-700 mt-10 mb-4">CRUD for {section.category}</h2>
                    <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.items.map((path) => (
                            <AdminManage
                                key={path.link}
                                title={path.title}
                                desc={path.desc}
                                link={path.link}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
