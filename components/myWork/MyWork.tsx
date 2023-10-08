import styles from './myWork.module.scss';
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { IWorkProject } from "@/interfaces/workProject";
import Link from 'next/link';
import WorkPolaroid from '../shared/workPolaroid/WorkPolaroid';

const MyWork = () => {
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
                    <WorkPolaroid key={index} slug={project.slug} name={project.name} date={project.date} type={project.projectType} />)}
            </div>
            <Link href='/work' className={styles.viewAllLink}>View All</Link>
        </section>
    )
}

export default MyWork