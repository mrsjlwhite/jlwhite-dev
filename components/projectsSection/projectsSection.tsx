import Link from 'next/link'
import styles from './projectsSection.module.scss'
import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import { IWorkProject } from '@/interfaces/workProject';
import ProjectCover from 'components/projectCover/ProjectCover';

const ProjectsSection = () => {
    const [workProjects, setWorkProjects] = useState([]);

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
            <Link href='/work' className={styles.viewAllLink}>View All</Link>
        </section>
    )
}

export default ProjectsSection