import styles from '@/styles/socialsIcons.module.scss';
import LinkUrls from '../data/linkUrls';
// import { CupHot } from 'react-bootstrap-icons';

function SocialsIcons() {
    // const renderSocialIcon = (socialName: string): JSX.Element => {
    //     switch (socialName) {
    //         case value:
                
    //             break;
        
    //         default:
    //             break;
    //     }
        
    //     return (
    //         <i className="devicon-github-original" onClick={() => openLink(LinkUrls.get('github'))}></i>
    //     )
    // }


    const openLink = (url) => window.open(url, '_blank', 'noreferrer');

    return (
        <div className={styles.socialsContainer}>
            <i className="devicon-github-original" onClick={() => openLink(LinkUrls.get('github'))}></i>
            <i className="devicon-linkedin-plain" onClick={() => openLink(LinkUrls.get('linkedin'))}></i>
            {/* <CupHot size={32} onClick={() => openLink(LinkUrls.get('blog'))}></CupHot> */}
        </div>
    )
}

export default SocialsIcons;