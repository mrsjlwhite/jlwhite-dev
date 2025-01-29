'use client'
import styles from './socialsIcons.module.scss';
import SocialIconImage, { IconSize } from './SocialIconImage';
import { linkUrls } from 'core/data/linkUrls';
import { useEffect, useState } from 'react';
import ILinkUrl from '@/interfaces/linkUrl';

function SocialsIcons({ iconSize = IconSize.small, messagingOnly = false, columnLayout = false }) {
    const [links, setLinks] = useState<ILinkUrl[]>([]);
    const [stylesClasses, setStyleClasses] = useState('');

    useEffect(() => {
        const linksToDisplay = messagingOnly ? linkUrls.filter(j => j.allowsMessaging) : linkUrls;
        setLinks(linksToDisplay);

        setStyleClasses(columnLayout ? `${styles.socialsIconsContainer} ${styles.iconsColumn}` : `${styles.socialsIconsContainer} ${styles.iconsRow}`);
    }, []);

    return (
        <div className={stylesClasses}>
            {links.map(lu => <SocialIconImage link={lu} size={iconSize} key={lu.name} />)}
        </div>
    )
}

export default SocialsIcons;