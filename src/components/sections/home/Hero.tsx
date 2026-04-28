"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-navy pt-32 pb-20">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-cyan/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-cyan/5 blur-[120px]" />
      </div>

      <div className="container-max container-px relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-sm border border-cyan/20 bg-cyan/5 px-4 py-1.5 text-xs font-bold tracking-[0.3em] text-cyan uppercase">
              Digital Excellence
            </div>
            
            <h1 className="mt-8 text-3xl font-[900] leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl 2xl:text-7xl uppercase">
              Innovate <br />
              <span className="text-cyan">Scale</span> <br />
              Succeed
            </h1>

            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-12 bg-cyan/40" />
              <div className="text-[10px] font-bold tracking-[0.2em] text-cyan uppercase">Insights</div>
            </div>

            <div className="mt-6 max-w-xl">
              <h2 className="text-lg font-bold text-white sm:text-xl lg:text-2xl uppercase">Modern Digital Solutions</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray2 sm:text-base">
                In today&apos;s digital economy, businesses must leverage precision-driven strategies to sustain competitive advantage and deliver premium experiences at scale.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="/contact" variant="primary" className="min-w-[200px] justify-center text-sm font-bold tracking-[0.2em] uppercase">
                Start Project
              </MagneticButton>
              <MagneticButton href="/portfolio" variant="outline" className="min-w-[200px] justify-center text-sm font-bold tracking-[0.2em] uppercase">
                Our Work
              </MagneticButton>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-square w-full"
            >
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative h-full w-full"
              >
                {/* Decorative elements around the robot */}
                <div className="absolute inset-0 rounded-full border border-cyan/10 animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute inset-[10%] rounded-full border border-cyan/5" />
                
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <motion.div
                    initial={{ scale: 1.3 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 2.5,
                      ease: [0.16, 1, 0.3, 1], // custom easeOutExpo
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src="/images/robot-preview.png"
                      alt="TechLine AI Robot"
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Status Tags */}
              <div className="absolute -left-4 top-1/4 rounded-sm border border-cyan/20 bg-navy/80 p-3 backdrop-blur-md">
                <div className="text-[10px] font-bold tracking-widest text-cyan uppercase">System Status</div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                  <span className="text-xs font-bold text-white">ONLINE</span>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 rounded-sm border border-cyan/20 bg-navy/80 p-3 backdrop-blur-md">
                <div className="text-[10px] font-bold tracking-widest text-cyan uppercase">Security</div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs font-bold text-white">ENCRYPTED</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
