import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | iRad Solutions',
  description: 'Terms of Service for iRad Solutions',
};

export default function TermsOfService() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-20 mt-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-navy-deep">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-slate-600">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">1. Agreement to Terms</h2>
          <p className="mb-4">
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and iRad Solutions ("we," "us," or "our"), concerning your access to and use of our website. 
            By accessing the website, you read that you have read, understood, and agreed to be bound by all of these Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">2. Intellectual Property Rights</h2>
          <p className="mb-4">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">3. User Representations</h2>
          <p className="mb-4">
            By using the Site, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You are not a minor in the jurisdiction in which you reside.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">4. Prohibited Activities</h2>
          <p className="mb-4">
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">5. Term and Termination</h2>
          <p className="mb-4">
            These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">6. Contact Us</h2>
          <p className="mb-4">
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
          </p>
          <p>
            <strong>iRad Solutions</strong><br />
            Email: contact@irad.com
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
