import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../legal.module.css';

// Google Play requires a publicly reachable account-deletion page for any app
// that lets users create an account — reachable without installing the app, so
// it cannot live inside the app itself. This URL goes in the Play Console Data
// safety section for the GBC apps.

export const metadata = {
  title: 'Delete your GBC account | iRad Solutions',
  description:
    'How to delete your GBC account and what happens to your data, in the app or by request.',
  alternates: { canonical: '/gbc/delete-account' },
};

export default function GbcDeleteAccount() {
  return (
    <main>
      <Navbar />
      <div className={styles.page}>
        <div className="container">
          <article className={styles.doc}>
            <p className={styles.eyebrow}>Account deletion</p>
            <h1 className={styles.title}>Delete your GBC account</h1>
            <p className={styles.lede}>
              You can delete your GBC account yourself, from inside the app, in
              under a minute. If you no longer have the app installed, you can
              ask us to do it for you.
            </p>
            <p className={styles.updated}>Last updated: 20 August 2026</p>

            <section className={styles.section}>
              <h2>In the GBC Farmer app</h2>
              <ol>
                <li>Open the GBC Farmer app and sign in.</li>
                <li>
                  Go to the <strong>Profile</strong> tab.
                </li>
                <li>
                  Scroll to <strong>Delete my account</strong> and tap it.
                </li>
                <li>
                  Confirm in the dialog by tapping{' '}
                  <strong>Delete account</strong>.
                </li>
              </ol>
              <p>
                Deletion takes effect immediately. You are signed out on every
                device and your login stops working straight away.
              </p>
            </section>

            <section className={styles.section}>
              <h2>By request</h2>
              <p>
                If you have uninstalled the app, cannot sign in, or hold a
                technician or administrator account issued by a service
                operator, email us instead:
              </p>
              <div className={styles.callout}>
                <p>
                  <strong>To:</strong>{' '}
                  <a href="mailto:iradwsas@gmail.com?subject=Delete%20my%20GBC%20account">
                    iradwsas@gmail.com
                  </a>
                  <br />
                  <strong>Subject:</strong>{' '}
                  <span className={styles.mono}>Delete my GBC account</span>
                  <br />
                  <strong>Include:</strong> the phone number your account is
                  registered with, and which app you use (Farmer, Technician or
                  Admin).
                </p>
                <p>
                  We verify the request against the registered phone number and
                  complete it within 30 days. We will confirm by reply when it is
                  done.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>What is deleted, and what is kept</h2>
              <p>
                Everything that identifies you is erased. What remains is the
                service operator&rsquo;s record of insemination visits &mdash;
                which straw was used on which animal &mdash; with your identity
                removed from it. That history is what the operator needs to
                account for its semen inventory and for the breeding outcomes of
                the animals it serviced.
              </p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>What happens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Your name</td>
                      <td>Erased</td>
                    </tr>
                    <tr>
                      <td>Your phone number</td>
                      <td>
                        Erased, and freed &mdash; you can register again later
                        with the same number
                      </td>
                    </tr>
                    <tr>
                      <td>Your address and district</td>
                      <td>Erased</td>
                    </tr>
                    <tr>
                      <td>Your password</td>
                      <td>Destroyed</td>
                    </tr>
                    <tr>
                      <td>Your sessions on every device</td>
                      <td>Revoked immediately</td>
                    </tr>
                    <tr>
                      <td>Notification token for your device</td>
                      <td>Deleted &mdash; you stop receiving notifications</td>
                    </tr>
                    <tr>
                      <td>Your in-app notifications</td>
                      <td>Deleted</td>
                    </tr>
                    <tr>
                      <td>Bookings not yet carried out</td>
                      <td>Cancelled, so no technician is sent</td>
                    </tr>
                    <tr>
                      <td>Your animals</td>
                      <td>
                        Deactivated and removed from every list; retained only as
                        the subject of past insemination records
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Completed visits, straw used, breeding and conception
                        history
                      </td>
                      <td>
                        Retained by the service operator as inventory and
                        breeding history, no longer linked to your name, phone
                        number or address
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Backups are rotated on a rolling schedule, so a copy of erased
                data may persist in backup storage for up to 30 days before it
                ages out. It is not used for anything during that time.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Technician and administrator accounts</h2>
              <p>
                Those accounts are issued by the service operator you work for
                and are tied to their operations, so they are removed by the
                operator or by us on request rather than from inside the app.
                Email us as described above and we will coordinate it.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Related</h2>
              <p>
                For the full picture of what the GBC apps collect and why, see
                the{' '}
                <Link href="/gbc/privacy">GBC apps privacy policy</Link>.
              </p>
            </section>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  );
}
