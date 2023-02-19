import '../styles/experiencesGallery.scss';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import JobExperiences from '../data/jobExperiences';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';
import { Triangle } from 'react-loader-spinner';

function ExperiencesGallery() {
    const [jobs, setJobs] = useState([]);
    const [firstCardIndex, setIndex] = useState(0);

    useEffect(() => {
        const jobs = Array.from(JobExperiences);

        // const firstJobIndex = indexes[0];
        // const secondJobIndex = indexes[1] + 1;
        // const secondCardIndex = firstCardIndex + 2 > jobs.length ? firstCardIndex + 1 : firstCardIndex + 2;

        // const visibleCards = jobs.slice(firstCardIndex, secondCardIndex).map((job) => {
        //     job.style = 'show ';
        //     return job;
        // });
        // const hiddenCards = jobs.splice(secondCardIndex).map((job) => {
        //     job.style = 'hide ';
        //     return job;
        // });

        const visibleCard = jobs[firstCardIndex];
        visibleCard.style = 'show ';

        const hiddenCards = jobs.filter((job, index) => index !== firstCardIndex).map((job) => {
            job.style = 'hide ';
            return job;
        });

        if (!visibleCard || !hiddenCards) {
            return setJobs(JobExperiences);
        }

        setJobs([...hiddenCards]);

        setTimeout(() => {
            setJobs([visibleCard, ...hiddenCards]);
        }, 1000);

    }, [firstCardIndex]);

    const handlePrevious = () => {
        const newIndex = firstCardIndex - 1;
        const newFirstIndex = newIndex < 0 ? jobs.length - 1 : newIndex;
        setIndex(newFirstIndex - 1);
    };

    const handleNext = () => {
        const newIndex = firstCardIndex + 1;
        const newFirstIndex = newIndex >= jobs.length ? 0 : newIndex;
        setIndex(newFirstIndex);
    };

    return (
        <section id='my-experience' className='experience-section'>
            <Container>
                <h4 className='section-title'>my experience.</h4>
                <div className='section-body'>
                    <ArrowLeft
                        size={50}
                        className='arrow-icon'
                        onClick={handlePrevious} />
                    <CardGroup>
                        {!jobs || !jobs.length
                            ?
                            <div className='loading-icon'>
                                <Triangle
                                    height="150"
                                    width="150"
                                    color="#4fa94d"
                                    ariaLabel="triangle-loading"
                                    visible={true}
                                />
                            </div>
                            :
                            jobs.map((job, index) => {
                                return (
                                    <Card key={index} id={index} className={job.style + 'experience-card'}>
                                        <Card.Body>
                                            <Card.Title className={job.style + 'card-title'}>
                                                {job.name}
                                            </Card.Title>
                                            <div className='card-text-container'>
                                                <Card.Text className={job.style + 'card-desc'}>
                                                    {job.description}
                                                </Card.Text>
                                                <div>
                                                    <h5 className='list-title'>Tech Used</h5>
                                                    <hr />
                                                    <ul className={job.style}>
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
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    </CardGroup>
                    <ArrowRight
                        size={50}
                        className='arrow-icon'
                        onClick={handleNext} />
                </div>
            </Container>
        </section>
    )
}

export default ExperiencesGallery;