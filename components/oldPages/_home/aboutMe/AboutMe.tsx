import styles from './aboutMe.module.scss';
import { useEffect, useState } from 'react';
import AboutMeSkills from './AboutMeSkills';
import AboutMeFun from './AboutMeFun';

type Props = {
    aboutBlurb: string
    funBlurb: string
    skillset: string[]
}

function AboutMe({ aboutBlurb, funBlurb, skillset }: Props) {
    const [aboutMeBannerText, setAboutMeBannerText] = useState('');
    const [aboutMeFunText, setAboutMeFunText] = useState('');

    useEffect(() => {
        if (!aboutBlurb.length) {
            return;
        }
        setAboutMeBannerText(aboutBlurb)
    }, [aboutBlurb])

    useEffect(() => {
        if (!funBlurb.length) {
            return;
        }
        setAboutMeFunText(funBlurb)
    }, [funBlurb])

    return (
        <section id='about-me' className={styles.aboutMeSection}>
            <AboutMeSkills skillset={skillset} />
            <AboutMeFun funText={aboutMeFunText} />
        </section>
    )
}

export default AboutMe;