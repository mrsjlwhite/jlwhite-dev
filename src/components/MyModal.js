import '../styles/myModal.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ResumeButton from './ResumeButton';

function MyModal(props) {
    const { show, onHide, job } = props;

    return (
        <>
            {!job ? null :
                <Modal
                    show={show}
                    size="lg"
                    scrollable
                    centered
                    onHide={onHide}
                    className='my-modal'>
                    <Modal.Header className='my-modal-header'>
                        <Modal.Title className='my-modal-title'>
                            <h3>{job.name} &#124; {job.title}</h3>
                            <h5>{job.time}</h5>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='my-modal-body'>
                        <h6>about the company.</h6>
                        <p>{job.description}</p>
                        <ResumeButton jobName={job.name}></ResumeButton>
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
                                <h6 className='tech-icons-container'>
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
                    <Modal.Footer className='my-modal-footer'>
                        <Button
                            onClick={onHide}
                            className='my-modal-button'
                            variant="light">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
    );
}

export default MyModal;