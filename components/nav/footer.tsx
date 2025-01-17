import Link from "next/link";
import { SiGithub } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container-fluid px-48 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="https://github.com/yavuzyalcintas"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              yavuzyalcintas
            </Link>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Terms
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
        </div>
      </div>
    </footer>
  );
}
