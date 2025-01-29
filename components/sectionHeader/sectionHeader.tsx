import styles from './sectionHeader.module.scss';

const SectionHeader = ({ title }) => {
    return (
        <div className={styles.sectionHeader}>
            <div className={styles.line}></div>
            <h4 className={`${styles.title} px-3`}>{title}</h4>
            <div className={styles.line}></div>
        </div>
    );
};

export default SectionHeader;