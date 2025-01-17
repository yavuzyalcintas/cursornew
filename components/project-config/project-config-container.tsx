"use client";

import * as React from "react";
import { ProjectBasicsForm } from "./project-basics-form";
import { PlatformSelector } from "./platform-selector";
import { TechStackSelector } from "./tech-stack-selector";
import { PackageSelector } from "./package-selector";
import { ProjectBreadcrumb } from "./project-breadcrumb";
import { useProjectConfig } from "@/lib/store/project-config";
import { Framework } from "@/lib/supabase/services/framework-service";
import PromptListContainer from "./prompt-list-container";

type ConfigStep =
  | "basics"
  | "platform"
  | "framework"
  | "packages"
  | "documents";

export function ProjectConfigContainer() {
  const [currentStep, setCurrentStep] = React.useState<ConfigStep>("basics");
  const [completedSteps, setCompletedSteps] = React.useState<Set<ConfigStep>>(
    new Set()
  );

  const { config, setBasics, setPlatform, setFramework, setPackages } =
    useProjectConfig();

  const handleBasicsSubmit = (data: { name: string; description: string }) => {
    setBasics(data.name, data.description);
    setCompletedSteps((prev) => new Set([...prev, "basics"]));
    setCurrentStep("platform");
  };

  const handlePlatformSelect = (platform: string) => {
    setPlatform(platform);
    setCompletedSteps((prev) => new Set([...prev, "platform"]));
    setCurrentStep("framework");
  };

  const handleFrameworkSelect = (framework: Framework) => {
    setFramework(framework);
    setCompletedSteps((prev) => new Set([...prev, "framework"]));
    setCurrentStep("packages");
  };

  const handlePackagesSelect = (packages: string[]) => {
    setPackages(packages);
    if (packages.length > 0) {
      setCompletedSteps((prev) => new Set([...prev, "packages"]));
      setCurrentStep("documents");
    }
  };

  const isStepAccessible = (step: ConfigStep): boolean => {
    switch (step) {
      case "basics":
        return true;
      case "platform":
        return completedSteps.has("basics");
      case "framework":
        return completedSteps.has("platform");
      case "packages":
        return completedSteps.has("framework");
      case "documents":
        return completedSteps.has("packages");
      default:
        return false;
    }
  };

  const handleStepClick = (step: ConfigStep) => {
    if (isStepAccessible(step)) {
      setCurrentStep(step);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ProjectBreadcrumb
        currentStep={currentStep}
        onStepClick={handleStepClick}
        completedSteps={completedSteps}
        isStepAccessible={isStepAccessible}
      />

      {currentStep === "basics" && (
        <ProjectBasicsForm onSubmit={handleBasicsSubmit} />
      )}
      {currentStep === "platform" && (
        <PlatformSelector
          onSelect={handlePlatformSelect}
          selectedPlatform={config.platform}
        />
      )}
      {currentStep === "framework" && config.platform && (
        <TechStackSelector
          platform={config.platform}
          onSelect={handleFrameworkSelect}
          selectedFramework={config.framework}
        />
      )}
      {currentStep === "packages" && config.platform && (
        <PackageSelector
          framework={config.framework!.value}
          onSelect={handlePackagesSelect}
          selectedPackages={config.packages}
        />
      )}
      {currentStep === "documents" && <PromptListContainer />}
    </div>
  );
}
