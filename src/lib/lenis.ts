"use client";

import Lenis from "lenis";

export function createLenis() {
  return new Lenis({
    duration: 1.15,
    smoothWheel: true,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
}

