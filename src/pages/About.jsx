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
                                Meshae Studios turns hidden truths into movements for change. We blend filmmaking with engineering and product strategy to build narratives that reach people and drive real results. Every project is crafted for intentional reach, combining artistic vision with technical precision and systematic measurement.
                            </p>
                            <p>
                                Purpose driven organizations need more than a good story. They need partners who speak both creative and technical fluently. We work with filmmakers, nonprofits, and mission driven founders to craft work that's brave, rigorous, and built to land.
                            </p>
                            <div className={styles.characteristicsBlock}>
                                <span className={styles.characteristicsLabel}>characteristics</span>
                                <div className={styles.characteristics}>
                                    <span className={styles.tag}>visual storytelling</span>
                                    <span className={styles.tag}>documentary</span>
                                    <span className={styles.tag}>activism</span>
                                    <span className={styles.tag}>collaboration</span>
                                    <span className={styles.tag}>filmmaking</span>
                                    <span className={styles.tag}>creative direction</span>
                                    <span className={styles.tag}>technical consulting</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.aboutSideText}>
                            <p>
                                Led by Shaun Dawson, a Black nonbinary filmmaker and engineer, Meshae Studios believes honest work changes culture. We're a team of storytellers, strategists, and builders committed to craft that matters. Every project is intentional, measured, and built to move things.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
