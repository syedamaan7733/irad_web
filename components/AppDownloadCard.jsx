'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Share2, Copy, ChevronDown, Check } from 'lucide-react';
import QrPanel from './QrPanel';
import DownloadModal from './DownloadModal';
import styles from './AppDownloadCard.module.css';

const LINK_TYPES = [
  {
    id: 'page',
    label: 'Page',
    hint: 'Opens this page, where they can read the install steps first.',
  },
  {
    id: 'direct',
    label: 'Direct download',
    hint: 'Opens this page and starts the download straight away.',
  },
];

function isIosDevice() {
  if (typeof navigator === 'undefined') return false;

  // iPadOS reports itself as MacIntel, so touch points are the tell.
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
}

export default function AppDownloadCard({ project }) {
  const [origin, setOrigin] = useState('');
  const [linkType, setLinkType] = useState('page');
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);
  const [isQrOpen, setIsQrOpen] = useState(false);

  const urlInputRef = useRef(null);
  const autoDownloadFired = useRef(false);
  const toastTimer = useRef(null);

  const pageUrl = origin ? `${origin}/projects/${project.slug}` : '';
  const shareUrl =
    linkType === 'direct' && pageUrl ? `${pageUrl}?download=true` : pageUrl;
  const activeHint = LINK_TYPES.find((type) => type.id === linkType).hint;

  const notify = useCallback((message) => {
    // A fresh id restarts the animation when the same message repeats.
    setToast({ id: Date.now(), message });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const startDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = project.apkUrl;
    link.download = project.fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [project.apkUrl, project.fileName]);

  // Someone arriving from a shared ?download=true link.
  useEffect(() => {
    if (autoDownloadFired.current) return;

    const params = new URLSearchParams(window.location.search);
    if (params.get('download') !== 'true') return;

    // reactStrictMode runs effects twice in development.
    autoDownloadFired.current = true;

    // Drop the flag so a refresh does not download again, and so a URL copied
    // from the address bar is the clean page link.
    params.delete('download');
    const query = params.toString();
    window.history.replaceState(
      null,
      '',
      window.location.pathname + (query ? `?${query}` : '')
    );

    if (isIosDevice()) {
      setModal('ios');
      return;
    }

    startDownload();
    setModal('downloading');
  }, [startDownload]);

  function handleDownloadClick() {
    startDownload();
    notify('Download started');
  }

  function selectUrlForManualCopy() {
    const input = urlInputRef.current;
    if (!input) return;

    input.focus();
    input.select();
    notify('Copy blocked by your browser. Press Ctrl+C to copy the selected link.');
  }

  async function handleCopy() {
    if (!shareUrl) return;

    try {
      await navigator.clipboard.writeText(shareUrl);
      notify('Link copied');
    } catch {
      // No clipboard permission, or the page is not on a secure origin.
      selectUrlForManualCopy();
    }
  }

  async function handleShare() {
    if (!shareUrl) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${project.name} for ${project.platform}`,
          text: project.tagline,
          url: shareUrl,
        });
        return;
      } catch (error) {
        // The visitor dismissed the share sheet; that is not a failure.
        if (error?.name === 'AbortError') return;
      }
    }

    handleCopy();
  }

  function goToInstallSteps() {
    setModal(null);
    document.getElementById('install')?.scrollIntoView({ block: 'start' });
  }

  return (
    <section className={styles.card} aria-labelledby="get-the-app">
      <div className={styles.inner}>
        <div className={styles.actions}>
          {/* Platform, version and size are already stated in the spec row
              above this card, so they are not repeated here. */}
          <h2 className={styles.heading} id="get-the-app">
            Get the app
          </h2>

          <button
            type="button"
            className={styles.downloadButton}
            onClick={handleDownloadClick}
          >
            <Download size={20} aria-hidden="true" />
            Download APK
            <span className={styles.downloadSize}>{project.size}</span>
          </button>

          <div className={styles.shareBlock}>
            <span className={styles.blockLabel} id="link-type-label">
              Share this app
            </span>

            <div
              className={styles.toggle}
              role="group"
              aria-labelledby="link-type-label"
            >
              {LINK_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  className={`${styles.toggleOption} ${
                    linkType === type.id ? styles.toggleOptionActive : ''
                  }`}
                  aria-pressed={linkType === type.id}
                  onClick={() => setLinkType(type.id)}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <p className={styles.hint}>{activeHint}</p>

            <input
              className={styles.url}
              ref={urlInputRef}
              value={shareUrl}
              readOnly
              spellCheck="false"
              aria-label="Link that will be shared"
              onFocus={(event) => event.target.select()}
            />

            <div className={styles.shareButtons}>
              <button
                type="button"
                className={styles.shareButton}
                onClick={handleShare}
                disabled={!shareUrl}
              >
                <Share2 size={18} aria-hidden="true" />
                Share
              </button>

              <button
                type="button"
                className={styles.shareButton}
                onClick={handleCopy}
                disabled={!shareUrl}
              >
                <Copy size={18} aria-hidden="true" />
                Copy link
              </button>
            </div>
          </div>
        </div>

        {/* Scanning your own screen is useless, so on narrow viewports the QR
            waits behind a disclosure instead of pushing Download off-screen. */}
        <div className={`${styles.qr} ${isQrOpen ? styles.qrOpen : ''}`}>
          <button
            type="button"
            className={styles.qrDisclosure}
            onClick={() => setIsQrOpen((open) => !open)}
            aria-expanded={isQrOpen}
          >
            {isQrOpen ? 'Hide QR code' : 'Show QR code'}
            <ChevronDown size={18} aria-hidden="true" />
          </button>

          <div className={styles.qrBody}>
            <QrPanel
              url={shareUrl}
              fileName={project.fileName}
              onSaved={() => notify('QR code saved as an image')}
              onSaveFailed={() =>
                notify('That did not work. Take a screenshot of the code instead.')
              }
            />
          </div>
        </div>
      </div>

      <div className={styles.toastRegion} role="status" aria-live="polite">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              className={styles.toast}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
            >
              <Check size={16} aria-hidden="true" />
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {modal && (
          <DownloadModal
            variant={modal}
            project={project}
            onRetry={startDownload}
            onSeeSteps={goToInstallSteps}
            onClose={() => setModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
