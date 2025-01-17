import { create } from "zustand";
import { Framework } from "../supabase/services/framework-service";

export interface ProjectConfig {
  name: string;
  description: string;
  platform?: string;
  framework?: Framework;
  packages: string[];
}

interface ProjectConfigState {
  config: ProjectConfig;
  setBasics: (name: string, description: string) => void;
  setPlatform: (platform: string) => void;
  setFramework: (framework: Framework) => void;
  setPackages: (packages: string[]) => void;
  reset: () => void;
}

const initialState: ProjectConfig = {
  name: "",
  description: "",
  packages: [],
};

export const useProjectConfig = create<ProjectConfigState>((set) => ({
  config: initialState,
  setBasics: (name: string, description: string) =>
    set((state) => ({
      config: { ...state.config, name, description },
    })),
  setPlatform: (platform) =>
    set((state) => ({
      config: { ...state.config, platform },
    })),
  setFramework: (framework) =>
    set((state) => ({
      config: { ...state.config, framework },
    })),
  setPackages: (packages) =>
    set((state) => ({
      config: { ...state.config, packages },
    })),
  reset: () => set({ config: initialState }),
}));
