import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Story_Lab.module.css';
import { projects } from '../feature_projects/projects.js';

export default function Story_Lab() {
    const sectionRefs = useRef([]);
    const [activeBgIdx, setActiveBgIdx] = useState(0);

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
                {/* First Project with Header Prepended */}
                <section
                    ref={el => sectionRefs.current[0] = el}
                    className={styles.bgSection}
                >
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutOverlay}>
                            {/* Header Section */}
                            <div className={styles.headerSection}>
                                <h2 className={styles.storyLabHeading}>
                                    <span className={styles.headingNum}>04</span>
                                    <span className={styles.headingMain}>story lab</span>
                                </h2>
                                <div className={styles.labDescription}>
                                    <p>
                                        This is the Story Lab. Everything we're making right now. Documentaries. Films. Video narratives about justice and identity and transformation. Work that inspires. Work that informs. Work that changes how people think. Whether it's a feature film, a web series, or something we're building in real time, it lives here. Come see what we're working on.
                                    </p>
                                </div>
                            </div>

                            {/* First Project Content */}
                            <div className={styles.projectHeaderBlock}>
                                <h1 className={styles.projectTitle}>
                                    <span className={styles.titleSlash}>/ </span>
                                    {projects[0].title}
                                </h1>
                                <div className={styles.projectMeta}>
                                    {projects[0].genre}
                                    {projects[0].length && ` / ${projects[0].length}`}
                                    {projects[0].rating && ` / ${projects[0].rating}`}
                                </div>
                                <div className={styles.projectLinks}>
                                    {projects[0].website && (
                                        <a
                                            href={projects[0].website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectSite}
                                        >
                                            website
                                        </a>
                                    )}
                                    {projects[0].imdb && (
                                        <a
                                            href={projects[0].imdb}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectImdb}
                                        >
                                            imdb
                                        </a>
                                    )}
                                    {projects[0].instagram && (
                                        <a
                                            href={projects[0].instagram}
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
                                        <span>status:</span> {projects[0].status || 'development'}
                                    </div>
                                    <div className={styles.logline}>
                                        <span>logline:</span> {projects[0].logline}
                                    </div>
                                    <div className={styles.projectTags}>
                                        {projects[0].tags && projects[0].tags.map(tag =>
                                            <span className={styles.tag} key={tag}>{tag}</span>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.projectSynopsisCol}>
                                    <div className={styles.synopsisLabel}>synopsis</div>
                                    <div className={styles.synopsisText}>
                                        {Array.isArray(projects[0].synopsis)
                                            ? projects[0].synopsis.map((para, i) => (
                                                <p key={i}>{para}</p>
                                            ))
                                            : <p>{projects[0].synopsis}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Remaining Projects */}
                {projects.slice(1).map((project, idx) => (
                    <section
                        key={project.title + '-' + (idx + 1)}
                        ref={el => sectionRefs.current[idx + 1] = el}
                        className={styles.bgSection}
                    >
                        <div className={styles.aboutGrid}>
                            <div className={styles.aboutOverlay}>
                                <div className={styles.projectHeaderBlock}>
                                    <h1 className={styles.projectTitle}>
                                        <span className={styles.titleSlash}>/ </span>
                                        {project.title}
                                    </h1>
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
                            </div>
                        </div>
                    </section>
                ))}
            </main>
        </>
    );
}
