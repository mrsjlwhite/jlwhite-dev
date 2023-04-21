import styles from '@/styles/socialsIcons.module.scss';
import LinkUrls from '@/data/linkUrls';
import LinkUrl from '@/interfaces/linkUrl';
import SocialIconImage, { IconSize } from '../shared/SocialIconImage';

function SocialsIcons() {
    const renderSocialIcon = (linkUrl: LinkUrl): JSX.Element => <SocialIconImage link={linkUrl} size={IconSize.small} />

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