import type { ReactNode } from "react";
import { SLIDES } from "@/lib/deck";
import { SlideChromeContext } from "./primitives";
import {
  SlideChallenges,
  SlideFinancials,
  SlideFree,
  SlideMarketBars,
  SlideMilestones,
  SlideResults,
  SlideTestimonial,
  SlideTitle,
  SlideToc,
} from "./slides-original";
import {
  SlideCompetitive,
  SlideDemo,
  SlideGtm,
  SlideHow,
  SlideMarketing,
  SlidePricing,
  SlideProduct,
  SlideQuote,
  SlideSolution,
  SlideTam,
  SlideTeam,
  SlideThanks,
  SlideUsp,
} from "./slides-extra";

function inner(id: string, onJump?: (id: string) => void): ReactNode {
  switch (id) {
    case "title":
      return <SlideTitle />;
    case "toc":
      return <SlideToc onJump={onJump} />;
    case "challenges":
      return <SlideChallenges />;
    case "solution":
      return <SlideSolution />;
    case "product":
      return <SlideProduct />;
    case "how":
      return <SlideHow />;
    case "market-bars":
      return <SlideMarketBars />;
    case "tam":
      return <SlideTam />;
    case "financials":
      return <SlideFinancials />;
    case "competitive":
      return <SlideCompetitive />;
    case "usp":
      return <SlideUsp />;
    case "demo":
      return <SlideDemo />;
    case "gtm":
      return <SlideGtm />;
    case "marketing":
      return <SlideMarketing />;
    case "results":
      return <SlideResults />;
    case "testimonial":
      return <SlideTestimonial />;
    case "team":
      return <SlideTeam />;
    case "milestones":
      return <SlideMilestones />;
    case "quote":
      return <SlideQuote />;
    case "pricing":
      return <SlidePricing />;
    case "free":
      return <SlideFree />;
    case "thanks":
      return <SlideThanks />;
    default:
      return <SlideTitle />;
  }
}

export function renderSlide(id: string, onJump?: (id: string) => void): ReactNode {
  const meta = SLIDES.find((s) => s.id === id);
  return (
    <SlideChromeContext.Provider value={{ screen: meta?.screen ?? "01" }}>
      {inner(id, onJump)}
    </SlideChromeContext.Provider>
  );
}

export { SLIDES };
