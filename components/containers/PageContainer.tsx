'use client'
import MyNavbar from 'components/myNavbar/MyNavbar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const PageContainer = (props) => {
    const [pageTitle, setPageTitle] = useState<string>('');
    const [pageDesc, setPageDesc] = useState<string>('');
    const pathname = usePathname();

    useEffect(() => {
        const url = pathname.replace('/', '').toLowerCase();
        const isDetailsPage = pathname.split('/').length > 0; //router.query && router.query.slug;
        const defaultTitle = `my ${url}s.`;
        let title = '';
        let desc = '';

        switch (url) {
            case 'about':
                title = `${url} me.`;
                break;
            case 'connect':
                title = `let's ${url}!`;
                desc = '...or not, I\'m shy too. I get it.';
                break;
            case 'experience':
                title = defaultTitle;
                desc = 'an overview of my previous work experiences.';
                break;
            default:
                title = isDetailsPage ? 'work details.' : defaultTitle;
                break;
        }

        setPageTitle(title);
        setPageDesc(desc);
    }, [pathname])

    return (
        <>
            <MyNavbar />
            <div className='wrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='d-flex justify-content-between align-items-center mt-5'>
                                <h4 className='section-title'>
                                    {pageTitle}
                                </h4>
                                <p className='section-sub-title'>
                                    {pageDesc}
                                </p>
                            </div>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageContainer