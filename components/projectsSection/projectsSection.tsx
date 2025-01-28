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
            setWorkProjects(projects.splice(0, 3));
        }
    }, [projects])

    return (
        <section id="my-work">
            <h4 className='section-title section-title-margin mt-5'>my work.</h4>
            <div className={styles.workCardsContainer}>
                {workProjects.map((project: IWorkProject, index: number) =>
                    <ProjectCover key={index} slug={project.slug} name={project.name} />)}
            </div>
            <Link href='/projects' className={styles.viewAllLink}>View All</Link>
        </section>
    )
}

export default ProjectsSection