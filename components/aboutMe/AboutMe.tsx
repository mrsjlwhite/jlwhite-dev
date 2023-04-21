import styles from '@/styles/aboutMe.module.scss';
import { useEffect, useState } from 'react';
import AboutMeBanner from './AboutMeBanner';
import AboutMeSkills from './AboutMeSkills';
import AboutMeFun from './AboutMeFun';

type Props = {
    aboutBlurb: string
    funBlurb: string
    skillset: string[]
}

function AboutMe({ aboutBlurb, funBlurb, skillset }: Props) {
    const [skills, setSkills] = useState<string[][]>([]);
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

    useEffect(() => {
        if (!skillset.length) {
            return;
        }
        const unsortedSkills = Array.from(skillset);
        const divideBy = unsortedSkills.length / 4;
        const array1 = unsortedSkills.splice(0, divideBy);
        const array2 = unsortedSkills.splice(0, divideBy);
        const array3 = unsortedSkills.splice(0, divideBy);
        const array4 = unsortedSkills.splice(0, divideBy);
        setSkills([array1, array2, array3, array4]);
    }, [skillset]);

    return (
        <section id='about-me' className={styles.aboutMeSection}>
            <AboutMeBanner bannerText={aboutMeBannerText} />
            <AboutMeSkills skills={skills} />
            <AboutMeFun funText={aboutMeFunText} />
        </section>
    )
}

export default AboutMe;