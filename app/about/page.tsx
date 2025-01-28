'use client'
import styles from './about.module.scss';
import { aboutMe } from 'core/data/aboutMe';
import PageContainer from 'components/containers/PageContainer';
import TechIcon from 'components/techIcon/TechIcon';
import Image from 'next/image';
import jobTechIcons from '@/data/jobTechIcons';
import { useEffect, useState } from 'react';
import AboutMeSkills from 'components/aboutMeSkills/aboutMeSkills';

const photoSet = [
    { img: '/imgs/fun1.jpeg', text: 'Wildflower from a hike' },
    { img: '/imgs/fun2.jpg', text: 'Working in a lodge' },
    { img: '/imgs/fun3.jpeg', text: 'Working by the beach' }
]

const About = () => {
    const [techIcons, setTechIcons] = useState([]);
    const [photos, setPhotos] = useState<any[]>([]);
    const blurbs = aboutMe;

    useEffect(() => {
        if (techIcons.length === 0) {
            setTechIcons(jobTechIcons.get('TL;DR'));
        }
        if (photos.length === 0) {
            setPhotos(photoSet);
        }
    }, []);

    return (
        <PageContainer>
            <section className={styles.aboutMeSection}>
                <div className={styles.aboutMeBlurb}>
                    {blurbs.map((blurb) => {
                        return (
                            <p key={blurb.title} className='section-body'>
                                <span className={styles.blurbTitle}>
                                    {blurb.title}
                                </span>
                                {blurb.content}
                            </p>
                        )
                    })}
                </div>
                <Image
                    src='/imgs/me.jpeg'
                    alt='A photo of me'
                    height={500}
                    width={400}
                    priority />
            </section>

            <AboutMeSkills />

            <div className={styles.aboutMeGallery}>
                {photoSet.map(({ img, text }) => {
                    return (
                        <Image
                            src={img}
                            alt={text}
                            key={text}
                            height={350}
                            width={385} />
                    )
                })}
            </div>

            <div className={styles.iconFooter}>
                {techIcons.map((icon) => <TechIcon key={icon} icon={icon} className='m-1' />)}
            </div>
        </PageContainer>
    )
}

export default About