import { Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SiX } from "react-icons/si";

export const metadata = {
  title: "Contact",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <div className="container flex items-center justify-center mx-auto mt-20">
      <div className="max-w-2xl w-full space-y-8 p-8 rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-primary">Get in Touch</h1>
          <p className="text-muted-foreground">
            Feel free to reach out for collaborations, questions, or just to say
            hello!
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-6">
            <Link
              href="https://x.com/myavuzyalcintas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg border bg-background/50 hover:bg-background transition-colors"
            >
              <div className="flex items-center gap-4">
                <SiX className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="font-medium">X (Twitter)</span>
                  <span className="text-sm text-primary">@myavuzyalcintas</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </Link>

            <Link
              href="mailto:myavuzyalcintas@gmail.com"
              className="flex items-center justify-between p-4 rounded-lg border bg-background/50 hover:bg-background transition-colors"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="font-medium">Email</span>
                  <span className="text-sm text-primary">
                    myavuzyalcintas@gmail.com
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </Link>
          </div>
        </div>

        <div className="pt-4 text-center text-sm text-muted-foreground">
          <p>I typically respond in 1-2 business days.</p>
        </div>
      </div>
    </div>
  );
}
