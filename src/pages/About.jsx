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
                                Meshae Studios exists because stories matter. Real stories. The kind that expose what's been hidden and create space for something different to happen. We're filmmakers and engineers and strategists all rolled into one, which means we know how to build narratives that actually reach people and create measurable impact.
                            </p>
                            <p>
                                Here's the thing: if you're doing work that matters, you need people in the room who get both sides. The artistry and the architecture. We work with filmmakers, nonprofits, and founders who refuse to settle for surface level. We help you make work that's thoughtful, rigorous, and designed to land. That's it. That's what we do.
                            </p>
                            <div className={styles.characteristicsBlock}>
                                <span className={styles.characteristicsLabel}> what we do</span>
                                <div className={styles.characteristics}>
                                    <span className={styles.tag}>documentary</span>
                                    <span className={styles.tag}>activism</span>
                                    <span className={styles.tag}>web design</span>
                                    <span className={styles.tag}>web series</span>
                                    <span className={styles.tag}>podcast</span>
                                    <span className={styles.tag}>creative direction</span>
                                    <span className={styles.tag}>technical consulting</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.aboutSideText}>
                            <p>
                                Led by <a href="https://iamsdawson.com" target="_blank" rel="noopener noreferrer">Shaun Dawson</a>, a Black nonbinary filmmaker and engineer, we believe that craft is a form of respect. Every detail matters because the work matters. Every project gets our full attention, our full skill set, and our full commitment to make something that shifts things.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
