import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Sathsara Jayantha",
  description:
    "Privacy Policy for Sathsara Jayantha's portfolio website. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 3, 2026";
  const email = "sathsarajayantha8@gmail.com";

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        {/* Title */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* Sections */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              This Privacy Policy explains how Sathsara Jayantha (&quot;I&quot;,
              &quot;me&quot;, or &quot;my&quot;) collects, uses, and discloses
              information about you when you visit my portfolio website
              (the &quot;Site&quot;). By accessing or using the Site, you agree
              to the terms of this Privacy Policy.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              I respect your privacy and am committed to protecting your personal
              data. This policy will inform you about how I look after your
              personal data when you visit my website and tell you about your
              privacy rights.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Information I Collect
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              I may collect and process the following types of information:
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <div>
                  <strong className="text-slate-900 dark:text-white">
                    Usage Data:
                  </strong>{" "}
                  Information about how you use my website, including your IP
                  address, browser type, operating system, referring URLs, pages
                  viewed, and the dates/times of your visits.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <div>
                  <strong className="text-slate-900 dark:text-white">
                    Contact Information:
                  </strong>{" "}
                  If you choose to contact me through the project request form,
                  I may collect your name, email address, and any other
                  information you provide in your message.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <div>
                  <strong className="text-slate-900 dark:text-white">
                    Cookies:
                  </strong>{" "}
                  I use cookies and similar tracking technologies to track
                  activity on my Site and hold certain information. Cookies are
                  files with a small amount of data which may include an
                  anonymous unique identifier.
                </div>
              </li>
            </ul>
          </section>

          {/* Use of Data */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              How I Use Your Information
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              I use the collected data for various purposes:
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <span>To provide and maintain my website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <span>To respond to your inquiries and project requests</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <span>To analyze website usage and improve user experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <span>To detect, prevent, and address technical issues</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <span>
                  To send you updates about potential collaborations (only if
                  you have opted in)
                </span>
              </li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              I use the following third-party services that may collect
              information about you:
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <div>
                  <strong className="text-slate-900 dark:text-white">
                    Typeform:
                  </strong>{" "}
                  Used for the project request form. When you submit an inquiry,
                  your data is processed by Typeform in accordance with their{" "}
                  <a
                    href="https://www.typeform.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 dark:text-violet-400 underline underline-offset-2 hover:text-violet-700 dark:hover:text-violet-300"
                  >
                    Privacy Policy
                  </a>
                  .
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <div>
                  <strong className="text-slate-900 dark:text-white">
                    Google Analytics:
                  </strong>{" "}
                  Used to analyze website traffic and usage patterns. Google
                  Analytics collects data anonymously and in accordance with
                  Google&apos;s{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 dark:text-violet-400 underline underline-offset-2 hover:text-violet-700 dark:hover:text-violet-300"
                  >
                    Privacy Policy
                  </a>
                  .
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <div>
                  <strong className="text-slate-900 dark:text-white">
                    Vercel:
                  </strong>{" "}
                  This website is hosted on Vercel. Vercel may collect usage
                  data as described in their{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 dark:text-violet-400 underline underline-offset-2 hover:text-violet-700 dark:hover:text-violet-300"
                  >
                    Privacy Policy
                  </a>
                  .
                </div>
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Data Security
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The security of your data is important to me. I strive to use
              commercially acceptable means to protect your personal
              information. However, please be aware that no method of
              transmission over the Internet or method of electronic storage is
              100% secure. While I endeavor to protect your personal
              information, I cannot guarantee its absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Data Retention
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I will retain your personal data only for as long as is necessary
              for the purposes set out in this Privacy Policy. I will retain and
              use your data to the extent necessary to comply with legal
              obligations, resolve disputes, and enforce my policies.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Your Rights
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal data, including:
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <span>The right to access the personal data I hold about you</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <span>The right to request correction of inaccurate data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <span>The right to request deletion of your personal data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-500 font-bold">•</span>
                <span>The right to opt-out of marketing communications</span>
              </li>
            </ul>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. I
              encourage you to review this Privacy Policy periodically for any
              changes. Your continued use of the Site after any modifications
              indicates your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Contact Me
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              If you have any questions about this Privacy Policy or my data
              practices, please contact me at:
            </p>
            <p className="mt-4">
              <a
                href={`mailto:${email}`}
                className="text-violet-600 dark:text-violet-400 font-medium underline underline-offset-4 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
              >
                {email}
              </a>
            </p>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Sathsara Jayantha. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}
