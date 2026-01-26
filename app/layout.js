import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: 'iRad Solutions | Enterprise-Grade Digital Solutions',
  description: 'Building powerful digital solutions that transform businesses. From custom dashboards to lead generation systems, we create tech solutions that drive results.',
  keywords: ['web development', 'custom dashboards', 'internal tools', 'lead generation', 'enterprise solutions'],
  authors: [{ name: 'iRad Solutions' }],
  openGraph: {
    title: 'iRad Solutions | Enterprise-Grade Digital Solutions',
    description: 'Building powerful digital solutions that transform businesses.',
    type: 'website',
    locale: 'en_US',
    url: 'https://irad.com',
    siteName: 'iRad Solutions'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iRad Solutions | Enterprise-Grade Digital Solutions',
    description: 'Building powerful digital solutions that transform businesses.'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
