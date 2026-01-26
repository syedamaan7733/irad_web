'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Wrench, Users, Globe, Package } from 'lucide-react';
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations';
import styles from './Services.module.css';

const services = [
  {
    icon: LayoutDashboard,
    title: 'Custom Dashboards',
    description: 'Data-driven dashboards that give you real-time insights and actionable intelligence to make better decisions.',
    features: ['Real-time Analytics', 'Custom Metrics', 'Interactive Reports']
  },
  {
    icon: Wrench,
    title: 'Internal Tools',
    description: 'Powerful internal systems that streamline operations, automate workflows, and boost team productivity.',
    features: ['Workflow Automation', 'Team Collaboration', 'Process Optimization']
  },
  {
    icon: Users,
    title: 'Lead Generation Systems',
    description: 'Smart lead capture and management systems that convert visitors into customers and grow your business.',
    features: ['Lead Capture Forms', 'CRM Integration', 'Analytics Tracking']
  },
  {
    icon: Globe,
    title: 'Promotional Websites',
    description: 'Stunning, high-converting websites that showcase your brand and drive engagement with modern design.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
  },
  {
    icon: Package,
    title: 'Product Solutions',
    description: 'End-to-end product development from concept to launch, built with scalability and user experience in mind.',
    features: ['MVP Development', 'Scalable Architecture', 'User-Centric Design']
  }
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>What We Build</motion.h2>
          <motion.p className="text-large" variants={fadeInUp}>
            Enterprise-grade solutions tailored to your unique business needs
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.card}
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
            >
              <motion.div 
                className={styles.iconWrapper}
                variants={cardHover}
              >
                <service.icon size={32} strokeWidth={2} />
              </motion.div>
              
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              
              <ul className={styles.features}>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
