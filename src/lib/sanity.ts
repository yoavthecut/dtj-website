import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// ─── Client ──────────────────────────────────────────────────────────────────

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

// ─── Image URL Builder ────────────────────────────────────────────────────────

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// ─── TypeScript Types ─────────────────────────────────────────────────────────

export type GuideCard = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  author: string;
  category: string;
  excerpt: string;
  mainImage: { asset: { _ref: string }; alt: string } | null;
};

export type GuideDetail = GuideCard & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
};

// ─── GROQ Queries ─────────────────────────────────────────────────────────────

export const ALL_GUIDES_QUERY = `
  *[_type == "guide" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    author,
    category,
    excerpt,
    mainImage { asset, alt }
  }
`;

export const GUIDE_BY_SLUG_QUERY = `
  *[_type == "guide" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    author,
    category,
    excerpt,
    mainImage { asset, alt },
    body
  }
`;

export const ALL_GUIDE_SLUGS_QUERY = `
  *[_type == "guide" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// ─── Fetch Helpers ────────────────────────────────────────────────────────────

export async function getAllGuides(): Promise<GuideCard[]> {
  return client.fetch(ALL_GUIDES_QUERY);
}

export async function getGuideBySlug(slug: string): Promise<GuideDetail | null> {
  return client.fetch(GUIDE_BY_SLUG_QUERY, { slug });
}

export async function getAllGuideSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(ALL_GUIDE_SLUGS_QUERY);
}

// ─── Media Articles ──────────────────────────────────────────────────────────

export type MediaArticleCard = {
  _id: string;
  title: string;
  outlet: string;
  url: string;
  publishedAt: string | null;
  excerpt: string | null;
  mainImage: { asset: { _ref: string }; alt?: string } | null;
};

export const ALL_MEDIA_ARTICLES_QUERY = `
  *[_type == "mediaArticle"] | order(publishedAt desc) {
    _id,
    title,
    outlet,
    url,
    publishedAt,
    excerpt,
    mainImage { asset, alt }
  }
`;

export async function getAllMediaArticles(): Promise<MediaArticleCard[]> {
  return client.fetch(ALL_MEDIA_ARTICLES_QUERY);
}
