"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useMemo } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
  suffix?: React.ReactNode;
}

const BlurFadeText = ({
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
  suffix,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={combinedVariants}
              transition={{
                yoyo: Infinity,
                delay: delay + i * characterDelay,
                ease: "easeOut",
              }}
              className={cn("inline-block", className)}
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
        {suffix}
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay,
        }}
      >
        {text}
        {suffix}
      </motion.div>
      <div
        className="absolute inset-0 blur-lg"
        style={{
          opacity: 0.5,
          transform: `translateY(${yOffset}px)`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default BlurFadeText;
