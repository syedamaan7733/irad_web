'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import styles from './CaseStudies.module.css';

const caseStudies = [
  {
    company: 'TechFlow Inc.',
    industry: 'SaaS',
    title: 'Scaling Analytics for 50K+ Users',
    description: 'Built a real-time analytics dashboard that processes millions of data points daily, helping TechFlow make faster, data-driven decisions.',
    metrics: [
      { icon: TrendingUp, value: '300%', label: 'Revenue Growth' },
      { icon: Users, value: '50K+', label: 'Active Users' },
      { icon: Clock, value: '80%', label: 'Time Saved' }
    ],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    company: 'GrowthLabs',
    industry: 'Marketing',
    title: 'Lead Generation Engine',
    description: 'Developed an automated lead capture and nurturing system that transformed GrowthLabs\' customer acquisition process.',
    metrics: [
      { icon: TrendingUp, value: '5X', label: 'Lead Volume' },
      { icon: Users, value: '2000+', label: 'Leads/Month' },
      { icon: Clock, value: '60%', label: 'Cost Reduction' }
    ],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    company: 'CoreCommerce',
    industry: 'E-Commerce',
    title: 'Custom Internal Operations Platform',
    description: 'Created a unified operations platform that streamlined inventory, orders, and customer service for a $10M+ e-commerce business.',
    metrics: [
      { icon: TrendingUp, value: '45%', label: 'Efficiency Gain' },
      { icon: Users, value: '100+', label: 'Team Members' },
      { icon: Clock, value: '<1s', label: 'Response Time' }
    ],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className={`section ${styles.caseStudies}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>Proven Results</motion.h2>
          <motion.p className="text-large" variants={fadeInUp}>
            Real projects, real impact. See how we've helped businesses transform.
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              className={styles.card}
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {/* Gradient header */}
              <div 
                className={styles.cardHeader}
                style={{ background: study.gradient }}
              >
                <div className={styles.companyInfo}>
                  <span className={styles.industry}>{study.industry}</span>
                  <h4>{study.company}</h4>
                </div>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <h3>{study.title}</h3>
                <p>{study.description}</p>

                {/* Metrics */}
                <div className={styles.metrics}>
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className={styles.metric}>
                      <metric.icon size={20} className={styles.metricIcon} />
                      <div className={styles.metricValue}>{metric.value}</div>
                      <div className={styles.metricLabel}>{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button 
                  className={styles.viewCase}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Study
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
