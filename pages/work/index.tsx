import styles from '@/styles/work.module.scss';
import MyNavbar from '@/components/navbars/MyNavbar';
import Image from 'next/image';
import kimba from '@/imgs/workSamples/kimba/kimba1.png';
import hundekey from '@/imgs/workSamples/hundekey/hundekey1.png';
import poke from '@/imgs/workSamples/poke/poke1.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';

const Work = () => {
    const [slugs, setSlugs] = useState([]);

    useEffect(() => {
        if (projects && projects.length) {
            setSlugs(projects.map(p => p.slug));
        }
    }, [projects])

    return (
        <>
            <MyNavbar />
            <div className={styles.wrapper}>
                <h4 className='section-title section-title-margin mt-5'>my work.</h4>
                <ul className={styles.workGallery}>
                    <li>
                        <Link href={`/work/details/${slugs[0]}`}>
                            <Image src={kimba} alt='Homepage of kimba blog, with an aesthetic carousel' />
                        </Link>
                    </li>
                    <li>
                        <Link href={`/work/details/${slugs[1]}`}>
                            <Image src={hundekey} alt='Homepage of graphic designer art portfolio' />
                        </Link>
                    </li>
                    <li>
                        <Link href={`/work/details/${slugs[2]}`}>
                            <Image src={poke} alt='Beige Poké Quiz' />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Work