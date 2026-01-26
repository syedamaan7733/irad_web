'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Rocket, Building2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    price: 'Custom',
    description: 'Perfect for small businesses and startups looking to digitalize their operations.',
    features: [
      'Single application development',
      'Modern responsive design',
      'Basic integrations',
      'Email support',
      '30-day support period'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Professional',
    icon: Rocket,
    price: 'Custom',
    description: 'Ideal for growing companies that need robust, scalable solutions.',
    features: [
      'Multiple applications',
      'Advanced integrations',
      'Custom dashboards & analytics',
      'Priority support',
      '90-day support & maintenance',
      'Performance optimization',
      'Security audit included'
    ],
    cta: 'Get Started',
    highlighted: true
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: 'Custom',
    description: 'Comprehensive solutions for large organizations with complex needs.',
    features: [
      'Unlimited applications',
      'Full-stack development',
      'Custom architecture design',
      'Dedicated support team',
      '1-year support & maintenance',
      'Advanced security & compliance',
      'Training & documentation',
      'SLA guarantees'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className={`section section-dark ${styles.pricing}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>Transparent Pricing</motion.h2>
          <motion.p className="text-large" variants={fadeInUp}>
            Flexible solutions tailored to your needs and budget
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {plan.highlighted && (
                <div className={styles.badge}>Most Popular</div>
              )}

              <div className={styles.iconWrapper}>
                <plan.icon size={32} strokeWidth={2} />
              </div>

              <h3>{plan.name}</h3>
              
              <div className={styles.price}>
                <span className={styles.priceAmount}>{plan.price}</span>
              </div>

              <p className={styles.description}>{plan.description}</p>

              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary-light'}`}
                style={{ width: '100%', marginTop: 'auto' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>All pricing is customized based on project scope and requirements.</p>
          <p>Contact us for a detailed quote tailored to your needs.</p>
        </motion.div>
      </div>
    </section>
  );
}
