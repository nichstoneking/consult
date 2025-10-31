"use client";

import { motion } from "motion/react";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChecklistItem {
  category: string;
  progress: number;
  status: "completed" | "in-progress" | "pending";
}

const checklistData: ChecklistItem[] = [
  {
    category: "Monitoring & Observability",
    progress: 100,
    status: "completed",
  },
  {
    category: "Error Handling & Fallbacks",
    progress: 100,
    status: "completed",
  },
  {
    category: "Load Testing & Benchmarks",
    progress: 75,
    status: "in-progress",
  },
  {
    category: "Cost Controls & Rate Limiting",
    progress: 85,
    status: "in-progress",
  },
  {
    category: "Security & Compliance",
    progress: 50,
    status: "in-progress",
  },
  {
    category: "Documentation & Runbooks",
    progress: 40,
    status: "pending",
  },
];

const getStatusIcon = (status: ChecklistItem["status"]) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="size-5 text-blue-500" />;
    case "in-progress":
      return <AlertCircle className="size-5 text-blue-400" />;
    case "pending":
      return <Circle className="size-5 text-muted-foreground" />;
  }
};

const getProgressColor = (progress: number) => {
  if (progress === 100) return "bg-blue-600";
  if (progress >= 75) return "bg-blue-500";
  if (progress >= 50) return "bg-blue-400";
  return "bg-blue-300";
};

export function ProductionReadinessDashboard() {
  // Calculate overall progress
  const overallProgress = Math.round(
    checklistData.reduce((acc, item) => acc + item.progress, 0) /
      checklistData.length
  );

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-6">
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <div className="text-3xl font-bold text-primary">
            {overallProgress}%
          </div>
          <div className="text-sm text-muted-foreground">
            Production Readiness Score
          </div>
        </motion.div>

        {/* Overall Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2"
        >
          <Progress value={overallProgress} className="h-3" />
        </motion.div>

        {/* Checklist Items */}
        <div className="space-y-4">
          {checklistData.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  {getStatusIcon(item.status)}
                  <span className="text-sm font-medium text-primary truncate">
                    {item.category}
                  </span>
                </div>
                <span className="text-sm font-semibold text-muted-foreground shrink-0">
                  {item.progress}%
                </span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  className={cn(
                    "h-full rounded-full transition-colors",
                    getProgressColor(item.progress)
                  )}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-6 pt-4 text-xs"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-4 text-blue-500" />
            <span className="text-muted-foreground">Complete</span>
          </div>
          <div className="flex items-center gap-1.5">
            <AlertCircle className="size-4 text-blue-400" />
            <span className="text-muted-foreground">In Progress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Circle className="size-4 text-muted-foreground" />
            <span className="text-muted-foreground">Pending</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

