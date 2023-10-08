import styles from './experienceModal.module.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Experience from '@/interfaces/experience';
import { useEffect, useState } from 'react';
import { emptyJob } from '@/data/emptyJobExperience';
import { Josefin_Sans, Roboto_Slab } from 'next/font/google'; // Modal doesn't have access to CSS variables
import TechIcon from './TechIcon';

const fontSubHeading = Josefin_Sans({
    weight: ['100', '200', '300'],
    subsets: ['latin'],
    variable: '--font-sub-heading'
});
const fontBody = Roboto_Slab({
    weight: ['100', '200', '300', '400'],
    subsets: ['latin'],
    variable: '--font-body'
});

type Props = {
    show: boolean
    onHide: () => void
    job: Experience
}

function ExperienceModal({ show, onHide, job }: Props) {
    const [modalJob, setModalJob] = useState<Experience>(emptyJob);

    useEffect(() => {
        if (job) {
            setModalJob(job)
        }
    }, [job])

    const bodyTitleStyles = `${fontSubHeading.className} ${styles.bodySectionText}`;
    const bodyTextStyles = `${styles.modalBodyText} ${fontBody.className}`;

    return (
        <Modal
            show={show}
            size="lg"
            scrollable
            centered
            onHide={onHide}>
            <Modal.Header className={styles.purpleBackground}>
                <Modal.Title className={`${styles.modalTitle} ${fontSubHeading.className}`}>
                    <h3>{modalJob.name} &#124; {modalJob.title}</h3>
                    <h5>{modalJob.time}</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.offWhiteBackground}>
                <h6 className={bodyTitleStyles}>
                    about the company.
                </h6>
                <p className={bodyTextStyles}>
                    {modalJob.description}
                </p>
                <h6 className={bodyTitleStyles}>
                    things i did.
                </h6>
                <ul>
                    {modalJob.fullDescription.map((desc, index) => {
                        return (
                            <li key={index} className={bodyTextStyles}>
                                {desc}
                            </li>
                        )
                    })}
                </ul>
                {!modalJob.techIcons || !modalJob.techIcons.length ? null :
                    <>
                        <h6 className={`${styles.techIconsContainer} ${bodyTitleStyles}`}>
                            tech i used.
                            {modalJob.techIcons.map((icon) => <TechIcon key={icon} icon={icon} />)}
                        </h6>
                        <ul>
                            {modalJob.tech.map((tech, index) => {
                                return (
                                    <li key={index} className={bodyTextStyles}>
                                        {tech}
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                }
            </Modal.Body>
            <Modal.Footer className={styles.purpleBackground}>
                <Button
                    onClick={onHide}
                    className='green-button'
                    variant="light">
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ExperienceModal;