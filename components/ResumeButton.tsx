import styles from '@/styles/resumeButton.module.scss';
import LinkUrls from "../data/linkUrls";
import Button from 'react-bootstrap/Button';

type Props = {
    jobName: any
}

function ResumeButton({ jobName }: Props) {
    if (jobName !== 'TL;DR') {
        return <></>
    }

    const goToResume = () => window.open(LinkUrls.get('resume'), '_blank', 'noreferrer');

    return (
        <Button
            variant="light"
            size="lg"
            className={styles.resumeButton}
            onClick={goToResume}>
            Download Resume
        </Button>
    )
};

export default ResumeButton;