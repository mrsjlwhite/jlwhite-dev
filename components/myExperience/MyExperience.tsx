import styles from './myExperience.module.scss'
import { useEffect, useState } from 'react';
import Experience from '@/interfaces/experience';
import { tldr } from '@/data/tldrExperience';
import TechIcon from '../experienceCard/TechIcon';
import Link from 'next/link';

function MyExperience() {
    const [experienceSummary, setExperienceSummary] = useState<Experience>(null);

    useEffect(() => {
        if (tldr) {
            setExperienceSummary(tldr);
        }
    }, [tldr])

    return (
        <section id='my-experience'>
            <h4 className='section-title section-title-margin'>my experience.</h4>
            <div className='m-4'>
                {!experienceSummary ? null : (
                    <div className={styles.summarySection}>
                        <h5 className='section-title'>{experienceSummary.name.toLowerCase()}</h5>
                        <h6 className='section-title'>
                            <small>{experienceSummary.time}</small>
                        </h6>
                        <div className={styles.summaryDetailsContainer}>
                            <div>
                                <p className='section-body pr-4 pl-4'>
                                    {experienceSummary.description}
                                </p>
                                <p className='m-4'>
                                    {experienceSummary.techIcons.map((icon) => <TechIcon key={icon} icon={icon} className='m-1' />)}
                                </p>
                                <Link href='/experience' className={styles.viewAllLink}>View All</Link>
                            </div>
                            <ul>
                                {experienceSummary.fullDescription.map((desc, index) => {
                                    return (
                                        <li key={index} >
                                            <p className='section-body'>
                                                🌳 {desc}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section >
    )
}

export default MyExperience;