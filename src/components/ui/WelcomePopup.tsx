"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { RiMessage3Line, RiCloseLine, RiSendPlane2Line } from "react-icons/ri";

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification after 3 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[320px] overflow-hidden rounded-2xl border border-[rgba(0,229,255,0.14)] bg-[#0d1b2f] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="bg-[rgba(0,229,255,0.06)] p-4 flex items-center justify-between border-b border-[rgba(0,229,255,0.1)]">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-cyan/10 grid place-items-center text-cyan">
                  <RiMessage3Line className="h-5 w-5" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0d1b2f] bg-green-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">TechLine Support</div>
                  <div className="text-[10px] text-cyan uppercase tracking-wider font-medium">Online now</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <RiCloseLine className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="rounded-xl bg-[rgba(255,255,255,0.03)] p-3 text-sm text-[rgba(197,213,232,0.9)] leading-relaxed">
                Hi there! 👋 How can we help you today? We usually respond within a few minutes.
              </div>
              
              <div className="mt-4 flex flex-col gap-2">
                <button className="w-full rounded-lg border border-[rgba(0,229,255,0.15)] bg-cyan/5 px-4 py-2 text-left text-xs text-white hover:bg-cyan/10 transition-all">
                  I need a website
                </button>
                <button className="w-full rounded-lg border border-[rgba(0,229,255,0.15)] bg-cyan/5 px-4 py-2 text-left text-xs text-white hover:bg-cyan/10 transition-all">
                  Custom software inquiry
                </button>
              </div>
            </div>

            {/* Footer Input */}
            <div className="p-4 pt-0">
              <div className="flex items-center gap-2 rounded-lg bg-[rgba(255,255,255,0.03)] px-3 py-2 border border-[rgba(255,255,255,0.05)]">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="bg-transparent text-xs text-white outline-none flex-1 placeholder:text-gray-500"
                />
                <RiSendPlane2Line className="h-4 w-4 text-cyan cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-full right-0 mb-4 w-[240px] rounded-xl border border-[rgba(0,229,255,0.14)] bg-[#0d1b2f] p-3 shadow-xl"
            >
              <div className="text-xs text-white leading-relaxed">
                Need help with your project? Chat with us!
              </div>
              <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-r border-b border-[rgba(0,229,255,0.14)] bg-[#0d1b2f]" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotification(false);
          }}
          className="h-14 w-14 rounded-full bg-cyan shadow-[0_10px_30px_rgba(0,229,255,0.3)] grid place-items-center text-[#050d1f] hover:bg-[#00d1e6] transition-colors relative group"
        >
          <RiMessage3Line className="h-7 w-7" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-cyan"></span>
          </span>
        </motion.button>
      </div>
    </div>
  );
}
