import { useQuery } from "@tanstack/react-query";
import { FrameworkService } from "../supabase/services/framework-service";

export function useFrameworks(platform: string) {
  return useQuery({
    queryKey: ["frameworks", platform],
    queryFn: () => FrameworkService.getInstance().getFrameworks(platform),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 24 * 60 * 60 * 1000, // 24 hours since frameworks rarely change
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled: !!platform,
  });
}

export function useWebFrameworks(type: "frontend" | "backend") {
  return useQuery({
    queryKey: ["frameworks", "web", type],
    queryFn: () => FrameworkService.getInstance().getWebFrameworks(type),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 24 * 60 * 60 * 1000, // 24 hours since frameworks rarely change
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
