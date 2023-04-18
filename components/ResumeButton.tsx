import styles from '@/styles/resumeButton.module.scss';
import LinkUrls from "../data/linkUrls";
import Button from 'react-bootstrap/Button';
import { openLink } from '@/lib/utils';

type Props = {
    jobName: string
}

function ResumeButton({ jobName }: Props) {
    if (jobName !== 'TL;DR') {
        return <></>
    }

    return (
        <Button
            variant="light"
            size="lg"
            className={styles.resumeButton}
            onClick={() => openLink(LinkUrls.get('resume'))}>
            Download Resume
        </Button>
    )
};

export default ResumeButton;