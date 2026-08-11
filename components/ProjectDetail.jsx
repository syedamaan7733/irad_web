'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import AppDownloadCard from './AppDownloadCard';
import InstallSteps from './InstallSteps';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail({ project }) {
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.header
          className={styles.header}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Link href="/projects" className={styles.back}>
              <ArrowLeft size={16} aria-hidden="true" />
              All projects
            </Link>
          </motion.div>

          <motion.h1 className={styles.title} variants={fadeInUp}>
            {project.name}
          </motion.h1>

          <motion.p className={styles.tagline} variants={fadeInUp}>
            {project.tagline}
          </motion.p>

          <motion.dl className={styles.specs} variants={fadeInUp}>
            <div className={styles.spec}>
              <dt>Platform</dt>
              <dd>{project.platform}</dd>
            </div>
            <div className={styles.spec}>
              <dt>Version</dt>
              <dd>{project.version}</dd>
            </div>
            <div className={styles.spec}>
              <dt>Size</dt>
              <dd>{project.size}</dd>
            </div>
            <div className={styles.spec}>
              <dt>Updated</dt>
              <dd>{project.updated}</dd>
            </div>
          </motion.dl>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <AppDownloadCard project={project} />
        </motion.div>

        <motion.section
          className={styles.about}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className={styles.aboutMain} variants={fadeInUp}>
            <h2 className={styles.sectionHeading}>What it does</h2>
            <p className={styles.description}>{project.description}</p>

            <ul className={styles.features}>
              {project.features.map((feature) => (
                <li key={feature} className={styles.feature}>
                  <Check size={18} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.aside className={styles.aboutAside} variants={fadeInUp}>
            <h2 className={styles.asideHeading}>Built with</h2>
            <ul className={styles.stack}>
              {project.techStack.map((tech) => (
                <li key={tech} className={styles.tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.aside>
        </motion.section>

        <InstallSteps project={project} />
      </div>
    </div>
  );
}
