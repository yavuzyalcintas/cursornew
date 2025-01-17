import { useQuery } from "@tanstack/react-query";
import { packageService } from "../supabase/services/package-service";
import type { Package } from "../supabase/services/package-service";

export function usePackages(frameworkId: string) {
  return useQuery<Package[]>({
    queryKey: ["packages", frameworkId],
    queryFn: () => packageService.getPackagesByFramework(frameworkId),
    enabled: !!frameworkId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
