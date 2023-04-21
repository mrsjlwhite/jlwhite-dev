import styles from '@/styles/aboutMe.module.scss';
import me from '@/imgs/me.jpeg';
import Image from 'next/image';

type Props = {
  bannerText: string
}

const AboutMeBanner = ({ bannerText }: Props) => {
  return (
    <div className={styles.aboutMeBanner}>
      <div className={styles.bannerTextContainer}>
        <h4 className='section-title'>about me.</h4>
        <p className='section-body'>
          {bannerText}
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
  )
}

export default AboutMeBanner;