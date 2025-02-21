'use client'
import { experiences } from 'data/experiences'
import styles from './workExperienceSection.module.scss'
import Image from 'next/image'
import coffee from '@/imgs/coffee.png'
import SectionHeader from '../sectionHeader/sectionHeader'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const WorkExperienceSection = () => {
    return (
        <section className='home-section'>
            <SectionHeader title="Where I\'ve Contributed" />
            <div className={styles.sectionContentContainer}>
                <div className="align-self-center">
                    <Image
                        className={styles.experienceImage}
                        src={coffee}
                        alt='A coffee stain'
                        width={600}
                    />
                </div>
                <div>
                    {experiences.map((experience, index) => {
                        return (
                            <AnimationOnScroll animateIn="animate__fadeIn" key={index}>
                                <div className={styles.experienceCard}>
                                    <h4 className={styles.cardName}>{experience.name} | {experience.title}</h4>
                                    <p className={styles.cardDates}>{experience.dates}</p>
                                    <div className={styles.pillsContainer}>
                                        {experience.techStack.map((tech, index) => <span key={index} className={styles.experiencePill}>{tech}</span>)}
                                    </div>
                                    <p className={styles.cardDescription}>{experience.description}</p>
                                    {index !== experiences.length - 1 && <hr />}
                                </div>
                            </AnimationOnScroll>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WorkExperienceSection