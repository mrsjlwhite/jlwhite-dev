'use client'
import styles from './projects.module.scss';
import { projects } from 'core/data/projects';
import PageContainer from '@/components/containers/PageContainer';
import ProjectCover from 'components/projectCover/projectCover';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Work = () => {
    const [loading, setLoading] = useState(true);
    const [loadedProjects, setLoadedProjects] = useState<any[]>([]);

    useEffect(() => {
        setLoadedProjects(projects);
        setLoading(false);
    }, [projects]);

    if (loading) {
        return (
            <PageContainer>
                <Spinner animation="border" role="status" className='d-flex mx-auto'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <ul className={styles.workGallery}>
                {loadedProjects.map((project) =>
                    <li key={project.name}>
                        <ProjectCover name={project.name} slug={project.slug} summary={project.summary} />
                    </li>)
                }
            </ul>
        </PageContainer>
    )
}

export default Work