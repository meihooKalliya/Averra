"use client";
import type React from "react";

type SparklesProps = {
  className?: string;
  density?: number;
  direction?: "top" | "bottom" | "left" | "right";
  speed?: number;
  color?: string;
};

// Lightweight placeholder to avoid external deps; replace with tsparticles version for advanced effects.
export function SparklesComp({ className }: SparklesProps): React.JSX.Element {
  return <div className={className} aria-hidden="true" />;
}