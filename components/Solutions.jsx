'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, Clock, Shield, Zap } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer } from '@/lib/animations';
import styles from './Solutions.module.css';

const solutions = [
  {
    id: 'analytics',
    label: 'Analytics',
    icon: TrendingUp,
    problem: 'Scattered data across multiple platforms makes decision-making slow and uncertain.',
    solution: 'Unified Analytics Dashboard',
    description: 'Consolidate all your metrics into one powerful dashboard. Get real-time insights, custom reports, and predictive analytics that help you make faster, smarter decisions.',
    features: [
      'Real-time data visualization',
      '50+ pre-built integrations',
      'Custom metric tracking',
      'Automated reporting'
    ],
    stats: [
      { value: '10x', label: 'Faster Reporting' },
      { value: '85%', label: 'Time Saved' }
    ]
  },
  {
    id: 'automation',
    label: 'Automation',
    icon: Zap,
    problem: 'Manual, repetitive tasks waste hours of valuable team time every week.',
    solution: 'Workflow Automation Platform',
    description: 'Automate repetitive tasks and streamline your operations. From data entry to customer communications, let our tools handle the grunt work while your team focuses on growth.',
    features: [
      'Visual workflow builder',
      'Multi-step automation',
      'Smart triggers & actions',
      'API integrations'
    ],
    stats: [
      { value: '40hrs', label: 'Saved Per Week' },
      { value: '95%', label: 'Accuracy Rate' }
    ]
  },
  {
    id: 'security',
    label: 'Security',
    icon: Shield,
    problem: 'Data breaches and security vulnerabilities put your business and customers at risk.',
    solution: 'Enterprise Security Suite',
    description: 'Protect your business with enterprise-grade security. Multi-layer encryption, real-time threat detection, and compliance tools keep your data safe and your customers confident.',
    features: [
      'End-to-end encryption',
      '24/7 threat monitoring',
      'Compliance management',
      'Access control'
    ],
    stats: [
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '0', label: 'Security Breaches' }
    ]
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: Clock,
    problem: 'Slow, clunky systems frustrate users and hurt conversion rates.',
    solution: 'Optimized Performance Stack',
    description: 'Lightning-fast applications that users love. We build with performance in mind from day one, ensuring your digital products are blazing fast on any device.',
    features: [
      'Sub-second load times',
      'CDN optimization',
      'Smart caching',
      'Mobile-first design'
    ],
    stats: [
      { value: '<1s', label: 'Page Load Time' },
      { value: '+45%', label: 'Conversion Lift' }
    ]
  }
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const activeSolution = solutions.find(s => s.id === activeTab);

  return (
    <section id="solutions" className={`section section-dark ${styles.solutions}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>Real Problems, Real Solutions</motion.h2>
          <motion.p className="text-large" variants={fadeInUp}>
            Powerful tools designed to solve your biggest business challenges
          </motion.p>
        </motion.div>

        {/* Tab Pills */}
        <motion.div 
          className={styles.tabs}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {solutions.map((solution) => (
            <button
              key={solution.id}
              className={`${styles.tab} ${activeTab === solution.id ? styles.active : ''}`}
              onClick={() => setActiveTab(solution.id)}
            >
              <solution.icon size={20} />
              {solution.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeSolution && (
            <motion.div
              key={activeSolution.id}
              className={styles.content}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.contentGrid}>
                {/* Left: Problem & Solution */}
                <div className={styles.textContent}>
                  <div className={styles.problemBox}>
                    <div className={styles.label}>The Problem</div>
                    <p>{activeSolution.problem}</p>
                  </div>

                  <div className={styles.arrow}>→</div>

                  <div className={styles.solutionBox}>
                    <div className={styles.label}>Our Solution</div>
                    <h3>{activeSolution.solution}</h3>
                    <p>{activeSolution.description}</p>
                  </div>

                  <ul className={styles.featureList}>
                    {activeSolution.features.map((feature) => (
                      <li key={feature}>
                        <span className={styles.checkmark}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Stats & Visual */}
                <div className={styles.visualContent}>
                  <div className={styles.statsGrid}>
                    {activeSolution.stats.map((stat) => (
                      <motion.div
                        key={stat.label}
                        className={styles.statCard}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <div className={styles.statValue}>{stat.value}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative dashboard mockup */}
                  <motion.div 
                    className={styles.mockDashboard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className={styles.mockHeader}>
                      <div className={styles.mockDot}></div>
                      <div className={styles.mockDot}></div>
                      <div className={styles.mockDot}></div>
                    </div>
                    <div className={styles.mockContent}>
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={styles.mockBar}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                          style={{ width: `${60 + Math.random() * 40}%` }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
