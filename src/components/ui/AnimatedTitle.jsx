import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedTitle Component
 * 
 * Implements a calligraphy-style tracing effect using SVG text animation.
 * The outlines of the letters are drawn on screen, followed by a fade-in
 * of the solid gold fill to create a premium "hand-drawn" luxury feel.
 */
const AnimatedTitle = ({ title }) => {
  // We use a large strokeDasharray value to ensure we cover the entire text perimeter.
  // The animation will 'draw' the outline by reducing the offset.
  const dashArray = 1000;

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <svg
        viewBox="0 0 600 120"
        className="w-full h-auto overflow-visible drop-shadow-[0_0_8px_rgba(249,226,126,0.3)]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F9E27E" /> {/* gold-light */}
            <stop offset="50%" stopColor="#D4AF37" /> {/* gold-medium */}
            <stop offset="100%" stopColor="#B8860B" /> {/* gold-deep */}
          </linearGradient>
        </defs>

        {/* 1. The Tracing Layer (Outline) */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-4xl md:text-6xl font-script uppercase tracking-widest select-none"
          fill="transparent"
          stroke="url(#goldGradient)"
          strokeWidth="0.8"
          initial={{ strokeDasharray: dashArray, strokeDashoffset: dashArray }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        >
          {title}
        </motion.text>

        {/* 2. The Fill Layer (Appears after drawing) */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-4xl md:text-6xl font-script uppercase tracking-widest select-none text-gradient"
          fill="url(#goldGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1] }}
          transition={{
            duration: 2,
            delay: 3.5, // Wait for the outline animation to be mostly done
            ease: "linear"
          }}
        >
          {title}
        </motion.text>
      </svg>

      {/* Subtle glow effect behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-gold-medium/5 blur-[60px] pointer-events-none" />
    </div>
  );
};

export default AnimatedTitle;
