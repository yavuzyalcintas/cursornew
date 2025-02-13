"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavMenu } from "../nav-menu";

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-20 items-center justify-between px-4 sm:px-10">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
            cursor<span className="text-primary">.new</span>
          </span>
        </Link>

        <nav className="flex items-center space-x-4">
          <NavMenu />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
