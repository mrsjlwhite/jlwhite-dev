import { useEffect, useState } from 'react';
import styles from '@/styles/experienceCard.module.scss';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Experience from '@/interfaces/experience';

type Props = {
    job: Experience
    showModal: (job: Experience) => void
}

function ExperienceCard({ job, showModal }: Props) {
    const defaultStyle = styles.cardTextContainer;
    const [cardContainerStyle, setCardContainerStyle] = useState(defaultStyle);
    const [theJob, setCardJob] = useState(null);

    useEffect(() => {
        if (job) {
            const isTechJob = job.tech && job.tech.length ? true : false;
            const newStyle = isTechJob ? `${defaultStyle} ${styles.gridContainer}` : `${defaultStyle} ${styles.columnContainer}`;
            setCardContainerStyle(newStyle);
            setCardJob(job);
        }
    }, [job])

    return (
        <Card className={styles.experienceCard}>
            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.experienceCardTitle}>
                    {theJob.name}
                </Card.Title>
                <div className={cardContainerStyle}>
                    <Card.Text className={styles.cardDesc}>
                        {theJob.description}
                    </Card.Text>
                    <div className={styles.cardListButtonContainer}>
                        {!theJob.tech || !theJob.tech.length
                            ? null
                            : <div>
                                <h5 className='section-title'>Tech Used</h5>
                                <hr />
                                <ul className='section-body'>
                                    {theJob.tech.map((tech, index) => {
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
                            onClick={() => showModal(theJob)}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className={styles.cardFooter}>
                {!theJob.techIcons || !theJob.techIcons.length ? null
                    : theJob.techIcons.map((icon) => <i key={icon} className={`devicon-${icon} colored`}></i>)}
            </Card.Footer>
        </Card>
    );
}

export default ExperienceCard;