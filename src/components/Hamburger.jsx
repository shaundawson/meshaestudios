import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Hamburger.module.css';

const menuItems = [
    { to: '/', label: 'home', number: '01' },
    { to: '/about', label: 'about', number: '02' },
    { to: '/designlab', label: 'design lab', number: '03' },
    { to: '/featureprojects', label: 'feature projects', number: '04' },
    { to: '/contact', label: 'contact', number: '05' }
];

const externalLinks = [
    { href: 'https://www.youtube.com/@meshaestudios', label: 'youtube' },
    { href: 'https://vimeo.com/meshaestudios', label: 'vimeo' },
    { href: 'https://instagram.com/meshae_studios', label: 'instagram' }
];

export default function Hamburger() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.iconSidebarWrapper}>
            <button
                className={styles.icon}
                aria-label="Open menu"
                onClick={() => setOpen(true)}
            >
                <span className={styles.menuLabelTop}>menu</span>
                <span className={`${styles.hamburgerLine} ${styles.lineShort}`}></span>
                <span className={`${styles.hamburgerLine} ${styles.lineMedium}`}></span>
                <span className={`${styles.hamburgerLine} ${styles.lineLong}`}></span>
            </button>
            <aside className={`${styles.sidebar}${open ? ` ${styles.open}` : ''}`}>
                <button
                    className={styles.close}
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                >×</button>

                {/* Brand Block */}
                <div className={styles.brandBlock}>
                    <Link to="/" className={styles.brandTitle} style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>
                        <span className={styles.meshae}>meshae</span>
                        <span className={styles.studios}>studios</span>
                    </Link>
                </div>

                {/* Tagline - multi-line with bold move/culture */}
                <div className={styles.missionBlock}>
                    <div className={styles.missionText}>
                        shaping stories<br />
                        that <span className={styles.moveBold}>move</span> <span className={styles.cultureBold}>culture.</span>
                    </div>
                </div>

                {/* Menu */}
                <div className={styles.menuSection}>
                    <div className={styles.sectionLabel}>/ menu</div>
                    <nav className={styles.menuNav}>
                        {menuItems.map(item =>
                            <Link
                                key={item.to}
                                to={item.to}
                                className={styles.menuItem}
                                onClick={() => setOpen(false)}
                            >
                                <span className={styles.menuNumber}>{item.number}</span>
                                <span className={styles.menuText}>{item.label}</span>
                            </Link>
                        )}
                    </nav>
                </div>

                {/* Social links */}
                <div className={styles.externalGroup}>
                    <div className={styles.sectionLabel}>/ follow</div>
                    <div className={styles.externalLinks}>
                        {externalLinks.map(link =>
                            <a
                                key={link.href}
                                href={link.href}
                                className={styles.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        )}
                    </div>
                </div>

                <div className={styles.flexGrow} />

                {/* Footer */}
                <footer className={styles.footerBio}>
                    <div className={styles.footerText}>
                        meshae studios is a creative studio shaping disruptive, justice-driven narratives through award-winning storytelling and software engineering.
                    </div>
                </footer>
            </aside>
            {open && (
                <div
                    className={styles.overlay}
                    onClick={() => setOpen(false)}
                />
            )}
        </div>
    );
}
