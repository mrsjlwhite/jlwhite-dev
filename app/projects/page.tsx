'use client'
import styles from './projects.module.scss';
import { projects } from 'core/data/projects';
import ProjectCover from 'components/projectCover/ProjectCover';
import PageContainer from 'components/containers/PageContainer';

const Work = () => {

    return (
        <PageContainer>
            <ul className={styles.workGallery}>
                {projects.map((project) =>
                    <li key={project.name}>
                        <ProjectCover name={project.name} slug={project.slug} summary={project.summary} />
                    </li>)
                }
            </ul>
        </PageContainer>
    )
}

export default Work