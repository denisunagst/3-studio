
import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Large faint glow top left - Magenta/Purple hint */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-fuchsia-900/10 rounded-full blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Large faint glow bottom right - Cyan/Blue hint */}
      <motion.div
        className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-cyan-900/10 rounded-full blur-[120px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Floating orb middle left */}
      <motion.div
        className="absolute top-[40%] -left-[5%] w-[30vw] h-[30vw] bg-indigo-900/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      {/* Floating orb middle right */}
      <motion.div
        className="absolute top-[20%] -right-[5%] w-[35vw] h-[35vw] bg-violet-900/5 rounded-full blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};
