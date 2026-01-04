"use client";

import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { Github, Linkedin, Dribbble } from "lucide-react";

// Custom Behance icon (not available in lucide-react)
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.5 11C8.88 11 10 9.88 10 8.5S8.88 6 7.5 6H3v5h4.5zm0 2H3v5h4.5C8.88 18 10 16.88 10 15.5S8.88 13 7.5 13zM1 4h6.5C10.54 4 13 6.46 13 9.5c0 1.38-.5 2.64-1.34 3.61.84.97 1.34 2.23 1.34 3.61 0 3.04-2.46 5.5-5.5 5.5H1V4zm14.5 3h6v1.5h-6V7zm3 10.5c1.93 0 3.5-1.57 3.5-3.5h-2c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5h-2c0 1.93 1.57 3.5 3.5 3.5zm0-8.5c-2.49 0-4.5 2.01-4.5 4.5 0 .17.01.33.03.5h2.02c-.03-.16-.05-.33-.05-.5 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .17-.02.34-.05.5h2.02c.02-.17.03-.33.03-.5 0-2.49-2.01-4.5-4.5-4.5z" />
  </svg>
);

const TYPEFORM_ID = "mZw85btK";

const ContactFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative min-h-screen flex flex-col bg-white dark:bg-slate-950"
      aria-label="Contact and footer"
    >
      {/* CTA Section - Centered Content (flex-grow pushes it to center) */}
      <div className="flex-grow flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Gradient Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
            <span
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient"
            >
              Interested in working with me?
            </span>
          </h2>

          {/* Typeform Popup Trigger */}
          <div className="mt-12 sm:mt-16">
            <PopupButton
              id={TYPEFORM_ID}
              className="group inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Start a project request</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </PopupButton>
          </div>

          {/* Direct Email Option */}
          <div className="mt-10 sm:mt-12">
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-500">
              Hate forms?{" "}
              <a
                href="mailto:sathsarajayantha8@gmail.com"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline transition-colors"
              >
                sathsarajayantha8@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href="https://github.com/sathsarajayantha01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sathsarajayantha01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://dribbble.com/Jayantha2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all"
              aria-label="Dribbble"
            >
              <Dribbble className="w-6 h-6" />
            </a>
            <a
              href="https://www.behance.net/sathsarjayanth1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all"
              aria-label="Behance"
            >
              <BehanceIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bar - Stays at Bottom */}
      <div className="w-full border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-500 dark:text-slate-500">
              © {currentYear} Sathsara Jayantha. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a
                href="/privacy-policy"
                className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { ContactFooter };
