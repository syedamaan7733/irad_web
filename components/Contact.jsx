'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Calendar } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    // const whatsappNumber = '919238153364'; // Adding country code for India
    const whatsappNumber = '919109390639'; // Adding country code for India
    let text = `Hi, my name is ${formData.name}.\n`;
    
    if (formData.email) {
      text += `Email: ${formData.email}\n`;
    }
    
    if (formData.company) {
      text += `Enterprise Name: ${formData.company}\n`;
    }
    
    text += `\nMessage:\n${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.div 
          className={styles.wrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Left: Text Content */}
          <motion.div className={styles.textContent} variants={fadeInUp}>
            <h2>Let&apos;s Build Something Amazing</h2>
            <p className="text-large">
              Ready to transform your business with custom digital solutions? 
              Get in touch and let&apos;s discuss your project.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Send size={24} />
                </div>
                <div>
                  <h5>Quick Response</h5>
                  <p>We typically respond within 24 hours</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Calendar size={24} />
                </div>
                <div>
                  <h5>Free Consultation</h5>
                  <p>30-minute strategy call to discuss your needs</p>
                </div>
              </div>
            </div>

            <div className={styles.bookMeeting}>
              <p>Prefer to talk?</p>
              <motion.a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
                whileHover={{ x: 5 }}
              >
                Book a meeting →
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form 
            className={styles.form}
            variants={fadeInUp}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Billu Katil 🔪"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="billukatil@gmail.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company">Company Name/Organization Name/Enterprise Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name/Organization Name...."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Tell us about your project *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="I need help with..."
                rows={5}
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
