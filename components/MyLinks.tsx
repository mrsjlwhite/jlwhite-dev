import { Button, Container } from 'react-bootstrap';
import styles from '@/styles/myLinks.module.scss';
// import { EnvelopeHeart, CupHot } from 'react-bootstrap-icons';
import LinkUrls from '@/data/linkUrls';
import { openLink } from '@/lib/utils';
import LinkUrl from '@/interfaces/linkUrl';
import SocialIconImage from './SocialIconImage';

function MyLinks() {

    // const sendEmail = () => window.open(`mailto:${LinkUrls.get('email')}`);

    const renderSocialButton = (linkUrl: LinkUrl): JSX.Element => {
        return (
            <Button
                size='lg'
                className={styles.linkButton}
                onClick={() => openLink(linkUrl.url)}>
                <SocialIconImage link={linkUrl} />
                <span className={styles.buttonText}>
                    {linkUrl.name}
                </span>
            </Button>
        )
    }

    return (
        <section id='my-links' className={styles.linksSection}>
            <Container className={styles.linksSectionContainer}>
                <h4 className='section-title'>my links.</h4>
                {renderSocialButton(LinkUrls.get('github'))}
                {renderSocialButton(LinkUrls.get('linkedin'))}
                {renderSocialButton(LinkUrls.get('instagram'))}
                {renderSocialButton(LinkUrls.get('twitter'))}
                {/* <Button
                    size='lg'
                    className={styles.linkButton}
                    onClick={sendEmail}>
                    <EnvelopeHeart size={100} />
                    <span className={styles.buttonText}>Email Me</span>
                </Button>
                <Button size='lg' className='link-button' onClick={() => openLink(LinkUrls.get('blog'))}>
                    <CupHot size={100}></CupHot>
                    <span className='button-text'>My Blog</span>
                </Button> */}
            </Container>
        </section>
    )
}

export default MyLinks;