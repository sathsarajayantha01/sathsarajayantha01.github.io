"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Download, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export function Hero() {
  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      </div>

      {/* Main Content - Centered */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 py-20 flex flex-col items-center text-center"
      >
        {/* Profile Image with Aura */}
        <motion.div
          variants={imageVariants}
          className="relative mb-10"
        >
          {/* Multi-color Aura Glow */}
          <motion.div
            variants={glowVariants}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full blur-[100px] md:blur-[120px]"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)",
              }}
            />
          </motion.div>

          {/* Profile Image Container */}
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt="Sathsara Jayantha"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 192px, 288px"
            />
          </div>
        </motion.div>

        {/* Name with Verified Badge */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2.5 mb-6"
        >
          <span className="text-2xl md:text-3xl font-medium text-foreground">
            Sathsara Jayantha
          </span>
          <BadgeCheck className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
        </motion.div>

        {/* Big Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground max-w-3xl"
        >
          Full Stack Developer
          <br />
          <span className="text-foreground">&amp; UI/UX Designer.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          Crafting digital experiences that blend beautiful design with powerful technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToWork}
            className="group"
            aria-label="View my work"
          >
            <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            View My Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            aria-label="Download resume"
          >
            <a href="/resume.pdf" download className="group">
              <Download className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
