import React from 'react'
import Link from 'next/link'

interface MenuItem {
    href: string
    label: string
}

interface VerticalSliderMenuProps {
    items: MenuItem[]
}

const VerticalSliderMenu: React.FC<VerticalSliderMenuProps> = ({ items }) => {
    return (
        <div className="w-full md:w-1/4 p-3 mr-4 border-t">
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href}>
                            <div className="block text-gray-700 hover:bg-primary_blue hover:text-white px-4 py-2 rounded transition duration-300">
                                {item.label}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default VerticalSliderMenu
