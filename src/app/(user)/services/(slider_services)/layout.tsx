import VerticalSliderMenu from '@/components/VerticalSliderMenu'
import type { PropsWithChildren } from 'react'


export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div className="container mx-auto px-20 mt-10 flex flex-col md:flex-row">
            <VerticalSliderMenu />
            {children}
        </div>
    )
}
