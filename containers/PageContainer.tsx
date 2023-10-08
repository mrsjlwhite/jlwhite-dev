import MyNavbar from '@/components/myNavbar/MyNavbar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PageContainer = (props) => {
    const [pageTitle, setPageTitle] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const url = router.asPath.replace('/', '').toLowerCase();

        let title = '';

        switch (url) {
            case 'about':
                title = `${url} me.`
                break;
            default:
                title = `my ${url}s.`
                break;
        }

        setPageTitle(title);
    }, [router.asPath])

    return (
        <>
            <MyNavbar />
            <div className='wrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h4 className='section-title mt-5'>
                                {pageTitle}
                            </h4>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageContainer