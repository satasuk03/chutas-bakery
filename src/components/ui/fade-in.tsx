"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

/**
 * The press: a plate arriving on the sheet.
 *
 * One motion idea for the whole site, with the exponential ease-out the craft
 * floor asks for (`--ease-press`, cubic-bezier(0.16, 1, 0.3, 1)) rather than
 * a linear `easeOut`. The plate travels a short distance and settles; it does
 * not slide, fade for half a second, or stagger by section.
 */
type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 20 },
  down: { x: 0, y: -20 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
  none: { x: 0, y: 0 },
};

const PRESS = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.52,
  className,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration, delay, ease: PRESS }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
