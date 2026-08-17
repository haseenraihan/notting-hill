import type { DetailContent } from "@/components/shared/DetailDialog";

/* ------------------------------------------------------------------ */
/*  Visa services — detail content per region                          */
/* ------------------------------------------------------------------ */

export const regionDetails: Record<string, DetailContent> = {
  Europe: {
    eyebrow: "Visas by Region",
    title: "Europe",
    glyph: "🇪🇺",
    intro:
      "Schengen, Ireland, Switzerland and the UK. We prepare complete, embassy-ready applications with the financial evidence and itinerary documentation European missions expect.",
    facts: [
      { label: "Processing", value: "15–30 days" },
      { label: "From", value: "£500" },
      { label: "Success rate", value: "96%" },
      { label: "Validity", value: "Up to 5 years" },
      { label: "Biometrics", value: "Required" },
      { label: "Express", value: "Available" },
    ],
    sections: [
      {
        heading: "Countries we cover",
        items: [
          "Schengen Area — France, Spain, Italy, Germany, Greece, Netherlands, Portugal and 20 more",
          "Ireland — short-stay 'C' visitor and business visas",
          "Switzerland — Schengen short-stay and national 'D' visas",
          "United Kingdom — Standard Visitor, Family and Business visitor routes",
        ],
      },
      {
        heading: "What we handle",
        items: [
          "Cover letter, day-by-day itinerary and hotel confirmations",
          "Bank statement review and financial sponsorship letters",
          "VFS / TLScontact / BLS appointment booking at the earliest slot",
          "Schengen-compliant travel insurance (€30,000 medical cover)",
          "Employment, self-employment or student status evidence",
          "Full application review before submission",
        ],
      },
      {
        heading: "Typical fees",
        items: [
          "Schengen Tourist Visa — from £500",
          "UK Standard Visitor — from £1,250",
          "Ireland Short-Stay 'C' — from £600",
          "Family visit add-on documentation — from £150",
        ],
      },
    ],
    enquirySubject: "Europe Visa Services",
  },

  "North America": {
    eyebrow: "Visas by Region",
    title: "North America",
    glyph: "🇺🇸",
    intro:
      "USA B1/B2, ESTA, Canada visitor visas and eTA, plus Mexico entry permits. Interview coaching is included on every US application.",
    facts: [
      { label: "Processing", value: "2–8 weeks" },
      { label: "From", value: "£1,000" },
      { label: "Interview", value: "USA only" },
      { label: "Validity", value: "Up to 10 years" },
      { label: "Biometrics", value: "Required" },
      { label: "Refusals", value: "We reapply" },
    ],
    sections: [
      {
        heading: "Routes we process",
        items: [
          "USA B1/B2 visitor visa — business and tourism",
          "USA ESTA — visa waiver for eligible passports",
          "Canada Visitor Visa (TRV) and Super Visa for parents",
          "Canada eTA for visa-exempt nationals",
          "Mexico visitor permit and electronic authorisation",
        ],
      },
      {
        heading: "What we handle",
        items: [
          "DS-160 and IMM 5257 form completion, checked line by line",
          "Consular fee payment and interview slot hunting",
          "One-to-one mock interview with a former case handler",
          "Ties-to-home-country evidence pack",
          "Previous refusal analysis and rebuttal statements",
        ],
      },
      {
        heading: "Typical fees",
        items: [
          "USA B1/B2 Visa — from £1,000",
          "Canada Tourist Visa — from £2,000",
          "ESTA / eTA assistance — from £149",
        ],
      },
    ],
    enquirySubject: "North America Visa Services",
  },

  "Middle East": {
    eyebrow: "Visas by Region",
    title: "Middle East",
    glyph: "🕌",
    intro:
      "Fast-turnaround tourist, business and transit visas for the Gulf, plus Saudi Arabia entry for Umrah and leisure travel.",
    facts: [
      { label: "Processing", value: "3–7 days" },
      { label: "From", value: "£149" },
      { label: "Express", value: "24–48 hrs" },
      { label: "Validity", value: "30–90 days" },
      { label: "Biometrics", value: "Rarely" },
      { label: "Format", value: "e-Visa" },
    ],
    sections: [
      {
        heading: "Countries we cover",
        items: [
          "United Arab Emirates — 30 and 60 day tourist visas, multi-entry options",
          "Saudi Arabia — tourist e-Visa, Umrah entry and business visit",
          "Qatar, Oman, Bahrain and Kuwait — tourist and transit",
          "Turkey e-Visa — issued within 24 hours",
        ],
      },
      {
        heading: "What we handle",
        items: [
          "Sponsor and hotel documentation for Gulf entries",
          "Photograph and passport-scan compliance checks",
          "Same-week express processing where the authority allows",
          "Flight and hotel booking bundled with the visa if required",
          "Airport-to-hotel transfer arrangement on request",
        ],
      },
      {
        heading: "Typical fees",
        items: [
          "Dubai Tourist Visa — from £500",
          "Saudi Arabia Visa — from £149",
          "Turkey e-Visa — from £200",
          "Qatar / Oman / Bahrain — from £250",
        ],
      },
    ],
    enquirySubject: "Middle East Visa Services",
  },

  "Asia Pacific": {
    eyebrow: "Visas by Region",
    title: "Asia Pacific",
    glyph: "🌏",
    intro:
      "Electronic and stamped visitor visas across Australia, New Zealand, Singapore, Japan and China — each with its own documentary standard, all handled in-house.",
    facts: [
      { label: "Processing", value: "5–20 days" },
      { label: "From", value: "£400" },
      { label: "Validity", value: "Up to 12 months" },
      { label: "Biometrics", value: "Country dependent" },
      { label: "Express", value: "Selected routes" },
      { label: "Health check", value: "Sometimes" },
    ],
    sections: [
      {
        heading: "Countries we cover",
        items: [
          "Australia — Visitor visa subclass 600 and ETA",
          "New Zealand — NZeTA and Visitor Visa",
          "Singapore — e-Visa and business entry",
          "Japan — short-stay tourist and business visa",
          "China — L tourist and M business visa",
        ],
      },
      {
        heading: "What we handle",
        items: [
          "ImmiAccount and online portal submissions",
          "Health examination and police clearance guidance",
          "Invitation letters for business and family visits",
          "Detailed itinerary and accommodation schedules",
          "Application tracking with weekly status updates",
        ],
      },
      {
        heading: "Typical fees",
        items: [
          "Australia Visitor Visa — from £2,000",
          "New Zealand Visitor Visa — from £900",
          "Japan Short-Stay — from £450",
          "China Tourist Visa — from £400",
        ],
      },
    ],
    enquirySubject: "Asia Pacific Visa Services",
  },

  Africa: {
    eyebrow: "Visas by Region",
    title: "Africa",
    glyph: "🦁",
    intro:
      "Tourist and business visas for safari, cultural and trade travel across the continent, including the vaccination and yellow-fever paperwork most travellers overlook.",
    facts: [
      { label: "Processing", value: "5–15 days" },
      { label: "From", value: "£250" },
      { label: "Validity", value: "30–90 days" },
      { label: "e-Visa", value: "Most countries" },
      { label: "Vaccination", value: "Advisory included" },
      { label: "Express", value: "Available" },
    ],
    sections: [
      {
        heading: "Countries we cover",
        items: [
          "South Africa — tourist and business visitor visas",
          "Kenya and Tanzania — e-Visa and safari travel documentation",
          "Egypt — tourist visa and Nile cruise itineraries",
          "Morocco — visa assistance and guided tour packages",
          "Ethiopia, Ghana, Nigeria and Uganda on request",
        ],
      },
      {
        heading: "What we handle",
        items: [
          "e-Visa portal submission and fee payment",
          "Yellow fever certificate and health entry requirements",
          "Safari lodge confirmations accepted by immigration",
          "Business invitation letters and trade documentation",
          "Return flight and insurance evidence",
        ],
      },
      {
        heading: "Typical fees",
        items: [
          "Kenya / Tanzania e-Visa — from £250",
          "South Africa Visitor Visa — from £600",
          "Egypt Tourist Visa — from £250",
          "Morocco Visa Assistance — from £300",
        ],
      },
    ],
    enquirySubject: "Africa Visa Services",
  },

  "South America": {
    eyebrow: "Visas by Region",
    title: "South America",
    glyph: "🗺️",
    intro:
      "Tourist visas and travel documentation for Brazil, Argentina, Chile, Peru and Colombia, including multi-country routings across the continent.",
    facts: [
      { label: "Processing", value: "7–21 days" },
      { label: "From", value: "£350" },
      { label: "Validity", value: "90 days typical" },
      { label: "e-Visa", value: "Brazil, Chile" },
      { label: "Multi-country", value: "Supported" },
      { label: "Express", value: "On request" },
    ],
    sections: [
      {
        heading: "Countries we cover",
        items: [
          "Brazil — e-Visa for eligible nationalities",
          "Argentina — tourist authorisation and consular visa",
          "Chile — tourist entry and reciprocity documentation",
          "Peru — visitor visa and Machu Picchu permit support",
          "Colombia — tourist visa and entry requirements",
        ],
      },
      {
        heading: "What we handle",
        items: [
          "Consular appointment booking in London",
          "Certified translations of supporting documents",
          "Multi-country itinerary planning and transit checks",
          "Proof of onward travel and accommodation",
          "Travel insurance meeting local entry rules",
        ],
      },
      {
        heading: "Typical fees",
        items: [
          "Brazil e-Visa — from £350",
          "Argentina Tourist Visa — from £500",
          "Peru / Colombia — from £400",
        ],
      },
    ],
    enquirySubject: "South America Visa Services",
  },
};

