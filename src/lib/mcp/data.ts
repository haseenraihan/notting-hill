export type Service = {
  slug: string;
  name: string;
  category: "visa" | "program";
  path: string;
  summary: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "uk-visit-visa",
    name: "UK Visit Visa",
    category: "visa",
    path: "/uk-visa",
    summary:
      "End-to-end assistance for UK standard visitor visas: document checklist, financial evidence review, cover letter drafting, application submission and appointment booking.",
    highlights: [
      "Eligibility assessment and refusal-risk review",
      "Document checklist and sponsorship letters",
      "Online application form completion and biometrics appointment",
    ],
  },
  {
    slug: "student-visa",
    name: "Student Visa",
    category: "visa",
    path: "/student-visa",
    summary:
      "Study abroad guidance covering university shortlisting, admission applications, CAS/I-20 support and student visa filing for the UK, USA, Canada, Australia and Europe.",
    highlights: [
      "University and course selection",
      "Admission and scholarship applications",
      "Financial documentation and visa interview preparation",
    ],
  },
  {
    slug: "other-country-visas",
    name: "Other Country Visas",
    category: "visa",
    path: "/visa-services",
    summary:
      "Worldwide visa processing for tourist, business and family visit categories across Schengen, USA, Canada, Australia, Middle East and Asian destinations.",
    highlights: [
      "Schengen, USA, Canada, Australia and UAE visas",
      "Business and family visit applications",
      "Appointment booking and document attestation",
    ],
  },
  {
    slug: "hajj-umrah",
    name: "Hajj & Umrah",
    category: "visa",
    path: "/hajj-umrah",
    summary:
      "Sacred journey packages with visa processing, flights, Makkah and Madinah accommodation, ground transport and guided religious support.",
    highlights: [
      "Hajj and Umrah visa processing",
      "Hotels close to the Haram",
      "Guided groups and transport between holy sites",
    ],
  },
  {
    slug: "summer-schools",
    name: "Summer Schools",
    category: "program",
    path: "/summer-schools",
    summary:
      "ESL and academic summer programs in the UK and USA for young learners and teenagers, including accommodation, activities and airport transfers.",
    highlights: [
      "English language and academic enrichment courses",
      "Residential and homestay accommodation",
      "Excursions and supervised activity programs",
    ],
  },
  {
    slug: "travel-packages",
    name: "Travel Packages",
    category: "program",
    path: "/travel-packages",
    summary:
      "Curated worldwide holiday packages: honeymoons, family holidays, group tours and bespoke luxury itineraries built around your dates and budget.",
    highlights: [
      "Bespoke itineraries with flights and hotels",
      "Honeymoon, family and group travel",
      "24/7 support while you travel",
    ],
  },
];

export const companyInfo = {
  name: "Notting Hill Voyages",
  tagline: "Luxury travel experiences, visa services and study abroad guidance.",
  phone: "+44 7385 608 114",
  email: "info@nottinghillvoyages.com",
  location: "Sylhet, Bangladesh",
  consultationUrl: "https://calendly.com/nottinghillvoyages",
};
