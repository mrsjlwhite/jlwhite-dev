'use client'

import NavTaskbar from '@/components/navTaskbar/NavTaskbar';
import styles from '@/styles/home.module.scss';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';

export default function HomePage() {
    return (
        <div className={styles.gridOverlay}>
            <NavTaskbar />
        </div>
    )
}