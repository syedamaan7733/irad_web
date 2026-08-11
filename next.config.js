/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Android refuses to install an APK served as text/plain or
        // application/octet-stream, so set the MIME type explicitly.
        source: '/downloads/:file*.apk',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.android.package-archive',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
