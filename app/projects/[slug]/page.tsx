import { projects } from 'data/projects';
import styles from './workDetails.module.scss';
import Link from 'next/link';
import TypeBadge from 'components/typeBadge/TypeBadge';
import PageContainer from '@/components/containers/PageContainer';
import ProjectDetailsGallery from '@/components/projectDetailsGallery/projectDetailsGallery';

const WorkDetails = async ({ params }) => {
    const { slug } = await params;
    const workProject = projects.find(proj => proj.slug === slug);

    function setProjectDescription() {
        if (!workProject?.description.includes(':')) {
            return (
                <p className={styles.projectDescText}>
                    {workProject?.description}
                </p>
            )
        }

        const descSplit = workProject.description.split(':');
        const desc = descSplit[0];

        return (
            <div className={styles.projectDescText}>
                {desc}
                <ul>
                    {descSplit.map(function (name, index) {
                        return index === 0 ? null : <li key={index}>{name}</li>;
                    })}
                </ul>
            </div>
        )
    }

    if (!workProject) {
        console.log('no bueno');
        return;
    }

    return (
        <PageContainer>
            <div className={styles.workDetailsCols}>
                <div className={styles.textColumn}>
                    <span>
                        {workProject.tech.map((t, index) => {
                            const techName = t.toUpperCase();
                            const closing = index === workProject.tech.length - 1 ? '' : ' | ';

                            return (
                                <span key={t} className={styles.workTechText}>{`${techName}${closing}`}</span>
                            )
                        })}
                    </span>
                    <h1 className={styles.projectNameText}>
                        {workProject.name}
                    </h1>
                    {setProjectDescription()}
                    <div className={styles.badgeContainer}>
                        <TypeBadge type={workProject.projectType} />
                    </div>
                    <div className={styles.projectLinksContainer}>
                        {!workProject.githubLink ? null : (<Link href={workProject.githubLink} target='_blank' className={styles.projectLink}>View Repo</Link>)}
                        {!workProject.liveLink ? null : (<Link href={workProject.liveLink} target='_blank' className={styles.projectLink}>View Live</Link>)}
                    </div>
                </div>
                <ProjectDetailsGallery images={workProject.images} projectName={workProject.name} />
            </div>
        </PageContainer>
    )
}

export default WorkDetails