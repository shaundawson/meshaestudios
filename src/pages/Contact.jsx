import React from 'react';
import HubSpotForm from '../components/HubSpotForm';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <main className={styles.contactHeroGrid}>
            <section className={styles.contactBlock}>
                <div className={styles.headerSection}>
                    <h1 className={styles.contactHeading}>
                        <span className={styles.headingNum}>05</span>{" "}
                        <span className={styles.headingMain}>let's create something</span>
                    </h1>
                    <p className={styles.contactSubtext}>
                        You're a founder. A creator. A movement builder. We work with people doing real work. Let's talk about what you're building and how we can help you do it right.
                    </p>
                </div>
                <div className={styles.formPanel}>
                    <HubSpotForm
                        portalId="5688825"
                        formId="29fbe6f2-c39d-4b99-8530-1eefb5e26db7"
                        targetId="hubspotForm"
                    />
                </div>
            </section>
        </main>
    );
}
