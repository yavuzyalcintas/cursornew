"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import * as SiIcons from "react-icons/si";
import { useFrameworks, useWebFrameworks } from "@/lib/hooks/use-frameworks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Framework } from "@/lib/supabase/services/framework-service";
import { FrameworkSkeleton } from "@/components/ui/framework-skeleton";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TechStackSelectorProps {
  platform: string;
  onSelect: (framework: Framework) => void;
  selectedFramework?: Framework;
}

export function TechStackSelector({
  platform,
  onSelect,
  selectedFramework,
}: TechStackSelectorProps) {
  const [activeType, setActiveType] = React.useState<"frontend" | "backend">(
    "frontend"
  );
  const [searchQuery, setSearchQuery] = React.useState("");

  const webFrameworks = useWebFrameworks(activeType);
  const otherFrameworks = useFrameworks(platform);

  const { data: frameworks, isLoading } =
    platform === "web" ? webFrameworks : otherFrameworks;

  const filteredFrameworks = React.useMemo(() => {
    if (!frameworks) return [];
    return frameworks.filter(
      (framework) =>
        framework.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        framework.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [frameworks, searchQuery]);

  if (isLoading) {
    return (
      <div className="grid gap-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Choose Framework</h2>
          <p className="text-muted-foreground">
            Select the framework for your {platform} application
          </p>
        </div>
        {platform === "web" ? (
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="mt-4">
              <FrameworkSkeleton />
            </TabsContent>
            <TabsContent value="backend" className="mt-4">
              <FrameworkSkeleton />
            </TabsContent>
          </Tabs>
        ) : (
          <FrameworkSkeleton />
        )}
      </div>
    );
  }

  if (!frameworks) {
    return null;
  }

  const renderFrameworkGrid = (frameworks: Framework[]) => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {frameworks.map((framework) => {
        const Icon = (SiIcons as Record<string, React.ElementType>)[
          framework.icon
        ];
        return (
          <Card
            key={framework.value}
            className={`relative p-4 cursor-pointer hover:bg-muted transition-colors ${
              selectedFramework?.value === framework.value
                ? "border-primary"
                : ""
            }`}
            onClick={() => onSelect(framework)}
          >
            <div className="text-center">
              {Icon && <Icon className="w-8 h-8 mx-auto mb-3" />}
              <h3 className="font-semibold text-sm text-primary">
                {framework.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {framework.description}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );

  return (
    <div className="grid gap-4">
      <div className="text-center mb-2">
        <h2 className="text-xl font-semibold mb-1">Choose Framework</h2>
        <p className="text-sm text-muted-foreground">
          Select the framework for your {platform} application
        </p>
      </div>

      <div className="relative w-full max-w-sm mx-auto mb-4">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search frameworks..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1 h-7 w-7"
            onClick={() => setSearchQuery("")}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>

      {platform === "web" ? (
        <Tabs
          defaultValue="frontend"
          className="w-full"
          onValueChange={(v) => setActiveType(v as "frontend" | "backend")}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="mt-4">
            {renderFrameworkGrid(filteredFrameworks)}
          </TabsContent>
          <TabsContent value="backend" className="mt-4">
            {renderFrameworkGrid(filteredFrameworks)}
          </TabsContent>
        </Tabs>
      ) : (
        renderFrameworkGrid(filteredFrameworks)
      )}
    </div>
  );
}
