"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProjectConfig } from "@/lib/store/project-config";
import { DefaultBoilerplateService } from "@/lib/boilerplate/boilerplate-service";
import { type TemplateContext } from "@/lib/boilerplate/types";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Copy,
  Check,
  FileText,
  Code,
  Bot,
  LineChart,
  ChevronRight,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface DocumentPreviewProps {
  documentType: string;
  variables: Record<string, string>;
  variant?: "small" | "full";
}

export function DocumentPreview({
  documentType,
  variables,
  variant = "full",
}: DocumentPreviewProps) {
  const { config } = useProjectConfig();
  const [preview, setPreview] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  const [copied, setCopied] = React.useState(false);
  const boilerplateService = React.useMemo(
    () => new DefaultBoilerplateService(),
    []
  );

  const formatDocumentType = (type: string): string => {
    switch (type) {
      case "prd":
        return "Product Requirements Document";
      case "code_style":
        return "Code Style Guidelines";
      case "cursorrules":
        return "Cursor AI Rules";
      case "progress":
        return "Progress Tracker";
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  React.useEffect(() => {
    const generatePreview = async () => {
      setLoading(true);
      try {
        const context: TemplateContext = {
          projectConfig: config,
          variables,
        };
        const previewContent = await boilerplateService.previewDocument(
          documentType,
          context
        );
        setPreview(previewContent);
      } catch (error) {
        console.error("Error generating preview:", error);
        setPreview("Error generating preview");
      } finally {
        setLoading(false);
      }
    };

    generatePreview();
  }, [documentType, variables, config, boilerplateService]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(preview);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case "prd":
        return <FileText className="h-5 w-5" />;
      case "code_style":
        return <Code className="h-5 w-5" />;
      case "cursorrules":
        return <Bot className="h-5 w-5" />;
      case "progress":
        return <LineChart className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getDocumentDescription = (type: string): string => {
    switch (type) {
      case "prd":
        return "Click to view and use a professional product requirements document template";
      case "code_style":
        return "Click to explore comprehensive coding standards and guidelines template";
      case "cursorrules":
        return "Click to see AI assistant configuration template and customize rules";
      case "progress":
        return "Click to use project timeline and milestone tracking template";
      default:
        return "";
    }
  };

  return (
    <TooltipProvider>
      <Card
        className={`group overflow-hidden border-2 hover:border-accent transition-all ${
          variant === "small" ? "cursor-pointer hover:bg-accent/5" : ""
        }`}
      >
        <div className={`p-6 ${variant === "full" ? "space-y-4" : ""}`}>
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                {getDocumentIcon(documentType)}
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {formatDocumentType(documentType)}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {getDocumentDescription(documentType)}
                </p>
              </div>
            </div>
            {variant === "small" ? (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                <span>View Prompt</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            ) : (
              <div className="flex flex-col items-end gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleCopy}
                      disabled={loading}
                      variant="outline"
                      size="sm"
                      className="gap-2 min-w-[90px] hover:bg-accent transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-green-500" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy prompt to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>
          {variant === "full" && (
            <div className="relative bg-muted hover:bg-muted/70 transition-colors rounded-lg p-4 min-h-[300px]">
              {loading ? (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ) : (
                <>
                  <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={handleCopy}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-background/50"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Copy prompt</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed pr-10">
                    {preview}
                  </pre>
                </>
              )}
            </div>
          )}
        </div>
      </Card>
    </TooltipProvider>
  );
}
