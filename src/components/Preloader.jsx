'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800"
        >
          <div className="relative w-32 h-32">
            <img
              src="/USKTLogo.webp"
              alt=""
              className="w-full h-full object-contain opacity-20 grayscale"
            />
            <div
              className="absolute inset-0 animate-fill-up"
            >
              <img
                src="/USKTLogo.webp"
                alt="USKT"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
