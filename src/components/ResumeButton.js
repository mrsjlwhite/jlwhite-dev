import '../styles/resumeButton.scss';
import LinkUrls from "../data/linkUrls";
import Button from 'react-bootstrap/Button';

function ResumeButton({ jobName }) {

    const goToResume = () => window.open(LinkUrls.get('resume'), '_blank', 'noreferrer');

    return (
        <>
            {jobName !== 'TL;DR' ? null :
                <Button
                    variant="light"
                    size="lg"
                    id='resumeButton'
                    onClick={goToResume}>
                    Download Resume
                </Button>
            }
        </>
    )
};

export default ResumeButton;