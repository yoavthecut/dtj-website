export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  role: string | null;
  photo: string;
  bio: string[] | null;
  bookable?: boolean;
};

export const team: TeamMember[] = [
  {
    slug: "noa-amalia-arazi",
    name: "Noa Amalia Arazi",
    title: "CEO & Founder",
    role: "English & Hebrew-Speaking Consultant",
    photo: "/team/noa-amalia-arazi.jpg",
    bio: [
      "Shalom, nice to meet you!",
      "I'm Noa, I was born in Israel - a country that was my home, yet for a long time, I occupied a complex space within its identity. My father is a Jewish Israeli, and my mother is a French-Catholic woman who embraced Judaism through a Reform conversion. Growing up in a household that blended these worlds, I always felt Jewish in my heart, but under Israeli law at the time, my status was not officially recognized.",
      "My turning point came during my military service. I enrolled in the Nativ program, the IDF-affiliated conversion course run by the Chief Rabbinate. It wasn't just a classroom experience; it was the most significant journey of my life. It was where I bridged the gap between my family's history and my own future.",
      "For years, my story was just my own. But the world changed on October 7, 2023. Like so many of us, I felt an overwhelming urge to contribute, to strengthen our people, and to speak my truth. I began sharing my conversion story on social media, exposing the raw, honest layers of my path.",
      "I didn't expect the floodgates to open the way they did. Thousands of messages began pouring in from every corner of the globe. People were searching for a \"front door\" to the Jewish people, but they felt lost, ignored, or overwhelmed by the bureaucracy and the isolation of the journey.",
      "Seeing this global void was my \"Hineni\" moment. I realized that my personal journey wasn't just about me - it was a blueprint to help others. I founded Destined to be a Jew to be the bridge I wish I had.",
      "My mission is to ensure that anyone whose soul is calling them back to the Jewish people never has to walk that path alone.",
      "Welcome back home!",
    ],
  },
  {
    slug: "rabbi-goldshmidt",
    name: "Rabbi Yonatan Goldshmidt",
    title: "Halachic Consultant",
    role: null,
    photo: "/team/rabbi-goldshmidt.jpg",
    bookable: false,
    bio: [
      "Shalom everyone,",
      "Originally from London, my spiritual journey began at the JLE (Jewish Learning Exchange), where I was mentored by Rabbi Akiva Tatz and developed a lifelong fascination with Jewish mysticism and philosophy. Following a Giyur L'Chumrah under the auspices of the London Beth Din, I relocated to Israel in 2007 to immerse myself in intensive Torah study. I spent several years mastering Halacha and Jewish thought at prestigious institutions, including Aish HaTorah, Ohr Somayach, Shapell's (Darche Noam), and the Kabbalistic Yeshiva of the Leshem.",
      "My Rabbinic career has since spanned three continents; in 2016, my family and I moved to South Africa, where we were deeply involved with the Muizenberg Synagogue and the Cape Town Beth Din, leading educational and Shabbat programs. After returning to Jerusalem to complete my Rabbinical studies in 2018, I was appointed as the Rabbi of the historic Paradesi Synagogue in Kochi, India - the oldest in the Commonwealth - while simultaneously serving as a full-time Mashgiach for Star-K Kosher certification, overseeing hundreds of facilities throughout India and the Far East. In 2022, I relocated to serve as the Rabbi of the Jewish Association of the Philippines, where I managed the community's synagogue, Hevra Kadisha, and educational initiatives, as well as overseeing their Kosher operations.",
      "I hold three Rabbinical ordinations from HaRav Yaakov Peretz, including a specialist Smicha in the Laws of Conversion. Drawing on my unique personal journey and extensive Halachic expertise, I now advise communities and individuals worldwide, as well as serving as a Halachic teacher and spiritual mentor for those navigating the path of conversion.",
    ],
  },
  {
    slug: "rabbi-megidish",
    name: "Rabbi Yehonatan Megidish",
    title: "Mohel",
    role: null,
    photo: "/team/rabbi-megidish.jpg",
    bio: null,
  },
  {
    slug: "odelia-avnery",
    name: "Odelia Avnery",
    title: "Hebrew Teacher",
    role: null,
    photo: "/team/odelia-avnery.jpg",
    bio: [
      "Nice to meet you, I'm Odelia.",
      "I was born in Israel to a Jewish-Israeli father and a mother from France who converted through the Reform movement. During my military service, I chose to complete my own Orthodox conversion through the \"Nativ\" program, a journey that deeply shaped my identity.",
      "Today, I live at the intersection of cultures. Based in Lisbon, Portugal, I love connecting people to history through their own two feet. I lead tours in both French and English for travelers from all over the world, specializing in Portugal's fascinating Jewish heritage - with a particular focus on the powerful story of the \"New Christians\" (Anusim).",
      "Alongside my work as a guide, I live and breathe the Hebrew language - from the vibrant slang of the Israeli streets to the profound depths of Biblical Hebrew. As a language teacher, I guide my students on their personal journey to connect with our culture and our ancient sources.",
      "If you're looking to learn Hebrew but aren't sure where to start - I'm here for you!",
    ],
  },
  {
    slug: "melissa-elbaz",
    name: "Melissa Elbaz",
    title: "Spanish-Speaking Consultant",
    role: null,
    photo: "/team/melissa-elbaz.jpg",
    bio: [
      "Shalom!",
      "I am an anthropologist and cultural bridge-builder, formed through a lifelong exploration of identity, belonging, and transmission.",
      "I grew up in the south of France in a North African Jewish family, marked by both a strong commitment to Jewish continuity and a temptation to assimilate, linked to experiences of antisemitism. Parts of my lineage trace back to Jerusalem, while others lead to Spain, including branches of Bnei Anusim and families expelled during the Inquisition. These contrasts sparked a lasting curiosity about identity, heritage, and the forces that shape them.",
      "I developed an early interest in anthropology, driven by a desire not only to better understand different cultural worlds, but also to foster communication and connection between them. As soon as I came of age, I began to travel and eventually spent several years in Latin America, where I felt a strong sense of familiarity with the Spanish language and everyday life. My path ultimately led me to Israel, where I found grounding and belonging.",
      "In Jerusalem, I became aware that a growing number of Latin Americans are seeking to convert to Judaism. Between 2024 and 2026, I conducted research on Latin American conversion candidates and their journeys, first at the Hebrew University of Jerusalem, and later at Ben-Gurion University of the Negev within the Center for the Study of Conversion and Inter-Religious Encounters. This research gave me a deep understanding of the challenges faced by Latin American aspiring converts. It also led me to realize that the relative closure of contemporary Judaism is not an intrinsic characteristic, but has historically emerged as a response to persecution. Welcoming righteous converts is not only recalled in our daily prayers; it is also a key step in the healing, ingathering, and flourishing of Am Israel.",
      "In 2026, after a year of volunteering in a conversion school, I joined Destined to be a Jew. Through my work as the NGO's Spanish-speaking consultant, I support and guide prospective converts, helping them navigate both practical pathways and deeper questions of identity and belonging. Because each journey is unique, I offer personalized guidance to shape a conversion process that reflects who you are, and helps you uncover the hidden treasures within your soul.",
      "Let the journey begin!",
    ],
  },
  {
    slug: "jacqueline-passy",
    name: "Jacqueline Passy",
    title: "Portuguese-Speaking Consultant",
    role: null,
    photo: "/team/jacqueline-passy.jpg",
    bio: null,
  },
  {
    slug: "nechama-ovadia",
    name: "Nechama Ovadia",
    title: "Immigration Attorney",
    role: null,
    photo: "/team/nechama-ovadia.jpg",
    bio: null,
  },
  {
    slug: "irena-rosenberg",
    name: "Irena Rosenberg",
    title: "Immigration Attorney",
    role: null,
    photo: "/team/irena-rosenberg.jpg",
    bio: null,
  },
];

export function getMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
