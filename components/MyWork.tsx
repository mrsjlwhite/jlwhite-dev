import styles from '@/styles/myWork.module.scss';
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { IWorkProject } from "@/interfaces/workProject";
import Image from "next/image";
import placeholder from '@/imgs/placeholder.png';
import kimba from '@/imgs/workSamples/kimba/kimba0.png';
import hundekey from '@/imgs/workSamples/hundekey/hundekey0.png';
import poke from '@/imgs/workSamples/poke/poke0.png';
import Link from 'next/link';

const MyWork = () => {
    const [workProjects, setWorkProjects] = useState([]);

    useEffect(() => {
        if (projects && projects.length) {
            setWorkProjects(projects);
        }
    }, [projects])

    return (
        <section id="my-work">
            <h4 className='section-title section-title-margin mt-5'>my work.</h4>
            <div className={styles.workCardsContainer}>
                {workProjects.map((project: IWorkProject, index: number) => {
                    let imgSrc = null;
                    let imgAlt = ''
                    switch (project.name) {
                        case 'Heyyo Kimba':
                            imgSrc = kimba;
                            imgAlt = `${project.name} blog logo`
                            break;
                        case 'HundekeyCreeates':
                            imgSrc = hundekey;
                            imgAlt = `${project.name} portfolio logo`;
                            break;
                        case 'Poke Quiz':
                            imgSrc = poke;
                            imgAlt = 'Retro Pokémon poké ball as site logo';
                            break;
                        default:
                            imgSrc = placeholder;
                            imgAlt = project.name
                            break;
                    }

                    return (
                        <div key={index} className={styles.workCard}>
                            <Link href={`/work/${project.slug}`}>
                                <Image
                                    src={imgSrc}
                                    alt={imgAlt}
                                    height={250}
                                    width={350}
                                />
                                <h4>{project.name}</h4>
                                <p>{project.date}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default MyWork