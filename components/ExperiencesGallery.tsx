import styles from '@/styles/experiencesGallery.module.scss'
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExperienceCard from './ExperienceCard';
import LoadingIcon from './LoadingIcon';
import MyModal from './MyModal';

type Props = {
    experiences: any
    isMobile: any
}

function ExperiencesGallery({ experiences, isMobile }: Props) {
    const defaultCarouselTime = 10000;

    const [jobs, setJobs] = useState([]);
    const [index, setIndex] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [carouselTime, setCarouselTime] = useState(defaultCarouselTime);

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
            <h4 className={`section-title ${styles.experienceGallerySectionTitle}`}>my experience.</h4>
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
                                    <div className={styles.cardContainer}>
                                        <ExperienceCard job={jobPair[0]} showModal={showModal} />
                                        <ExperienceCard job={jobPair[1]} showModal={showModal} />
                                    </div>
                                </Carousel.Item>
                            )
                        })}
                </Carousel>
            }
            <MyModal
                show={modalShow}
                onHide={hideModal}
                job={selectedJob} />
        </section >
    )
}

export default ExperiencesGallery;