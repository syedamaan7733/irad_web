import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | iRad Solutions',
  description: 'Privacy Policy for iRad Solutions',
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-20 mt-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-navy-deep">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-slate-600">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">1. Introduction</h2>
          <p className="mb-4">
            Welcome to iRad Solutions ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">2. Information We Collect</h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">3. Use of Your Information</h2>
          <p className="mb-4">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Create and manage your account.</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
            <li>Email you regarding your account or order.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">4. Disclosure of Your Information</h2>
          <p className="mb-4">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">5. Security of Your Information</h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-navy-deep">6. Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
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
