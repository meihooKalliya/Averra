import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import React from "react";

type GlowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center w-full rounded-xl px-6 py-3 text-white overflow-hidden",
        "transition-all duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 shadow-lg shadow-indigo-800/40 border border-indigo-500"
          : "bg-neutral-900 border border-neutral-800",
        "hover:shadow-indigo-700/50 hover:-translate-y-[2px]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 font-semibold">{children}</span>
      <span className="absolute inset-0 opacity-30 pointer-events-none shine-gradient" />
      <span className="absolute -inset-4 blur-2xl opacity-20 bg-gradient-to-tr from-indigo-500 via-indigo-700 to-indigo-500" />
    </motion.button>
  );
};

export default GlowButton;