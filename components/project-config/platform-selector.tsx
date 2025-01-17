"use client";

import * as React from "react";
import { Computer, Smartphone, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { usePlatforms } from "@/lib/hooks/use-platforms";
import { LucideIcon } from "lucide-react";

const PLATFORM_ICONS: Record<string, LucideIcon> = {
  web: Globe,
  mobile: Smartphone,
  desktop: Computer,
};

interface PlatformSelectorProps {
  onSelect: (platform: string) => void;
  selectedPlatform?: string;
}

export function PlatformSelector({
  onSelect,
  selectedPlatform,
}: PlatformSelectorProps) {
  const { data: platforms, isLoading } = usePlatforms();

  if (isLoading) {
    return (
      <div className="grid gap-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Choose Platform</h2>
          <p className="text-muted-foreground">Loading platforms...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      <div className="text-center mb-2">
        <h2 className="text-xl font-semibold mb-1">Choose Platform</h2>
        <p className="text-sm text-muted-foreground">
          Select the platform you want to build for
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {platforms?.map((platform) => {
          const Icon = PLATFORM_ICONS[platform.id] || Globe;
          return (
            <Card
              key={platform.id}
              className={`relative p-6 cursor-pointer hover:bg-muted transition-colors ${
                selectedPlatform === platform.id ? "border-primary" : ""
              }`}
              onClick={() => onSelect(platform.id)}
            >
              <div className="text-center">
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-primary">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-3">
                  {platform.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
