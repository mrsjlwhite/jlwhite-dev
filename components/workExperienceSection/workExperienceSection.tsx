import { experiences } from '@/data/experiences'
import styles from './workExperienceSection.module.scss'
import Image from 'next/image'
import coffeeStain from '@/imgs/coffeeStain.png'
import Link from 'next/link'

const WorkExperienceSection = () => {
    return (
        <section>
            <h2 className={styles.sectionTitle}>Where I've Contributed</h2>
            <div className={styles.sectionContentContainer}>
                <div>
                    <Image
                        className={styles.experienceImage}
                        src={coffeeStain}
                        alt='A coffee stain'
                    />
                    <Link href='/experience' className={styles.viewAllLink}>Learn More</Link>
                </div>
                <div>
                    {experiences.map((experience, index) => {
                        return (
                            <div key={index} className={styles.experienceCard}>
                                <h4 className={styles.cardName}>{experience.name} / {experience.title}</h4>
                                <p className={styles.cardDates}>{experience.dates}</p>
                                <div className={styles.pillsContainer}>
                                    {experience.techStack.map((tech, index) => <span key={index} className={styles.experiencePill}>{tech}</span>)}
                                </div>
                                <p className={styles.cardDescription}>{experience.description}</p>
                                {index !== experiences.length - 1 && <hr />}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WorkExperienceSection