import styles from '@/styles/work.module.scss';
import MyNavbar from '@/components/navbars/MyNavbar';
import { projects } from '@/data/projects';
import WorkPolaroid from '@/components/shared/WorkPolaroid';
import { IWorkProject } from '@/interfaces/workProject';

type Props = {
    workProjects: IWorkProject[]
}

const Work = ({ workProjects }: Props) => {

    return (
        <>
            <MyNavbar />
            <div className={styles.wrapper}>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h4 className='section-title mt-5'>my work.</h4>
                            <ul className={styles.workGallery}>
                                {workProjects.map((project) =>
                                    <li key={project.name}>
                                        <WorkPolaroid name={project.name} slug={project.slug} date={project.date} type={project.projectType} />
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const workProjects = projects;

    return {
        props: {
            workProjects
        }
    }
}

export default Work