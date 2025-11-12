import React, { useState, useEffect } from 'react';
import styles from '../styles/ScrollToTopArrow.module.css';

export default function ScrollToTopArrow() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > window.innerHeight * 0.5);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return show ? (
        <button
            aria-label="Back to top"
            className={styles.arrowUp}
            onClick={scrollToTop}
        >
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="1" y="1" width="40" height="40" stroke="rgba(204, 85, 0, 0.15)" strokeWidth="0.5" fill="linear-gradient(135deg, rgba(250, 250, 250, 0.12) 0%, rgba(250, 250, 250, 0.05) 100%)" />
                <path d="M12 24 L21 15 L30 24" stroke="#cc5500" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
            </svg>
        </button>
    ) : null;
}
