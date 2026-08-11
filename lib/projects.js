// Projects shipped by iRad, and the app builds visitors can install.
//
// Adding a project is a data edit - both /projects and /projects/[slug] read
// from this array, so no component needs to change.
//
// ─────────────────────────────────────────────────────────────────────────────
// REVIEW BEFORE PUBLISHING: the `tagline`, `description` and `features` copy on
// salim-footwear is a draft. It was inferred from the APK contents (an Expo app
// bundling Firebase and ML Kit barcode scanning) rather than supplied by the
// client, so check it says what the app actually does. `minAndroid` is also
// unverified - the APK's binary manifest was not decoded. Everything else here
// (version, size, packageId, techStack) was read out of the APK itself.
// ─────────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'salim-footwear',
    name: 'Salim Footwear',
    client: 'Salim Footwear',
    status: 'live',

    tagline: 'Stock, barcodes and billing for the shop floor',
    description:
      'Salim Footwear runs the day-to-day of a footwear store from an Android phone. Staff scan a barcode to pull up any item, record counter sales, and keep stock counts current without walking back to a desktop terminal.',
    features: [
      'Scan barcodes with the phone camera to look up an item instantly',
      'Record counter sales and produce a customer bill on the spot',
      'Track stock across sizes and styles as it moves',
      'Sync to the cloud, so the counter and the back office agree',
    ],

    // Read from the APK: com.salimfootwear.app, versionName 1.0.0,
    // arm64-v8a + armeabi-v7a + x86.
    platform: 'Android',
    version: '1.0.0',
    size: '105 MB',
    packageId: 'com.salimfootwear.app',
    minAndroid: 'Android 7.0',
    updated: 'August 2026',
    techStack: ['React Native', 'Expo', 'Firebase', 'ML Kit'],

    // Swap this for a GitHub Release or blob-storage URL when the binary moves
    // off the repo. Nothing else needs to change.
    apkUrl: '/downloads/salim-footwear-v1.0.0.apk',
    fileName: 'salim-footwear-v1.0.0.apk',

    // Leather tones, for a footwear shop.
    accent: 'linear-gradient(135deg, #C2703D 0%, #6B3410 100%)',
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
