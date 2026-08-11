'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import styles from './ProjectsList.module.css';

export default function ProjectsList({ projects }) {
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.header
          className={styles.header}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className={styles.title} variants={fadeInUp}>
            Projects
          </motion.h1>
          <motion.p className={styles.intro} variants={fadeInUp}>
            Apps we have built and shipped. Open one to download the build,
            share a link to it, or hand someone a QR code to scan.
          </motion.p>
        </motion.header>

        <motion.ul
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project) => {
            const isLive = project.status === 'live';

            const card = (
              <>
                <span
                  className={styles.accent}
                  style={{ background: project.accent }}
                  aria-hidden="true"
                />

                <div className={styles.cardBody}>
                  <span className={styles.platform}>
                    <Smartphone size={14} aria-hidden="true" />
                    {project.platform}
                    {isLive && <> &middot; v{project.version}</>}
                  </span>

                  <h2 className={styles.cardTitle}>{project.name}</h2>
                  <p className={styles.cardTagline}>{project.tagline}</p>

                  {isLive ? (
                    <span className={styles.cta}>
                      Download and share
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  ) : (
                    <span className={styles.badge}>In development</span>
                  )}
                </div>
              </>
            );

            return (
              <motion.li key={project.slug} variants={fadeInUp}>
                {isLive ? (
                  <Link
                    href={`/projects/${project.slug}`}
                    className={styles.card}
                  >
                    {card}
                  </Link>
                ) : (
                  <div className={`${styles.card} ${styles.cardIdle}`}>
                    {card}
                  </div>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
}
