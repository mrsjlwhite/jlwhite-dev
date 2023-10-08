import styles from './myFooter.module.scss';
import SocialsIcons from '../shared/socialsIcons/SocialsIcons';

function MyFooter() {
  return (
    <footer className={styles.myFooter}>
      <SocialsIcons />
      Copyright &#169; Developed by J.L. White 🤍
    </footer>
  )
}

export default MyFooter;