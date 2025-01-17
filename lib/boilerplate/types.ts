import { type ProjectConfig } from "@/lib/store/project-config";

export interface BaseTemplate {
  id: string;
  name: string;
  description: string;
  content: string;
  variables: TemplateVariable[];
}

export interface TemplateVariable {
  name: string;
  description: string;
  required: boolean;
  defaultValue?: string;
}

export interface DocumentTemplate extends BaseTemplate {
  type: "prd" | "code_style" | "cursor_rules" | "progress" | "task_list";
  sections: TemplateSection[];
}

export interface TemplateSection {
  id: string;
  title: string;
  content: string;
  required: boolean;
  order: number;
}

export interface TemplateContext {
  projectConfig: ProjectConfig;
  variables: Record<string, string>;
}

export interface TemplateProcessor {
  process(template: BaseTemplate, context: TemplateContext): string;
}

export interface TemplateRepository {
  getTemplate(type: string, id: string): Promise<BaseTemplate | null>;
  getAllTemplates(type: string): Promise<BaseTemplate[]>;
}

export interface BoilerplateService {
  generateDocument(type: string, context: TemplateContext): Promise<string>;
  previewDocument(type: string, context: TemplateContext): Promise<string>;
  customizeTemplate(
    template: BaseTemplate,
    customizations: Partial<BaseTemplate>
  ): BaseTemplate;
}
