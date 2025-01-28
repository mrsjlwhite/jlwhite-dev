'use client'

import styles from './contact.module.scss'
import { IconSize } from "@/components/socialsIcons/SocialIconImage"
import SocialsIcons from "@/components/socialsIcons/SocialsIcons"
import PageContainer from "@/components/containers/PageContainer"

const Contact = () => {
    return (
        <PageContainer>
            <div className={styles.pageContentContainer}>
                <div className={styles.contactCard}>
                    <p>
                        I’d love to hear from you—whether it’s to discuss a potential project, share ideas, or just connect.
                        Not ready to reach out yet? No worries, I’m shy too.
                    </p>
                    <p>
                        Feel free to message me on any of the platforms below. Let’s make something awesome together!
                    </p>
                    <div className={styles.iconsContainer}>
                        <SocialsIcons iconSize={IconSize.large} messagingOnly />
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default Contact