'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import styles from './InstallSteps.module.css';

// Numbered because this genuinely is a sequence - the second step only makes
// sense once the first has produced a file. Android's install warning is where
// people who have never sideloaded an app give up, so it gets named directly
// rather than glossed over.
const steps = [
  {
    title: 'Download the file',
    body: 'Tap Download APK. Android saves it to your Downloads folder and shows a notification when it finishes.',
  },
  {
    title: 'Allow the install',
    body: 'Open the file. Android asks whether to allow installs from this source, because the app does not come from the Play Store. Choose Settings, turn the permission on, then go back.',
  },
  {
    title: 'Open the app',
    body: 'Tap Install, then Open. Play Protect may warn that it does not recognise the developer — choose Install anyway to continue.',
  },
];

export default function InstallSteps({ project }) {
  return (
    <motion.section
      className={styles.section}
      id="install"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        Installing on {project.platform}
      </motion.h2>

      <motion.ol className={styles.steps} variants={staggerContainer}>
        {steps.map((step, index) => (
          <motion.li key={step.title} className={styles.step} variants={fadeInUp}>
            <span className={styles.number} aria-hidden="true">
              {index + 1}
            </span>
            <div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>

      <motion.p className={styles.assurance} variants={fadeInUp}>
        <ShieldCheck size={18} aria-hidden="true" />
        <span>
          This is the signed release build of{' '}
          <code className={styles.code}>{project.packageId}</code>, version{' '}
          {project.version}, served from this site. Needs {project.minAndroid} or
          newer.
        </span>
      </motion.p>
    </motion.section>
  );
}
