import React from 'react';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.bgWrapper}>
            <div className={styles.aboutGrid}>
                <div className={styles.aboutOverlay}>
                    <h1 className={styles.aboutTitle}>about</h1>
                    <div className={styles.aboutContentBlock}>
                        <div className={styles.aboutMainText}>
                            <p>
                                Meshae Studios shapes narratives for meaningful impact in culture. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales enim eu turpis cursus, id dictum libero feugiat. Pellentesque eu efficitur erat. Morbi aliquet risus sem, a semper neque gravida nec.
                            </p>
                            <p>
                                Nunc in volutpat eros, ac dictum libero. Ut dictum, turpis sit amet facilisis commodo, urna turpis posuere sem, at pretium magna vestibulum ac. Fusce malesuada turpis vitae magna pulvinar pretium. In commodo risus in massa dictum, et cursus erat posuere.
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
                                This studio operates with a belief that honest storytelling shapes the future. Integer accumsan, felis ut imperdiet fermentum, enim velit euismod lectus, vitae mollis arcu augue nec mi. In 2025, we continue to push boundaries while working closely with partners and brands that value authenticity. Morbi in imperdiet mi, ac feugiat mauris. Quisque vitae imperdiet magna. Sed ut turpis et eros tincidunt tincidunt vel in nisl. Integer quis nisi sed odio posuere feugiat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
