"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  type Variant,
} from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
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

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const { x, y } = offsets[direction];

  const hidden: Variant = { opacity: 0, x, y };
  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration, delay, ease: "easeOut" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden, visible }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