/* ------------------------------------------------------------------ */
/*  Student visas — detail content per study destination               */
/* ------------------------------------------------------------------ */

export const studyDestinationDetails: Record<string, DetailContent> = {
  "United Kingdom": {
    eyebrow: "Study Destination",
    title: "United Kingdom",
    glyph: "🇬🇧",
    intro:
      "150+ partner universities from Russell Group to specialist arts institutions, with a two-year Graduate Route after you finish.",
    facts: [
      { label: "Intakes", value: "Sep 2026 / Jan 2027" },
      { label: "Tuition", value: "£12k–£38k / yr" },
      { label: "Living costs", value: "£1,136–£1,483 / mo" },
      { label: "Post-study", value: "2 years" },
      { label: "Work rights", value: "20 hrs / week" },
      { label: "Visa", value: "Student route" },
    ],
    sections: [
      {
        heading: "Why the UK",
        items: [
          "Three-year bachelor's and one-year master's degrees — lower total cost",
          "Graduate Route gives two years of unrestricted work (three for PhD)",
          "Dependants permitted on research and doctoral programmes",
          "English-taught throughout with globally recognised qualifications",
        ],
      },
      {
        heading: "What you need",
        items: [
          "CAS from a licensed student sponsor",
          "IELTS UKVI, PTE Academic or approved English waiver",
          "28 days of maintenance funds held in your account",
          "ATAS clearance for certain science and engineering courses",
          "Tuberculosis test certificate where applicable",
        ],
      },
      {
        heading: "How we help",
        items: [
          "Shortlist of 5–8 universities matched to your profile and budget",
          "Personal statement and reference coaching",
          "UCAS and direct application submission",
          "Student visa application, IHS payment and biometrics booking",
          "Accommodation, guardianship and airport pickup",
        ],
      },
    ],
    enquirySubject: "Study in the United Kingdom",
  },

  "United States": {
    eyebrow: "Study Destination",
    title: "United States",
    glyph: "🇺🇸",
    intro:
      "200+ partner institutions including Ivy League, top-50 research universities and community college transfer pathways, with OPT work authorisation after graduation.",
    facts: [
      { label: "Intakes", value: "Fall 2026 / Spring 2027" },
      { label: "Tuition", value: "$20k–$60k / yr" },
      { label: "Living costs", value: "$1,000–$2,200 / mo" },
      { label: "Post-study", value: "OPT 12–36 months" },
      { label: "Work rights", value: "On-campus 20 hrs" },
      { label: "Visa", value: "F-1" },
    ],
    sections: [
      {
        heading: "Why the USA",
        items: [
          "STEM graduates receive a 24-month OPT extension — 36 months total",
          "Flexible majors: declare or switch after your first year",
          "Largest scholarship and assistantship pool in the world",
          "Community college transfer route halves first-two-year costs",
        ],
      },
      {
        heading: "What you need",
        items: [
          "I-20 issued by a SEVP-certified school",
          "SEVIS fee payment and DS-160 form",
          "TOEFL, IELTS or Duolingo English Test scores",
          "SAT / GRE / GMAT where the programme requires it",
          "Proof of funds for the first academic year",
        ],
      },
      {
        heading: "How we help",
        items: [
          "University shortlisting across reach, match and safety schools",
          "Essay and Common App guidance",
          "Financial documentation prepared to consular standard",
          "F-1 interview coaching with mock sessions",
          "Housing, insurance and pre-departure briefing",
        ],
      },
    ],
    enquirySubject: "Study in the United States",
  },

  Canada: {
    eyebrow: "Study Destination",
    title: "Canada",
    glyph: "🇨🇦",
    intro:
      "80+ partner colleges and universities with the clearest route from graduation to permanent residency of any major study destination.",
    facts: [
      { label: "Intakes", value: "Sep 2026 / Jan 2027" },
      { label: "Tuition", value: "C$15k–C$35k / yr" },
      { label: "Living costs", value: "C$1,200–C$2,000 / mo" },
      { label: "Post-study", value: "PGWP up to 3 yrs" },
      { label: "Work rights", value: "24 hrs / week" },
      { label: "Visa", value: "Study permit" },
    ],
    sections: [
      {
        heading: "Why Canada",
        items: [
          "Post-Graduation Work Permit of up to three years",
          "Express Entry points for Canadian study and work experience",
          "Spousal open work permit on eligible graduate programmes",
          "Lower tuition than the USA with comparable outcomes",
        ],
      },
      {
        heading: "What you need",
        items: [
          "Provincial Attestation Letter (PAL) and letter of acceptance",
          "Guaranteed Investment Certificate for living costs",
          "IELTS Academic or equivalent English proof",
          "Medical examination from a panel physician",
          "Statement of purpose demonstrating study intent",
        ],
      },
      {
        heading: "How we help",
        items: [
          "College and university selection by province and PR pathway",
          "GIC and tuition payment setup",
          "Study permit application through the IRCC portal",
          "SDS and non-SDS route advice",
          "Arrival support, SIN application and settling in",
        ],
      },
    ],
    enquirySubject: "Study in Canada",
  },

  Australia: {
    eyebrow: "Study Destination",
    title: "Australia",
    glyph: "🇦🇺",
    intro:
      "60+ partner universities including the Group of Eight, with generous work rights during study and a strong graduate job market.",
    facts: [
      { label: "Intakes", value: "Feb 2027 / Jul 2027" },
      { label: "Tuition", value: "A$25k–A$50k / yr" },
      { label: "Living costs", value: "A$1,600 / mo" },
      { label: "Post-study", value: "2–4 years" },
      { label: "Work rights", value: "48 hrs / fortnight" },
      { label: "Visa", value: "Subclass 500" },
    ],
    sections: [
      {
        heading: "Why Australia",
        items: [
          "Temporary Graduate visa (subclass 485) for two to four years",
          "Regional study incentives add an extra year of work rights",
          "Seven universities in the global top 100",
          "High minimum wage makes part-time work genuinely worthwhile",
        ],
      },
      {
        heading: "What you need",
        items: [
          "Confirmation of Enrolment from a CRICOS-registered provider",
          "Genuine Student (GS) statement",
          "Overseas Student Health Cover for the full visa period",
          "IELTS, PTE or TOEFL at the required band",
          "Evidence of funds for tuition, living and travel",
        ],
      },
      {
        heading: "How we help",
        items: [
          "Course and campus selection including regional options",
          "Genuine Student statement drafting and review",
          "OSHC arrangement and subclass 500 lodgement",
          "Scholarship applications with partner universities",
          "Accommodation and arrival logistics",
        ],
      },
    ],
    enquirySubject: "Study in Australia",
  },

  Ireland: {
    eyebrow: "Study Destination",
    title: "Ireland",
    glyph: "🇮🇪",
    intro:
      "40+ partner institutions, English-medium teaching and an EU degree — with a Third Level Graduate Programme stay-back after you qualify.",
    facts: [
      { label: "Intakes", value: "Sep 2026 / Jan 2027" },
      { label: "Tuition", value: "€10k–€25k / yr" },
      { label: "Living costs", value: "€1,000–€1,500 / mo" },
      { label: "Post-study", value: "1–2 years" },
      { label: "Work rights", value: "20 hrs / week" },
      { label: "Visa", value: "Stamp 2" },
    ],
    sections: [
      {
        heading: "Why Ireland",
        items: [
          "EU-recognised qualifications in an English-speaking country",
          "European headquarters of Google, Meta, Pfizer, Intel and Apple",
          "Two-year stay-back for master's and doctoral graduates",
          "Compact, safe cities with strong student communities",
        ],
      },
      {
        heading: "What you need",
        items: [
          "Letter of acceptance and tuition fee payment",
          "Proof of €10,000 in living funds",
          "Private medical insurance for the year",
          "IELTS 6.0–6.5 or equivalent",
          "Statement of purpose and academic transcripts",
        ],
      },
      {
        heading: "How we help",
        items: [
          "Course selection across Trinity, UCD, UCC, NUIG and the TUs",
          "AVATS visa application preparation",
          "Financial and insurance documentation",
          "Scholarship and fee-reduction applications",
          "Accommodation search and Dublin arrival support",
        ],
      },
    ],
    enquirySubject: "Study in Ireland",
  },

  "New Zealand": {
    eyebrow: "Study Destination",
    title: "New Zealand",
    glyph: "🇳🇿",
    intro:
      "30+ partner universities in one of the safest, most welcoming study destinations in the world — all eight universities rank in the global top 500.",
    facts: [
      { label: "Intakes", value: "Feb 2027 / Jul 2027" },
      { label: "Tuition", value: "NZ$22k–NZ$40k / yr" },
      { label: "Living costs", value: "NZ$1,400 / mo" },
      { label: "Post-study", value: "Up to 3 years" },
      { label: "Work rights", value: "20 hrs / week" },
      { label: "Visa", value: "Fee Paying Student" },
    ],
    sections: [
      {
        heading: "Why New Zealand",
        items: [
          "Post-Study Work Visa of up to three years",
          "Every university ranked in the QS global top 500",
          "Partners can apply for an open work visa on eligible courses",
          "Outstanding quality of life and outdoor lifestyle",
        ],
      },
      {
        heading: "What you need",
        items: [
          "Offer of place from an NZQA-approved provider",
          "Proof of NZ$20,000 annual living funds",
          "Medical and chest X-ray certificates",
          "IELTS 6.0 or equivalent for degree entry",
          "Onward travel or guarantee of funds",
        ],
      },
      {
        heading: "How we help",
        items: [
          "Programme selection across all eight universities and Te Pūkenga",
          "Immigration NZ online application handling",
          "Financial evidence and medical scheduling",
          "Scholarship guidance for international students",
          "Accommodation and arrival support",
        ],
      },
    ],
    enquirySubject: "Study in New Zealand",
  },

  Germany: {
    eyebrow: "Study Destination",
    title: "Germany",
    glyph: "🇩🇪",
    intro:
      "50+ partner universities with little or no tuition at public institutions — the best value engineering and technology education in Europe.",
    facts: [
      { label: "Intakes", value: "Oct 2026 / Apr 2027" },
      { label: "Tuition", value: "€0–€1,500 / semester" },
      { label: "Blocked account", value: "€11,904" },
      { label: "Post-study", value: "18 months" },
      { label: "Work rights", value: "140 full days / yr" },
      { label: "Visa", value: "National 'D'" },
    ],
    sections: [
      {
        heading: "Why Germany",
        items: [
          "No tuition fees at most public universities, only a semester contribution",
          "18-month job-seeker residence permit after graduation",
          "Europe's largest economy with acute demand for engineers",
          "Growing range of fully English-taught master's programmes",
        ],
      },
      {
        heading: "What you need",
        items: [
          "Admission letter (Zulassungsbescheid) from a recognised university",
          "Blocked account with €11,904 for living costs",
          "APS certificate for certain nationalities",
          "German A1–B2 or IELTS depending on the programme language",
          "German health insurance enrolment",
        ],
      },
      {
        heading: "How we help",
        items: [
          "Uni-Assist and direct application submission",
          "Blocked account opening and insurance setup",
          "Document translation and certification",
          "National visa appointment booking and interview prep",
          "City registration (Anmeldung) and housing guidance",
        ],
      },
    ],
    enquirySubject: "Study in Germany",
  },

  Netherlands: {
    eyebrow: "Study Destination",
    title: "Netherlands",
    glyph: "🇳🇱",
    intro:
      "25+ partner universities offering more than 2,000 English-taught programmes, plus the one-year orientation visa for graduates.",
    facts: [
      { label: "Intakes", value: "Sep 2026 / Feb 2027" },
      { label: "Tuition", value: "€8k–€20k / yr" },
      { label: "Living costs", value: "€900–€1,400 / mo" },
      { label: "Post-study", value: "Orientation year" },
      { label: "Work rights", value: "16 hrs / week" },
      { label: "Visa", value: "MVV + residence" },
    ],
    sections: [
      {
        heading: "Why the Netherlands",
        items: [
          "One-year orientation visa (zoekjaar) to find work after graduating",
          "Problem-based learning with strong industry placements",
          "English spoken almost universally — no Dutch required",
          "Research universities and applied sciences universities to choose from",
        ],
      },
      {
        heading: "What you need",
        items: [
          "Admission through Studielink and the institution",
          "Proof of funds of roughly €14,000 for the year",
          "IELTS 6.0–6.5 or TOEFL equivalent",
          "Passport valid throughout the study period",
          "Dutch health insurance if you take on part-time work",
        ],
      },
      {
        heading: "How we help",
        items: [
          "Programme matching across research and applied universities",
          "Studielink registration and motivation letter review",
          "MVV and residence permit application via the university",
          "Housing search — the hardest part of studying in the Netherlands",
          "Bank account, BSN registration and arrival support",
        ],
      },
    ],
    enquirySubject: "Study in the Netherlands",
  },
};
