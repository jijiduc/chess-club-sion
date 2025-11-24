// src/components/Snowfall.tsx
import { motion } from 'framer-motion';
import React from 'react';

const Snowflake = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    className="snowflake"
    style={{
      ...style,
      position: 'absolute',
      backgroundColor: 'white',
      borderRadius: '50%',
      pointerEvents: 'none',
    }}
    initial={{ y: '-10vh', x: style.left, opacity: 0 }}
    animate={{
      y: '100vh',
      x: [style.left, `calc(${style.left} + ${Math.random() * 40 - 20}px)`, `calc(${style.left} + ${Math.random() * 40 - 20}px)`, style.left], // Gentle horizontal sway
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: Math.random() * 10 + 10, // 10 to 20 seconds duration
      repeat: Infinity,
      ease: "linear",
      delay: Math.random() * 15, // Random start delay up to 15s
    }}
  />
);

const Snowfall = ({ count = 150 }: { count?: number }) => {
  const snowflakes = React.useMemo(() => Array.from({ length: count }).map((_, index) => {
    const size = Math.random() * 2.5 + 2; // 2px to 4.5px
    const style = {
      left: `${Math.random() * 100}vw`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: Math.random() * 0.6 + 0.4, // 0.4 to 1.0 opacity
    };
    return <Snowflake key={index} style={style} />;
  }), [count]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {snowflakes}
    </div>
  );
};

export default Snowfall;
