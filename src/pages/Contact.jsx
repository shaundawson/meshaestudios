import React from 'react';
import HubSpotForm from '../components/HubSpotForm';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <main className={styles.contactHeroGrid}>
            <section className={styles.contactBlock}>
                <div className={styles.headerSection}>
                    <div className={styles.miniLabel}>get in touch</div>
                    <h1 className={styles.heroHeader}>let's create<br />something.</h1>
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
