import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- CUSTOM SVG SHAPE COMPONENT using your provided SVG ---
const TechLine = ({ className, flipped = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="831"
    height="29"
    fill="none"
    viewBox="0 0 831 29"
    preserveAspectRatio="none"
    className={className}
    style={{ transform: flipped ? "scale(-1, -1)" : "none" }}
  >
    <path fill="#00BFFF" d="M199 1.3h601v21H199z"></path>
    <path
      fill="#00BFFF"
      d="M805.081 28.407 781.626.473l48.638 1.547zM204.021 23.861 145.654 0 263.47 2.842z"
    ></path>
    <path fill="#00BFFF" d="M0 .3h173v9H0z"></path>
    {/* Add glow effect */}
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow)">
      <path fill="#00BFFF" fillOpacity="0.4" d="M199 1.3h601v21H199z"></path>
      <path
        fill="#00BFFF"
        fillOpacity="0.4"
        d="M805.081 28.407 781.626.473l48.638 1.547zM204.021 23.861 145.654 0 263.47 2.842z"
      ></path>
      <path fill="#00BFFF" fillOpacity="0.4" d="M0 .3h173v9H0z"></path>
    </g>
  </svg>
);

const SystemAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto-trigger animation on mount (or you can trigger via button)
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050505] overflow-hidden font-mono select-none">
      
      {/* Background Grid for ambiance */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1a365d 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center">
        
        {/* --- TOP LINE --- */}
        <motion.div
          initial={{ y: 0 }} // Starts at center
          animate={{ y: isOpen ? -180 : 0 }} // Moves UP
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // "Spring" pop effect
          className="absolute z-20 w-full h-[30px] flex justify-center"
        >
          <TechLine className="w-full h-full drop-shadow-[0_0_15px_rgba(0,191,255,0.8)]" />
        </motion.div>

        {/* --- CONTENT AREA (Revealed between lines) --- */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative z-10 w-[90%] bg-black/80 backdrop-blur-md border-x border-[#00BFFF]/30 overflow-hidden flex flex-col items-center text-center"
        >
          <div className="py-12 px-6 space-y-6">
            
            {/* Header */}
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
              transition={{ delay: 0.4 }}
              className="text-[#00BFFF] text-xl tracking-[0.3em] font-bold uppercase drop-shadow-[0_0_10px_rgba(0,191,255,1)]"
            >
              System Notification
            </motion.h2>

            {/* Main Message */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: 0.5 }}
              className="text-white text-4xl md:text-5xl font-extrabold italic tracking-wider drop-shadow-md"
            >
              PLAYER AWAKENING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-white">COMPLETE</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 max-w-lg mx-auto text-sm md:text-base leading-relaxed"
            >
              You have qualified to become a Player. <br/>
              Will you accept the daily quest?
            </motion.p>

            {/* Action Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,191,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-10 py-3 bg-[#000] border border-[#00BFFF] text-[#00BFFF] font-bold tracking-widest hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
            >
              ACCEPT
            </motion.button>

          </div>
        </motion.div>

        {/* --- BOTTOM LINE --- */}
        <motion.div
          initial={{ y: 0 }} // Starts at center (overlapping top line)
          animate={{ y: isOpen ? 180 : 0 }} // Moves DOWN
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-20 w-full h-[30px] flex justify-center"
        >
          {/* Flipped both horizontally AND vertically - complete 180° rotation */}
          <TechLine flipped={true} className="w-full h-full drop-shadow-[0_0_15px_rgba(0,191,255,0.8)]" />
        </motion.div>

      </div>
    </div>
  );
};

export default SystemAlert;