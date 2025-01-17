"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useProjectConfig } from "@/lib/store/project-config";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectBasicsFormProps {
  onSubmit: (data: { name: string; description: string }) => void;
}

export function ProjectBasicsForm({ onSubmit }: ProjectBasicsFormProps) {
  const { config } = useProjectConfig();
  const [name, setName] = React.useState(config.name);
  const [description, setDescription] = React.useState(config.description);
  const [isFocused, setIsFocused] = React.useState<
    "name" | "description" | null
  >(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description });
  };

  const MAX_DESC_LENGTH = 500;

  return (
    <Card className="w-full p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className={cn(
              "config-label block transition-colors",
              isFocused === "name" ? "text-primary" : "text-foreground"
            )}
          >
            Project Name
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setIsFocused("name")}
            onBlur={() => setIsFocused(null)}
            placeholder="my-awesome-project"
            className="text-lg transition-all duration-200 hover:border-primary/50"
            required
          />
          <p className="config-helper-text">
            Choose a unique name for your project. This will be used as the
            directory name.
          </p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className={cn(
              "config-label block transition-colors",
              isFocused === "description" ? "text-primary" : "text-foreground"
            )}
          >
            Description
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={() => setIsFocused("description")}
            onBlur={() => setIsFocused(null)}
            placeholder="A modern web application for..."
            className="min-h-[120px] text-lg transition-all duration-200 hover:border-primary/50"
            maxLength={MAX_DESC_LENGTH}
            required
          />
          <div className="flex justify-between">
            <p className="config-helper-text">
              Briefly describe what your project does and its main features.
            </p>
            <p className="text-sm text-muted-foreground">
              {description.length}/{MAX_DESC_LENGTH}
            </p>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full text-lg transition-all duration-200 hover:scale-[1.02]"
          disabled={!name.trim() || !description.trim()}
        >
          Continue to Next Step →
        </Button>
      </form>
    </Card>
  );
}
