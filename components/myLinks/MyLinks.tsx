'use client'
import styles from './myLinks.module.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import ILinkUrl from '@/lib/interfaces/linkUrl'
import { useEffect, useState } from 'react'
import { linkUrls } from 'data/linkUrls'

function MyLinks() {
    const [links, setLinks] = useState<ILinkUrl[]>([]);

    useEffect(() => {
        setLinks(linkUrls);
    }, []);

    return (
        <AnimationOnScroll animateIn="animate__fadeIn">
            <section id='my-links' className={styles.linksSection}>
                <h2 className={styles.sectionTitle}>Say Hello!</h2>
                <hr />
                <div className={styles.linksSectionContainer}>
                    <div className={styles.linksContainer}>
                        <p className={styles.blurbTitle}>Find Me Here</p>
                        {links.map(lu => <a href={lu.url} key={lu.name}>{lu.name}</a>)}
                    </div>
                    <div>
                        <p className={styles.blurbTitle}>Reach Out</p>
                        <p>
                            I’d love to hear from you—whether it’s to discuss a potential project, share ideas, or just connect.
                            Feel free to message me on any of these platforms.
                        </p>
                    </div>
                </div>
            </section>
        </AnimationOnScroll>
    )
}

export default MyLinks;