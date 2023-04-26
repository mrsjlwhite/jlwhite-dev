import styles from '@/styles/myExperience.module.scss'
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExperienceCard from './ExperienceCard';
import LoadingIcon from '../shared/LoadingIcon';
import ExperienceModal from './ExperienceModal';
import Experience from '@/interfaces/experience';
import { Container } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { tldr } from '@/data/tldrExperience';
import TechIcon from './TechIcon';

type Props = {
    experiences: Experience[]
}

function MyExperience({ experiences }: Props) {
    const defaultCarouselTime = 10000;

    const [jobs, setJobs] = useState([]);
    const [index, setIndex] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Experience>(null);
    const [carouselTime, setCarouselTime] = useState(defaultCarouselTime);
    const [experienceSummary, setExperienceSummary] = useState<Experience>(null);

    useEffect(() => {
        if (!experiences.length) {
            return;
        }

        if (isMobile) {
            return setJobs(experiences);
        }

        const jobPairs = experiences.reduce((accumulator, currentValue, currentIndex, array) => {
            if (currentIndex % 2 === 0) {
                accumulator.push(array.slice(currentIndex, currentIndex + 2));
            }
            return accumulator;
        }, []);

        setJobs(jobPairs);
    }, [isMobile, experiences]);

    useEffect(() => {
        if (tldr) {
            setExperienceSummary(tldr);
        }
    }, [tldr])

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);

    const showModal = (job: Experience) => {
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
            <h4 className='section-title section-title-margin'>my experience.</h4>
            <div className='m-4'>
                {!experienceSummary ? null : (
                    <div className={styles.summarySection}>
                        <h5 className='section-title'>{experienceSummary.name.toLowerCase()}</h5>
                        <h6 className='section-title'>
                            <small>{experienceSummary.time}</small>
                        </h6>
                        <div className={styles.summaryDetailsContainer}>
                            <div>
                                <p className='section-body pr-4 pl-4'>
                                    {experienceSummary.description}
                                </p>
                                <p className='m-4'>
                                    {experienceSummary.techIcons.map((icon) => <TechIcon key={icon} icon={icon} className='m-1' />)}
                                </p>
                            </div>
                            <ul>
                                {experienceSummary.fullDescription.map((desc, index) => {
                                    return (
                                        <li key={index} >
                                            <p className='section-body'>
                                                🌳 {desc}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            {!jobs || !jobs.length
                ?
                <LoadingIcon />
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
                                    <div className={styles.cardContainer}>
                                        <ExperienceCard job={job} showModal={showModal} />
                                    </div>
                                </Carousel.Item>
                            )
                        })
                        : jobs.map((jobPair, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <Container className={styles.cardContainer}>
                                        <ExperienceCard job={jobPair[0]} showModal={showModal} />
                                        {jobPair[1] ? <ExperienceCard job={jobPair[1]} showModal={showModal} /> : null}
                                    </Container>
                                </Carousel.Item>
                            )
                        })}
                </Carousel>
            }
            <ExperienceModal
                show={modalShow}
                onHide={hideModal}
                job={selectedJob} />
        </section >
    )
}

export default MyExperience;