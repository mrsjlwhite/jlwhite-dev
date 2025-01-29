import Link from 'next/link'
import styles from './projectsSection.module.scss'
import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import { IWorkProject } from '@/interfaces/workProject';
import ProjectCover from 'components/projectCover/projectCover';

const ProjectsSection = () => {
    const [workProjects, setWorkProjects] = useState<IWorkProject[]>([]);

    useEffect(() => {
        if (projects && projects.length) {
            setWorkProjects(projects.splice(0, 4));
        }
    }, [projects])

    return (
        <section id="my-work" className='home-section'>
            <h4 className='section-title'>Some of My Projects</h4>
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