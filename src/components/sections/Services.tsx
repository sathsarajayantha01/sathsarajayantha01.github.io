"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Figma,
  Code2,
  PenTool,
  ArrowUpRight,
  Sparkles,
  Database,
  Smartphone,
  Globe,
  Layers,
  Palette,
  X,
  Check,
  LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Type definitions
interface ServiceFeature {
  icon: LucideIcon;
  text: string;
}

interface ServiceDetails {
  description: string;
  features: string[];
  tools: string[];
}

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: ServiceFeature[];
  accent: string;
  details: ServiceDetails;
}

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

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

const services: Service[] = [
  {
    id: "uiux",
    icon: Figma,
    title: "UI/UX Design",
    description:
      "Creating intuitive, user-centered designs that balance aesthetics with functionality. From wireframes to high-fidelity prototypes.",
    features: [
      { icon: Smartphone, text: "Mobile-First Design" },
      { icon: Layers, text: "Design Systems" },
      { icon: Sparkles, text: "Micro-interactions" },
    ],
    accent: "from-violet-500/20 to-purple-500/20",
    details: {
      description:
        "I specialize in crafting digital experiences that put users first. My design process combines extensive user research, iterative prototyping, and meticulous attention to detail. From initial wireframes to polished, interactive prototypes, I ensure every pixel serves a purpose and every interaction feels intuitive.",
      features: [
        "User Research & Persona Development",
        "Wireframing & Information Architecture",
        "High-Fidelity UI Design",
        "Interactive Prototyping",
        "Usability Testing",
        "Design System Creation",
        "Responsive Design Patterns",
        "Accessibility (WCAG) Compliance",
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle", "Maze", "Hotjar"],
    },
  },
  {
    id: "fullstack",
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building robust, scalable web applications with modern technologies. From responsive frontends to powerful backend APIs.",
    features: [
      { icon: Globe, text: "Web Applications" },
      { icon: Database, text: "API Development" },
      { icon: Layers, text: "Cloud Deployment" },
    ],
    accent: "from-blue-500/20 to-cyan-500/20",
    details: {
      description:
        "I build complete web solutions from the ground up, handling everything from database architecture to responsive user interfaces. Using modern frameworks and best practices, I create applications that are fast, secure, and built to scale. Whether it's a startup MVP or an enterprise platform, I deliver production-ready code.",
      features: [
        "Frontend Development (React, Next.js, Vue)",
        "Backend APIs (Node.js, Python, Go)",
        "Database Design (PostgreSQL, MongoDB)",
        "RESTful & GraphQL APIs",
        "Authentication & Authorization",
        "Cloud Deployment (AWS, Vercel, Railway)",
        "CI/CD Pipeline Setup",
        "Performance Optimization",
      ],
      tools: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker", "AWS"],
    },
  },
  {
    id: "graphic",
    icon: PenTool,
    title: "Graphic Design",
    description:
      "Crafting compelling visual identities and marketing materials that communicate your brand's essence and captivate your audience.",
    features: [
      { icon: Palette, text: "Brand Identity" },
      { icon: Layers, text: "Print Design" },
      { icon: Sparkles, text: "Motion Graphics" },
    ],
    accent: "from-orange-500/20 to-rose-500/20",
    details: {
      description:
        "I bring brands to life through compelling visual storytelling. From logo design to complete brand identity systems, I create cohesive visual languages that resonate with audiences. My work spans digital and print media, ensuring your brand looks stunning across every touchpoint.",
      features: [
        "Logo & Brand Identity Design",
        "Brand Guidelines & Style Guides",
        "Marketing Collateral",
        "Social Media Graphics",
        "Print Design (Brochures, Business Cards)",
        "Packaging Design",
        "Illustration & Iconography",
        "Motion Graphics & Animations",
      ],
      tools: ["Adobe Illustrator", "Adobe Photoshop", "After Effects", "Blender", "Cinema 4D", "Canva"],
    },
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 lg:py-40 bg-muted/30"
      aria-labelledby="services-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <SectionHeader
              label="Services"
              title="What I can do for you"
              description="I offer a comprehensive range of digital services to help bring your ideas to life. Each project is approached with dedication and attention to detail."
              align="center"
              id="services-heading"
            />
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="mt-16 sm:mt-20 grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl border border-border bg-background overflow-hidden transition-all duration-500 hover:border-muted-foreground/30 hover:shadow-xl hover:shadow-muted/20">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-2xl bg-muted border border-border group-hover:bg-background/80 transition-colors duration-300">
                      <service.icon className="h-7 w-7 text-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <feature.icon className="h-4 w-4 text-foreground/70" />
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <div className="mt-8">
                      <button
                        onClick={() => openModal(service)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground group/link cursor-pointer"
                      >
                        <span className="relative">
                          Learn more
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover/link:w-full transition-all duration-300" />
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-tl from-muted to-transparent rounded-tl-3xl opacity-50" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 sm:mt-20 text-center"
          >
            <p className="text-muted-foreground">
              Have a project in mind?{" "}
              <a
                href="#contact"
                className="text-foreground font-medium underline underline-offset-4 hover:no-underline transition-all"
              >
                Let&apos;s discuss how I can help
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal Card */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-white dark:bg-slate-900 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${selectedService.accent}`}
                  >
                    <selectedService.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Detailed Description */}
                <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedService.details.description}
                </p>

                {/* Features List */}
                <div className="mt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    What I Offer
                  </h4>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {selectedService.details.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <Check className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="mt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Tools & Technologies
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedService.details.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-muted text-gray-700 dark:text-gray-300 border border-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 pt-6 border-t border-border">
                  <a
                    href="#contact"
                    onClick={closeModal}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
