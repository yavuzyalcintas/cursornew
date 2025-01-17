"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiGithub } from "react-icons/si";

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-20 items-center justify-between px-10">
        <Link href="/" className="flex items-center space-x-2">
          <span className=" text-4xl font-bold">
            cursor<span className="text-primary">.new</span>
          </span>
        </Link>

        <nav className="flex items-center space-x-4">
          <Link href="/blog" className="text-md font-medium hover:text-primary">
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-md font-medium hover:text-primary"
          >
            Contact
          </Link>
          <Link
            href="https://github.com/yavuzyalcintas/cursornew"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary inline-flex items-center gap-1"
          >
            <SiGithub className="h-5 w-5" />
            GitHub
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
