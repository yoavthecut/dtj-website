import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "e3k5b6l7",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "skJhRVBEefrWf8FAPIY63ta9DiyVbxnxLdHP2GLciTK8dTXM8WhQ5fAwEbz0FLGKL3f9Mr25gtivAhC0H9KOx49ABeU8mHPabq1kFIV0WmoC1faEJHyJnpfwvVJsGvUdjKdUrNoEa4YOXr3SUR6EGnAhc0A44Bh3rq1ZWH9nIDseIAf4F6Ka",
  useCdn: false,
});

function block(text) {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: Math.random().toString(36).slice(2), text, marks: [] }],
  };
}

function h2(text) {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2),
    style: "h2",
    markDefs: [],
    children: [{ _type: "span", _key: Math.random().toString(36).slice(2), text, marks: [] }],
  };
}

// ─── Article 1 ───────────────────────────────────────────────────────────────

const article1 = {
  _type: "guide",
  title: "From 'Religionless' to Founding a Global Conversion Organization: The Journey of Noa Amalia Arazi",
  slug: { _type: "slug", current: "from-religionless-to-founding-a-global-conversion-organization" },
  publishedAt: "2026-03-26T00:00:00.000Z",
  author: "Noa Amalia Arazi",
  category: "Conversion",
  excerpt: "Every person on this earth is granted a unique and wondrous journey. This is the story of how Noa Amalia Arazi went from being labeled 'religionless' in Israel to founding a global conversion organization after October 7th.",
  body: [
    block("Every person on this earth is granted a unique and wondrous journey. No two paths are identical, and that is precisely what makes our world so vibrant. This diversity is why I love what I do - because in the world of conversion, every individual and every story is an entire universe."),
    block("Every story is a piece of the greater puzzle - and if one piece is missing, the picture will be incomplete."),
    block("Did I ever imagine this would be my life's work? Not in my wildest dreams. Let me take you through the journey that led me to found Destined to be a Jew."),

    h2("In Between Worlds"),
    block("I was born in Tel Aviv, Israel, to an Israeli Jewish father and a French mother from Colmar, Alsace. My mother was raised in a Catholic family but never felt a connection to Christianity; as a teenager, she told her family she would no longer attend church."),
    block("She was always drawn to Judaism, sparked by stories of the Holocaust. At 20, she discovered she could volunteer on a kibbutz in Israel. In the Paris office handling the volunteers, she met my father, who was then a student living in France. My father's heritage was a tapestry of the Jewish experience: his father was a Holocaust survivor from Chernivtsi (back then, Romania), and his mother was a native Israeli born to Persian and Syrian parents. Because my mother was still technically Christian, they married in a civil ceremony in France before returning to Israel."),
    block("Eventually, my mother decided to officially join the Jewish people. She studied for an Orthodox conversion, but the experience was heartbreaking. The Rabbinical Court claimed they \"lost\" her file, sending her from office to office. Her teacher even suggested a Dayan that would grant her the certificate for a $5,000 cost. She refused. Devastated and seeking a place where she felt welcomed, she completed a Reform conversion instead."),

    h2("The 'Religionless' Army Officer"),
    block("Because my mother's conversion was not recognized by the Israeli Chief Rabbinate or the Ministry of Interior, I grew up officially labeled as \"irreligious\" in my own homeland - the same country I later served as a military officer."),
    block("I grew up in a completely secular environment. Aside from my grandfather, who would visit and bring Jewish books, I had zero exposure to Jewish life. I had no connection to it, and frankly, no desire for it. As a proud secular Tel Avivian, I wore my \"religionless\" status like a badge of honor. I felt I owed nothing to a Rabbinate or a G-d. You could say I was \"religiously\" secular."),

    h2("The Turning Point: The Mikveh"),
    block("Everything changed during my military service. I entered an officers' training course where we studied Zionism, Jewish history, and Israeli identity. For the first time, I felt a disconnect. I was living \"between worlds,\" belonging to nothing. Am I Israeli? Am I Jewish? Who am I?"),
    block("I was offered the chance to join 'Nativ' - the IDF's conversion course. I'll be honest: I started the course with a heavy dose of cynicism. I fought the idea that my entire world was about to change. But Hashem had other plans for me. Through incredible teachers and a warm host family who welcomed me for Shabbat and holidays, the beauty of Judaism began to unfold. They became my family, and they remain so to this day."),

    h2("The Horizon and the Holy City"),
    block("I completed my conversion a year later with Beit Din and an immersion in the Mikveh (ritual bath). I had feared the process would be life-changing, and it was. But the real shift happened moments after I left the water."),
    block("Back in my very secular apartment in Tel Aviv, I walked down to the beach and stared at the horizon. I thought, \"That's it? Now you're Jewish?\" I felt a profound sense of shock. Something wasn't right. My soul was calling for something more significant, something holier. It was whispering one word: Jerusalem."),
    block("A month later, I packed my bags and moved to Jerusalem without even having a place to live. I stayed in a hostel until I found a small apartment on Ruth Street, and began working as a concierge at the King David Hotel."),

    h2("October 7th and a New Mission"),
    block("Then, October 7th broke out. Like so many others, my life came to a halt. I was put on unpaid leave, and in the darkness of those early days of the war, I felt a desperate need to bring light into the Jewish world. I just didn't know how."),
    block("About a month into the war, an Israeli woman who saw a post I wrote about my conversion reached out for advice. We spoke for an hour. When I hung up, I knew: This is it. I am going to help people through their conversion journeys."),
    block("I began sharing my personal story on social media. The response was overwhelming. I received dozens, then hundreds, and eventually thousands of messages from people worldwide wanting to join the Jewish people - many of them moved specifically by the tragedy of October 7th. I realized there was a massive global need for conversion guidance that many communities were struggling to meet."),

    h2("Building a Global Community"),
    block("What started as a small consulting business to help people navigate the process step-by-step has blossomed into a global organization."),
    block("I know how complicated and emotional the conversion process can be. I remember the gaps in support during my own journey. My mission is to make this process warm, professional, and accessible for everyone who hears their soul calling them home."),
    block("Welcome to my journey - which has now become my life's mission. Now it's time to start yours."),
  ],
};

