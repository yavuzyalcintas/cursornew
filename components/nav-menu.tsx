import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavMenu() {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center space-x-4">
        <Link 
          href="/blog" 
          className="text-md font-medium hover:text-primary"
        >
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
          className="hover:text-primary inline-flex items-center gap-1"
        >
          <SiGithub className="h-5 w-5" />
          GitHub
        </Link>
      </div>

      {/* Mobile Navigation */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="sm:hidden">
          <Button variant="outline" size="icon">
            <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/blog" className="text-md font-medium">
              Blogs
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/contact" className="text-md font-medium">
              Contact
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              href="https://github.com/yavuzyalcintas/cursornew" 
              target="_blank" 
              className="text-md font-medium flex items-center gap-2"
            >
              <SiGithub className="h-5 w-5" />
              GitHub
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
