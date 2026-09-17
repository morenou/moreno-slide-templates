export const SLIDE_W = 1920;
export const SLIDE_H = 1080;

export const C = {
  blue: "#2235DC",
  navy: "#011081",
  slate: "#59607A",
  stone: "#444346",
  cream: "#F7F4E9",
  paper: "#FAFAFA",
  ink: "#16181C",
  ink2: "#111114",
  muted: "#6E6E76",
  line: "#E4E4E7",
  red: "#E02B1D",
  dark: "#3A3D45",
  brand: "#1B3FCC",
  white: "#FFFFFF",
  chart1: "#424242",
  chart2: "#3B4560",
  chart3: "#2833B8",
  chart4: "#011081",
  dot1: "#F2A6C4",
  dot2: "#C7DA5B",
  dot3: "#F2CE3E",
  dot4: "#F0602F",
  teal: "#4BACC6",
  green: "#9BBB59",
  purple: "#8064A2",
  orange: "#F79646",
  rust: "#C0504D",
  iconBg: "#ECECEF",
} as const;

export type SlideMeta = {
  id: string;
  label: string;
  screen: string;
  section: string;
  notes: string;
  file: string;
  component: string;
};

export const SLIDES: SlideMeta[] = [
  { id: "title", label: "Title", screen: "01", section: "Cover", notes: "Open on the promise. Pause after the line.", file: "slides-original.tsx", component: "SlideTitle" },
  { id: "toc", label: "Table of content", screen: "02", section: "Cover", notes: "Six chapters. Click a row to jump.", file: "slides-original.tsx", component: "SlideToc" },
  { id: "challenges", label: "Identifying Challenges", screen: "03", section: "Problem and Solution", notes: "Three pains. Hold for the nod.", file: "slides-original.tsx", component: "SlideChallenges" },
  { id: "solution", label: "Solutions", screen: "04", section: "Problem and Solution", notes: "01 Sync. 02 Automate. 03 Collaborate.", file: "slides-extra.tsx", component: "SlideSolution" },
  { id: "product", label: "Services", screen: "05", section: "Product and Services", notes: "Four services with icons.", file: "slides-extra.tsx", component: "SlideProduct" },
  { id: "how", label: "Process", screen: "06", section: "Product and Services", notes: "Identify, strategize, implement, optimize.", file: "slides-extra.tsx", component: "SlideHow" },
  { id: "market-bars", label: "Market Expansion", screen: "07", section: "Market Research", notes: "Keep the dummy $XXMM labels. Four rising bars.", file: "slides-original.tsx", component: "SlideMarketBars" },
  { id: "tam", label: "TAM", screen: "08", section: "Market Research", notes: "$100B / $50B / $10B / $5B dummy TAM stack.", file: "slides-extra.tsx", component: "SlideTam" },
  { id: "financials", label: "Financial Snapshot", screen: "09", section: "Market Research", notes: "Revenue $500K. Expense 68%. Profit $300K. Loss $100K.", file: "slides-original.tsx", component: "SlideFinancials" },
  { id: "competitive", label: "Competitive landscape", screen: "10", section: "Market Research", notes: "Four capability tiles.", file: "slides-extra.tsx", component: "SlideCompetitive" },
  { id: "usp", label: "Unique Selling Point", screen: "11", section: "Product and Services", notes: "Four USPs, numbered.", file: "slides-extra.tsx", component: "SlideUsp" },
  { id: "demo", label: "Product Demo", screen: "12", section: "Product and Services", notes: "Timezone sync → one-click scheduling.", file: "slides-extra.tsx", component: "SlideDemo" },
  { id: "gtm", label: "Go-to-market", screen: "13", section: "Go to Market Strategy", notes: "Launch, expand, partner, scale.", file: "slides-extra.tsx", component: "SlideGtm" },
  { id: "marketing", label: "Marketing Channels", screen: "14", section: "Go to Market Strategy", notes: "Content, partnerships, paid, events.", file: "slides-extra.tsx", component: "SlideMarketing" },
  { id: "results", label: "Results", screen: "15", section: "Financial Breakdown", notes: "80% fewer conflicts. 50% faster setup. $2.2m revenue.", file: "slides-original.tsx", component: "SlideResults" },
  { id: "testimonial", label: "Results + Voice", screen: "16", section: "Financial Breakdown", notes: "Sarah Magie, GlobalTech. Let the quote land.", file: "slides-original.tsx", component: "SlideTestimonial" },
  { id: "team", label: "Team", screen: "17", section: "Conclusion", notes: "Aiken, Dima, Anton, Sasha — dummy names from the source deck.", file: "slides-extra.tsx", component: "SlideTeam" },
  { id: "milestones", label: "Milestones", screen: "18", section: "Conclusion", notes: "Q1 beta. Q2 launch. Q3 partnerships. Q4 global scale.", file: "slides-original.tsx", component: "SlideMilestones" },
  { id: "quote", label: "Quote", screen: "19", section: "Financial Breakdown", notes: "Quote left, 50% right.", file: "slides-extra.tsx", component: "SlideQuote" },
  { id: "pricing", label: "Pricing", screen: "20", section: "Conclusion", notes: "Personal $0. Teams $12. Enterprise $48.", file: "slides-extra.tsx", component: "SlidePricing" },
  { id: "free", label: "Use Zonely Free", screen: "21", section: "Conclusion", notes: "Personal plan is free.", file: "slides-original.tsx", component: "SlideFree" },
  { id: "thanks", label: "Let's talk", screen: "22", section: "Conclusion", notes: "hello@zonely.com · www.zonely.com · +1 891 098 087", file: "slides-extra.tsx", component: "SlideThanks" },
];

export const DATE_LABEL = "August 2024";
export const BRAND = "zonely";

export const PACK = {
  name: "Moreno Slide Templates",
  version: "v_0_21",
  fileBase: "moreno-slidetemplate-v_0_21",
} as const;
