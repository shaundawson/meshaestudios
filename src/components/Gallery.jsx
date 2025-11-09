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

    const handleShare = () => {
        const linkUrl = window.location.origin + '/designlab?img=' + encodeURIComponent(modalImage.image);
        navigator.clipboard.writeText(linkUrl);
        alert('Link copied! You can now share it anywhere.');
    }

    return (
        <>
            <div className={styles.masonryGallery}>
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
                            <button
                                className={styles.sharePill}
                                onClick={handleShare}
                            >
                                share
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Gallery
