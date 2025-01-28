'use client';

import styles from './aboutMe.module.scss';
// import fun1 from '@/imgs/fun1.jpg';
// import fun2 from '@/imgs/fun2.jpeg';
// import fun3 from '@/imgs/fun3.jpg';
// import fun4 from '@/imgs/fun4.jpeg';
// import fun5 from '@/imgs/fun5.jpeg';
// import fun6 from '@/imgs/fun6.jpeg';
// import fun7 from '@/imgs/fun7.jpeg';
import { GalleryType } from 'lib/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Photo {
    img: string
    text: string
}

interface Props {
    photoSet?: GalleryType
}

const set1 = [
    { img: '/fun1.jpg', text: 'My family' },
    { img: '/fun2.jpg', text: 'Wildflower from a hike' },
    { img: '/fun3.jpg', text: 'Working in a lodge' },
    { img: '/fun4.jpg', text: 'My hubby' },
]

const set2 = [
    { img: '/fun5.jpg', text: 'Working with my nephew' },
    { img: '/fun6.jpg', text: 'Coding fuel' },
    { img: '/fun7.jpg', text: 'Working by the beach' },
    { img: '/fun8.jpg', text: 'Wildflower from a hike' }
]
// const set1 = [
//     { img: fun1, text: 'My family' },
//     { img: fun2, text: 'Wildflower from a hike' },
//     { img: fun3, text: 'Working in a lodge' },
//     { img: fun4, text: 'My hubby' },
// ]

// const set2 = [
//     { img: fun5, text: 'Working with my nephew' },
//     { img: fun6, text: 'Coding fuel' },
//     { img: fun7, text: 'Working by the beach' },
//     { img: fun2, text: 'Wildflower from a hike' }
// ]

const AboutMeGallery = ({ photoSet = GalleryType.SET1 }: Props) => {
    const [galleryPhotos, setGalleryPhotos] = useState<Photo[]>([]);

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
                            alt={text}
                            key={text} />
                    )
                })}
            </div>
        </div>
    )
}

export default AboutMeGallery