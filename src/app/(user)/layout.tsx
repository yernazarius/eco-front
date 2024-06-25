import Header from '@/components/Header'
import type { PropsWithChildren } from 'react'


export default function Layout({ children }: PropsWithChildren<unknown>) {
    return <>
        <Header />
        {children}
    </>
}
