import styles from './socialsIcons.module.scss';
import SocialIconImage, { IconSize } from './SocialIconImage';
import { linkUrls } from 'core/data/linkUrls';

function SocialsIcons() {
    return (
        <div className={styles.socialsContainer}>
            {linkUrls.map(lu => <SocialIconImage link={lu} size={IconSize.small} key={lu.name} />)}
        </div>
    )
}

export default SocialsIcons;