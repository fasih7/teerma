/**
 * Country data and config for study destination pages.
 * Single source of truth for homepage cards and /countries/[country] detail pages.
 */

export type FeeRowHighlight = "orange" | "teal" | "gold" | "total" | "none";

export interface FeeRow {
  program: string;
  duration: string;
  fee: string;
  notes?: string;
  highlight?: FeeRowHighlight;
  isTotalRow?: boolean;
  isFullyFunded?: boolean;
  feeSecondary?: string; // e.g. USD approximation
}

export interface QuickFact {
  label: string;
  value: string;
  icon?: "location" | "language" | "recognition" | "fee" | "semesters" | "scholarship" | "work" | "other";
}

export type BadgeType =
  | "englishMedium"
  | "englishAndRussian"
  | "whoPmdc"
  | "whoEcfmgPmdc"
  | "cscScholarship"
  | "scholarshipAvailable"
  | "partTimeWorkAllowed"
  | "feeWaiver50"
  | "meritScholarships";

export interface CountrySectionCopy {
  heading: string;
  body: string;
}

export interface CountryHighlightBlock {
  type: "annualCost" | "feeWaiver" | "scholarship" | "partTimeWork" | "cscFullyFunded" | "whoPmdcRecognition" | "whoEcfmgPmdc";
  heading?: string;
  body: string;
  style?: "teal" | "green" | "gold";
}

export interface CountryConfig {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  /** Path under /public, e.g. /images/countries/russia.jpg */
  heroImage: string;
  seo: {
    title: string;
    description: string;
  };
  /** For homepage card and detail page hero */
  cardDescription: string;
  /** Short one-line description for homepage card (original design) */
  shortDescription: string;
  feeRangeLabel: string;
  badges: BadgeType[];
  /** No scholarships = show grey "Self-funded" line */
  hasScholarshipNote?: boolean;
  scholarshipNote?: string;
  quickFacts: QuickFact[];
  fieldsOfStudy: string[];
  /** Fee table rows */
  feeTable: FeeRow[];
  /** Shown below fee table */
  annualCostNote?: string;
  /** Optional footnote (e.g. USD approximation disclaimer for China) */
  feeDisclaimer?: string;
  /** Extra highlight blocks (annual cost box, fee waiver, CSC, WHO/PMDC, etc.) */
  highlightBlocks: CountryHighlightBlock[];
  sections: {
    opening: string;
    programsAndFees: { heading: string; body: string };
    language?: { heading: string; body: string };
    whyCountry: { heading: string; body: string };
    studentLife: { heading: string; body: string };
    pageCta: { heading: string; body: string; buttonText: string };
  };
  /** Optional: e.g. "Bukhara State Medical Institute" for Uzbekistan */
  partnerUniversity?: string;
}

