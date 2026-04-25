"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const KEY = "tlv_session_loaded";

export function LoadingScreen() {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const seen = window.sessionStorage.getItem(KEY);
      if (seen) return;
      window.sessionStorage.setItem(KEY, "1");
      setShow(true);
      const t = window.setTimeout(() => setShow(false), reduceMotion ? 300 : 1800);
      return () => window.clearTimeout(t);
    } catch {
      setShow(false);
    }
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-navy"
          initial={reduceMotion ? false : { opacity: 1 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="w-[240px]">
            <div
              className="mx-auto h-16 w-16 rounded-2xl border border-[rgba(0,229,255,0.22)] bg-[rgba(0,229,255,0.06)] grid place-items-center"
              style={{ boxShadow: "0 18px 70px rgba(0,229,255,0.12)" }}
            >
              <div className="font-[800] text-2xl text-cyan" style={{ fontFamily: "var(--font-display)" }}>
                TL
              </div>
            </div>
            <div className="mt-7 h-[6px] w-full overflow-hidden rounded-full bg-[rgba(197,213,232,0.14)]">
              <motion.div
                className="h-full w-1/2 rounded-full bg-cyan"
                initial={reduceMotion ? false : { x: "-100%" }}
                animate={reduceMotion ? undefined : { x: "200%" }}
                transition={{ duration: reduceMotion ? 0 : 1.35, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
            <div className="mt-3 text-center text-xs text-[rgba(197,213,232,0.72)]">
              Loading experience…
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

