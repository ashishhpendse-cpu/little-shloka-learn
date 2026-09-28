export interface ShlokaLine {
  devanagari: string;
  transliteration: string;
  meaning: string;
}

export interface Shloka {
  slug: string;
  title: string;
  titleDevanagari: string;
  category: Category;
  blurb: string;
  funFact: string;
  lines: ShlokaLine[];
}

export type Category =
  | "Morning"
  | "Ganesha"
  | "Goddess"
  | "Peace"
  | "Guru";

export const categories: { name: Category; icon: string; tint: string; blurb: string }[] = [
  { name: "Morning", icon: "☀️", tint: "card-butter", blurb: "Start the day with sunshine words" },
  { name: "Ganesha", icon: "🐘", tint: "card-lavender", blurb: "Loved elephant friend shlokas" },
  { name: "Goddess", icon: "🪷", tint: "card-sage", blurb: "For Saraswati and Lakshmi" },
  { name: "Peace", icon: "🕊️", tint: "card-lavender", blurb: "Calm and quiet mantras" },
  { name: "Guru", icon: "🧡", tint: "card-butter", blurb: "Thank-you shlokas for teachers" },
];

export const shlokas: Shloka[] = [
  {
    slug: "vakratunda-mahakaya",
    title: "Vakratunda Mahakaya",
    titleDevanagari: "वक्रतुण्ड महाकाय",
    category: "Ganesha",
    blurb: "A happy little shloka to ask Ganesha for help with anything new.",
    funFact: "Children often say this shloka before a test, a trip, or learning something brand new!",
    lines: [
      {
        devanagari: "वक्रतुण्ड महाकाय",
        transliteration: "Va-kra-tun-da Ma-haa-kaa-ya",
        meaning: "O big-bodied one with a curved trunk,",
      },
      {
        devanagari: "सूर्यकोटि समप्रभ",
        transliteration: "Soor-ya-ko-ti sa-ma-prab-ha",
        meaning: "shining as brightly as a million suns,",
      },
      {
        devanagari: "निर्विघ्नं कुरु मे देव",
        transliteration: "Nir-vigh-nam ku-ru me de-va",
        meaning: "please make all my work free of trouble,",
      },
      {
        devanagari: "सर्वकार्येषु सर्वदा",
        transliteration: "Sar-va-kaa-rye-shu sar-va-daa",
        meaning: "in everything I do, always.",
      },
    ],
  },
  {
    slug: "karagre-vasate-lakshmi",
    title: "Karagre Vasate Lakshmi",
    titleDevanagari: "कराग्रे वसते लक्ष्मीः",
    category: "Morning",
    blurb: "The wake-up shloka — look at your hands and greet the day.",
    funFact: "Many children say this first thing in the morning, looking at their open palms.",
    lines: [
      {
        devanagari: "कराग्रे वसते लक्ष्मीः",
        transliteration: "Ka-raa-grey va-sa-te Lakshmee",
        meaning: "On the tips of my fingers lives Lakshmi (goodness and plenty),",
      },
      {
        devanagari: "करमध्ये सरस्वती",
        transliteration: "Ka-ra-madhye Sa-ras-wa-tee",
        meaning: "in the middle of my palm lives Saraswati (learning),",
      },
      {
        devanagari: "करमूले तु गोविन्दः",
        transliteration: "Ka-ra-moo-le tu Go-vin-dah",
        meaning: "at the base of my hand lives Govinda (love and protection),",
      },
      {
        devanagari: "प्रभाते करदर्शनम्",
        transliteration: "Pra-bhaa-te ka-ra-dar-sha-nam",
        meaning: "so I begin my morning looking at my hands.",
      },
    ],
  },
  {
    slug: "saraswati-namastubhyam",
    title: "Saraswati Namastubhyam",
    titleDevanagari: "सरस्वति नमस्तुभ्यं",
    category: "Goddess",
    blurb: "A study-time shloka to Saraswati, the goddess of learning.",
    funFact: "Saraswati's favourite instrument is the veena, and she is often shown with a white swan.",
    lines: [
      {
        devanagari: "सरस्वति नमस्तुभ्यं",
        transliteration: "Sa-ras-wa-ti na-mas-tub-yam",
        meaning: "Saraswati, I bow to you,",
      },
      {
        devanagari: "वरदे कामरूपिणि",
        transliteration: "Va-ra-de kaa-ma-roo-pi-ni",
        meaning: "giver of gifts, giver of wishes,",
      },
      {
        devanagari: "विद्यारम्भं करिष्यामि",
        transliteration: "Vid-yaa-ram-bham ka-rish-yaami",
        meaning: "I am about to begin my learning,",
      },
      {
        devanagari: "सिद्धिर्भवतु मे सदा",
        transliteration: "Sid-dhir bha-va-tu me sa-daa",
        meaning: "may it always come to me well.",
      },
    ],
  },
  {
    slug: "om-sahana-vavatu",
    title: "Om Sahana Vavatu",
    titleDevanagari: "ॐ सह नाववतु",
    category: "Peace",
    blurb: "A peaceful mantra said together by teachers and children.",
    funFact: "This mantra is chanted before lessons begin — teacher and student say it together!",
    lines: [
      {
        devanagari: "ॐ सह नाववतु",
        transliteration: "Om sa-haa naa-va-va-tu",
        meaning: "May we be protected together,",
      },
      {
        devanagari: "सह नौ भुनक्तु",
        transliteration: "sa-hau nau bhu-nak-tu",
        meaning: "may we enjoy our food and our learning together,",
      },
      {
        devanagari: "सह वीर्यं करवावहै",
        transliteration: "sa-ha-vee-ryam ka-ra-vaa-va-hai",
        meaning: "may we work with strength together,",
      },
      {
        devanagari: "तेजस्वि नावधीतमस्तु",
        transliteration: "te-jas-vi naa-va-dhee-ta-mas-tu",
        meaning: "may what we learn shine brightly,",
      },
      {
        devanagari: "मा विद्विषावहै",
        transliteration: "maa vid-vi-shaa-va-hai",
        meaning: "and may we never dislike each other.",
      },
      {
        devanagari: "ॐ शान्तिः शान्तिः शान्तिः",
        transliteration: "Om shaa-ntih shaa-ntih shaa-ntih",
        meaning: "Peace, peace, peace.",
      },
    ],
  },
  {
    slug: "twameva-mata",
    title: "Twameva Mata",
    titleDevanagari: "त्वमेव माता च पिता त्वमेव",
    category: "Peace",
    blurb: "A loving shloka that says family, friends and teachers are one.",
    funFact: "This shloka is often sung as a sweet bedtime song.",
    lines: [
      {
        devanagari: "त्वमेव माता च पिता त्वमेव",
        transliteration: "Twa-mev maa-taa cha pi-taa twa-mev",
        meaning: "You are my mother, you are my father,",
      },
      {
        devanagari: "त्वमेव बन्धुश्च सखा त्वमेव",
        transliteration: "twa-mev ban-dhush-cha sa-khaa twa-mev",
        meaning: "you are my family, you are my friend,",
      },
      {
        devanagari: "त्वमेव विद्या द्रविणं त्वमेव",
        transliteration: "twa-mev vid-yaa dra-vi-nam twa-mev",
        meaning: "you are my learning, you are my treasure,",
      },
      {
        devanagari: "त्वमेव सर्वं मम देव देव",
        transliteration: "twa-mev sar-vam ma-ma de-va de-va",
        meaning: "you are everything to me, my dear one.",
      },
    ],
  },
  {
    slug: "guru-brahma",
    title: "Guru Brahma",
    titleDevanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुः",
    category: "Guru",
    blurb: "A thank-you shloka for teachers, who help us grow.",
    funFact: "Children say this on Teacher's Day to thank their gurus.",
    lines: [
      {
        devanagari: "गुरुर्ब्रह्मा गुरुर्विष्णुः",
        transliteration: "Gu-rur-Brah-maa Gu-rur-Vish-nuh",
        meaning: "My teacher is the creator, my teacher is the protector,",
      },
      {
        devanagari: "गुरुर्देवो महेश्वरः",
        transliteration: "Gu-rur-de-vo Ma-hesh-wa-rah",
        meaning: "my teacher is the great one,",
      },
      {
        devanagari: "गुरुरेव परं ब्रह्म",
        transliteration: "Gu-rur-e-va pa-ram Brahm",
        meaning: "my teacher is the greatest of all,",
      },
      {
        devanagari: "तस्मै श्रीगुरवे नमः",
        transliteration: "Tas-mai Shri-Gu-ra-ve na-mah",
        meaning: "to that teacher I bow with love.",
      },
    ],
  },
];

export function getShloka(slug: string): Shloka | undefined {
  return shlokas.find((s) => s.slug === slug);
}

export function nextShloka(slug: string): Shloka {
  const i = shlokas.findIndex((s) => s.slug === slug);
  return shlokas[(i + 1) % shlokas.length];
}

export const featuredShloka = shlokas[0]!;
