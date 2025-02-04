'use client'
import Link from 'next/link'
import styles from './projectsSection.module.scss'
import { useEffect, useState } from 'react';
import { IWorkProject } from '@/interfaces/workProject';
import ProjectCover from 'components/projectCover/projectCover';
import SectionHeader from '../sectionHeader/sectionHeader';

const ProjectsSection = ({ projects }) => {
    const [workProjects, setWorkProjects] = useState<IWorkProject[]>([]);

    useEffect(() => {
        if (projects && projects.length) {
            setWorkProjects(projects);
        }
    }, [projects])

    if (!workProjects.length) return null;

    return (
        <section id="my-work" className='home-section'>
            <SectionHeader title='Some of My Projects' />
            <div className={styles.projectsContainer}>
                <div className={styles.imgGrid}>
                    {workProjects.map((project: IWorkProject, index: number) =>
                        <div key={index} className={styles.imgGridItem}>
                            <ProjectCover slug={project.slug} name={project.name} />
                        </div>
                    )}
                </div>
            </div>
            <Link href='/projects' className={styles.viewAllLink}>View All</Link>
        </section>
    )
}

export default ProjectsSection