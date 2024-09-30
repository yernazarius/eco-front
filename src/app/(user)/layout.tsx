import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { PropsWithChildren } from 'react'
import React from 'react'


export default function Layout({ children }: PropsWithChildren<unknown>) {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}
