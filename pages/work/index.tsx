import styles from '@/styles/work.module.scss';
import MyNavbar from '@/components/navbars/MyNavbar';
import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import WorkPolaroid from '@/components/shared/WorkPolaroid';
import { IWorkProject } from '@/interfaces/workProject';

const Work = () => {
    const [workProjects, setWorkProjects] = useState<IWorkProject[]>([]);

    useEffect(() => {
        if (projects && projects.length) {
            setWorkProjects(projects);
        }
    }, [projects])

    return (
        <>
            <MyNavbar />
            <div className={styles.wrapper}>
                <h4 className='section-title section-title-margin mt-5'>my work.</h4>
                <ul className={styles.workGallery}>
                    {workProjects.map((project) =>
                        <li key={project.name}>
                            <WorkPolaroid name={project.name} slug={project.slug} date={project.date} type={project.projectType} />
                        </li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default Work