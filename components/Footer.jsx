'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: 'Custom Dashboards', href: '#services' },
      { name: 'Internal Tools', href: '#services' },
      { name: 'Lead Generation', href: '#services' },
      { name: 'Promotional Websites', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@irad.com', label: 'Email' }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <motion.div 
              className={styles.logo}
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.logoText}>iRad</span>
            </motion.div>
            <p className={styles.tagline}>
              Building enterprise-grade digital solutions that transform businesses.
            </p>
            
            {/* Social Icons */}
            <div className={styles.socials}>
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={styles.socialIcon}
                  aria-label={social.label}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className={styles.linkColumn}>
            <h6>Services</h6>
            <ul>
              {links.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles.linkColumn}>
            <h6>Company</h6>
            <ul>
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className={styles.linkColumn}>
            <h6>Legal</h6>
            <ul>
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} iRad Solutions. All rights reserved.
          </p>
          <p className={styles.credits}>
            Crafted with precision and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
