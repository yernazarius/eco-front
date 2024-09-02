import VerticalSliderMenu from '@/components/VerticalSliderMenu'
import type { PropsWithChildren } from 'react'



export default function Layout({ children }: PropsWithChildren<unknown>) {

	const menuItems = [
		{ href: '', label: '' },
	]


	return (
		<div className="container mx-auto mt-10 flex flex-col md:flex-row">
			<div className='w-full md:w-1/4 p-3 mr-2'></div>
			{children}
		</div>
	)
}
