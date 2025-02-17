'use client'

import MyFooter from '@/components/myFooter/MyFooter'
import '@/styles/global.scss'
import { Lora, Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import "animate.css/animate.min.css"
import { usePathname } from 'next/navigation'
import MyLinks from '@/components/myLinks/MyLinks'

// Font files can be colocated inside of `app`
const titleFont = localFont({
    src: '../public/fonts/NewYork.otf',
    display: 'swap',
    variable: '--font-heading'
});
const subHeadingFont = Lora({
    subsets: ['latin'],
    variable: '--font-sub-heading'
});
const bodyFont = Open_Sans({
    subsets: ['latin'],
    variable: '--font-body'
});

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <html lang="en" className={`${titleFont.variable} ${subHeadingFont.variable} ${bodyFont.variable}`}>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
            </head>
            <body>
                {children}
                {isHomePage ? <MyLinks /> : <MyFooter />}
            </body>
        </html>
    )
}