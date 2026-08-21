import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../legal.module.css';

// The privacy policy linked from the Google Play listing of all three GBC apps.
// Play requires the policy to describe the data the app actually handles, so
// every row below is traceable to a field the apps really send. Update this page
// whenever the apps start collecting something new.

export const metadata = {
  title: 'GBC Apps Privacy Policy | iRad Solutions',
  description:
    'How the GBC Farmer, GBC Technician and GBC Admin apps collect, use and protect your information.',
  alternates: { canonical: '/gbc/privacy' },
};

export default function GbcPrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <div className={styles.page}>
        <div className="container">
          <article className={styles.doc}>
            <p className={styles.eyebrow}>Privacy Policy</p>
            <h1 className={styles.title}>GBC apps</h1>
            <p className={styles.lede}>
              GBC is an artificial insemination (AI) service platform for cattle
              and goats. This policy explains what the GBC apps collect, why,
              who can see it, and how to have it removed.
            </p>
            <p className={styles.updated}>Last updated: 20 August 2026</p>

            <section className={styles.section}>
              <h2>1. Who we are</h2>
              <p>
                The GBC apps are built and operated by iRad Solutions,
                Ambikapur, Surguja, Chhattisgarh 497001, India. In this policy
                &ldquo;we&rdquo; and &ldquo;us&rdquo; mean iRad Solutions, and
                &ldquo;the service operator&rdquo; means the AI service
                organisation whose staff use the Admin and Technician apps to
                deliver visits to farmers.
              </p>
              <p>
                For any question about this policy or your data, write to{' '}
                <a href="mailto:iradwsas@gmail.com">iradwsas@gmail.com</a>.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Which apps this covers</h2>
              <div className={styles.apps}>
                <div className={styles.app}>
                  <strong>GBC Farmer</strong>
                  <span>solutions.irad.gbc.farmer</span>
                </div>
                <div className={styles.app}>
                  <strong>GBC Technician</strong>
                  <span>solutions.irad.gbc.technician</span>
                </div>
                <div className={styles.app}>
                  <strong>GBC Admin</strong>
                  <span>solutions.irad.gbc.admin</span>
                </div>
              </div>
              <p>
                All three apps talk to the same backend. Farmers register
                themselves in the Farmer app; technician and administrator
                accounts are created by the service operator and are not open to
                public sign-up.
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. What we collect and why</h2>
              <p>
                We only collect what the service needs to work. There is no
                advertising, no analytics SDK, no tracking across other apps or
                websites, and nothing is sold.
              </p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>What</th>
                      <th>Where from</th>
                      <th>Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name and phone number</td>
                      <td>All three apps, at registration or when your
                        account is created</td>
                      <td>Your phone number is your login. Your name identifies
                        you to the technician who visits and to the operator.</td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>All three apps</td>
                      <td>Stored only as a one-way hash. We never see, log or
                        transmit your password in readable form.</td>
                    </tr>
                    <tr>
                      <td>Address and district</td>
                      <td>Farmer app profile; the Admin app when staff record it
                        for a farmer</td>
                      <td>So the assigned technician can reach the animal. You
                        can also set a different location for a single visit.</td>
                    </tr>
                    <tr>
                      <td>Animal records &mdash; tag or name, species, breed,
                        age, breeding status</td>
                      <td>Farmer and Admin apps</td>
                      <td>To book the right service and keep an accurate
                        breeding history.</td>
                    </tr>
                    <tr>
                      <td>Booking details &mdash; preferred date, chosen sire,
                        visit location, notes</td>
                      <td>Farmer, Technician and Admin apps</td>
                      <td>To schedule, assign and complete the visit.</td>
                    </tr>
                    <tr>
                      <td>Insemination records &mdash; straw used, service
                        notes, timings, conception outcome</td>
                      <td>Technician and Admin apps</td>
                      <td>Traceability of which straw was used on which animal,
                        and inventory accuracy.</td>
                    </tr>
                    <tr>
                      <td>Photographs</td>
                      <td>Admin app only, chosen from the device by operator
                        staff</td>
                      <td>Sire images shown in the semen catalogue. The Farmer
                        and Technician apps do not access your photos.</td>
                    </tr>
                    <tr>
                      <td>Notification token</td>
                      <td>All three apps, if you allow notifications</td>
                      <td>A device identifier issued by Google so we can send
                        booking updates. Nothing else about your device is
                        collected.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className={styles.section}>
              <h2>4. What we do not collect</h2>
              <ul>
                <li>
                  <strong>Your device location.</strong> None of the apps
                  request GPS or background location. A visit address is typed in
                  by you or by operator staff.
                </li>
                <li>
                  <strong>Contacts, messages, calendar, call logs, microphone,
                  or files</strong> beyond a photo you deliberately pick in the
                  Admin app.
                </li>
                <li>
                  <strong>Advertising identifiers</strong> &mdash; there is no
                  advertising in any of the apps.
                </li>
                <li>
                  <strong>Analytics or behavioural profiles.</strong> We do not
                  build a profile of you and do not use your data to train
                  anything.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>5. Who can see your information</h2>
              <ul>
                <li>
                  <strong>The service operator&rsquo;s administrators</strong>
                  {' '}see farmer and technician records, animals, bookings and
                  service history &mdash; this is what running the service
                  requires.
                </li>
                <li>
                  <strong>The technician assigned to your booking</strong> sees
                  your name, phone number, visit location and the animal being
                  serviced. Technicians cannot see farmers they are not assigned
                  to.
                </li>
                <li>
                  <strong>Other farmers see nothing.</strong> There is no chat,
                  no directory and no public profile in any of the apps.
                </li>
              </ul>
              <h3>Service providers we use</h3>
              <p>
                These providers process data on our instructions in order to run
                the service. They are not permitted to use it for their own
                purposes, and we do not sell or rent your information to anyone.
              </p>
              <ul>
                <li><strong>Supabase</strong> &mdash; hosts the database.</li>
                <li><strong>Vercel</strong> &mdash; hosts the backend API.</li>
                <li>
                  <strong>Cloudinary</strong> &mdash; stores catalogue images
                  uploaded by operator staff.
                </li>
                <li>
                  <strong>Google (Firebase Cloud Messaging)</strong> &mdash;
                  delivers push notifications to your device.
                </li>
              </ul>
              <p>
                We may also disclose information where the law requires it, or
                where it is necessary to protect the rights and safety of users
                of the service.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. How your data is protected</h2>
              <ul>
                <li>
                  All traffic between the apps and our servers is encrypted in
                  transit over HTTPS.
                </li>
                <li>
                  Passwords are stored only as one-way hashes and are never
                  recoverable, by us or by anyone else.
                </li>
                <li>
                  Access is role-based and enforced on the server: a farmer can
                  only reach their own animals and bookings, and a technician
                  only their own assignments.
                </li>
                <li>
                  Sessions expire and can be revoked. Signing out or deleting
                  your account ends every session on every device.
                </li>
              </ul>
              <p>
                No system is perfectly secure. If we ever become aware of a
                breach affecting your information, we will notify affected users
                and act to contain it.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. How long we keep it, and deletion</h2>
              <p>
                Account information is kept for as long as your account exists.
                You can delete your account at any time.
              </p>
              <div className={styles.callout}>
                <p>
                  <strong>In the GBC Farmer app:</strong> open{' '}
                  <strong>Profile</strong> and tap{' '}
                  <strong>Delete my account</strong>. Your name, phone number and
                  address are erased immediately, any visit that has not yet
                  happened is cancelled, and every session is ended.
                </p>
                <p>
                  Completed insemination records are retained as the service
                  operator&rsquo;s breeding and inventory history, with your
                  identity removed from them &mdash; they record which straw was
                  used on which animal, which the operator is required to be able
                  to account for.
                </p>
                <p>
                  Full detail, and how to request deletion without the app, is on
                  the{' '}
                  <Link href="/gbc/delete-account">account deletion page</Link>.
                </p>
              </div>
              <p>
                Deleting your account frees your phone number, so you can
                register again later &mdash; but the new account starts empty.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. Your choices</h2>
              <ul>
                <li>
                  <strong>Notifications</strong> can be declined or turned off in
                  your device settings at any time. The apps still work; booking
                  updates appear in the in-app notification list instead.
                </li>
                <li>
                  <strong>Your address</strong> is optional. Without it a
                  technician has less to go on, so you may be asked for it when
                  booking.
                </li>
                <li>
                  <strong>Correcting your information</strong> &mdash; you can
                  edit your address and district in the Farmer app profile, and
                  your animals at any time. For anything else, ask the service
                  operator or write to us.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>9. Children</h2>
              <p>
                The GBC apps are business tools intended for adults. They are not
                directed at children, and we do not knowingly collect information
                from anyone under 18.
              </p>
            </section>

            <section className={styles.section}>
              <h2>10. Changes to this policy</h2>
              <p>
                If we change what the apps collect or how it is used, we will
                update this page and change the date at the top. Material changes
                will also be announced in the apps.
              </p>
            </section>

            <section className={styles.section}>
              <h2>11. Contact us</h2>
              <p className={styles.contact}>
                <strong>iRad Solutions</strong>
                <br />
                Ambikapur, Surguja
                <br />
                Chhattisgarh 497001, India
                <br />
                Email: <a href="mailto:iradwsas@gmail.com">iradwsas@gmail.com</a>
              </p>
            </section>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  );
}
