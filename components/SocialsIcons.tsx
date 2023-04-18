import styles from '@/styles/socialsIcons.module.scss';
import LinkUrls from '@/data/linkUrls';
import LinkUrl from '@/interfaces/linkUrl';
import SocialIconImage from './SocialIconImage';

function SocialsIcons() {
    const renderSocialIcon = (linkUrl: LinkUrl): JSX.Element => <SocialIconImage link={linkUrl} size={20} />

    return (
        <div className={styles.socialsContainer}>
            {renderSocialIcon(LinkUrls.get('github'))}
            {renderSocialIcon(LinkUrls.get('linkedin'))}
            {renderSocialIcon(LinkUrls.get('instagram'))}
            {renderSocialIcon(LinkUrls.get('twitter'))}
        </div>
    )
}

export default SocialsIcons;