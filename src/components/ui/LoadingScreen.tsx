"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a1628]"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-24 w-80 mb-8"
            >
              <Image
                src="/images/logo-white.png.png"
                alt="Techline Venture"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-cyan shadow-[0_0_15px_rgba(0,229,255,0.8)]"
              />
            </div>

            {/* Floating particles or glow */}
            <div className="absolute -inset-20 pointer-events-none -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-cyan/20 blur-[60px]" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-[10px] font-bold tracking-[0.4em] text-cyan uppercase"
            >
              Initializing Digital Excellence
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
