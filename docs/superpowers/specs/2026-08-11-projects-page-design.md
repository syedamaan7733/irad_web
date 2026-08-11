# Projects Page — Design

Date: 2026-08-11
Status: Approved

## Goal

Give visitors a page where they can get the Salim Footwear Android app three ways:
download the APK directly, share a link to it, or scan a QR code. The structure must
accommodate additional client apps later without rework.

## Scope

- `/projects` — list of projects
- `/projects/salim-footwear` — detail page with download, share, and QR
- Not in scope: a test framework (none exists in this repo), analytics, iOS builds

## Source of truth

`lib/projects.js` exports a `projects` array. Both routes read from it, so adding a
project is a data edit, not a code change.

Per-project fields: `slug`, `name`, `tagline`, `description`, `features[]`,
`techStack[]`, `platform`, `version`, `size`, `packageId`, `updated`, `apkUrl`,
`accent`, `status`.

`apkUrl` starts as `/downloads/salim-footwear-v1.0.0.apk`. Swapping it for a GitHub
Release or blob-storage URL later is a one-line change with no other edits.

Facts extracted from the APK itself (not guessed): package `com.salimfootwear.app`,
version `1.0.0`, 105 MB, `arm64-v8a`, built with Expo/React Native, bundles Firebase
and ML Kit barcode scanning.

## Routes

| Route | Type | Notes |
|---|---|---|
| `app/projects/page.js` | Server, static | Metadata; renders hero + grid |
| `app/projects/[slug]/page.js` | Server, static | `generateStaticParams` over `projects`; `generateMetadata` emits OpenGraph tags so shared links preview correctly in WhatsApp/Slack; unknown slug → `notFound()` |

## The download card

All three actions are visible in one view. Desktop is two columns — app identity and
actions on the left, QR on the right. Mobile stacks to one column with Download first
and the QR behind a "Show QR code" disclosure, since scanning your own screen is
pointless.

### Link-type toggle

One segmented toggle, not two parallel sets of buttons, so there is a single concept
to grasp. Share, Copy link, and the QR all encode whatever the toggle selects:

| Option | Encodes | Helper text |
|---|---|---|
| Page | `{origin}/projects/{slug}` | Opens this page with install instructions |
| Direct download | `{origin}/projects/{slug}?download=true` | Opens this page and starts the download immediately |

Neither option shares the raw `.apk` path. The recipient always lands on a real page,
which keeps the link previewable and puts install guidance in front of them.

### Share and copy

`Share` calls `navigator.share()` for the native sheet on mobile and falls back to
clipboard when unavailable. Both actions confirm via an `aria-live="polite"` toast.

Absolute URLs derive from `window.location.origin`, so dev, preview, and production
each produce correct links with no environment variable to configure.

## The `?download=true` flow

On mount, the detail page reads `window.location.search`. When `download=true`:

1. Fire the download by clicking a synthetic same-origin `<a download>`
2. Open a modal explaining that the download has started, showing app name and size
3. Strip the query param via `history.replaceState`, so a refresh does not re-download
   and a copied URL stays clean

The modal includes a **"Download didn't start? Tap here"** manual link. This is not
optional garnish — browsers can block programmatic downloads that lack a user
gesture, and without the fallback those visitors hit a dead end.

`reactStrictMode` is enabled, so effects run twice in development. A `useRef` guard
ensures the download fires once.

On iOS the auto-download is skipped. An APK cannot be installed on an iPhone or iPad,
so the modal says so plainly and points to using an Android device instead. Desktop
still auto-downloads, since sideloading from a computer is a legitimate path.

## QR code

`react-qr-code` renders an inline SVG. Chosen over a third-party QR image API, which
would leak URLs to an external server and break the page when that service is down.

The QR renders a skeleton until after mount, because `window.location.origin` is
unavailable during server rendering and using it directly would cause a hydration
mismatch. A "Save QR as image" action serializes the SVG to a PNG via canvas so the
code can be printed or pasted into a chat.

## Rest of the detail page

Hero with app name, tagline, and a meta row (version · size · platform · updated).
Below the download card: description and feature bullets, then `InstallSteps` — three
numbered steps covering Android's "install from unknown sources" prompt and the Play
Protect warning, which is where non-technical recipients actually get stuck.

Description and feature copy is drafted from what the APK reveals and marked as
placeholder for the owner to correct.

## Visual system

Reuses existing tokens from `app/globals.css` (`--color-navy-deep`, `--color-accent`,
spacing scale, `card`, `btn`) and the `fadeInUp` / `staggerContainer` variants from
`lib/animations.js`. Components follow the established `Component.jsx` +
`Component.module.css` convention. The page should read as native to the site.

## Incidental fixes

- `Navbar` links are bare hashes (`#services`) which resolve to nothing from
  `/projects`. Changed to `/#services`, and a `Projects` link added.
- The APK moves from `public/Salim Footwear Android.apk` to
  `public/downloads/salim-footwear-v1.0.0.apk`, eliminating percent-encoded spaces
  from the URL.
- `public/downloads/*.apk` is gitignored. The file is currently untracked, so no
  history rewrite is needed — but at 105 MB it would exceed GitHub's hard 100 MB push
  limit if committed.
- `next.config.js` gains a headers rule serving `.apk` as
  `application/vnd.android.package-archive` with `Content-Disposition: attachment`.

## Edge cases

| Case | Behavior |
|---|---|
| Clipboard API unavailable or insecure context | Fall back to a readonly, pre-selected input |
| `navigator.share` unsupported | Fall back to clipboard copy |
| Unknown slug | `notFound()` |
| Project with `status: 'coming-soon'` | Non-clickable card with a badge |
| Reduced motion | Already handled globally in `globals.css` |
| Modal open | `role="dialog"`, `aria-modal`, focus trap, Escape to close, focus returned on close |

## Verification

This repo has no test framework and adding one is outside this task, so no test
coverage will be claimed. Verification is:

- `npm run build` and `npm run lint` pass clean
- Drive the running app and confirm: download starts; copied URL is absolute and
  correct; the QR encodes the same URL the toggle selects; the toggle updates share,
  copy, and QR together; `?download=true` auto-downloads and shows the modal exactly
  once; the query param is stripped afterward; layout holds at 375 px; toast and modal
  focus behave for keyboard use

Observed results get reported as observed.
