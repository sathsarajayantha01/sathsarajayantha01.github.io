"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Sathsara's designs have transformed our brand's visual identity. The attention to detail and creative thinking is exactly what we needed!",
    name: "Amal Madhushanka",
    role: "Marketing Director",
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    id: 2,
    quote:
      "Working with Sathsara was a pleasure. He understood our vision perfectly and delivered a website that exceeded our expectations in both design and functionality.",
    name: "Lakshitha Silva",
    role: "Startup Founder",
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    id: 3,
    quote:
      "The UI/UX design for our mobile app was exceptional. Our users love how intuitive and beautiful the interface is. Highly recommended!",    
    name: "Nimal Perera",
    role: "Business Owner",
    avatar: "/images/avatars/avatar-3.jpg",
  },
  {
    id: 4,
    quote:
      "From concept to deployment, the entire process was seamless. The final product not only looks beautiful but performs flawlessly. A true professional.",
    name: "Nisal Nandasiri",
    role: "Founder & CEO",
    avatar: "/images/avatars/avatar-4.jpg",
  },
  {
    id: 5,
    quote:
      "Our website traffic increased by 200% after the redesign. The modern, clean aesthetic perfectly represents our brand and resonates with our audience.",
    name: "Lisa Thompson",
    role: "Marketing Director",
    avatar: "/images/avatars/avatar-5.jpg",
  },
  {
    id: 6,
    quote:
      "Exceptional problem-solving skills and a keen eye for design. Sathsara went above and beyond to ensure our platform was both beautiful and highly functional.",
    name: "James Wilson",
    role: "Co-Founder",
    avatar: "/images/avatars/avatar-6.jpg",
  },
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-full"
    >
      <div className="relative h-full p-6 sm:p-8 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-border/80 hover:shadow-lg dark:bg-muted/30 dark:hover:bg-muted/50">
        {/* Quote Icon */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-violet-500/10 to-blue-500/10 dark:from-violet-500/20 dark:to-blue-500/20">
            <Quote className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          </div>
        </div>

        {/* Quote Text */}
        <blockquote className="mb-8">
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
          {/* Avatar */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
            {/* Placeholder Avatar - Replace with actual images */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
              <span className="text-lg font-semibold text-foreground/60">
                {testimonial.name.charAt(0)}
              </span>
            </div>
            {/* Uncomment when you have actual avatar images:
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="48px"
            />
            */}
          </div>

          {/* Name & Role */}
          <div className="min-w-0">
            <p className="font-semibold text-foreground truncate">
              {testimonial.name}
            </p>
            <p className="text-sm text-muted-foreground truncate">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Decorative gradient on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        {/* Decorative blobs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader
          label="Testimonials"
          title="What Clients Say"
          description="Don't just take my word for it. Here's what some of my clients have to say about working together."
        />

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-violet-500/30 to-blue-500/30 flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-foreground/60">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <span>10+ Happy Clients</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>5.0 Average Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
