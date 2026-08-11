'use client';

import { useRef } from 'react';
import QRCode from 'react-qr-code';
import { ImageDown, ScanLine } from 'lucide-react';
import styles from './QrPanel.module.css';

// The QR sits inside a camera viewfinder frame. The app on the other end of
// this code scans barcodes for a living, so the reticle is the subject's own
// vocabulary rather than ornament.
const QR_RENDER_SIZE = 512;
const PNG_EXPORT_SIZE = 1024;
const QR_BACKGROUND = '#FBF6E6';
const QR_FOREGROUND = '#0F1724';

export default function QrPanel({ url, fileName, onSaved, onSaveFailed }) {
  const frameRef = useRef(null);

  function saveAsImage() {
    const svg = frameRef.current?.querySelector('svg');

    if (!svg) {
      onSaveFailed?.();
      return;
    }

    const serialized = new XMLSerializer().serializeToString(svg);
    const svgUrl = URL.createObjectURL(
      new Blob([serialized], { type: 'image/svg+xml;charset=utf-8' })
    );
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = PNG_EXPORT_SIZE;
      canvas.height = PNG_EXPORT_SIZE;

      const context = canvas.getContext('2d');
      context.fillStyle = QR_BACKGROUND;
      context.fillRect(0, 0, PNG_EXPORT_SIZE, PNG_EXPORT_SIZE);
      context.drawImage(image, 0, 0, PNG_EXPORT_SIZE, PNG_EXPORT_SIZE);
      URL.revokeObjectURL(svgUrl);

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${fileName.replace(/\.apk$/, '')}-qr.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      onSaved?.();
    };

    image.onerror = () => {
      URL.revokeObjectURL(svgUrl);
      onSaveFailed?.();
    };

    image.src = svgUrl;
  }

  return (
    <div className={styles.panel}>
      <div className={styles.frame} ref={frameRef}>
        <span className={`${styles.bracket} ${styles.topLeft}`} aria-hidden="true" />
        <span className={`${styles.bracket} ${styles.topRight}`} aria-hidden="true" />
        <span className={`${styles.bracket} ${styles.bottomLeft}`} aria-hidden="true" />
        <span className={`${styles.bracket} ${styles.bottomRight}`} aria-hidden="true" />

        <div className={styles.code}>
          {url ? (
            <QRCode
              value={url}
              size={QR_RENDER_SIZE}
              level="M"
              bgColor={QR_BACKGROUND}
              fgColor={QR_FOREGROUND}
              title={`QR code for ${url}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          ) : (
            // The code depends on the page's own origin, which only exists in
            // the browser. Hold a placeholder until then rather than render a
            // code the server would get wrong.
            <div className={styles.placeholder} aria-hidden="true" />
          )}
        </div>
      </div>

      <p className={styles.caption}>
        <ScanLine size={16} aria-hidden="true" />
        Point your phone camera here
      </p>

      <button
        type="button"
        className={styles.saveButton}
        onClick={saveAsImage}
        disabled={!url}
      >
        <ImageDown size={16} aria-hidden="true" />
        Save QR as image
      </button>
    </div>
  );
}
