import { Button, Container } from 'react-bootstrap';
import styles from './myLinks.module.scss';
import { openLink } from '@/lib/utils';
import ILinkUrl from '@/interfaces/linkUrl';
import SocialIconImage, { IconSize } from '../shared/SocialIconImage';
import { linkUrls } from '@/data/linkUrls';

function MyLinks() {
    const renderSocialButton = (linkUrl: ILinkUrl): JSX.Element => {
        return (
            <Button
                key={linkUrl.name}
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
                    {linkUrls.map(lu => renderSocialButton(lu))}
                </div>
            </Container>
        </section>
    )
}

export default MyLinks;