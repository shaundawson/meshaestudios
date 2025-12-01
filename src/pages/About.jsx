import React from 'react';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.bgWrapper}>
            <div className={styles.aboutGrid}>
                <div className={styles.aboutOverlay}>
                    <h1 className={styles.aboutTitle}>
                        <span className={styles.headingNum}>02</span>{" "}
                        <span className={styles.headingMain}>about</span>
                    </h1>
                    <div className={styles.aboutContentBlock}>
                        <div className={styles.aboutMainText}>
                            <p>
                                Meshae Studios crafts stories that move culture. We're filmmakers and designers who know how to make work that's both beautiful and built to land. We work with people who refuse to settle for surface level.
                            </p>
                            <p>
                                Whether it's a documentary that shifts perspective, a website that reflects your vision, or a campaign with substance, we bring the same rigor to every project. Craft is respect. Every detail matters because the work matters.
                            </p>
                            <div className={styles.characteristicsBlock}>
                                <span className={styles.characteristicsLabel}> what we do</span>
                                <div className={styles.characteristics}>
                                    <span className={styles.tag}>film production</span>
                                    <span className={styles.tag}>web design & development</span>
                                    <span className={styles.tag}>graphic design</span>
                                    <span className={styles.tag}>creative direction</span>
                                    <span className={styles.tag}>documentary</span>
                                    <span className={styles.tag}>strategic storytelling</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.aboutSideText}>
                            <p>
                                Led by <a href="https://www.iamsdawson.com" target="_blank" rel="noopener noreferrer">Shaun Dawson</a>, a filmmaker and front-end developer working at the intersection of race, technology, and social justice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
