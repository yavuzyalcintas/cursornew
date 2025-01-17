"use client";

import { Card } from "./card";

interface FrameworkSkeletonProps {
  count?: number;
}

export function FrameworkSkeleton({ count = 6 }: FrameworkSkeletonProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(count)].map((_, i) => (
        <Card key={i} className="relative p-6">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 mx-auto bg-muted animate-pulse rounded-full" />
            <div className="h-4 bg-muted animate-pulse rounded w-3/4 mx-auto" />
            <div className="space-y-2">
              <div className="h-3 bg-muted animate-pulse rounded w-full" />
              <div className="h-3 bg-muted animate-pulse rounded w-4/5 mx-auto" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
