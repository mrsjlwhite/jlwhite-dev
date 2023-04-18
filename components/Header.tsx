import styles from '@/styles/header.module.scss';
import header from '@/imgs/header.jpeg';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

function Header() {
    return (
        <header className={styles.header}>
            <Image
                className={styles.headerImg}
                src={header}
                alt='Bright blue skies with a green forest, and a Westfalia hidden between the trees.'
            />
            <div className={styles.textContainer}>
                <span className={styles.headerName}>Jeslyn Le&oacute;n White</span>
                <TypeAnimation
                    sequence={[
                        'developer', // Types
                        2000, // Waits
                        'engineer', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'coffee addict',
                        3000,
                        'driven',
                        2000
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className={styles.headerMeta}
                />
            </div>
        </header>
    );
};

export default Header;