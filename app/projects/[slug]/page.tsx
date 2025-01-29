'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { projects } from 'core/data/projects';
import { IWorkProject } from 'core/interfaces/workProject';
import styles from './workDetails.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectNames } from 'lib/constants';
import TypeBadge from 'components/typeBadge/TypeBadge';
import PageContainer from 'components/containers/PageContainer';
import Carousel from 'react-bootstrap/Carousel';

const WorkDetails = () => {
    const { slug } = useParams();
    const [workProject, setWorkProject] = useState<IWorkProject | null>(null);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        if (slug) {
            const project = projects.find(proj => proj.slug === slug);
            if (project) {
                switch (project.name) {
                    case ProjectNames.Kimba:
                        setImages(['/imgs/workSamples/kimba/kimba1.png', '/imgs/workSamples/kimba/kimba2.png', '/imgs/workSamples/kimba/kimba3.png']);
                        break;
                    case ProjectNames.Hundekey:
                        setImages(['/imgs/workSamples/hundekey/hundekey1.png', '/imgs/workSamples/hundekey/hundekey2.png']);
                        break;
                    case ProjectNames.PokeQuiz:
                        setImages(['/imgs/workSamples/poke/poke1.png', '/imgs/workSamples/poke/poke2.png']);
                        break;
                    case ProjectNames.Entourage:
                        setImages(['/imgs/workSamples/brideEntourage/entourage1.png', '/imgs/workSamples/brideEntourage/entourage2.png', '/imgs/workSamples/brideEntourage/entourage3.png']);
                        break;
                    case ProjectNames.DigitalResume:
                        setImages(['/imgs/workSamples/digitalResume/resume1.png', '/imgs/workSamples/digitalResume/resume2.png', '/imgs/workSamples/digitalResume/resume3.png']);
                        break;
                    default:
                        setImages([]);
                        break;
                }
                setWorkProject(project);
            }
        }
    }, [slug]);

    function setProjectDescription() {
        if (!workProject?.description.includes(':')) {
            return (
                <p className={styles.projectDescText}>
                    {workProject?.description}
                </p>
            )
        }

        const descSplit = workProject.description.split(':');
        const desc = descSplit[0];

        return (
            <div className={styles.projectDescText}>
                {desc}
                <ul>
                    {descSplit.map(function (name, index) {
                        return index === 0 ? null : <li key={index}>{name}</li>;
                    })}
                </ul>
            </div>
        )
    }

    if (!workProject) {
        console.log('no bueno');
        return;
    }

    return (
        <PageContainer>
            <div className={styles.workDetailsCols}>
                <div className={styles.textColumn}>
                    <span>
                        {workProject.tech.map((t, index) => {
                            const techName = t.toUpperCase();
                            const closing = index === workProject.tech.length - 1 ? '' : ' | ';

                            return (
                                <span key={t} className={styles.workTechText}>{`${techName}${closing}`}</span>
                            )
                        })}
                    </span>
                    <h1 className={styles.projectNameText}>
                        {workProject.name}
                    </h1>
                    {setProjectDescription()}
                    <div className={styles.badgeContainer}>
                        <TypeBadge type={workProject.projectType} />
                    </div>
                    {!workProject.githubLink ? null : (<Link href={workProject.githubLink} target='_blank' className={styles.projectLink}>View Repo</Link>)}
                    {!workProject.liveLink ? null : (<Link href={workProject.liveLink} target='_blank' className={styles.projectLink}>View Live</Link>)}
                </div>
                {images.length > 0 && (
                    <div className={styles.imgGrid}>
                        {images.map((img, index) => (
                            <div key={index} className={styles.imgGridItem}>
                                <Image
                                    src={img}
                                    alt={`Image ${index + 1} of ${workProject.name}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </PageContainer>
    )
}

export default WorkDetails