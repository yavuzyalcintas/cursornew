import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Zap,
  Box,
  FileText,
  GitBranch,
  Settings2,
  CheckCircle2,
  Check,
  Monitor,
  Server,
  Smartphone,
} from "lucide-react";
import { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/shared";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaApple,
  FaWindows,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiElectron,
  SiTauri,
  SiFlutter,
  SiTypescript,
  SiKotlin,
  SiSwift,
  SiGo,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// Force static generation
export const dynamic = "force-static";
export const revalidate = false;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
};

export const metadata: Metadata = {
  title: "cursor.new - Intelligent Project Scaffolding for Modern Development",
  description:
    "Transform your development workflow with cursor.new. Generate production-ready projects with AI-powered tech stack selection, automated documentation, and industry best practices.",
  keywords:
    "Cursor New, project scaffolding, tech stack generator, documentation automation, development workflow, web development, mobile development, desktop development, AI-powered development",
  openGraph: {
    title:
      "cursor.new - Intelligent Project Scaffolding for Modern Development",
    description:
      "Generate production-ready projects with AI-powered tech stack selection and automated documentation.",
    type: "website",
    url: "https://cursor.new",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "cursor.new preview",
      },
    ],
    siteName: "cursor.new",
  },
  twitter: {
    card: "summary_large_image",
    title: "cursor.new - Intelligent Project Scaffolding",
    description:
      "Generate production-ready projects with AI-powered tech stack selection",
    images: ["/twitter-image.png"],
    creator: "@cursor_ai",
  },
  alternates: {
    canonical: "https://cursor.new",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "cursor.new",
  description: "Intelligent project scaffolding powered by AI",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "AI-powered tech stack selection",
    "Industry best practices configuration",
    "Automated documentation generation",
    "Smart dependency management",
    "Built-in CI/CD templates",
    "Developer-first tooling",
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section
          className="container mx-auto py-24 text-center"
          aria-labelledby="hero-heading"
        >
          <div className="space-y-4">
            <a
              href="https://www.producthunt.com/products/cursor-new?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-cursor&#0045;new"
              target="_blank"
              className="flex items-center justify-center gap-2 mb-6"
            >
              <a
                href="https://www.producthunt.com/posts/cursor-new?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cursor&#0045;new"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=790175&theme=light&t=1737069297512"
                  alt="cursor&#0046;new - Intelligent&#0032;project&#0032;scaffolding&#0032;for&#0032;Cursor&#0032;AI | Product Hunt"
                  style={{ width: "250px", height: "54px" }}
                  width="250"
                  height="54"
                />
              </a>
            </a>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                For Cursor AI Developers
              </span>
              <span className="text-sm text-muted-foreground">
                Start your Cursor AI projects faster →
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              Jumpstart Your{" "}
              <span className="text-foreground">Cursor AI Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skip the setup hassle. Get started with curated prompt examples,
              intelligent project scaffolding, and built-in best practices to
              supercharge your Cursor AI pair programming experience.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/project">
                <Button
                  size="lg"
                  className="text-lg group"
                  aria-label="Start building your Cursor AI project"
                >
                  Start Building
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="flex items-center text-sm text-muted-foreground">
                <CheckCircle2
                  className="h-4 w-4 text-primary mr-1"
                  aria-hidden="true"
                />
                No account required
              </span>
            </div>
          </div>
        </section>

        {/* Quick Feature Highlights */}
        <section
          className="container mx-auto pb-20"
          aria-labelledby="quick-features-heading"
        >
          <h2 id="quick-features-heading" className="sr-only">
            Quick Feature Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Code2 className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Prompts</h3>
              <p className="text-sm text-muted-foreground">
                Pre-configured prompts for common development tasks, code
                reviews, and documentation generation. Optimized for maximum
                productivity.
              </p>
              <div className="mt-4 space-y-2 text-sm text-left w-full">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Code review prompts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Documentation helpers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Testing assistance</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Project Templates</h3>
              <p className="text-sm text-muted-foreground">
                Ready-to-use project structures with Cursor AI rules and best
                practices built-in for various project types.
              </p>
              <div className="mt-4 space-y-2 text-sm text-left w-full">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Web applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>API services</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>CLI tools</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Settings2
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Configuration</h3>
              <p className="text-sm text-muted-foreground">
                Optimized Cursor AI settings and configurations for different
                project types and development workflows.
              </p>
              <div className="mt-4 space-y-2 text-sm text-left w-full">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Custom rules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Project presets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Team workflows</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section
          className="container mx-auto py-20 border-t"
          aria-labelledby="features-heading"
        >
          <h2
            id="features-heading"
            className="text-3xl font-bold text-center mb-12"
          >
            Everything You Need to Ship Faster
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <div
                className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Setup</h3>
              <p className="text-muted-foreground">
                Get intelligent tech stack recommendations based on your project
                requirements. From frameworks to testing tools, we&apos;ve got
                you covered.
              </p>
            </article>

            <article className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <div
                className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Standards</h3>
              <p className="text-muted-foreground">
                Start with TypeScript, ESLint, Prettier, and testing configured.
                Includes pre-commit hooks and CI/CD templates for GitHub
                Actions.
              </p>
            </article>

            <article className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
              <div
                className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                <Box className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Dependencies</h3>
              <p className="text-muted-foreground">
                Curated and vetted packages with automatic security scanning and
                version management. No more dependency hell.
              </p>
            </article>
          </div>
        </section>

        {/* Documentation Section */}
        <section
          className="container mx-auto py-20 border-t"
          aria-labelledby="docs-heading"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 id="docs-heading" className="text-3xl font-bold">
                Documentation That Writes Itself
              </h2>
              <p className="text-lg text-muted-foreground">
                Generate comprehensive documentation automatically with AI:
              </p>
              <ul className="space-y-4" role="list">
                <li className="flex items-center gap-3">
                  <FileText
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>PRD & Technical Specs</strong> - Clear project
                    requirements and architecture
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <GitBranch
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Development Guidelines</strong> - Code style, git
                    workflow, and best practices
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Settings2
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>AI Configuration</strong> - Optimized Cursor AI
                    rules and prompts
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-muted-foreground">
                  project-docs/
                </div>
              </div>
              <pre className="text-sm text-muted-foreground overflow-x-auto">
                <code>{`📁 docs/
├── 📄 PRD.md
├── 📄 CODE_STYLE.md
├── 📄 .cursorrules
├── 📄 PROGRESS.md`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Tech Stack Section - New! */}
        <section className="container mx-auto py-20 border-t">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Supported Technologies</h2>
            <p className="text-lg text-muted-foreground">
              Choose from popular frameworks and tools, or let AI recommend the
              best stack for your project
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-all">
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Monitor
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-3">Frontend</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FaReact className="w-5 h-5 text-[#61DAFB]" />
                      <span>React</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaVuejs className="w-5 h-5 text-[#41B883]" />
                      <span>Vue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SiNextdotjs className="w-5 h-5" />
                      <span>Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SiTypescript className="w-5 h-5 text-[#3178C6]" />
                      <span>TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-all">
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Server className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-3">Backend</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FaNodeJs className="w-5 h-5 text-[#339933]" />
                      <span>Node.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPython className="w-5 h-5 text-[#3776AB]" />
                      <span>Python</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SiGo className="w-5 h-5 text-[#00ADD8]" />
                      <span>Go</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SiTypescript className="w-5 h-5 text-[#3178C6]" />
                      <span>TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-all">
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Smartphone
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-3">Mobile</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <TbBrandReactNative className="w-5 h-5 text-[#61DAFB]" />
                      <span>React Native</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SiFlutter className="w-5 h-5 text-[#02569B]" />
                      <span>Flutter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SiKotlin className="w-5 h-5 text-[#7F52FF]" />
                      <span>Kotlin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SiSwift className="w-5 h-5 text-[#F05138]" />
                      <span>Swift</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-all">
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Monitor
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-3">Desktop</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <SiElectron className="w-5 h-5 text-[#47848F]" />
                      <span>Electron</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SiTauri className="w-5 h-5 text-[#FFC131]" />
                      <span>Tauri</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaApple className="w-5 h-5" />
                      <span>macOS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaWindows className="w-5 h-5 text-[#0078D4]" />
                      <span>Windows</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="container mx-auto py-20 border-t text-center"
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-3xl font-bold mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who use cursor.new to jumpstart their
            projects with best practices and comprehensive documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/project">
              <Button size="lg" className="text-lg group w-full sm:w-auto">
                Start New Project
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
