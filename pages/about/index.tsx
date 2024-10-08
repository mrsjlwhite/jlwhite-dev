import styles from './about.module.scss';
import { aboutMe } from 'core/data/aboutMe';
import PageContainer from 'core/components/containers/PageContainer';
import TechIcon from 'core/components/techIcon/TechIcon';
import { tldr } from 'core/data/tldrExperience';
import { IAboutMeBlurb } from '@/interfaces/aboutMeBlurb';
import AboutMeGallery from 'pages/_home/aboutMe/AboutMeGallery';
import { GalleryType } from 'core/constants/galleryType';

type Props = {
    blurbs: IAboutMeBlurb[]
    techIcons: string[]
}

const About = ({ blurbs, techIcons }: Props) => {

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
            <div className={styles.iconFooter}>
                {techIcons.map((icon) => <TechIcon key={icon} icon={icon} className='m-1' />)}
            </div>
        </PageContainer>
    )
}

export async function getStaticProps() {
    const blurbs = aboutMe;
    const techIcons = tldr.techIcons;

    return {
        props: {
            blurbs,
            techIcons
        }
    }
}

export default About