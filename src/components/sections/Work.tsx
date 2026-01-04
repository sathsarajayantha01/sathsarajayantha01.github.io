"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

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

const categories = ["All", "Web App", "Software", "UI/UX", "Branding", "Graphic Design"] as const;
type Category = (typeof categories)[number];

interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "Velvet Vogue E-commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    category: "Web App",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    techStack: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    githubUrl: "https://github.com/sathsarajayantha01/Velvet-Vogue-ecommerce",
    featured: true,
  },
  {
    id: "project-2",
    title: "Finance Dashboard",
    description:
      "Data visualization dashboard for tracking investments and financial metrics.",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    techStack: ["Figma", "Adobe Illustrator", "User Research"],
    liveUrl: "https://www.figma.com/design/RQbZIQeLP3rUjbV8lu5qoU/Apex-Financial-App?node-id=0-1&t=gZjc5HKxMBB1pozL-1",
    featured: true,
  },
  {
    id: "project-3",
    title: "Brand Identity - Black Monkey Travels",
    description:
      "Complete brand identity design and Development for a Tourism startup including typography, and guidelines.",
    category: "Branding",
    image: "/images/BMT.jpg",
    techStack: ["HTML", "CSS", "JavaScript", "Illustrator", "Photoshop"],
    liveUrl: "https://www.blackmonkeytravels.com/",
  },
  {
    id: "project-4",
    title: "Full System for Company Organization (C# Console App)",
    description:
      "This is a C# console-based application developed to manage core functionalities of a company such as employees, departments, and task assignments. Built using Object-Oriented Programming (OOP) principles, the system provides basic features needed for small-scale organization management.",
    category: "Software",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    techStack: ["C#", ".NET", "SQL Server"],
    githubUrl: "https://github.com/sathsarajayantha01/Full-system-for-company-organization-",
  },
  {
    id: "project-5",
    title: "Interduce Qlonygirl AI Chat Bot",
    description:
      "Interduce Qlonygirl is an AI-powered chatbot designed to assist users with various tasks, answer questions, and provide information in a conversational manner. Built using advanced natural language processing techniques, Qlonygirl offers a seamless and engaging user experience.",
    category: "Graphic Design",
    image:
      "/images/Qlonygirl.jpg",
    techStack: ["Photoshop", "Canva"],
    liveUrl: "https://qlony.co/qlonygirl",
  },
  {
    id: "project-6",
    title: "Mobile Apple Music UI",
    description:
      "Clean and intuitive mobile music player interface design with focus on accessibility.",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    techStack: ["Figma", "Protopie", "User Research"],
    liveUrl: "https://www.figma.com/design/Zlmx8tlPdWvnwzju3ehRtS/Music-Player?t=gZjc5HKxMBB1pozL-1",
  },
  {
    id: "project-7",
    title: "Christmas Post",
    description: 
      "Christmas Post Design made for EAD to promote their Christmas event in 2025.",
    category: "Graphic Design",
    image: "/images/EAD 02.jpg",
    techStack: ["Canva", "Photoshop"],
    liveUrl: "https://www.canva.com/design/DAG8cb5v2ec/OsWAQClmS711sFapyb4GRA/edit?utm_content=DAG8cb5v2ec&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: "project-8",
    title: "ETCP - Eco Tourism Companion Platform",
    description:
      "Effortless navigation, breathtaking  visuals, and tailored recommendations make trip planning a breeze. Book hotels, and activities seamlessly, enjoy exclusive deals, and explorewith offline access and local insights.",
    category: "UI/UX",
    image: "/images/ETCP.png",
    techStack: ["Figma", "Adobe Illustrator", "User Research"],
    liveUrl: "https://www.figma.com/design/ACl5sjkudbTz9S2hrRNpPU/ETCP?node-id=0-1&t=MYRlgw9YG5aEazuc-1",
  },
  {
    id: "project-9",
    title: "Christmas Post",
    description: 
      "Christmas Post Design made for Empire Events to promote their Christmas event in 2025.",
    category: "Graphic Design",
    image: "/images/Empire Events 02 NEW 1.jpg",
    techStack: ["Canva", "Photoshop"],
    liveUrl: "https://www.canva.com/design/DAG8ffBNwQc/we_1xOxO3n6wRyhQE13bCw/edit?utm_content=DAG8ffBNwQc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

export function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <SectionHeader
              label="Portfolio"
              title="Selected work"
              description="A curated collection of projects showcasing my expertise in design and development."
              align="center"
              id="work-heading"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls="projects-grid"
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            id="projects-grid"
            role="tabpanel"
            className="mt-12 sm:mt-16"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* View All CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 text-center"
          >
            <a
              href="https://github.com/sathsarajayantha01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-muted transition-colors duration-300 text-sm font-medium group"
            >
              <Github className="h-4 w-4" />
              View more on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative ${
        project.featured ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-background transition-all duration-500 hover:border-muted-foreground/30 hover:shadow-xl hover:shadow-muted/20">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick Links */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-colors"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-colors"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
            <a
              href={project.liveUrl || project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {project.title}
            </a>
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 rounded-full bg-foreground text-background text-xs font-medium">
              Featured
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}