const countriesData: CountryConfig[] = [
  // --- RUSSIA ---
  {
    id: "russia",
    slug: "russia",
    name: "Russia",
    tagline: "World-Class Education at Genuinely Accessible Costs",
    heroImage: "/images/countries/russia.jpg",
    seo: {
      title: "Study in Russia | Teerma Consultancy",
      description:
        "Study in Russia — top universities, globally recognized degrees, and affordable tuition for Pakistani students. Medicine, engineering, and technology programs in English and Russian. Expert guidance from Teerma.",
    },
    cardDescription:
      "Russia has a long and trusted history of welcoming Pakistani students — particularly in medicine, engineering, and technology. Its universities are globally ranked, its degrees are internationally recognized, and the cost of studying remains one of the most accessible among serious academic destinations.",
    shortDescription: "Rich cultural heritage and world-class universities",
    feeRangeLabel: "From $3,600/year",
    badges: ["englishAndRussian"],
    hasScholarshipNote: true,
    scholarshipNote: "Self-funded placements — no scholarships currently",
    quickFacts: [
      { label: "Location", value: "Eastern Europe & Northern Asia", icon: "location" },
      { label: "Language of Instruction", value: "English & Russian Medium", icon: "language" },
      { label: "Degree Recognition", value: "Internationally Recognized (PMC for Medicine)", icon: "recognition" },
      { label: "Tuition Fee Range", value: "$3,600 – $5,000 / year (degree programs)", icon: "fee" },
      { label: "Semesters Per Year", value: "2 Semesters", icon: "semesters" },
      { label: "Known For", value: "Medicine, Engineering, Technology", icon: "other" },
    ],
    fieldsOfStudy: ["Medicine (MBBS)", "Engineering", "Computer Science", "Russian Language Program"],
    feeTable: [
      { program: "Russian Language Program", duration: "1 Year", fee: "$5,000 – $7,000", notes: "Total complete package — all inclusive", highlight: "orange" },
      { program: "Medicine (MBBS)", duration: "6 Years", fee: "$1,800 – $2,500 / semester", notes: "2 semesters/year = approx. $3,600–$5,000/year", highlight: "orange" },
      { program: "Engineering", duration: "4–5 Years", fee: "$1,800 – $2,500 / semester", notes: "2 semesters/year = approx. $3,600–$5,000/year", highlight: "orange" },
      { program: "Computer Science", duration: "4 Years", fee: "$1,800 – $2,500 / semester", notes: "2 semesters/year = approx. $3,600–$5,000/year", highlight: "orange" },
    ],
    annualCostNote:
      "Russian universities run 2 semesters per year. At $1,800–$2,500 per semester, the annual tuition cost for Medicine, Engineering, and Computer Science works out to approximately $3,600–$5,000 per year — making Russia one of the most affordable destinations for a globally recognized degree in these fields.",
    feeDisclaimer: undefined,
    highlightBlocks: [
      {
        type: "annualCost",
        body: "Russian universities run 2 semesters per year. At $1,800–$2,500 per semester, the annual tuition cost for Medicine, Engineering, and Computer Science works out to approximately $3,600–$5,000 per year — making Russia one of the most affordable destinations for a globally recognized degree in these fields.",
        style: "teal",
      },
    ],
    sections: {
      opening:
        "Russia is one of the world's most established destinations for international students — and Pakistani students have been choosing it for decades. With top-ranked universities, globally recognized degrees, and some of the most accessible tuition fees among serious academic destinations, Russia remains a compelling and trusted choice for students pursuing medicine, engineering, and technology.",
      programsAndFees: {
        heading: "Programs & Tuition Fees",
        body: "Russian universities offer programs at every level — from a preparatory Russian Language Program to full Bachelor's, Master's, and medical degrees. The one-year Russian Language Program is available as a complete package for $5,000 to $7,000. For Medicine, Engineering, and Computer Science, tuition fees range from $1,800 to $2,500 per semester — with two semesters per year, this translates to approximately $3,600 to $5,000 annually.",
      },
      language: {
        heading: "Language of Instruction",
        body: "Programs in Russia are available in both English and Russian medium. English-medium programs are ideal for students who want to begin studying immediately, while Russian-medium programs — often preceded by the one-year Language Program — can offer a more immersive academic experience and open additional opportunities within Russia after graduation.",
      },
      whyCountry: {
        heading: "Why Russia Stands Out for Pakistani Students",
        body: "Russia's universities have a strong global reputation — particularly in medicine, engineering, architecture, and the sciences. Degrees are recognized internationally and by Pakistani regulatory bodies, including the Pakistan Medical Commission for medical graduates. The country has a well-established Pakistani student community, making the transition to life abroad significantly easier. Combined with low tuition fees and a manageable cost of living, Russia offers a genuine pathway to a world-class qualification without the financial burden of Western destinations.",
      },
      studentLife: {
        heading: "Student Life in Russia",
        body: "Russian cities — particularly Moscow, St. Petersburg, and Kazan — offer a rich cultural experience, safe campuses, and a vibrant international student community. While winters are cold, students quickly adapt and find the experience both character-building and genuinely rewarding.",
      },
      pageCta: {
        heading: "Ready to Start Your Journey to Russia?",
        body: "Our consultants have placed hundreds of students in Russian universities across medicine, engineering, and technology. Book your consultation and we will guide you through every step — from program selection to your first day on campus.",
        buttonText: "Book Your Consultation",
      },
    },
  },

  // --- MALAYSIA ---
  {
    id: "malaysia",
    slug: "malaysia",
    name: "Malaysia",
    tagline: "Modern Campuses. English Medium. A Culture That Feels Like Home.",
    heroImage: "/images/countries/malaysia.png",
    seo: {
      title: "Study in Malaysia | Teerma Consultancy",
      description:
        "Study in Malaysia — English-medium programs at public universities, affordable fees, scholarship opportunities, and part-time work rights for Pakistani students. Bachelor's, Master's & PhD.",
    },
    cardDescription:
      "Malaysia is one of the most well-rounded study destinations available to Pakistani students. Public universities offer globally recognized degrees entirely in English, at some of the most competitive fee levels in the region. The multicultural environment, familiar food, welcoming people, and part-time work opportunities make settling in genuinely easy — and the scholarship opportunities available after enrollment make it even more financially attractive.",
    shortDescription: "Affordable excellence and multicultural hubs",
    feeRangeLabel: "From $2,000/year (Masters & PhD)",
    badges: ["englishMedium", "scholarshipAvailable", "partTimeWorkAllowed"],
    quickFacts: [
      { label: "Location", value: "Southeast Asia", icon: "location" },
      { label: "Language of Instruction", value: "English Medium Only", icon: "language" },
      { label: "Degree Recognition", value: "Internationally Recognized", icon: "recognition" },
      { label: "University Type", value: "Public Universities", icon: "other" },
      { label: "Annual Fee (Masters/PhD)", value: "Approx. $2,000 – $4,000/year", icon: "fee" },
      { label: "Semesters Per Year", value: "2 Semesters", icon: "semesters" },
      { label: "Scholarship", value: "Merit & Research — for eligible enrolled students", icon: "scholarship" },
      { label: "Part-Time Work", value: "Allowed on student visa", icon: "work" },
      { label: "Muslim Friendly", value: "Muslim-majority country, Halal food widely available", icon: "other" },
    ],
    fieldsOfStudy: ["Engineering", "Computer Science", "Business & Management", "Hospitality & Tourism"],
    feeTable: [
      { program: "Bachelor's", duration: "3–4 Years", fee: "Contact us for details", notes: "Fees vary by university and field" },
      { program: "Master's", duration: "1.5–2 Years", fee: "$1,000 – $2,000 / semester", notes: "Public universities, 2 semesters/year", highlight: "orange" },
      { program: "PhD", duration: "3–5 Years", fee: "$1,000 – $2,000 / semester", notes: "Public universities, 2 semesters/year", highlight: "orange" },
    ],
    annualCostNote:
      "2 semesters per year × $1,000–$2,000 per semester = approximately $2,000–$4,000 per year at Malaysian public universities. This makes Malaysia one of the most affordable destinations for internationally recognized postgraduate degrees — with the added bonus of scholarship eligibility after enrollment.",
    feeDisclaimer: undefined,
    highlightBlocks: [
      {
        type: "scholarship",
        heading: "Scholarship Opportunities — Rewarding Students Who Perform",
        body: "One of Malaysia's most compelling advantages is its scholarship culture. Students who meet the criteria after enrollment are eligible for both merit-based and research-based scholarships at public universities. Merit scholarships reward strong academic performance, while research scholarships support students contributing to university research programs. These are not guaranteed — but for driven, high-performing students, Malaysia actively rewards commitment with real financial support.",
        style: "green",
      },
      {
        type: "partTimeWork",
        heading: "Part-Time Work Rights — Earn While You Study",
        body: "Pakistani students studying in Malaysia on a valid student visa are permitted to work part time. This is a significant advantage — it allows students to gain international work experience, build their professional network, and offset some of their living costs while completing their degree. It is a practical benefit that few other destinations in our portfolio offer.",
        style: "green",
      },
    ],
    sections: {
      opening:
        "Malaysia has quietly become one of the strongest study destinations for Pakistani students — and it is easy to understand why. English-medium programs at public universities, an affordable and transparent fee structure, a multicultural society that Pakistani students adapt to quickly, and the added benefit of part-time work rights make Malaysia a genuinely complete package. From Bachelor's degrees to Master's and PhD programs, Malaysia offers a pathway for every stage of your academic journey.",
      programsAndFees: {
        heading: "Programs & Tuition Fees",
        body: "Malaysian public universities offer programs at Bachelor's, Master's, and PhD level — all delivered in English. For Master's and PhD programs, tuition fees at public universities range from $1,000 to $2,000 per semester. With two semesters per year, the annual cost works out to approximately $2,000 to $4,000 — making Malaysian public universities among the most affordable providers of internationally recognized postgraduate degrees in the world. Bachelor's program fees vary by university and field — speak to our consultants for specific details.",
      },
      language: {
        heading: "Fully English Medium — No Language Barrier",
        body: "All programs we place students in through Teerma are delivered entirely in English at Malaysian public universities. Pakistani students can begin their studies immediately and focus completely on their academic and professional development from day one.",
      },
      whyCountry: {
        heading: "Why Malaysia Works for Pakistani Students",
        body: "Malaysia is a Muslim-majority country with a warm, multicultural society that Pakistani students find genuinely familiar. Halal food is widely available, the cost of living is manageable, the cities are modern and well-connected, and the overall environment is safe and welcoming. Combined with English-medium programs, part-time work rights, and post-enrollment scholarship opportunities, Malaysia removes nearly every barrier that makes studying abroad feel daunting.",
      },
      studentLife: {
        heading: "Student Life in Malaysia",
        body: "Student life in Malaysia is vibrant, diverse, and genuinely enjoyable. Modern campuses, an active international student community, affordable city living, and easy access to travel across Southeast Asia make Malaysia one of the most rewarding places to spend your university years.",
      },
      pageCta: {
        heading: "Ready to Explore Malaysia?",
        body: "Our consultants will match you with the right university and program based on your academic background and career goals. Book your consultation and let us map out your Malaysia journey from start to finish.",
        buttonText: "Book Your Consultation",
      },
    },
  },

  // --- CYPRUS ---
  {
    id: "cyprus",
    slug: "cyprus",
    name: "Cyprus",
    tagline: "A European Degree Without European Prices",
    heroImage: "/images/countries/cyprus.webp",
    seo: {
      title: "Study in Cyprus | Teerma Consultancy",
      description:
        "Study in Cyprus — EU-recognized degrees, English medium, 50% fee waiver from Year 2. Foundation, Bachelor's & Master's. Affordable and safe Mediterranean destination for Pakistani students.",
    },
    cardDescription:
      "Cyprus offers EU-recognized degrees in a safe, welcoming country. English is the language of instruction, campuses are modern, and the 50% fee waiver from Year 2 makes it one of the best value destinations in Europe.",
    shortDescription: "EU membership and Mediterranean student life",
    feeRangeLabel: "From €5,000/year",
    badges: ["englishMedium", "feeWaiver50", "meritScholarships"],
    quickFacts: [
      { label: "Location", value: "Mediterranean Europe", icon: "location" },
      { label: "Language of Instruction", value: "English", icon: "language" },
      { label: "Degree Recognition", value: "EU & Internationally Recognized", icon: "recognition" },
      { label: "Tuition Fee Range", value: "EUR 5,000 – EUR 9,000", icon: "fee" },
      { label: "Scholarship / Fee Waiver", value: "50% Fee Waiver from Year 2 + Merit Scholarships", icon: "scholarship" },
      { label: "Student Life", value: "Safe, vibrant, internationally diverse", icon: "other" },
    ],
    fieldsOfStudy: ["Engineering", "Business & Management", "Law", "Computer Science", "Hospitality & Tourism", "Arts & Humanities"],
    feeTable: [
      { program: "Foundation", duration: "1 Year", fee: "€5,000 – €5,500", notes: "Total complete fee for the full program", highlight: "teal" },
      { program: "Bachelor's", duration: "3–4 Years", fee: "€5,000 – €6,650 / year", notes: "50% fee waiver applies from Year 2 onwards", highlight: "teal" },
      { program: "Master's", duration: "1.5 Years", fee: "€7,000 – €9,000 TOTAL", notes: "Complete fee — not per year", highlight: "teal" },
    ],
    feeDisclaimer: undefined,
    highlightBlocks: [
      {
        type: "feeWaiver",
        heading: "The 50% Fee Waiver — A Game Changer",
        body: "From the second year of your Bachelor's program, you receive a 50% tuition fee waiver. This means your annual fee effectively drops by half — making Cyprus one of the most financially rewarding study destinations available to Pakistani students today. It is not a scholarship you have to compete for. It is a standard benefit that applies automatically from Year 2 onwards.",
        style: "teal",
      },
    ],
    sections: {
      opening:
        "Cyprus sits at the crossroads of Europe, Asia, and Africa — a small island with a big academic reputation. For Pakistani students seeking an internationally recognized degree with a clear path to career success, Cyprus offers an outstanding combination of academic quality, genuine affordability, and an exceptional lifestyle.",
      programsAndFees: {
        heading: "Programs & Tuition Fees",
        body: "Cypriot universities offer three clear entry pathways for Pakistani students. The Foundation program runs for one year at a total cost of EUR 5,000 to EUR 5,500 — ideal for students looking to strengthen their academic foundation before entering a degree program. Bachelor's programs are priced at EUR 5,000 to EUR 6,650 per year, while Master's programs are completed in just 1.5 years at a total fee of EUR 7,000 to EUR 9,000.",
      },
      whyCountry: {
        heading: "Why Cyprus Stands Out",
        body: "Degrees awarded by Cypriot universities are fully recognized across the European Union and internationally — giving graduates a credential that carries real weight in the global job market. Programs are available across engineering, business, law, computer science, hospitality, and the arts, all delivered in English. The overall cost of living remains manageable for Pakistani families, and the island's safe, welcoming environment makes settling in genuinely easy.",
      },
      studentLife: {
        heading: "Student Life in Cyprus",
        body: "Life in Cyprus is safe, sunny, and genuinely enjoyable. The island has a strong international student community, welcoming locals, and a pace of life that balances focused academic work with personal growth and exploration.",
      },
      pageCta: {
        heading: "Ready to Make Cyprus Your Next Destination?",
        body: "Book your consultation and we will guide you through everything — from choosing the right program to landing at Larnaca Airport.",
        buttonText: "Book Your Consultation",
      },
    },
  },

  // --- CHINA ---
  {
    id: "china",
    slug: "china",
    name: "China",
    tagline: "One of the World's Most Generous Study Destinations for Pakistani Students",
    heroImage: "/images/countries/china.jpg",
    seo: {
      title: "Study in China | Teerma Consultancy",
      description:
        "Study in China — from affordable language and MBBS programs to fully funded Master's & PhD (CSC scholarship with stipend). WHO & PMDC recognized medical degrees. English medium. Teerma Consultancy.",
    },
    cardDescription:
      "China offers something for every Pakistani student — from affordable language and diploma programs to fully funded Master's and PhD scholarships with a monthly stipend. With English-medium programs across medicine, engineering, business, technology, and the arts, WHO and PMDC recognized medical degrees, and one of the most generous government scholarship programs in the world, China has become one of the strongest study destinations available.",
    shortDescription: "Top universities and global career opportunities",
    feeRangeLabel: "From 4,500 RMB/year to Fully Funded",
    badges: ["englishMedium", "cscScholarship", "whoPmdc"],
    quickFacts: [
      { label: "Location", value: "East Asia", icon: "location" },
      { label: "Language of Instruction", value: "English Medium Only", icon: "language" },
      { label: "MBBS Recognition", value: "WHO & PMDC Approved", icon: "recognition" },
      { label: "Flagship Benefit", value: "Fully Funded Master's & PhD + Monthly Stipend", icon: "scholarship" },
      { label: "Fee Range", value: "From 4,500 RMB/year to Fully Funded", icon: "fee" },
      { label: "Semesters Per Year", value: "2 Semesters", icon: "semesters" },
      { label: "Degree Recognition", value: "Internationally Recognized", icon: "recognition" },
      { label: "Programs Available", value: "Language · Diploma · Bachelor's · MBBS · Master's · PhD", icon: "other" },
      { label: "Pakistan-China Ties", value: "Strong diplomatic & economic partnership — welcoming environment for Pakistani students", icon: "other" },
    ],
    fieldsOfStudy: [
      "Medicine (MBBS)",
      "Engineering",
      "Computer Science",
      "Business & Management",
      "Architecture",
      "Pharmacy",
      "Dentistry",
      "Chinese Language Program",
    ],
    feeTable: [
      { program: "Chinese Language Program", duration: "1 Year", fee: "6,000–10,000 RMB/yr", feeSecondary: "~$830–$1,380/yr", notes: "Partial scholarships at select universities", highlight: "orange" },
      { program: "Diploma & Engineering", duration: "2–4 Years", fee: "4,500–10,000 RMB/yr", feeSecondary: "~$620–$1,380/yr", notes: "Partial scholarships available", highlight: "orange" },
      { program: "MBBS", duration: "6 Years", fee: "15,000–35,000 RMB/yr", feeSecondary: "~$2,070–$4,830/yr", notes: "WHO & PMDC recognized", highlight: "orange" },
      {
        program: "Master's",
        duration: "2–3 Years",
        fee: "FULLY FUNDED (CSC)",
        notes: "Stipend: 1,000–3,000 RMB/month. Tuition + accommodation + monthly stipend",
        highlight: "gold",
        isFullyFunded: true,
      },
      {
        program: "PhD",
        duration: "3–5 Years",
        fee: "FULLY FUNDED (CSC)",
        notes: "Stipend: 1,500–3,500 RMB/month. Tuition + accommodation + monthly stipend",
        highlight: "gold",
        isFullyFunded: true,
      },
    ],
    feeDisclaimer: "USD approximations based on current exchange rates. RMB figures are accurate.",
    highlightBlocks: [
      {
        type: "cscFullyFunded",
        heading: "Fully Funded Master's & PhD — CSC Scholarship",
        body: "The Chinese Government Scholarship (CSC) covers full tuition fees, on-campus accommodation, and provides a monthly living stipend of 1,000–3,000 RMB for Master's students and 1,500–3,500 RMB for PhD students. You do not just study for free — you are financially supported throughout your entire program. This is one of the most comprehensive scholarship programs available to Pakistani students anywhere in the world.",
        style: "gold",
      },
      {
        type: "whoPmdcRecognition",
        heading: "MBBS Recognition — WHO & PMDC Approved",
        body: "Medical degrees from Teerma's partner universities in China are recognized by the World Health Organization (WHO) and approved by the Pakistan Medical and Dental Council (PMDC). Pakistani graduates can return home and register as a doctor, and are eligible for international licensing exams including USMLE and PLAB.",
        style: "green",
      },
    ],
    sections: {
      opening:
        "China is one of the most complete study destinations in the world — and for Pakistani students, it offers an exceptional range of opportunities at every level. Whether you are looking for an affordable undergraduate program, a WHO and PMDC recognized medical degree, or a fully funded Master's or PhD scholarship with a monthly living stipend, China has a pathway that fits your goals and your budget.",
      programsAndFees: {
        heading: "Programs & Tuition Fees",
        body: "The Chinese Language Program is available for 6,000 to 10,000 RMB per year — an ideal entry point for students who want to learn Mandarin before transitioning into a Chinese-medium degree. Diploma and Engineering programs are available from 4,500 to 10,000 RMB per year, with partial scholarships at select universities. China's MBBS programs are recognized by WHO and PMDC, with tuition from 15,000 to 35,000 RMB per year. Master's and PhD students can apply for the fully funded CSC scholarship with tuition, accommodation, and a monthly stipend all covered.",
      },
      language: {
        heading: "English Medium Programs",
        body: "Teerma places students in English-medium programs across medicine, engineering, business, and technology. Pakistani students can focus on their studies from day one without a language barrier.",
      },
      whyCountry: {
        heading: "Why China Works for Pakistani Students",
        body: "China has invested heavily in attracting international students — and it shows. Campuses are modern and well-equipped, faculty are internationally trained, and the English-medium program offering has expanded significantly in recent years. Pakistan and China share strong diplomatic and economic ties, creating a uniquely welcoming environment for Pakistani students. Cities like Beijing, Shanghai, Wuhan, and Chengdu offer a rich cultural experience combined with world-class academic infrastructure.",
      },
      studentLife: {
        heading: "Student Life in China",
        body: "Student life in China is dynamic, affordable, and full of opportunity. The cost of living is low, cities are safe and modern, and the international student community is one of the largest in the world. Pakistani students find strong community support, affordable food, and a campus experience that is both academically rigorous and personally rewarding.",
      },
      pageCta: {
        heading: "Ready to Explore China?",
        body: "From language programs to fully funded PhD scholarships — our consultants will identify the right pathway for your profile and guide you through every step of the application. Book your consultation today.",
        buttonText: "Book Your Consultation",
      },
    },
  },

  // --- UZBEKISTAN ---
  {
    id: "uzbekistan",
    slug: "uzbekistan",
    name: "Uzbekistan",
    tagline: "WHO & PMDC Recognized Medical Degree. English Medium. Genuinely Affordable.",
    heroImage: "/images/countries/uzbekistan.jpg",
    seo: {
      title: "Study Medicine in Uzbekistan | Teerma Consultancy",
      description:
        "Study MBBS in Uzbekistan at Bukhara State Medical Institute — WHO, ECFMG & PMDC recognized. English medium, all-in fee from ~$4,300/year. Pakistani students can practice at home. Teerma Consultancy.",
    },
    cardDescription:
      "Bukhara State Medical Institute offers a fully English-medium MBBS program recognized by WHO, ECFMG, and PMDC — giving Pakistani students a medical degree that is valid and respected both at home and internationally. With one of the most affordable fee structures available, Uzbekistan makes a world-recognized medical career genuinely accessible.",
    shortDescription: "Growing education sector and cultural diversity",
    feeRangeLabel: "From $4,300/year (all inclusive)",
    badges: ["englishMedium", "whoEcfmgPmdc"],
    hasScholarshipNote: true,
    scholarshipNote: "Self-funded placements — no scholarships currently",
    partnerUniversity: "Bukhara State Medical Institute",
    quickFacts: [
      { label: "WHO Recognition", value: "World Health Organization Recognized", icon: "recognition" },
      { label: "ECFMG Listed", value: "International Medical Education Directory", icon: "recognition" },
      { label: "PMDC Approved", value: "Pakistan Medical & Dental Council Approved", icon: "recognition" },
      { label: "Location", value: "Central Asia — Bukhara, Uzbekistan", icon: "location" },
      { label: "Language of Instruction", value: "English Medium Only", icon: "language" },
      { label: "Program Offered", value: "MBBS — Medicine", icon: "other" },
      { label: "Partner University", value: "Bukhara State Medical Institute", icon: "other" },
      { label: "Annual Cost (All-In)", value: "Approx. $4,300 per year", icon: "fee" },
      { label: "Semesters Per Year", value: "2 Semesters", icon: "semesters" },
    ],
    fieldsOfStudy: ["Medicine (MBBS)"],
    feeTable: [
      { program: "Tuition Fee", duration: "Per semester", fee: "$1,600", notes: "Bukhara State Medical Institute" },
      { program: "Hostel / Accommodation", duration: "Per semester", fee: "$300", notes: "On-campus accommodation per semester" },
      { program: "Administration Charges", duration: "Per semester", fee: "$250", notes: "Per semester administrative fee" },
      { program: "TOTAL PER SEMESTER", duration: "", fee: "$2,150", notes: "All charges combined — no hidden fees", highlight: "total", isTotalRow: true },
    ],
    annualCostNote:
      "2 semesters per year × $2,150 per semester = approximately $4,300 per year — covering tuition, accommodation, and all administration charges. No hidden fees. For a WHO, ECFMG, and PMDC recognized English-medium medical degree, this is one of the most affordable complete packages available to Pakistani students anywhere in the world.",
    feeDisclaimer: undefined,
    highlightBlocks: [
      {
        type: "whoEcfmgPmdc",
        heading: "Why Recognition Matters — WHO, ECFMG & PMDC",
        body: "Bukhara State Medical Institute is recognized by the World Health Organization (WHO), listed in the ECFMG International Medical Education Directory, and approved by the Pakistan Medical & Dental Council (PMDC). This means Pakistani graduates can return to Pakistan and register as a doctor, are eligible to sit USMLE and PLAB, and their degree carries the same credibility as medical graduates from established destinations.",
        style: "green",
      },
    ],
    sections: {
      opening:
        "For Pakistani students with a clear goal of becoming a doctor, Uzbekistan offers something rare — a high-quality, fully English-medium MBBS program at a cost that is genuinely within reach. Bukhara State Medical Institute has established itself as a trusted destination for international students, combining strong academic standards, full WHO and PMDC recognition, and an affordable and transparent fee structure.",
      programsAndFees: {
        heading: "Program & Tuition Fees",
        body: "The MBBS program at Bukhara State Medical Institute is structured across semesters with a clear and transparent fee breakdown. Tuition is $1,600 per semester, accommodation is $300 per semester, and administration charges are $250 per semester — bringing the total to $2,150 per semester. With two semesters per year, the complete annual cost works out to approximately $4,300 — covering tuition, accommodation, and administration. For a WHO, ECFMG, and PMDC recognized English-medium medical degree, this represents exceptional value.",
      },
      language: {
        heading: "Fully English Medium — No Language Barrier",
        body: "One of the most important advantages of studying medicine in Uzbekistan through Teerma is that the entire MBBS program is delivered in English. Pakistani students can focus entirely on their medical studies from day one — without the additional challenge of learning a new language first.",
      },
      whyCountry: {
        heading: "Why Uzbekistan Works for Pakistani Students",
        body: "Uzbekistan sits in Central Asia and shares strong cultural and historical ties with Pakistan — making the transition to life there significantly easier than moving to a completely unfamiliar part of the world. The country is safe, the people are welcoming, and the cost of living is among the lowest of any study destination we work with. Combined with an English-medium program and a transparent all-in fee structure, Uzbekistan removes many of the barriers that make studying abroad feel overwhelming.",
      },
      studentLife: {
        heading: "Student Life in Bukhara",
        body: "Bukhara is one of Central Asia's most historically rich cities — a UNESCO World Heritage destination with a warm, welcoming community. Student life is focused, affordable, and genuinely comfortable. Pakistani students settle in quickly and find strong support from both the university and the local community.",
      },
      pageCta: {
        heading: "Ready to Explore Medicine in Uzbekistan?",
        body: "Our consultants have placed students at Bukhara State Medical Institute and know the process inside out. Book your consultation and we will guide you through admission, documentation, and everything you need to get started.",
        buttonText: "Book Your Consultation",
      },
    },
  },
];

/** All country IDs in display order (e.g. for homepage carousel). */
export const countryIds = ["uzbekistan", "china", "cyprus", "malaysia", "russia"] as const;

export type CountryId = (typeof countryIds)[number];

const countriesBySlug = new Map<string, CountryConfig>();
const countriesById = new Map<string, CountryConfig>();
countriesData.forEach((c) => {
  countriesBySlug.set(c.slug, c);
  countriesById.set(c.id, c);
});

/** Get country config by URL slug (e.g. "russia"). Returns null if not found. */
export function getCountryBySlug(slug: string): CountryConfig | null {
  return countriesBySlug.get(slug.toLowerCase()) ?? null;
}

/** Get country config by id. */
export function getCountryById(id: string): CountryConfig | null {
  return countriesById.get(id) ?? null;
}

/** List of country configs for homepage and sitemaps. */
export function getCountriesList(): CountryConfig[] {
  return countryIds.map((id) => countriesById.get(id)!).filter(Boolean);
}

/** All valid slugs for static params / 404 check. */
export function getCountrySlugs(): string[] {
  return countriesData.map((c) => c.slug);
}
