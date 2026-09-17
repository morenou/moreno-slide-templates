import { Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { PACK, SLIDE_H, SLIDE_W, SLIDES } from "@/lib/deck";
import { renderSlide } from "./registry";
import { downloadPptx, downloadZip } from "./export";

export function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-theater text-theater-fg">
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="size-2.5 shrink-0 bg-blue" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold tracking-tight">{PACK.name}</div>
            <div className="truncate text-xs text-theater-muted">{PACK.version}</div>
          </div>
        </div>
        <Link
          to="/deck"
          className="inline-flex h-11 items-center gap-2 bg-blue px-4 text-sm text-white hover:bg-brand"
        >
          Present
          <ArrowRight className="size-4" />
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:gap-16 md:px-8 md:py-16">
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-[0.16em] text-theater-muted">{PACK.version}</p>
          <h1 className="mt-3 max-w-xl text-4xl font-normal tracking-tight text-balance md:text-5xl">
            {PACK.name}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-theater-muted">
            {SLIDES.length} slides. Sample deck on Zonely. Sharp corners, Archivo, original dummy figures.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/deck"
              className="inline-flex h-11 items-center justify-center gap-2 bg-blue px-5 text-sm text-white hover:bg-brand"
            >
              Present deck
              <ArrowRight className="size-4" />
            </Link>
            <button
              type="button"
              onClick={() => void downloadPptx()}
              className="inline-flex h-11 items-center gap-2 border border-white/15 px-4 text-sm hover:bg-white/5"
            >
              <Download className="size-4" />
              PPTX
            </button>
            <button
              type="button"
              onClick={() => void downloadZip()}
              className="inline-flex h-11 items-center gap-2 border border-white/15 px-4 text-sm hover:bg-white/5"
            >
              ZIP
            </button>
          </div>
        </div>

        <Link
          to="/deck"
          aria-label="Open deck"
          className="relative w-full min-w-0 overflow-hidden border border-white/10 md:w-[min(100%,540px)]"
          style={{ aspectRatio: "16 / 9", containerType: "size" }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: SLIDE_W,
              height: SLIDE_H,
              transform: "scale(calc(100cqw / 1920))",
              transformOrigin: "top left",
              pointerEvents: "none",
            }}
          >
            {renderSlide("title")}
          </div>
        </Link>
      </main>
    </div>
  );
}
