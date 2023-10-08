import styles from './work.module.scss';
import { projects } from '@/data/projects';
import WorkPolaroid from '@/components/shared/workPolaroid/WorkPolaroid';
import { IWorkProject } from '@/interfaces/workProject';
import PageContainer from 'containers/PageContainer';

type Props = {
    workProjects: IWorkProject[]
}

const Work = ({ workProjects }: Props) => {

    return (
        <PageContainer>
            <ul className={styles.workGallery}>
                {workProjects.map((project) =>
                    <li key={project.name}>
                        <WorkPolaroid name={project.name} slug={project.slug} date={project.date} type={project.projectType} />
                    </li>)
                }
            </ul>
        </PageContainer>
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