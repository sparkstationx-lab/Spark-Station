import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLoader } from '../context/LoaderContext';
import { Zap } from 'lucide-react';

export const GlobalLoader: React.FC = () => {
  const { isLoading, currentWord, currentWordIndex, words } = useLoader();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="spark-global-loader"
          key="global-loader-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0d1117]/80 backdrop-blur-md select-none pointer-events-auto"
          role="status"
          aria-live="polite"
          aria-label={`Loading: ${currentWord}`}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#58A6FF]/15 via-[#8B5CF6]/15 to-transparent filter blur-[60px] pointer-events-none animate-pulse" />

          {/* Centered Minimal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: -4 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center px-8 py-7 rounded-2xl bg-[#161b22]/90 border border-[#30363d]/80 shadow-2xl shadow-black/80 max-w-xs w-full mx-4"
          >
            {/* Minimal Brand Mark & Spinner */}
            <div className="relative w-12 h-12 flex items-center justify-center mb-5">
              {/* Outer Rotating Glowing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#58A6FF] border-r-[#8B5CF6] opacity-90"
              />
              
              {/* Inner Pulsing Ring */}
              <div className="absolute inset-1 rounded-full border border-[#30363d]/60 bg-[#0d1117]/60" />

              {/* Spark Icon */}
              <Zap size={18} className="text-[#58A6FF] relative z-10 animate-pulse" />
            </div>

            {/* Word Animation Container */}
            <div className="h-7 relative flex items-center justify-center overflow-hidden w-full mb-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWord}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="flex items-center gap-1.5"
                >
                  <span className="font-mono text-sm tracking-widest text-[#58A6FF] font-semibold lowercase">
                    {currentWord}
                  </span>
                  <span className="text-[#8B5CF6] text-xs font-mono animate-pulse font-bold">
                    ...
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 5-Step Micro Progress Indicator */}
            <div className="flex items-center gap-1.5 w-full justify-center mb-3">
              {words.map((word, idx) => {
                const isActive = idx === currentWordIndex;
                const isPassed = idx < currentWordIndex;
                return (
                  <motion.div
                    key={word}
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      backgroundColor: isActive
                        ? '#58A6FF'
                        : isPassed
                        ? '#8B5CF6'
                        : '#30363d',
                    }}
                    transition={{ duration: 0.25 }}
                    className="h-1 rounded-full flex-1 max-w-[32px] transition-all"
                    style={{
                      boxShadow: isActive ? '0 0 8px rgba(88,166,255,0.6)' : 'none',
                    }}
                  />
                );
              })}
            </div>

            {/* Spark Station Minimal Brand Mark */}
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8b949e]/70">
              Spark Station
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
