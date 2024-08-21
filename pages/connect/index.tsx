import styles from './connect.module.scss';
import { IconSize } from "@/components/socialsIcons/SocialIconImage"
import SocialsIcons from "@/components/socialsIcons/SocialsIcons"
import PageContainer from "core/components/containers/PageContainer"
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect'

const Connect = () => {
    const [iconSize, setIconSize] = useState(IconSize.large);

    useEffect(() => {
        const sizes = isMobile ? IconSize.small : IconSize.large;
        setIconSize(sizes);
    }, []);

    return (
        <PageContainer>
            <div className={styles.pageContentText}>
                <p>Want to discuss potential projects? Me too!</p>
                <p>Message me on any of the platforms below.</p>
                <SocialsIcons iconSize={iconSize} messagingOnly withHoverOverlay />
            </div>
        </PageContainer>
    )
}

export default Connect