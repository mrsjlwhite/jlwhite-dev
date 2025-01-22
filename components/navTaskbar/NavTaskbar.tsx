import { useEffect, useState } from 'react';
import styles from './navTaskbar.module.scss';
// import SocialsIcons from 'core/components/socialsIcons/SocialsIcons';

function NavTaskbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    }
  });

  return (
    <footer className={styles.footer}>
      <a className={styles.startButton}></a>
      {/* <SocialsIcons /> */}
      <div className={styles.timeBox}>
        &#169; Developed by J.L. White 🤍 
        {time.toLocaleTimeString()}
      </div>
    </footer>
  )
}

export default NavTaskbar;