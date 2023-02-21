import '../styles/experiencesGallery.scss';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import JobExperiences from '../data/jobExperiences';
import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-bootstrap/Carousel';
import ExperienceCard from './ExperienceCard';
import LoadingIcon from './LoadingIcon';
import MyModal from './MyModal';

function ExperiencesGallery() {
    const defaultCarouselTime = 5000;

    const [jobs, setJobs] = useState([]);
    const [index, setIndex] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [carouselTime, setCarouselTime] = useState(defaultCarouselTime);


    const isMobile = useMediaQuery({ query: `(max-width: 650px)` });

    useEffect(() => {
        const jobs = Array.from(JobExperiences);

        if (isMobile) {
            return setJobs(jobs);
        }

        const jobPairs = jobs.reduce((accumulator, currentValue, currentIndex, array) => {
            if (currentIndex % 2 === 0) {
                accumulator.push(array.slice(currentIndex, currentIndex + 2));
            }
            return accumulator;
        }, []);

        setJobs(jobPairs);
    }, [isMobile]);

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);

    const showModal = (job) => {
        setSelectedJob(job);
        setModalShow(true);
        setCarouselTime(null);
    };

    const hideModal = () => {
        setModalShow(false);
        setSelectedJob(null);
        setCarouselTime(defaultCarouselTime);
    };

    return (
        <section id='my-experience'>
            <Container>
                <h4 className='section-title'>my experience.</h4>
                {!jobs || !jobs.length
                    ?
                    <div className='loading-icon-container'>
                        <LoadingIcon></LoadingIcon>
                    </div>
                    :
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        fade
                        indicators={false}
                        interval={carouselTime}>
                        {isMobile
                            ? jobs.map((job, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <div className='card-container'>
                                            <ExperienceCard job={job} showModal={showModal}></ExperienceCard>
                                        </div>
                                    </Carousel.Item>
                                )
                            })
                            : jobs.map((jobPair, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <div className='card-container'>
                                            <ExperienceCard job={jobPair[0]} showModal={showModal}></ExperienceCard>
                                            <ExperienceCard job={jobPair[1]} showModal={showModal}></ExperienceCard>
                                        </div>
                                    </Carousel.Item>
                                )
                            })}
                    </Carousel>
                }
                <MyModal
                    show={modalShow}
                    onHide={hideModal}
                    job={selectedJob}></MyModal>
            </Container >
        </section >
    )
}

export default ExperiencesGallery;