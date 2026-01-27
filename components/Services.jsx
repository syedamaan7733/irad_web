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
    title: 'Flow Management',
    description: 'Optimize your business processes with visual flow management tools that streamline operations and reduce bottlenecks.',
    features: ['Visual Flow Builder', 'Process Automation', 'Task Tracking']
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
    title: 'WhatsApp Integration & Chatbots',
    description: 'Connect with customers where they are. Automated chatbots and seamless WhatsApp integration for instant support.',
    features: ['24/7 Availability', 'Instant Responses', 'Order Updates']
  },
  {
    icon: Wrench, // Reusing icon for AI or find better if available but sticking to imports
    title: 'AI & AI Implementation',
    description: 'Leverage the power of Artificial Intelligence to automate complex tasks, predict trends, and personalize user experiences.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Machine Learning Models']
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
