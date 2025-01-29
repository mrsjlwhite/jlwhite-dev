'use client'
import MyNavbar from 'components/myNavbar/MyNavbar'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './pageContainer.module.scss'
import { Col, Container, Row } from 'react-bootstrap'

const PageContainer = (props) => {
    const [pageTitle, setPageTitle] = useState<string>('');
    const [pageDesc, setPageDesc] = useState<string>('');
    const pathname = usePathname();

    useEffect(() => {
        const url = pathname.replace('/', '').toLowerCase();
        const isDetailsPage = pathname.split('/').length > 2; //router.query && router.query.slug;
        const defaultTitle = `my ${url}.`;
        let title = '';
        let desc = '';

        switch (url) {
            case 'about':
                title = `about me.`;
                break;
            case 'contact':
                title = `let’s get in touch!`;
                break;
            case 'experience':
                title = `my work experience.`;
                desc = 'an overview of my previous contributions.';
                break;
            default:
                title = isDetailsPage ? 'project details.' : defaultTitle;
                break;
        }

        setPageTitle(title);
        setPageDesc(desc);
    }, [pathname])

    return (
        <>
            <MyNavbar />
            <div className={styles.pageContainer}>
                <Container>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-between align-items-center mt-5'>
                                <h4 className='section-title'>
                                    {pageTitle}
                                </h4>
                                <p className='section-sub-title'>
                                    {pageDesc}
                                </p>
                            </div>
                            {props.children}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default PageContainer