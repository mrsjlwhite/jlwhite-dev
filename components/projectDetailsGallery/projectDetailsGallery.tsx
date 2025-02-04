'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./projectDetailsGallery.module.scss";

type Props = {
    images: string[],
    projectName: string
}

const ProjectDetailsGallery = ({ images, projectName }: Props) => {
    const [galleryImages, setImages] = useState<string[]>([]);

    useEffect(() => {
    if (images) {
            setImages(images);
        }
    }, [images]);

    return (
        <>
            {galleryImages.length > 0 && (
                <div className={styles.imgGrid}>
                    {galleryImages.map((img, index) => (
                        <div key={index} className={styles.imgGridItem}>
                            <Image
                                src={img}
                                alt={`Image ${index + 1} of ${projectName}`}
                                height={300}
                                width={600}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default ProjectDetailsGallery