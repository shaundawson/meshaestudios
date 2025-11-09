import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.bgImage} role="img" aria-label="Poster portrait background" />
        </div>
    );
}
