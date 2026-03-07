import { motion } from "framer-motion";
import type React from "react";

type TimelineContentProps = {
  children: React.ReactNode;
  className?: string;
  animationNum?: number;
  customVariants?: {
    visible: (i: number) => any;
    hidden: any;
  };
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  timelineRef?: React.RefObject<HTMLElement>;
};

export function TimelineContent({
  children,
  className,
  animationNum = 0,
  customVariants,
  as: As = "div",
}: TimelineContentProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={customVariants}
      custom={animationNum}
      className={className}
    >
      {/* @ts-expect-error dynamic element */}
      <As>{children}</As>
    </motion.div>
  );
}