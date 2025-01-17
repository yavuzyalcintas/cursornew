import React from "react";
import { DocumentPreview } from "./document-preview";
import { Button } from "../ui/button";

function PromptListContainer() {
  const [expandedDoc, setExpandedDoc] = React.useState<string | null>(null);

  return (
    <div className="space-y-6">
      {expandedDoc ? (
        <>
          <Button
            variant="ghost"
            onClick={() => setExpandedDoc(null)}
            className="mb-4"
          >
            ← Back to all documents
          </Button>
          <DocumentPreview
            documentType={expandedDoc}
            variables={{}}
            variant="full"
          />
        </>
      ) : (
        <>
          <div className="text-center mb-2">
            <h2 className="text-2xl font-semibold mb-2">
              Prompts for Cursor AI
            </h2>
            <p className="text-sm text-muted-foreground">
              Use these prompts to help you build your project
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {["prd", "code_style", "cursorrules", "progress"].map((docType) => (
              <div key={docType} onClick={() => setExpandedDoc(docType)}>
                <DocumentPreview
                  documentType={docType}
                  variables={{}}
                  variant="small"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PromptListContainer;
