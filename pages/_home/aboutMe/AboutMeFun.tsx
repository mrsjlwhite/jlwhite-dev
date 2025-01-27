import styles from './aboutMe.module.scss';
import AboutMeGallery from '../../../components/aboutMeGallery/AboutMeGallery';

type Props = {
    funText: string
}

const AboutMeFun = ({ funText }: Props) => {
    return (
        <>
            <div className={styles.moreInfoCol}>
                <h4 className='section-title'>fun facts about me.</h4>
                <p className='section-body'>
                    {funText}
                </p>
            </div>
            <AboutMeGallery />
        </>
    )
}

export default AboutMeFun