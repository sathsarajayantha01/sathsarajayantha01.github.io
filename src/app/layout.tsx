import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sathsara Jayantha | Full Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Sathsara Jayantha - A certified Full Stack Developer and UI/UX Designer specializing in building exceptional digital experiences.",
  keywords: [
    "Sathsara Jayantha",
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer Sri Lanka",
    "Next.js Developer",
  ],
  authors: [{ name: "Sathsara Jayantha" }],
  creator: "Sathsara Jayantha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sathsarajayantha01.github.io",
    siteName: "Sathsara Jayantha",
    title: "Sathsara Jayantha | Full Stack Developer & UI/UX Designer",
    description:
      "Portfolio of Sathsara Jayantha - A certified Full Stack Developer and UI/UX Designer specializing in building exceptional digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathsara Jayantha | Full Stack Developer & UI/UX Designer",
    description:
      "Portfolio of Sathsara Jayantha - A certified Full Stack Developer and UI/UX Designer specializing in building exceptional digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
