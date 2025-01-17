"use client";

import * as React from "react";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { usePackages } from "@/lib/hooks/use-packages";

interface PackageSelectorProps {
  framework: string;
  onSelect: (packages: string[]) => void;
  selectedPackages: string[];
}

export function PackageSelector({
  framework,
  onSelect,
  selectedPackages: initialSelectedPackages,
}: PackageSelectorProps) {
  const [localSelectedPackages, setLocalSelectedPackages] = React.useState<
    string[]
  >(initialSelectedPackages);

  const { data: availablePackages = [], isLoading } = usePackages(framework);

  const handlePackageToggle = (packageId: string) => {
    const updatedPackages = localSelectedPackages.includes(packageId)
      ? localSelectedPackages.filter((id) => id !== packageId)
      : [...localSelectedPackages, packageId];
    setLocalSelectedPackages(updatedPackages);
  };

  const handleClearSelection = () => {
    setLocalSelectedPackages([]);
    onSelect([]);
  };

  const handleFinish = () => {
    onSelect(localSelectedPackages);
  };

  return (
    <div className="grid gap-8">
      <div className="text-center mb-2">
        <h2 className="text-xl font-semibold mb-1">Choose Packages</h2>
        <p className="text-sm text-muted-foreground">
          Select the packages you want to include in your project
        </p>
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="config-card-title">Available Packages</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-5 w-5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="text-base p-3">
                    <p>Choose your preferred packages for {framework}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="grid gap-3">
              {isLoading ? (
                <div className="text-center p-4">Loading packages...</div>
              ) : (
                availablePackages.map((pkg) => (
                  <Card
                    key={pkg.id}
                    className={cn(
                      "relative p-4 transition-all hover:shadow-md cursor-pointer",
                      localSelectedPackages.includes(pkg.id) &&
                        "border-primary shadow-sm"
                    )}
                    onClick={() => handlePackageToggle(pkg.id)}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id={pkg.id}
                        checked={localSelectedPackages.includes(pkg.id)}
                        className="mt-1"
                      />
                      <div className="flex-1 space-y-1">
                        <label
                          htmlFor={pkg.id}
                          className="config-card-title block hover:cursor-pointer"
                        >
                          {pkg.name}
                        </label>
                        <p className="config-card-description">
                          {pkg.description}
                        </p>
                      </div>
                      {localSelectedPackages.includes(pkg.id) && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={handleClearSelection}
          className="text-lg h-12"
        >
          Clear Selection
        </Button>
        <Button onClick={handleFinish} className="w-[200px] text-lg h-12">
          Finish
        </Button>
      </div>
    </div>
  );
}
