import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Story_Lab.module.css';
import { projects } from '../feature_projects/projects.js';

export default function Story_Lab() {
    const sectionRefs = useRef([]);
    const [activeBgIdx, setActiveBgIdx] = useState(0);

    const scrollToProject = idx => {
        sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    useEffect(() => {
        const handleScroll = () => {
            projects.forEach((project, idx) => {
                const section = sectionRefs.current[idx];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const viewportCenter = window.innerHeight / 2;
                    if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
                        setActiveBgIdx(idx);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll, true);
        document.addEventListener('scroll', handleScroll, true);

        let scrollTimeout;
        const throttledScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleScroll, 100);
        };
        window.addEventListener('scroll', throttledScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll, true);
            document.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('scroll', throttledScroll);
        };
    }, []);

    return (
        <>
            <div
                className={styles.bgWrapper}
                style={{
                    background: `url('${projects[activeBgIdx].backgroundImage}') center center / cover no-repeat fixed`
                }}
                aria-hidden="true"
            />

            <main className={styles.contentWrapper}>
                {projects.map((project, idx) => (
                    <section
                        key={project.title + '-' + idx}
                        ref={el => sectionRefs.current[idx] = el}
                        className={styles.bgSection}
                    >
                        <div className={styles.aboutGrid}>
                            <div className={styles.aboutOverlay}>
                                <div className={styles.projectHeaderBlock}>
                                    <h1 className={styles.projectTitle}>{project.title}</h1>
                                    <div className={styles.projectMeta}>
                                        {project.genre}
                                        {project.length && ` / ${project.length}`}
                                        {project.rating && ` / ${project.rating}`}
                                    </div>
                                    <div className={styles.projectLinks}>
                                        {project.website && (
                                            <a
                                                href={project.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.projectSite}
                                            >
                                                website
                                            </a>
                                        )}
                                        {project.imdb && (
                                            <a
                                                href={project.imdb}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.projectImdb}
                                            >
                                                imdb
                                            </a>
                                        )}
                                        {project.instagram && (
                                            <a
                                                href={project.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.projectInstagram}
                                            >
                                                instagram
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.aboutContentBlock}>
                                    <div className={styles.projectMainText}>
                                        <div className={styles.projectStatus}>
                                            <span>status:</span> {project.status || 'development'}
                                        </div>
                                        <div className={styles.logline}>
                                            <span>logline:</span> {project.logline}
                                        </div>
                                        <div className={styles.projectTags}>
                                            {project.tags && project.tags.map(tag =>
                                                <span className={styles.tag} key={tag}>{tag}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className={styles.projectSynopsisCol}>
                                        <div className={styles.synopsisLabel}>synopsis</div>
                                        <div className={styles.synopsisText}>
                                            {Array.isArray(project.synopsis)
                                                ? project.synopsis.map((para, i) => (
                                                    <p key={i}>{para}</p>
                                                ))
                                                : <p>{project.synopsis}</p>
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* Up Arrow: Only if NOT first */}
                                {idx > 0 && (
                                    <button
                                        className={styles.upArrow}
                                        onClick={() => scrollToProject(idx - 1)}
                                        aria-label="Previous project"
                                        type="button"
                                    >
                                        <span className={styles.arrowIcon}>▲</span>
                                    </button>
                                )}

                                {/* Down Arrow: Only if NOT last */}
                                {idx < projects.length - 1 && (
                                    <button
                                        className={styles.downArrow}
                                        onClick={() => scrollToProject(idx + 1)}
                                        aria-label="Next project"
                                        type="button"
                                    >
                                        <span className={styles.arrowIcon}>▼</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </main>
        </>
    );
}
