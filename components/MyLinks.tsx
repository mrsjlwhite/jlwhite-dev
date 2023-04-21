import { Button, Container } from 'react-bootstrap';
import styles from '@/styles/myLinks.module.scss';
import LinkUrls from '@/data/linkUrls';
import { openLink } from '@/lib/utils';
import LinkUrl from '@/interfaces/linkUrl';
import SocialIconImage, { IconSize } from './shared/SocialIconImage';

function MyLinks() {
    const renderSocialButton = (linkUrl: LinkUrl): JSX.Element => {
        return (
            <Button
                size='lg'
                className={styles.linkButton}
                onClick={() => openLink(linkUrl.url)}>
                <SocialIconImage link={linkUrl} size={IconSize.large} />
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
                <div className={styles.buttonsContainer}>
                    {renderSocialButton(LinkUrls.get('github'))}
                    {renderSocialButton(LinkUrls.get('linkedin'))}
                    {renderSocialButton(LinkUrls.get('instagram'))}
                    {renderSocialButton(LinkUrls.get('twitter'))}
                </div>
            </Container>
        </section>
    )
}

export default MyLinks;