import React from 'react'
import Gallery from '../components/Gallery'
import styles from '../styles/Design_Lab.module.css'

const Design_Lab = () => (
    <div className={styles.galleryBG}>
        <div className={styles.headerAndDesc}>
            <h1 className={styles.designLabHeading}>
                <span className={styles.headingNum}>03</span>
                <span className={styles.headingMain}>design lab</span>
            </h1>
            <div className={styles.labDescription}>
                <p>
                    The Design Lab at Meshae Studios is where visual storytelling meets innovative technology.
                    We create digital branding, culture-driven campaigns, and gallery showcases for justice-minded creatives, founders, and brands.
                    Here you'll find projects that merge minimal design, cinematic aesthetics, and purposeful strategy.
                </p>
            </div>
        </div>
        <Gallery />
    </div>
)

export default Design_Lab
