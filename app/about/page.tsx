import styles from './about.module.scss';
import { aboutMe } from 'core/data/aboutMe';
import PageContainer from 'components/containers/PageContainer';
import TechIcon from 'components/techIcon/TechIcon';
import AboutMeGallery from 'components/aboutMeGallery/AboutMeGallery';
import { GalleryType } from 'core/constants/galleryType';


const About = () => {
    const blurbs = aboutMe;
    // const techIcons = aboutMe
    return (
        <PageContainer>
            {blurbs.map((blurb) => {
                return (
                    <section key={blurb.title}>
                        <h2 className={styles.blurbTitle}>
                            <span>
                                {blurb.title}
                            </span>
                        </h2>
                        <p className='section-body'>
                            {blurb.content}
                        </p>
                        <br />
                    </section>
                )
            })}
            <AboutMeGallery photoSet={GalleryType.SET2} />
            {/* <div className={styles.iconFooter}>
                {techIcons.map((icon) => <TechIcon key={icon} icon={icon} className='m-1' />)}
            </div> */}
        </PageContainer>
    )
}

export default About