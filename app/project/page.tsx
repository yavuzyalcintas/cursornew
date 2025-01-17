import { ProjectConfigContainer } from "@/components/project-config/project-config-container";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "New Project - cursor.new",
  description: "Create a new project with cursor.new",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
};

export default function NewProjectPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-10">
        <ProjectConfigContainer />
      </div>
    </main>
  );
}
