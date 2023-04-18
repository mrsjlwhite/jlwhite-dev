import styles from '@/styles/myModal.module.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Experience from '@/interfaces/experience';

type Props = {
    show: boolean
    onHide: () => void
    job: Experience
}

function ExperienceModal({ show, onHide, job }: Props) {
    if (!job) {
        return <></>
    }

    return (
        <Modal
            show={show}
            size="lg"
            scrollable
            centered
            onHide={onHide}
            className={styles.myModal}>
            <Modal.Header className={styles.myModalHeader}>
                <Modal.Title className={styles.myModalTitle}>
                    <h3>{job.name} &#124; {job.title}</h3>
                    <h5>{job.time}</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.myModalBody}>
                <h6>about the company.</h6>
                <p>{job.description}</p>
                <h6>things i did.</h6>
                <ul>
                    {job.fullDescription.map((desc, index) => {
                        return (
                            <li key={index}>
                                {desc}
                            </li>
                        )
                    })}
                </ul>
                {!job.techIcons || !job.techIcons.length ? null :
                    <>
                        <h6 className={styles.techIconsContainer}>
                            tech i used.
                            {job.techIcons.map((icon) => {
                                return (
                                    <i key={icon} className={`devicon-${icon} colored`}></i>
                                )
                            })}
                        </h6>
                        <ul className='list'>
                            {job.tech.map((tech, index) => {
                                return (
                                    <li key={index}>
                                        {tech}
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                }
            </Modal.Body>
            <Modal.Footer className={styles.myModalFooter}>
                <Button
                    onClick={onHide}
                    className={styles.myModalButton}
                    variant="light">
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ExperienceModal;