import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footCopyPolicyGroup}>
                <span className={styles.footCopyright}>
                    &copy; 2025 meshae studios. all rights reserved.
                </span>
                <span className={styles.footDivider}>|</span>
                <a
                    className={styles.footerLink}
                    href="mailto:admin@meshaestudios.com"
                >
                    admin@meshaestudios.com
                </a>
            </div>
        </footer>
    );
}
