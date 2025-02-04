'use client'
import { aboutMeSummary } from '@/data/aboutMe';
import styles from './aboutMeBanner.module.scss';
import banner from '@/imgs/aboutBanner.png';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll'

const AboutMeBanner = () => {
  const bannerText = aboutMeSummary;

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate_fadeOut'>
      <section className={styles.aboutMeSection}>
        <Image
          className={styles.bannerImg}
          src={banner}
          alt='Jeslyn'
        />
        <div className={styles.bannerTextContainer}>
          <h4 className='section-title text-start'>About Me</h4>
          <p className='section-body'>
            {bannerText}
          </p>
        </div>
      </section>
    </AnimationOnScroll>
  )
}

export default AboutMeBanner;