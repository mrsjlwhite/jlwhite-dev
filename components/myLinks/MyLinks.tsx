import { Container } from 'react-bootstrap';
import styles from './myLinks.module.scss';
import { IconSize } from 'components/socialsIcons/SocialIconImage';
import SocialsIcons from '../socialsIcons/SocialsIcons';

function MyLinks() {
    return (
        <section id='my-links' className={`home-section ${styles.linksSection}`}>
            <Container className={styles.linksSectionContainer}>
                <p>
                    I’d love to hear from you—whether it’s to discuss a potential project, share ideas, or just connect.
                    Feel free to message me on any of these platforms.
                </p>
                <div className={styles.iconsContainer}>
                    <SocialsIcons iconSize={IconSize.large} />
                </div>
            </Container>
        </section>
    )
}

export default MyLinks;