import { Triangle } from 'react-loader-spinner';
import styles from '@/styles/loadingIcon.module.scss';

function LoadingIcon() {
    return (
        <div className={styles.loadingIconContainer}>
            <div className={styles.loadingIcon}>
                <Triangle
                    height="150"
                    width="150"
                    color="#5A7557"
                    ariaLabel="triangle-loading"
                    visible={true}
                />
            </div>
        </div>
    );
}

export default LoadingIcon;