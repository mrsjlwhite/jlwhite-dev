import { aboutMeSummary } from '@/data/aboutMe';
import styles from './aboutMeBanner.module.scss';
import banner from '@/imgs/aboutBanner.jpeg';
import Image from 'next/image';

const AboutMeBanner = () => {
  const bannerText = aboutMeSummary;

  return (
    <section className={styles.aboutMeSection}>
      <Image
        className={styles.bannerImg}
        src={banner}
        alt='Jeslyn'
      />
      <div className={styles.bannerTextContainer}>
        <h4 className='section-title'>about me.</h4>
        <p className='section-body'>
          {bannerText}
        </p>
      </div>
    </section>
  )
}

export default AboutMeBanner;