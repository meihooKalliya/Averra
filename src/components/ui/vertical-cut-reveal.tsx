"use client";
import { motion } from "framer-motion";
import type React from "react";

type VerticalCutRevealProps = {
  children: React.ReactNode;
  splitBy?: "words" | "chars";
  containerClassName?: string;
  reverse?: boolean;
  staggerDuration?: number;
  staggerFrom?: "first" | "last";
  transition?: any;
};

export function VerticalCutReveal({
  children,
  splitBy = "words",
  containerClassName,
  reverse = false,
  staggerDuration = 0.1,
  staggerFrom = "first",
  transition,
}: VerticalCutRevealProps) {
  const text = typeof children === "string" ? children : String(children);
  const parts = splitBy === "chars" ? text.split("") : text.split(" ");
  const ordered = reverse ? [...parts].reverse() : parts;

  return (
    <span className={containerClassName}>
      {ordered.map((p, i) => (
        <motion.span
          key={`${p}-${i}`}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: i * (staggerDuration || 0.1), ...(transition || {}) }}
          style={{ display: "inline-block", overflow: "hidden", whiteSpace: "pre" }}
        >
          {p}
          {splitBy === "words" && i < ordered.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}