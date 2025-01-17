import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronRight } from "lucide-react";

type ConfigStep =
  | "basics"
  | "platform"
  | "framework"
  | "packages"
  | "documents";

interface ProjectBreadcrumbProps {
  currentStep: ConfigStep;
  onStepClick: (step: ConfigStep) => void;
  completedSteps: Set<ConfigStep>;
  isStepAccessible: (step: ConfigStep) => boolean;
}

const steps: { key: ConfigStep; label: string }[] = [
  { key: "basics", label: "Project Basics" },
  { key: "platform", label: "Platform" },
  { key: "framework", label: "Framework" },
  { key: "packages", label: "Packages" },
  { key: "documents", label: "Prompts" },
];

export function ProjectBreadcrumb({
  currentStep,
  onStepClick,
  completedSteps,
  isStepAccessible,
}: ProjectBreadcrumbProps) {
  return (
    <nav className="mb-8">
      <ol className="flex items-center space-x-2">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(step.key);
          const isCurrent = currentStep === step.key;
          const accessible = isStepAccessible(step.key);

          return (
            <React.Fragment key={step.key}>
              <li>
                <button
                  onClick={() => accessible && onStepClick(step.key)}
                  disabled={!accessible}
                  className={cn(
                    "flex items-center px-3 py-1 rounded-md text-sm font-medium",
                    "transition-colors duration-200",
                    isCurrent && "bg-primary text-primary-foreground",
                    !isCurrent && accessible && "hover:bg-muted cursor-pointer",
                    !accessible && "opacity-50 cursor-not-allowed",
                    isCompleted && !isCurrent && "text-muted-foreground"
                  )}
                >
                  {isCompleted && !isCurrent && (
                    <Check className="w-4 h-4 mr-1 inline" />
                  )}
                  {step.label}
                </button>
              </li>
              {index < steps.length - 1 && (
                <li>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
