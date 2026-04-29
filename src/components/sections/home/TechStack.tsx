"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import * as RI from "react-icons/ri";

const techIcons = [
  { icon: "RiReactjsLine", name: "React" },
  { icon: "RiNextjsLine", name: "Next.js" },
  { icon: "RiNodejsLine", name: "Node.js" },
  { icon: "RiJavascriptLine", name: "JavaScript" },
  { icon: "RiTypescriptLine", name: "TypeScript" },
  { icon: "RiTailwindCssLine", name: "Tailwind" },
  { icon: "RiDatabase2Line", name: "Database" },
  { icon: "RiCloudLine", name: "Cloud" },
  { icon: "RiAndroidLine", name: "Android" },
  { icon: "RiAppleLine", name: "iOS" },
  { icon: "RiFlutterLine", name: "Flutter" },
  { icon: "RiGitBranchLine", name: "Git" },
];

interface IconItem {
  id: number;
  icon: string;
  name: string;
  x: number;
  y: number;
  rotation: number;
  velocity: { x: number; y: number };
  isFalling: boolean;
  isDragging: boolean;
}

export function TechStack() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const ICON_SIZE = 80;
  const [bounds, setBounds] = useState({ w: 720, h: 460 });
  const LABEL_OVERHANG_PX = 44; // allow the vertical label to sit outside the tile without constraint-jumps

  const iconMap = RI as unknown as Record<string, React.ComponentType<{ className?: string }>>;

  const seeded01 = (seed: number) => {
    // deterministic 0..1 (avoids Math.random in render)
    const x = Math.sin(seed * 999.123 + seed * seed * 0.017) * 10000;
    return x - Math.floor(x);
  };

  const createIcons = (w: number, h: number): IconItem[] => {
    const maxX = Math.max(0, w - ICON_SIZE);
    const maxY = Math.max(0, h - ICON_SIZE);
    const floor = Math.max(0, maxY);

    return techIcons.map((item, idx) => {
      const r1 = seeded01(idx + 1);
      const r2 = seeded01(idx + 19);
      const r3 = seeded01(idx + 77);

      return {
        ...item,
        id: idx,
        // scatter across width and start near the floor so it "piles" like the screenshot
        x: Math.max(0, Math.min(maxX, r1 * maxX)),
        y: Math.max(0, Math.min(floor, floor - 6 - r2 * 18)),
        rotation: r3 * 110 - 55,
        velocity: { x: 0, y: 0 },
        isFalling: false,
        isDragging: false,
      };
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setBounds({
        w: Math.max(320, Math.floor(rect.width)),
        h: Math.max(280, Math.floor(rect.height)),
      });
    };

    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const [icons, setIcons] = useState<IconItem[]>(() => createIcons(720, 460));

  const handleDragStart = (id: number) => {
    setIcons(prev => prev.map(icon => 
      icon.id === id ? { ...icon, isDragging: true } : icon
    ));
  };

  const handleDragEnd = (id: number, info: PanInfo) => {
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
    // Framer gives velocity in px/s. Our physics step runs per-frame, so convert to px/frame (≈ /60).
    const vx = clamp(info.velocity.x / 60, -26, 26);
    const vy = clamp(info.velocity.y / 60, -26, 26);

    setIcons((prev) =>
      prev.map((icon) =>
        icon.id === id
          ? { ...icon, isDragging: false, isFalling: true, velocity: { x: vx, y: vy } }
          : icon,
      ),
    );
  };

  const resetIcons = () => {
    setIcons(createIcons(bounds.w, bounds.h));
  };

  // Physics animation loop for falling elements
  useEffect(() => {
    if (reduceMotion) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const gravity = 0.9;
    const friction = 0.98;
    const bounce = 0.5;
    const floorY = Math.max(0, bounds.h - ICON_SIZE);
    const wallX = Math.max(0, bounds.w - ICON_SIZE);
    
    let animationId: number;
    
    const animate = () => {
      setIcons(prev => prev.map(icon => {
        if (!icon.isFalling || icon.isDragging) return icon;
        
        let newVelocity = { ...icon.velocity };
        let newX = icon.x;
        let newY = icon.y;
        let newRotation = icon.rotation;
        
        // Apply gravity
        newVelocity.y += gravity;
        
        // Apply velocity
        newX += newVelocity.x;
        newY += newVelocity.y;
        
        // Apply friction
        newVelocity.x *= friction;
        
        // Rotation based on horizontal velocity
        newRotation += newVelocity.x * 3;
        
        // Floor collision
        if (newY > floorY) {
          newY = floorY;
          newVelocity.y *= -bounce;
          newVelocity.x *= 0.7; // More friction on floor
          
          // Stop if velocity is very low
          if (Math.abs(newVelocity.y) < 2 && Math.abs(newVelocity.x) < 0.5) {
            newVelocity = { x: 0, y: 0 };
            const jitter = (seeded01(icon.id + 901) * 20 - 10);
            return {
              ...icon,
              x: newX,
              y: newY,
              rotation: newRotation + jitter,
              velocity: newVelocity,
              isFalling: false,
            };
          }
        }
        
        // Wall collisions
        if (newX < 0) {
          newX = 0;
          newVelocity.x *= -bounce;
        }
        if (newX > wallX) {
          newX = wallX;
          newVelocity.x *= -bounce;
        }
        
        return {
          ...icon,
          x: newX,
          y: newY,
          rotation: newRotation,
          velocity: newVelocity,
        };
      }));
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [bounds.h, bounds.w, reduceMotion]);

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-24 border-b border-cyan/10">
      {/* Screenshot-like frosted background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-[#dfe8ee] via-[#cfdbe1] to-[#c4d2d8]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-white/70 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.12),transparent_55%)]" />
        <div className="absolute -bottom-32 -left-24 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-[160px]" />
        <div className="absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full bg-cyan/10 blur-[170px]" />
      </div>

      <div className="container-max container-px relative z-10">
        {/* Title + copy (centered like screenshot) */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-6 text-4xl font-black tracking-tighter text-[#0a1628] sm:text-6xl uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Our <span className="text-cyan">Tech Stack</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0a1628]/70 sm:text-base">
            In today&apos;s digital economy enterprises must overcome complex market dynamics to sustain competitive advantage and deliver premium customer experiences at scale.
          </p>
        </div>

        {/* Interactive pile */}
        <div className="relative mt-12">
          {/* side arrow buttons */}
          <button
            type="button"
            aria-label="Scroll down"
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#0a1628]/10 bg-white/65 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition hover:bg-white/80"
            onClick={resetIcons}
          >
            <RI.RiArrowDownLine className="h-5 w-5 text-cyan" />
          </button>
          <button
            type="button"
            aria-label="Scroll down"
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#0a1628]/10 bg-white/65 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition hover:bg-white/80"
            onClick={resetIcons}
          >
            <RI.RiArrowDownLine className="h-5 w-5 text-cyan" />
          </button>

          <div
            ref={containerRef}
            className="relative h-[340px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-[40px] border border-white/60 bg-white/35 shadow-[0_30px_80px_rgba(0,0,0,0.10)] backdrop-blur-xl"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* soft top fog + vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_45%)]" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.75),transparent_55%)]" />

            {/* Draggable tiles */}
            {icons.map((item) => {
              const Icon = iconMap[item.icon] ?? RI.RiSparklingLine;
              return (
                <motion.div
                  key={item.id}
                  drag={!reduceMotion && !item.isFalling}
                    dragConstraints={
                      !item.isFalling
                        ? { top: 0, right: 0, bottom: 0, left: -LABEL_OVERHANG_PX }
                        : undefined
                    }
                    dragElastic={0}
                    dragMomentum={false}
                  onDragStart={() => handleDragStart(item.id)}
                  onDragEnd={(e, info) => handleDragEnd(item.id, info)}
                  animate={{
                    x: item.x,
                    y: item.y,
                    rotate: item.rotation,
                    scale: item.isDragging ? 1.06 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 24,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: 0,
                          transition: { duration: 0.15 },
                        }
                  }
                  className="absolute cursor-grab active:cursor-grabbing touch-none"
                  style={{ left: 0, top: 0 }}
                >
                  <div className="relative">
                    <div className="relative flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-[#0a1628]" />
                      <div
                        className="pointer-events-none absolute -left-9 top-1/2 -translate-y-1/2 text-[10px] font-bold tracking-widest text-[#0a1628]/55"
                        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
                      >
                        {item.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
