import { constructMetadata } from "@/lib/construct-metadata";

export const metadata = constructMetadata({
  title: "Help Center - Ballast",
  description: "Find answers to common questions and learn how to get the most out of Ballast.",
});

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}