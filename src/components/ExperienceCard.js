import { useEffect, useState } from 'react';
import '../styles/experienceCard.scss'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ExperienceCard({ job, showModal }) {
    const defaultStyle = 'card-text-container';
    const [cardContainerStyle, setCardContainerStyle] = useState(defaultStyle);

    useEffect(() => {
        if (job) {
            const isTechJob = job.tech && job.tech.length ? true : false;
            const newStyle = isTechJob ? `${defaultStyle} grid-container` : `${defaultStyle} column-container`;
            setCardContainerStyle(newStyle);
        }
    }, [job])


    return (
        <>
            {!job ? null
                :
                <Card className='experience-card'>
                    <Card.Body>
                        <Card.Title className='card-title'>
                            {job.name}
                        </Card.Title>
                        <div className={cardContainerStyle}>
                            <Card.Text className='card-desc'>
                                {job.description}
                            </Card.Text>
                            <div className='card-list-button-container'>
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
                                    className='card-button'
                                    onClick={() => showModal(job)}>
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer className='card-footer'>
                        {!job.techIcons || !job.techIcons.length ? null :
                            job.techIcons.map((icon) => {
                                return (
                                    <i key={icon} className={`devicon-${icon} colored`}></i>
                                )
                            })}
                    </Card.Footer>
                </Card>
            }
        </>
    );
}

export default ExperienceCard;