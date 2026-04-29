import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.SENDER_API_KEY;
  if (!apiKey) {
    console.error("SENDER_API_KEY missing");
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const groupId = process.env.SENDER_GROUP_ID;

  const res = await fetch("https://api.sender.net/v2/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      ...(groupId ? { groups: [groupId] } : {}),
    }),
  });

  if (!res.ok && res.status !== 422) {
    const text = await res.text();
    console.error("Sender API error:", res.status, text);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
