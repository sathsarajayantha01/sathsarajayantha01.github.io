"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding the problem, goals, and target audience through research and strategic discussions.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframing, UI design, and interactive prototyping to visualize the perfect solution.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building with clean, scalable code using modern technologies and best practices.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Rigorous testing, seamless launch, and comprehensive handover with ongoing support.",
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

function ProcessCard({
  step,
  index,
  isLast,
}: {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div variants={itemVariants} className="relative group">
      {/* Connecting Line - Hidden on mobile, shown on md+ */}
      {!isLast && (
        <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] z-0">
          {/* Line Background */}
          <div className="absolute inset-0 bg-border" />
          {/* Animated Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
          />
          {/* Arrow */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-violet-500 border-y-[5px] border-y-transparent" />
        </div>
      )}

      {/* Card */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/5 dark:bg-muted/20 dark:hover:bg-muted/40 group-hover:-translate-y-1">
        {/* Number Badge */}
        <div className="relative mb-6">
          {/* Background Glow on Hover */}
          <div className="absolute inset-0 scale-150 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Number Circle */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border-2 border-border group-hover:border-purple-500 transition-colors duration-300">
            {/* Large Number - Gradient Text on Hover */}
            <span
              className="text-2xl sm:text-3xl font-bold text-slate-400 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-500 group-hover:to-indigo-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 animate-gradient"
              style={{ backgroundSize: "200% 200%" }}
            >
              {step.number}
            </span>
          </div>

          {/* Icon Badge */}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {step.description}
        </p>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full group-hover:w-1/2 transition-all duration-300" />
      </div>

      {/* Mobile Connecting Arrow */}
      {!isLast && (
        <div className="flex md:hidden justify-center my-4">
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-8 bg-gradient-to-b from-violet-500 to-blue-500" />
            <div className="w-0 h-0 border-t-[8px] border-t-blue-500 border-x-[5px] border-x-transparent" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function WorkProcess() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      aria-label="Work process"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

        {/* Decorative Elements */}
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader
          label="How I Work"
          title="My Process"
          description="A streamlined approach to delivering exceptional results. Every project follows this proven framework."
          align="center"
        />

        {/* Process Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.number}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Ready to start your project?{" "}
            <a
              href="#contact"
              className="text-foreground font-medium underline underline-offset-4 hover:text-violet-500 transition-colors"
            >
              Let&apos;s talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
