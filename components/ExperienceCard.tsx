import { useEffect, useState } from 'react';
import styles from '@/styles/experienceCard.module.scss';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ResumeButton from './ResumeButton';

type Props = {
    job: any
    showModal: any
}

function ExperienceCard({ job, showModal }: Props) {
    const defaultStyle = styles.cardTextContainer;
    const [cardContainerStyle, setCardContainerStyle] = useState(defaultStyle);
    
    if (!job) {
        return <></>
    }

    useEffect(() => {
        if (job) {
            const isTechJob = job.tech && job.tech.length ? true : false;
            const newStyle = isTechJob ? `${defaultStyle} ${styles.gridContainer}` : `${defaultStyle} ${styles.columnContainer}`;
            setCardContainerStyle(newStyle);
        }
    }, [job])

    return (
        <Card id='experienceCard'>
                    <Card.Body>
                        <Card.Title id='experienceCardTitle'>
                            {job.name}
                        </Card.Title>
                        <div className={cardContainerStyle}>
                            <Card.Text className={styles.cardDesc}>
                                {job.description}
                                <ResumeButton jobName={job.name}></ResumeButton>
                            </Card.Text>
                            <div className={styles.cardListButtonContainer}>
                                {!job.tech || !job.tech.length
                                    ? null
                                    : <div>
                                        <h5 className='list-title'>Tech Used</h5>
                                        <hr />
                                        <ul className='list'>
                                            {job.tech.map((tech, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Card.Text>
                                                            {tech}
                                                        </Card.Text>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                }
                                <Button
                                    variant="light"
                                    size="lg"
                                    className={styles.cardButton}
                                    onClick={() => showModal(job)}>
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer className={styles.cardFooter}>
                        {!job.techIcons || !job.techIcons.length ? null :
                            job.techIcons.map((icon) => {
                                return (
                                    <i key={icon} className={`devicon-${icon} colored`}></i>
                                )
                            })}
                    </Card.Footer>
                </Card>
    );
}

export default ExperienceCard;