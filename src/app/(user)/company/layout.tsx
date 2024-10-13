import VerticalSliderMenu from '@/components/VerticalSliderMenu'
import type { PropsWithChildren } from 'react'



export default function Layout({ children }: PropsWithChildren<unknown>) {

	const menuItems = [
		{ href: '/company/', label: 'О компании' },
		{ href: '/company/partners', label: 'Партнеры' },

		// { href: '/company/service-maintenance', label: 'Видеогалерея' },
		// { href: '/company/online-industrial-solutions', label: 'Вакансии' },
		{ href: '/company/sustainability', label: 'Устойчивое развитие' },
	]


	return (
		<div className="container mx-auto  mt-10 flex flex-col md:flex-row px-3">
			<VerticalSliderMenu items={menuItems} />
			{children}
		</div>
	)
}
