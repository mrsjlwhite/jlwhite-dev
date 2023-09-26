import styles from '@/styles/experience.module.scss';
import MyNavbar from '@/components/navbars/MyNavbar';
import Experience from '@/interfaces/experience';
import TechIcon from '@/components/myExperience/TechIcon';
import { getGitConnectedPortfolio } from '@/lib/api';
import { useEffect, useState } from 'react';
import { getMonthName, getTechIconsByJobName } from '@/lib/utils';
import Accordion from 'react-bootstrap/Accordion';

type Props = {
    experiences: Experience[]
}

const Experience = ({ experiences }: Props) => {
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
        <>
            <MyNavbar />
            <div className={styles.wrapper}>
                <h4 className='section-title section-title-margin mt-5'>my experiences.</h4>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Accordion className='pb-5'>
                                {jobExperiences.map((je, index) =>
                                    <Accordion.Item eventKey={`${index}`} key={je.name}>
                                        <Accordion.Header>
                                            <div className='d-flex flex-column'>
                                                <div className='d-flex flex-row justify-content-between'>
                                                    <h5 className='section-title'>
                                                        {je.name.toLowerCase()}
                                                    </h5>
                                                    <p className='section-title-small'>
                                                        {je.techIcons.map((icon) => <TechIcon key={icon} icon={icon} className='m-1' />)}
                                                        <small className='pl-2'>{je.time}</small>
                                                    </p>
                                                </div>
                                                <p className='section-body-small pr-4 pl-4'>
                                                    {je.description}
                                                </p>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
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
                                                            <p className={index == je.fullDescription.length - 1 ? styles.titleStyles : styles.bodyTextStyles}>
                                                                {desc}
                                                            </p>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
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

export default Experience