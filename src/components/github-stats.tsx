"use client";

import { useEffect, useState } from "react";
import { getGitHubStats, type GitHubStats } from "@/actions/open-actions";
import { Skeleton } from "@/components/ui/skeleton";

export function GitHubStatsSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const githubStats = await getGitHubStats();
        setStats(githubStats);
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <section className="w-full max-w-4xl space-y-6">
      <h2 className="text-xl font-semibold text-center">GitHub Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border rounded-lg p-4 text-center">
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-8 w-16 mx-auto" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
          ) : (
            <>
              <p className="text-2xl font-semibold">
                {formatNumber(stats?.stargazers || 0)}
              </p>
              <p className="text-muted-foreground text-sm">Stargazers</p>
            </>
          )}
        </div>
        <div className="border rounded-lg p-4 text-center">
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-8 w-16 mx-auto" />
              <Skeleton className="h-4 w-12 mx-auto" />
            </div>
          ) : (
            <>
              <p className="text-2xl font-semibold">
                {formatNumber(stats?.forks || 0)}
              </p>
              <p className="text-muted-foreground text-sm">Forks</p>
            </>
          )}
        </div>
        <div className="border rounded-lg p-4 text-center">
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-8 w-12 mx-auto" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
          ) : (
            <>
              <p className="text-2xl font-semibold">{stats?.openIssues || 0}</p>
              <p className="text-muted-foreground text-sm">Open Issues</p>
            </>
          )}
        </div>
        <div className="border rounded-lg p-4 text-center">
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-8 w-16 mx-auto" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
          ) : (
            <>
              <p className="text-2xl font-semibold">
                {formatNumber(stats?.totalCommits || 0)}
              </p>
              <p className="text-muted-foreground text-sm">Merged PRs</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
