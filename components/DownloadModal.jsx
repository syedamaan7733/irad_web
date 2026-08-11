'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Download, Smartphone } from 'lucide-react';
import styles from './DownloadModal.module.css';

const FOCUSABLE =
  'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Shown when someone opens a shared ?download=true link.
 *
 * variant 'downloading' - the download has been fired; explain what is
 *   happening and offer a manual link, because browsers can block a
 *   programmatic download that had no user gesture behind it.
 * variant 'ios' - an APK cannot be installed on iOS, so say so instead of
 *   handing the visitor a file they can do nothing with.
 */
export default function DownloadModal({
  variant,
  project,
  onRetry,
  onSeeSteps,
  onClose,
}) {
  const dialogRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    previousFocus.current = document.activeElement;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    // Focus the dialog itself rather than a control, so a screen reader reads
    // the heading before announcing an action.
    dialogRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll(FOCUSABLE);
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = overflow;
      previousFocus.current?.focus?.();
    };
  }, [onClose]);

  const isIos = variant === 'ios';

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-modal-title"
        aria-describedby="download-modal-body"
        tabIndex={-1}
        ref={dialogRef}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className={styles.icon} aria-hidden="true">
          {isIos ? <Smartphone size={24} /> : <Download size={24} />}
        </div>

        <h2 className={styles.title} id="download-modal-title">
          {isIos ? 'Android only' : `Downloading ${project.name}`}
        </h2>

        {!isIos && (
          <div className={styles.progress} aria-hidden="true">
            <span className={styles.progressBar} />
          </div>
        )}

        <div className={styles.body} id="download-modal-body">
          {isIos ? (
            <p>
              This app installs on Android phones and tablets. iPhone and iPad
              cannot open APK files. Open this link on an Android device, or
              scan the QR code on this page with one.
            </p>
          ) : (
            <p>
              Your browser is saving the {project.size} file. Check your
              notifications or your Downloads folder, then open the file to
              install.
            </p>
          )}
        </div>

        <div className={styles.actions}>
          {isIos ? (
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Got it
            </button>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onSeeSteps}
              >
                See install steps
              </button>
              <button type="button" className={styles.retry} onClick={onRetry}>
                Download didn&apos;t start? Start it again
              </button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
