import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/nav/main-nav";
import { Footer } from "@/components/nav/footer";
import { QueryProvider } from "@/lib/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/lib/analytics/google-analytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://cursor.new"
  ),
  title: {
    default: "cursor.new - Intelligent Project Scaffolding for Cursor AI",
    template: "%s | cursor.new",
  },
  description:
    "Transform your development workflow with cursor.new. Generate production-ready projects with AI-powered tech stack selection, automated documentation, and industry best practices.",
  authors: [{ name: "Cursor New" }],
  creator: "Cursor New",
  publisher: "Cursor New",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    title: "cursor.new - Intelligent Project Scaffolding for Cursor AI",
    description:
      "Generate production-ready projects with AI-powered tech stack selection and automated documentation.",
    siteName: "cursor.new",
    url: "https://cursor.new",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "cursor.new preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cursor.new - Intelligent Project Scaffolding",
    description:
      "Generate production-ready projects with AI-powered tech stack selection",
    creator: "@cursor_ai",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://cursor.new",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased min-h-screen flex flex-col`}
        role="document"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <MainNav />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        {gaId && <GoogleAnalytics measurementId={gaId} />}
      </body>
    </html>
  );
}
