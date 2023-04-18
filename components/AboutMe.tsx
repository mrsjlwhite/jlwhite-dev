import styles from '@/styles/aboutMe.module.scss';
import me from '@/imgs/me.jpeg';
import { useEffect, useState } from 'react';
import fun1 from '@/imgs/fun1.jpg';
import fun2 from '@/imgs/fun2.jpeg';
import fun3 from '@/imgs/fun3.jpg';
import fun4 from '@/imgs/fun4.jpeg';
import Image from 'next/image';

type Props = {
    aboutBlurb: string
    funBlurb: string
    skillset: string[]
}

function AboutMe({ aboutBlurb, funBlurb, skillset }: Props) {
    const [skills, setSkills] = useState<string[][]>([]);

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
            <div className={styles.aboutMeBanner}>
                <div className={styles.bannerTextContainer}>
                    <h4 className='section-title'>about me.</h4>
                    <p className='section-body'>
                        {aboutBlurb}
                    </p>
                </div>
                <div className={styles.bannerImgContainer}>
                    <Image
                        className='img-fluid rounded'
                        src={me}
                        alt='Jeslyn'
                    />
                </div>
            </div>
            <div className={styles.aboutMeMoreInfo}>
                <div className={styles.moreInfoCol}>
                    <h4 className='section-title'>my skills.</h4>
                    <ul className={`section-body ${styles.skillsetList}`}>
                        {skills.map((skillset, index) => {
                            return (
                                <li key={index}>
                                    <ul>
                                        {skillset.map((skill) => {
                                            return (
                                                <li key={skill}>
                                                    {skill}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.moreInfoCol}>
                    <h4 className='section-title'>fun facts about me.</h4>
                    <p className='section-body'>
                        {funBlurb}
                    </p>
                </div>
            </div>
            <div className={styles.aboutMeGallery}>
                <Image
                    src={fun1}
                    className='img-fluid'
                    alt='My family' />
                <Image
                    src={fun2}
                    className='img-fluid'
                    alt='Wildflower from a hike' />
                <Image
                    src={fun3}
                    className='img-fluid'
                    alt='Working in a lodge' />
                <Image
                    src={fun4}
                    className='img-fluid'
                    alt='My hubby' />
            </div>
        </section>
    )
}

export default AboutMe;