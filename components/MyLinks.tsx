import { Button, Container } from 'react-bootstrap';
import styles from '@/styles/myLinks.module.scss';
// import { EnvelopeHeart, CupHot } from 'react-bootstrap-icons';
import { EnvelopeHeart } from 'react-bootstrap-icons';
import LinkUrls from '../data/linkUrls';

function MyLinks() {

    const openLink = (url) => window.open(url, '_blank', 'noreferrer');
    const sendEmail = () => window.open(`mailto:${LinkUrls.get('email')}`);

    return (
        <section id='my-links' className={styles.linksSection}>
            <Container>
                <h4 className='section-title'>my links.</h4>
                <Button
                    size='lg'
                    className={styles.linkButton}
                    onClick={() => openLink(LinkUrls.get('github'))}>
                    <i className="devicon-github-original"></i>
                    <span className={styles.buttonText}>GitHub</span>
                </Button>
                <Button
                    size='lg'
                    className={styles.linkButton}
                    onClick={() => openLink(LinkUrls.get('linkedin'))}>
                    <i className="devicon-linkedin-plain"></i>
                    <span className={styles.buttonText}>LinkedIn</span>
                </Button>
                <Button
                    size='lg'
                    className={styles.linkButton}
                    onClick={sendEmail}>
                    <EnvelopeHeart size={100} />
                    <span className={styles.buttonText}>Email Me</span>
                </Button>
                {/* <Button size='lg' className='link-button' onClick={() => openLink(LinkUrls.get('blog'))}>
                    <CupHot size={100}></CupHot>
                    <span className='button-text'>My Blog</span>
                </Button> */}
            </Container>
        </section>
    )
}

export default MyLinks;