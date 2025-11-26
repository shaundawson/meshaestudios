import React, { useState, useEffect } from 'react'
import { pins as allPins } from '../gallery_images/pins.js'
import styles from '../styles/Design_Lab.module.css'

const BATCH_SIZE = 11

const Gallery = () => {
    const [pinCount, setPinCount] = useState(BATCH_SIZE)
    const [displayPins, setDisplayPins] = useState(allPins.slice(0, BATCH_SIZE))
    const [modalImage, setModalImage] = useState(null)

    useEffect(() => {
        setDisplayPins(allPins.slice(0, pinCount))
    }, [pinCount])

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 320 &&
                pinCount < allPins.length
            ) {
                setPinCount(count => Math.min(count + BATCH_SIZE, allPins.length))
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [pinCount])

    useEffect(() => {
        if (!modalImage) return
        const handleKey = (e) => {
            if (e.key === 'Escape') setModalImage(null)
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [modalImage])

    const handleViewLive = () => {
        if (modalImage?.website) {
            window.open(modalImage.website, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <>
            <div className={styles.masonryGallery}>
                {/* Header Card as First Item */}
                <div className={styles.headerCard}>
                    <div className={styles.headerCardContent}>
                        <h1 className={styles.designLabHeading}>
                            <span className={styles.headingNum}>03</span>{" "}
                            <span className={styles.headingMain}>design lab</span>
                        </h1>
                        <div className={styles.labDescription}>
                            <p>
                                The Design Lab showcases our work. Web design. Development. Graphic design. Everything we create lives here: digital experiences, visual systems, and the work that moves projects forward. Clean design. Strong strategy. Built to work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Gallery Cards */}
                {displayPins.map((pin, idx) => (
                    <div
                        key={idx + '-' + pin.title}
                        className={styles.masonryCard}
                        style={{ '--aspect': pin.aspect, cursor: 'pointer' }}
                        onClick={() => setModalImage(pin)}
                    >
                        <img
                            src={pin.image}
                            alt={pin.title}
                            className={styles.cardImage}
                            style={{ aspectRatio: pin.aspect }}
                        />
                        <div className={styles.cardBody}>
                            <div className={styles.cardTitle}>{pin.title}</div>
                            <div className={styles.cardDescription}>{pin.description}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalImage && (
                <div
                    className={styles.modalOverlay}
                    onClick={(e) => {
                        if (e.target.classList.contains(styles.modalOverlay)) setModalImage(null);
                    }}
                >
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <img
                            src={modalImage.image}
                            alt={modalImage.title}
                            className={styles.modalFullImage}
                        />
                        <div className={styles.modalCaption}>
                            <div className={styles.cardTitle}>{modalImage.title}</div>
                            <div className={styles.cardDescription}>{modalImage.description}</div>
                        </div>
                        <div className={styles.modalActions}>
                            <button
                                className={styles.closePill}
                                onClick={() => setModalImage(null)}
                            >
                                close
                            </button>
                            {modalImage.website && (
                                <button
                                    className={styles.viewLivePill}
                                    onClick={handleViewLive}
                                >
                                    view live
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Gallery
