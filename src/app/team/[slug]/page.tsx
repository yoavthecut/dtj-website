import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMember, team } from "@/lib/team";
import ProfileView from "./profile-view";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = getMember(params.slug);
  if (!member) return { title: "Team · Destined to be a Jew" };

  const titleLine = member.role ? `${member.title} · ${member.role}` : member.title;
  return {
    title: `${member.name} · ${member.title} · Destined to be a Jew`,
    description: `${member.name} — ${titleLine} at Destined to be a Jew.`,
  };
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = getMember(params.slug);
  if (!member) notFound();

  return <ProfileView member={member} />;
}
