import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.scss';
import Head from 'next/head';
import { Josefin_Sans, La_Belle_Aurore, Roboto_Slab } from 'next/font/google';
import MyFooter from '@/components/myFooter/MyFooter';

const josefSans = Josefin_Sans({
    weight: ['100', '200', '300'],
    subsets: ['latin'],
    variable: '--font-sub-heading'
});
const laBelleAurore = La_Belle_Aurore({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-heading-title'
});
const robotoSlab = Roboto_Slab({
    weight: ['100', '200', '300', '400'],
    subsets: ['latin'],
    variable: '--font-body'
});


const title = "J.L. White";
const description = "Jeslyn L. White's personal developer website, in case you wanted to learn more about her.";

// any shared layouts between all pages
const App = ({ Component, pageProps }: AppProps) => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content={title} />
                <meta property="twitter:card" content="summary" />
                {/* <meta property="twitter:creator" content={config.social.twitter} /> */}
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
            </Head>
            <div className={`${josefSans.variable} ${laBelleAurore.variable} ${robotoSlab.variable}`}>
                <Component {...pageProps} />
                <MyFooter />
            </div>
        </>
    )
}

export default App;