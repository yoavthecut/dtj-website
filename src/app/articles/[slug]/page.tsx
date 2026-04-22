import { notFound } from "next/navigation";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/sanity";
import GuidePostClient from "./GuidePostClient";

export async function generateStaticParams() {
  const slugs = await getAllGuideSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = await getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | DTJ Guides`,
    description: guide.excerpt,
  };
}

export default async function GuideSlugPage({ params }: { params: { slug: string } }) {
  const guide = await getGuideBySlug(params.slug);

  if (!guide) notFound();

  return <GuidePostClient guide={guide} />;
}
