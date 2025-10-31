"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function AbstractTechVisual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-background to-cyan-500/10 border border-border shadow-xl">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500/40 rounded-full blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-50, 50, -50],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-sky-500/35 rounded-full blur-3xl"
          animate={{
            x: [50, -50, 50],
            y: [30, -30, 30],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6' }} stopOpacity="0.6" />
            <stop offset="100%" style={{ stopColor: '#06b6d4' }} stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6366f1' }} stopOpacity="0.5" />
            <stop offset="100%" style={{ stopColor: '#0ea5e9' }} stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#60a5fa' }} stopOpacity="0.5" />
            <stop offset="100%" style={{ stopColor: '#818cf8' }} stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Floating circles */}
        <motion.circle
          cx="20%"
          cy="30%"
          r="8"
          fill="url(#grad1)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            cy: ["30%", "25%", "30%"],
            r: [8, 12, 8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="80%"
          cy="60%"
          r="6"
          fill="url(#grad2)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            cy: ["60%", "55%", "60%"],
            r: [6, 10, 6],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.circle
          cx="15%"
          cy="70%"
          r="5"
          fill="url(#grad1)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            cy: ["70%", "65%", "70%"],
            r: [5, 8, 5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.circle
          cx="85%"
          cy="25%"
          r="7"
          fill="url(#grad2)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            cy: ["25%", "20%", "25%"],
            r: [7, 11, 7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="50%"
          cy="45%"
          r="9"
          fill="url(#grad3)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            cy: ["45%", "40%", "45%"],
            r: [9, 13, 9],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
        <motion.circle
          cx="65%"
          cy="70%"
          r="6"
          fill="url(#grad3)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            cy: ["70%", "65%", "70%"],
            r: [6, 10, 6],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />

        {/* Floating rectangles */}
        <motion.rect
          x="60%"
          y="35%"
          width="30"
          height="30"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          rx="4"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
            y: ["35%", "30%", "35%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.rect
          x="30%"
          y="55%"
          width="25"
          height="25"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="2"
          rx="3"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -180, -360],
            y: ["55%", "50%", "55%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Connection lines */}
        <motion.line
          x1="20%"
          y1="30%"
          x2="60%"
          y2="35%"
          stroke="url(#grad1)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            pathLength: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="80%"
          y1="60%"
          x2="60%"
          y2="35%"
          stroke="url(#grad2)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            pathLength: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.line
          x1="30%"
          y1="55%"
          x2="15%"
          y2="70%"
          stroke="url(#grad3)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            pathLength: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.line
          x1="50%"
          y1="45%"
          x2="65%"
          y2="70%"
          stroke="url(#grad1)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            pathLength: [0, 1, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </svg>

      {/* Particle dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => {
          const colors = ['bg-blue-500/50', 'bg-cyan-500/50', 'bg-indigo-500/50', 'bg-sky-500/50'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${randomColor} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0.5, 1.5, 0.5],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          );
        })}
      </div>

      {/* Center focal point */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-32 h-32 rounded-full border-2 border-blue-500/40"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 w-32 h-32 rounded-full border-2 border-cyan-500/30"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute inset-0 w-32 h-32 rounded-full border-2 border-indigo-500/25"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/50 via-cyan-500/40 to-indigo-500/50 backdrop-blur-sm" />
          </motion.div>
        </motion.div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />
    </div>
  );
}

