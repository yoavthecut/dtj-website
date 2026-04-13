import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // TODO: connect to SENDER when API key is ready
  // const res = await fetch("https://api.sender.net/v2/subscribers", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.SENDER_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, groups: [process.env.SENDER_GROUP_ID] }),
  // });

  console.log("Newsletter signup:", { email });

  return NextResponse.json({ ok: true });
}
