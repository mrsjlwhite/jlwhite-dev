'use client'

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "./projectDetailsGallery.module.scss";

type Props = {
    images: string[],
    projectName: string
}

const ProjectDetailsGallery = ({ images, projectName }: Props) => {
    const [galleryImages, setImages] = useState<string[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    useEffect(() => {
        if (images) {
            setImages(images);
        }
    }, [images]);

    const openModal = (img: string) => {
        setCurrentImage(img);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentImage(null);
    };

    const modalContent = isModalOpen && currentImage && (
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent}>
                <Image
                    src={currentImage}
                    alt="Expanded view"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    );

    return (
        <>
            {galleryImages.length > 0 && (
                <div className={styles.imgGrid}>
                    {galleryImages.map((img, index) => (
                        <div key={index} className={styles.imgGridItem} onClick={() => openModal(img)}>
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
            {isModalOpen && ReactDOM.createPortal(modalContent, document.body)}
        </>
    )
}

export default ProjectDetailsGallery