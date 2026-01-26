// Framer Motion Animation Variants for iRad Website
// Respects prefers-reduced-motion accessibility

// Check if user prefers reduced motion
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

// Fade in with translate up
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.6,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Fade in with translate down
export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : -40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.6,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Fade in from left
export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: prefersReducedMotion ? 0 : -40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.6,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Fade in from right
export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: prefersReducedMotion ? 0 : 40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.6,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Simple fade in
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.6,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Scale in animation
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: prefersReducedMotion ? 1 : 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.5,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Stagger container for children animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.1,
      delayChildren: prefersReducedMotion ? 0 : 0.2
    }
  }
};

// Card hover animation
export const cardHover = {
  rest: { 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1]
    }
  },
  hover: { 
    y: prefersReducedMotion ? 0 : -8,
    scale: prefersReducedMotion ? 1 : 1.01,
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Button hover animation
export const buttonHover = {
  rest: { 
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0.0, 0.2, 1]
    }
  },
  hover: { 
    scale: prefersReducedMotion ? 1 : 1.02,
    transition: {
      duration: 0.2,
      ease: [0.4, 0.0, 0.2, 1]
    }
  },
  tap: {
    scale: 0.98
  }
};

// Underline animation
export const underlineExpand = {
  rest: { 
    width: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1]
    }
  },
  hover: { 
    width: prefersReducedMotion ? 0 : '100%',
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Parallax scroll animation helper
export const parallaxScroll = (offset = 50) => ({
  y: prefersReducedMotion ? 0 : offset,
  transition: {
    duration: 0,
    ease: 'linear'
  }
});

// Rotate in animation
export const rotateIn = {
  hidden: { 
    opacity: 0, 
    rotate: prefersReducedMotion ? 0 : -10 
  },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.7,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Slide in from bottom (for modals)
export const slideInBottom = {
  hidden: { 
    y: prefersReducedMotion ? 0 : '100%', 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.5,
      ease: [0.4, 0.0, 0.2, 1]
    }
  },
  exit: {
    y: prefersReducedMotion ? 0 : '100%',
    opacity: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.3,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Page transition
export const pageTransition = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.5,
      ease: [0.4, 0.0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.3,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

// Viewport detection settings
export const viewport = {
  once: true,
  amount: 0.2,
  margin: '-100px'
};
