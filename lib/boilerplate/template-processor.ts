import {
  type BaseTemplate,
  type TemplateContext,
  type TemplateProcessor,
} from "./types";

export class DefaultTemplateProcessor implements TemplateProcessor {
  private replaceVariables(content: string, context: TemplateContext): string {
    const { projectConfig, variables } = context;
    let processedContent = content;

    // Replace project config variables
    Object.entries(projectConfig).forEach(([key, value]) => {
      if (typeof value === "string") {
        const regex = new RegExp(`\\{\\{\\s*project\\.${key}\\s*\\}\\}`, "g");
        processedContent = processedContent.replace(regex, value);
      } else if (
        key === "framework" &&
        value &&
        typeof value === "object" &&
        "value" in value
      ) {
        // Handle framework object
        const regex = new RegExp(`\\{\\{\\s*project\\.${key}\\s*\\}\\}`, "g");
        processedContent = processedContent.replace(regex, value.value);
      } else if (Array.isArray(value)) {
        // Handle array values (like packages)
        const eachRegex = new RegExp(
          `\\{\\{#each\\s+project\\.${key}\\}\\}([\\s\\S]*?)\\{\\{/each\\}\\}`,
          "g"
        );
        processedContent = processedContent.replace(
          eachRegex,
          (_, template) => {
            return value
              .map((item) => template.replace(/\{\{\s*this\s*\}\}/g, item))
              .join("");
          }
        );
      }
    });

    // Replace custom variables
    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, "g");
      processedContent = processedContent.replace(regex, value);
    });

    return processedContent;
  }

  private validateRequiredVariables(
    template: BaseTemplate,
    context: TemplateContext
  ): void {
    const missingVariables = template.variables
      .filter((v) => v.required)
      .filter((v) => {
        const value = context.variables[v.name];
        return !value && !v.defaultValue;
      })
      .map((v) => v.name);

    if (missingVariables.length > 0) {
      throw new Error(
        `Missing required variables: ${missingVariables.join(", ")}`
      );
    }
  }

  private applyDefaultValues(
    template: BaseTemplate,
    context: TemplateContext
  ): TemplateContext {
    const updatedVariables = { ...context.variables };

    template.variables.forEach((variable) => {
      if (!updatedVariables[variable.name] && variable.defaultValue) {
        updatedVariables[variable.name] = variable.defaultValue;
      }
    });

    return {
      ...context,
      variables: updatedVariables,
    };
  }

  process(template: BaseTemplate, context: TemplateContext): string {
    // Validate required variables
    this.validateRequiredVariables(template, context);

    // Apply default values
    const processedContext = this.applyDefaultValues(template, context);

    // Process the template content
    return this.replaceVariables(template.content, processedContext);
  }
}
