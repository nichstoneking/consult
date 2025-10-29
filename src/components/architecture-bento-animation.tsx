"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import {
  Activity,
  Database,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface ArchitectureNode {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  position: { x: number; y: number };
  color: string;
  delay: number;
}

const architectureNodes: ArchitectureNode[] = [
  {
    id: "api",
    label: "API Gateway",
    icon: Globe,
    position: { x: 50, y: 15 },
    color: "bg-blue-500",
    delay: 0.2,
  },
  {
    id: "ai-core",
    label: "AI Core",
    icon: Icons.logo,
    position: { x: 50, y: 50 },
    color: "bg-secondary",
    delay: 0,
  },
  {
    id: "database",
    label: "Vector DB",
    icon: Database,
    position: { x: 30, y: 35 },
    color: "bg-purple-500",
    delay: 0.4,
  },
  {
    id: "monitoring",
    label: "Evals",
    icon: Activity,
    position: { x: 70, y: 35 },
    color: "bg-green-500",
    delay: 0.6,
  },
  {
    id: "cache",
    label: "MCP",
    icon: Zap,
    position: { x: 35, y: 70 },
    color: "bg-orange-500",
    delay: 0.8,
  },
  {
    id: "queue",
    label: "Cache",
    icon: Layers,
    position: { x: 65, y: 70 },
    color: "bg-pink-500",
    delay: 1.0,
  },
];

const connections = [
  { from: "api", to: "ai-core" },
  { from: "ai-core", to: "database" },
  { from: "ai-core", to: "monitoring" },
  { from: "ai-core", to: "cache" },
  { from: "ai-core", to: "queue" },
];

export function ArchitectureBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [activeConnections, setActiveConnections] = useState<number[]>([]);

  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        setShouldAnimate(true);
      }, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative flex size-full items-center justify-center overflow-hidden p-8"
    >
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-background to-transparent z-30"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-12 w-full bg-gradient-to-b from-background to-transparent z-30"></div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-border"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Architecture Nodes */}
      <div className="relative w-full h-full z-10">
        {architectureNodes.map((node) => {
          const IconComponent = node.icon;
          
          return (
            <motion.div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                zIndex: node.id === "ai-core" ? 20 : 15,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: shouldAnimate ? 1 : 0,
                opacity: shouldAnimate ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
                delay: node.delay,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "relative rounded-lg p-3 shadow-lg border border-border flex items-center justify-center",
                    node.id === "ai-core"
                      ? "bg-secondary w-16 h-16"
                      : "bg-background w-12 h-12"
                  )}
                >
                  <IconComponent
                    className={cn(
                      node.id === "ai-core"
                        ? "w-8 h-8 fill-white"
                        : "w-5 h-5"
                    )}
                  />
                  
                  {/* Pulsing effect for AI Core */}
                  {node.id === "ai-core" && shouldAnimate && (
                    <>
                      {[0, 1, 2].map((index) => (
                        <motion.div
                          key={index}
                          className="absolute inset-0 rounded-lg bg-secondary"
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{
                            scale: [1, 1.3],
                            opacity: [0.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.67,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
                
                <motion.span
                  className="text-xs font-medium text-foreground whitespace-nowrap px-2 py-1 bg-background/95 backdrop-blur-sm rounded-md border border-border shadow-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{
                    opacity: shouldAnimate ? 1 : 0,
                    y: shouldAnimate ? 0 : -5,
                  }}
                  transition={{
                    delay: node.delay + 0.3,
                    duration: 0.3,
                  }}
                >
                  {node.label}
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Metrics Badge */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 bg-accent/50 backdrop-blur-sm rounded-full border border-border z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: shouldAnimate ? 1 : 0,
          y: shouldAnimate ? 0 : 20,
        }}
        transition={{
          delay: 1.8,
          duration: 0.5,
        }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium">99.9% Uptime</span>
        </div>
        <div className="w-px h-4 bg-border" />
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-medium">&lt;100ms Latency</span>
        </div>
      </motion.div>
    </div>
  );
}

