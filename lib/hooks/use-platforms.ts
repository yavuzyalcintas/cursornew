import { useQuery } from "@tanstack/react-query";
import { platformService } from "@/lib/supabase/services/platform-service";

export function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => platformService.getPlatforms(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 24 * 60 * 60 * 1000, // 24 hours since platforms rarely change
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