// ─── Article 2 ───────────────────────────────────────────────────────────────

const article2 = {
  _type: "guide",
  title: "Is My Conversion Eligible for Aliyah? Procedure for Recognition of Conversions Performed Outside of Israel",
  slug: { _type: "slug", current: "procedure-for-recognition-of-conversions-performed-outside-of-israel" },
  publishedAt: "2026-03-26T00:00:00.000Z",
  author: "Noa Amalia Arazi",
  category: "Conversion",
  excerpt: "If you have completed a conversion process or are planning to begin one, you may be eligible for Israeli citizenship. Learn about the specific criteria set by the Israeli Population and Immigration Authority.",
  body: [
    block("The conversion process is not just about joining a religion - it's about joining a people: the Jewish people living in the Land of Israel."),
    block("If you have completed a conversion process or are planning to begin one, you may be eligible for Israeli citizenship upon its conclusion. However, this is only possible if your process meets the specific criteria for eligibility."),
    block("Let's bring some clarity to the matter."),

    h2("Purpose"),
    block("These guidelines are intended to establish criteria for granting 'Oleh' status based on a conversion performed abroad for individuals who are not entitled to Israeli citizenship by law or do not hold a permanent residency permit in Israel. The purpose is to ensure that the person requesting 'Oleh' status converted with a sincere and serious intention to join the Jewish people and accept the Jewish religion, and did not use the conversion process solely to obtain civil status in the State of Israel."),

    h2("1. Recognized Community"),
    block("The conversion must have been conducted in a recognized, long-established, and active Jewish community with a common and known Jewish identity, which has permanent frameworks for community management and belongs to one of the recognized streams of the global Jewish population, by the authorized institutions of that community; and/or is recognized as a Jewish community by the Jewish Agency."),

    h2("2. Preparation and Connection with a Community"),
    block("Participation in a conversion preparation program of appropriate and acceptable scope is required. Generally, certification of participation in a preparation and study program for nine months, including active participation in community life during this period, is required. Alternatively, certification may be provided stating that the scope of study hours and active participation in community life is no less than 300 hours."),
    block("In special cases where the applicant does not meet this rule, the conversion may be recognized if the converting Rabbinical Court or the preparing Rabbi provides a reasonable explanation for the shorter scope of study - such as prior Jewish studies or active participation in a community for a more significant and prolonged period."),
    block("If the preparation was split between different communities, a period of three months in the converting community is required prior to the conversion."),
    block("Active participation in a recognized Jewish community (in Israel or abroad) for at least nine months following the conversion is also required. If an application for Aliyah is submitted before the end of this nine-month period, and other conditions are met, an A/5 visa will be granted."),

    h2("3. Accompanying Documents Required"),
    block("When submitting your application, you will need the following:"),
    block("• Conversion Certificate"),
    block("• A detailed declaration by the applicant regarding the preparation process (content, duration) and integration into the community after conversion"),
    block("• A detailed declaration from the authorized body of the community abroad regarding their conversion rules, the applicant's specific process, and confirmation of community membership"),
    block("• A detailed declaration from the community regarding active participation after conversion"),

    h2("4. General Rule"),
    block("Generally, an individual converted abroad who meets conditions 1–3 will be considered Jewish under Section 4B of the Law of Return. A decision will be made within 60 days of submitting all required documents."),

    h2("5. Circumstances That May Require Deeper Inquiry"),
    block("The following may raise concern or require individual review:"),
    block("• Prior long-term illegal stay in Israel (exceeding six months)"),
    block("• Prior rejected application for status in Israel on other grounds"),
    block("• The applicant has close family members with status in Israel who are not themselves converts"),
    block("• Conversion occurring close to the submission of an immigrant visa application"),
    block("• Starting conversion preparation while holding a temporary residence permit for less than two consecutive years"),
    block("If such circumstances exist, an individual inquiry will be conducted, providing the applicant an opportunity to state their case."),

    h2("6. Long-term Conversions"),
    block("If the conversion was performed in a recognized community over ten years ago (and Section 5 does not apply), the application can be approved upon presenting accepted proof of Judaism along with the conversion certificate and proof of post-conversion community affiliation."),

    h2("Important Disclaimer"),
    block("The article above is an English translation of the official document from the Israeli Population and Immigration Authority; however, it does not replace the original document. Destined to be a Jew assumes no responsibility for the information provided herein. For legal consultation, please consult an immigration attorney regarding any questions."),
  ],
};

// ─── Upload ───────────────────────────────────────────────────────────────────

async function upload() {
  console.log("Uploading article 1...");
  const r1 = await client.create(article1);
  console.log("✓ Created:", r1._id);

  console.log("Uploading article 2...");
  const r2 = await client.create(article2);
  console.log("✓ Created:", r2._id);

  console.log("\nAll done! Both articles are now in Sanity as drafts.");
  console.log("Go to destinedtobejew.sanity.studio → Guide → publish them to make them live.");
}

upload().catch(console.error);
