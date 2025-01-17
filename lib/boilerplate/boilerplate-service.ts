import {
  type BaseTemplate,
  type BoilerplateService,
  type TemplateContext,
} from "./types";
import { DefaultTemplateProcessor } from "./template-processor";
import { FileSystemTemplateRepository } from "./template-repository";

export class DefaultBoilerplateService implements BoilerplateService {
  private templateProcessor: DefaultTemplateProcessor;
  private templateRepository: FileSystemTemplateRepository;

  constructor() {
    this.templateProcessor = new DefaultTemplateProcessor();
    this.templateRepository = new FileSystemTemplateRepository();
  }

  async generateDocument(
    type: string,
    context: TemplateContext
  ): Promise<string> {
    const template = await this.templateRepository.getTemplate(type, "default");
    if (!template) {
      throw new Error(`No template found for type: ${type}`);
    }

    return this.templateProcessor.process(template, context);
  }

  async previewDocument(
    type: string,
    context: TemplateContext
  ): Promise<string> {
    try {
      return await this.generateDocument(type, context);
    } catch (error) {
      if (error instanceof Error) {
        return `Preview Error: ${error.message}`;
      }
      return "An unknown error occurred while generating the preview";
    }
  }

  customizeTemplate(
    template: BaseTemplate,
    customizations: Partial<BaseTemplate>
  ): BaseTemplate {
    return {
      ...template,
      ...customizations,
      variables: [...template.variables, ...(customizations.variables || [])],
    };
  }
}
