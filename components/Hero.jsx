'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fadeInUp, fadeInDown, staggerContainer } from '@/lib/animations';
import styles from './Hero.module.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className={styles.hero}>
      {/* Background Cream Circle with Parallax */}
      <motion.div 
        className={styles.creamCircle}
        style={{ y: y1, opacity }}
      />
      
      {/* Animated pattern lines */}
      <div className={styles.patternLines}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.line}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.3 }}
            transition={{ 
              delay: i * 0.1,
              duration: 0.8,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            style={{ left: `${20 + i * 10}%` }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, -100],
              x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 100]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 40}%`
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div 
          className={styles.content}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ y: y2 }}
        >
          {/* Badge */}
          <motion.div 
            className={styles.badge}
            variants={fadeInDown}
          >
            <Sparkles size={16} />
            <span>Enterprise-Grade Solutions</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className={styles.headline}
            variants={fadeInUp}
          >
            Build Powerful
            <br />
            <span className="gradient-text">Digital Solutions</span>
            <br />
            That Drive Results
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className={styles.subheadline}
            variants={fadeInUp}
          >
            From custom dashboards to lead generation systems,
            <br />
            we create tech solutions that transform your business.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className={styles.ctaGroup}
            variants={fadeInUp}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Demo
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="#services"
              className="btn btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className={styles.trustBar}
            variants={fadeInUp}
          >
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>50+</div>
              <div className={styles.trustLabel}>Projects Delivered</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>100%</div>
              <div className={styles.trustLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>24/7</div>
              <div className={styles.trustLabel}>Support Available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
