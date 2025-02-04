'use client'
import styles from './myLinks.module.scss'
import { IconSize } from 'components/socialsIcons/SocialIconImage'
import SocialsIcons from '../socialsIcons/SocialsIcons'
import SectionHeader from '../sectionHeader/sectionHeader'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function MyLinks() {
    return (
        <section id='my-links' className='home-section'>
            <SectionHeader title="Let's Connect" />
            <AnimationOnScroll animateIn="animate__fadeIn">
                <div className={styles.linksSectionContainer}>
                    <p>
                        I’d love to hear from you—whether it’s to discuss a potential project, share ideas, or just connect.
                        Feel free to message me on any of these platforms.
                    </p>
                    <div className={styles.iconsContainer}>
                        <SocialsIcons iconSize={IconSize.large} messagingOnly />
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default MyLinks;