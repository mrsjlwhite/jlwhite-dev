'use client';

import styles from './aboutMe.module.scss';
import fun1 from '@/imgs/fun1.jpg';
import fun2 from '@/imgs/fun2.jpeg';
import fun3 from '@/imgs/fun3.jpg';
import fun4 from '@/imgs/fun4.jpeg';
import fun5 from '@/imgs/fun5.jpeg';
import fun6 from '@/imgs/fun6.jpeg';
import fun7 from '@/imgs/fun7.jpeg';
import { GalleryType } from 'core/constants/galleryType';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {
    photoSet?: GalleryType
}

const set1 = [
    { img: fun1, text: 'My family' },
    { img: fun2, text: 'Wildflower from a hike' },
    { img: fun3, text: 'Working in a lodge' },
    { img: fun4, text: 'My hubby' },
]

const set2 = [
    { img: fun5, text: 'Working with my nephew' },
    { img: fun6, text: 'Coding fuel' },
    { img: fun7, text: 'Working by the beach' },
    { img: fun2, text: 'Wildflower from a hike' }
]

const AboutMeGallery = ({ photoSet = GalleryType.SET1 }: Props) => {
    const [galleryPhotos, setGalleryPhotos] = useState([]);

    useEffect(() => {
        if (galleryPhotos.length) {
            return;
        }
        const photos = photoSet == GalleryType.SET1 ? set1 : set2;
        setGalleryPhotos(photos);
    }, [photoSet])


    return (
        <div>
            <div className={styles.aboutMeGallery}>
                {galleryPhotos.map(({ img, text }) => {
                    return (
                        <Image
                            src={img}
                            className='img-fluid'
                            alt={text}
                            key={text} />
                    )
                })}
            </div>
        </div>
    )
}

export default AboutMeGallery