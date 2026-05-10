import posts from '../data/blogPosts.json';

export type BlogPostMeta = {
  slug: string;
  title: string;
  published: string;
  description: string;
  lang?: string;
};

/** Newest first — reflects build-time data (`blogPosts.json`) whenever the site rebuilds. */
export function getRecentBlogPosts(limit = 5): BlogPostMeta[] {
  const list = posts as BlogPostMeta[];
  return [...list].sort((a, b) => b.published.localeCompare(a.published)).slice(0, limit);
}
