'use client'

import styles from './contact.module.scss'
import { IconSize } from "@/components/socialsIcons/SocialIconImage"
import SocialsIcons from "@/components/socialsIcons/SocialsIcons"
import PageContainer from "@/components/containers/PageContainer"
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

const Connect = () => {
    const [iconSize, setIconSize] = useState(IconSize.large);

    useEffect(() => {
        const sizes = isMobile ? IconSize.small : IconSize.large;
        setIconSize(sizes);
    }, []);

    return (
        <PageContainer>
            <div className={styles.pageContentContainer}>
                <p>Want to discuss potential projects? Me too!</p>
                <p>Message me on any of the platforms below.</p>
                <div className={styles.iconsContainer}>
                    <SocialsIcons iconSize={iconSize} messagingOnly withHoverOverlay />
                </div>
            </div>
        </PageContainer>
    )
}

export default Connect