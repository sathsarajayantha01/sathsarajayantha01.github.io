"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Layers, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const skills = [
  {
    icon: Code2,
    title: "Development",
    description:
      "Building scalable web applications with modern frameworks like React, Next.js, and Node.js.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Crafting intuitive user interfaces and experiences with a focus on aesthetics and usability.",
  },
  {
    icon: Layers,
    title: "Strategy",
    description:
      "Bridging the gap between design and code to deliver cohesive digital products.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <SectionHeader
              label="About"
              title="A creative developer with an eye for design"
              id="about-heading"
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                I&apos;m a multidisciplinary professional who thrives at the
                intersection of{" "}
                <span className="text-foreground font-medium">
                  design and technology
                </span>
                . With expertise spanning full-stack development, UI/UX design,
                and graphic design, I bring a unique perspective to every
                project.
              </p>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                My approach combines{" "}
                <span className="text-foreground font-medium">
                  technical precision
                </span>{" "}
                with{" "}
                <span className="text-foreground font-medium">
                  creative vision
                </span>
                . I believe great digital products are born when code meets
                craftsmanship-where every pixel is intentional and every
                interaction feels natural.
              </p>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                When I&apos;m not coding or designing, you&apos;ll find me exploring new
                design trends, contributing to open-source projects, or
                experimenting with creative tools.
              </p>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
              >
                {[
                  { value: "2+", label: "Years Experience" },
                  { value: "10+", label: "Projects Completed" },
                  { value: "05+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl sm:text-4xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="pt-4">
                <Button variant="outline" asChild className="group">
                  <a href="#contact">
                    Let&apos;s work together
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  variants={itemVariants}
                  className="group relative p-6 rounded-2xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-background border border-border">
                      <skill.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {skill.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative number */}
                  <span className="absolute top-4 right-6 text-6xl font-bold text-muted/50 select-none">
                    0{index + 1}
                  </span>
                </motion.div>
              ))}

              {/* Additional Info Card */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-foreground text-background"
              >
                <p className="text-sm uppercase tracking-wider opacity-70">
                  Currently
                </p>
                <p className="mt-2 text-lg font-medium">
                  Open for freelance projects and full-time opportunities
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-sm opacity-70">
                    Available from January 2026
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
