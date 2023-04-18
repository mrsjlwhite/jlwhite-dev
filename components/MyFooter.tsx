import styles from '@/styles/myFooter.module.scss';
import SocialsIcons from './SocialsIcons';

function MyFooter() {
  return (
    <footer className={styles.myFooter}>
      <SocialsIcons />
      Copyright &#169; Developerd by J.L. White 🤍
    </footer>
  )
}

export default MyFooter;