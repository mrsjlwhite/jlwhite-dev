import styles from './work.module.scss';
import { projects } from 'core/data/projects';
import ProjectCover from 'components/projectCover/ProjectCover';
import { IWorkProject } from 'core/interfaces/workProject';
import PageContainer from 'components/containers/PageContainer';

type Props = {
    workProjects: IWorkProject[]
}

const Work = ({ workProjects }: Props) => {

    return (
        <PageContainer>
            <ul className={styles.workGallery}>
                {workProjects.map((project) =>
                    <li key={project.name}>
                        <ProjectCover name={project.name} slug={project.slug} summary={project.summary} />
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