// Seed initial mediaArticle documents into Sanity.
// Run once with: node scripts/seed-media.mjs
import { createClient } from "next-sanity";
import { readFileSync } from "node:fs";

// Tiny .env.local loader so we don't need an extra dependency.
for (const line of readFileSync(".env.local", "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const articles = [
  {
    _id: "media-inn-392130",
    _type: "mediaArticle",
    title: "My conversion to Judaism",
    outlet: "Israel National News",
    url: "https://www.israelnationalnews.com/news/392130",
    excerpt:
      "Noa converted through the Israeli Rabbinate and created a presence on social media to help give support to others who want to convert the right way. She sent us her story.",
    publishedAt: new Date("2025-01-01").toISOString(),
  },
  {
    _id: "media-jpost-800567",
    _type: "mediaArticle",
    title: "Helping those seeking an Orthodox Jewish conversion in Israel",
    outlet: "The Jerusalem Post",
    url: "https://www.jpost.com/judaism/article-800567",
    excerpt:
      "Arazi has devoted much of her time to helping prospective converts learn about the conversion process, drawing from her own conversion experiences on social media.",
    publishedAt: new Date("2024-06-01").toISOString(),
  },
];

async function run() {
  for (const a of articles) {
    await client.createOrReplace(a);
    console.log(`✓ ${a.outlet} — ${a.title}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
