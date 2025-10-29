import { Author } from "@/types/author";

export const authors: Record<string, Author> = {
  christerhagen: {
    id: "christerhagen",
    name: "Christer Hagen",
    defaultTitle: "Founder & CEO",
    image: "/avatars/christer.jpg",
    bio: "Founder of Ballast, passionate about building tools that help people manage their digital life more effectively.",
    twitter: "christerhagen",
    linkedin: "christerhagen",
  },
  "Ballast-team": {
    id: "Ballast-team",
    name: "Ballast Team",
    defaultTitle: "Product Team",
    image: "/avatars/team.jpg",
    bio: "The official Ballast team account. Building the future of link management with AI-powered insights.",
    twitter: "Ballastapp",
  },
  "sarah-johnson": {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    defaultTitle: "Product Manager",
    image: "/avatars/sarah.jpg",
    bio: "Product Manager at Ballast with 8+ years in analytics and data visualization. Passionate about turning data into actionable insights.",
    twitter: "sarahjdev",
  },
};

export function getAuthor(authorId: string): Author | undefined {
  return authors[authorId];
}

export function getAuthorWithCustomTitle(
  authorId: string,
  customTitle?: string
): (Author & { displayTitle: string }) | undefined {
  const author = getAuthor(authorId);
  if (!author) return undefined;

  return {
    ...author,
    displayTitle: customTitle || author.defaultTitle,
  };
}

// Simple function to get author by key (for the simplified approach)
export function getAuthorByKey(authorKey: string): Author | undefined {
  return authors[authorKey];
}
