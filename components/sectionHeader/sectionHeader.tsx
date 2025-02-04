'use client'
import styles from './sectionHeader.module.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SectionHeader = ({ title }) => {
    return (
        <AnimationOnScroll animateIn="animate__fadeIn">
            <div className={styles.sectionHeader}>
                <div className={styles.line}></div>
                <h4 className={`${styles.title} px-3`}>{title}</h4>
                <div className={styles.line}></div>
            </div>
        </AnimationOnScroll>
    );
};

export default SectionHeader;