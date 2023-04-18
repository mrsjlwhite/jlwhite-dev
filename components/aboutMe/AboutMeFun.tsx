import styles from '@/styles/aboutMe.module.scss';
import fun1 from '@/imgs/fun1.jpg';
import fun2 from '@/imgs/fun2.jpeg';
import fun3 from '@/imgs/fun3.jpg';
import fun4 from '@/imgs/fun4.jpeg';
import Image from 'next/image';

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
            <div className={styles.aboutMeGallery}>
                <Image
                    src={fun1}
                    className='img-fluid'
                    alt='My family' />
                <Image
                    src={fun2}
                    className='img-fluid'
                    alt='Wildflower from a hike' />
                <Image
                    src={fun3}
                    className='img-fluid'
                    alt='Working in a lodge' />
                <Image
                    src={fun4}
                    className='img-fluid'
                    alt='My hubby' />
            </div>
        </>
    )
}

export default AboutMeFun