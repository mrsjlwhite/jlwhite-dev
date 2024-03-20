import styles from './experience.module.scss';
import Experience from '@/interfaces/experience';
import TechIcon from '@/components/experienceCard/TechIcon';
import { getGitConnectedPortfolio } from '@/lib/api';
import { useEffect, useState } from 'react';
import { getMonthName, getTechIconsByJobName } from '@/lib/utils';
import Accordion from 'react-bootstrap/Accordion';
import GitConnectedWork from '@/interfaces/gitConnectedWork';
import PageContainer from 'containers/PageContainer';

type Props = {
    experiences: GitConnectedWork[]
}

const ExperiencePage = ({ experiences }: Props) => {
    const [jobExperiences, setJobExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        if (!experiences) {
            return;
        }

        const buildExperienceCard = (work): Experience => {
            const endDate = work.isCurrentRole ? 'Present' : `${getMonthName(work.end.month)} ${work.end.year}`;
            const timeResults = `${getMonthName(work.start.month)} ${work.start.year} to ${endDate}`;

            return {
                name: work.company,
                time: timeResults,
                title: work.position,
                description: work.summary,
                fullDescription: work.highlights,
                tech: [],
                techIcons: getTechIconsByJobName(work.name)
            }
        };

        const jobs = experiences.map(buildExperienceCard);
        setJobExperiences(jobs);

    }, [experiences]);

    return (
        <PageContainer>
            <Accordion className='pb-5'>
                {jobExperiences.map((je, index) =>
                    <Accordion.Item eventKey={`${index}`} key={je.name}>
                        <Accordion.Header className={styles.accordionHeader}>
                            <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                                <h3>
                                    {je.name} &#124;
                                    <span> {je.title}</span>
                                </h3>
                                <h5>{je.time}</h5>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className={styles.offWhiteBackground}>
                            <h6 className={styles.titleStyles}>
                                about the company.
                            </h6>
                            <p className={styles.bodyTextStyles}>
                                {je.description}
                            </p>
                            <h6 className={styles.titleStyles}>
                                things i did.
                            </h6>
                            <ul>
                                {je.fullDescription.map((desc, index) => {
                                    return (
                                        <li key={index}>
                                            <p className={styles.bodyTextStyles}>
                                                {desc}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className={styles.accordionFooter}>
                                {!je.techIcons || !je.techIcons.length ? null
                                    : je.techIcons.map((icon) => <TechIcon key={icon} icon={icon} />)}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </PageContainer>
    )
}

export async function getServerSideProps() {
    const data = await getGitConnectedPortfolio();

    if (!data) {
        return { notFound: true }
    }

    const { work } = data;

    return {
        props: {
            experiences: work
        }
    }
}

export default ExperiencePage