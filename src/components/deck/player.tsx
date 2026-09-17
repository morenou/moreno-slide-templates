import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode, type TouchEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Grid2x2,
  Home,
  Maximize,
  Minimize,
  StickyNote,
  X,
} from "lucide-react";
import { PACK, SLIDE_H, SLIDE_W, SLIDES } from "@/lib/deck";
import { renderSlide } from "./registry";
import { downloadPptx, downloadZip } from "./export";

export function Player() {
  const [index, setIndex] = useState(0);
  const [grid, setGrid] = useState(false);
  const [notes, setNotes] = useState(false);
  const [fs, setFs] = useState(false);
  const [scale, setScale] = useState(0.2);
  const frameRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const slide = SLIDES[index] ?? SLIDES[0];

  const go = useCallback((n: number) => {
    setIndex(() => Math.max(0, Math.min(SLIDES.length - 1, n)));
    setGrid(false);
  }, []);

  const jumpId = useCallback(
    (id: string) => {
      const i = SLIDES.findIndex((s) => s.id === id);
      if (i >= 0) go(i);
    },
    [go],
  );

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      const s = Math.min(r.width / SLIDE_W, r.height / SLIDE_H);
      setScale(s > 0 ? s : 0.2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [grid, notes, fs]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(SLIDES.length - 1);
      } else if (e.key === "g" || e.key === "G") {
        setGrid((v) => !v);
      } else if (e.key === "n" || e.key === "N") {
        setNotes((v) => !v);
      } else if (e.key === "f" || e.key === "F") {
        toggleFs();
      } else if (e.key === "Escape") {
        setGrid(false);
        setNotes(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  function toggleFs() {
    const root = document.documentElement;
    if (!document.fullscreenElement) {
      root.requestFullscreen?.().then(() => setFs(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setFs(false)).catch(() => {});
    }
  }

  function onTouchStart(e: TouchEvent) {
    touchX.current = e.changedTouches[0]?.clientX ?? null;
  }
  function onTouchEnd(e: TouchEvent) {
    const x = e.changedTouches[0]?.clientX;
    if (touchX.current == null || x == null) return;
    const dx = x - touchX.current;
    if (dx < -50) go(index + 1);
    if (dx > 50) go(index - 1);
    touchX.current = null;
  }

  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-x-hidden bg-theater text-theater-fg">
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            to="/"
            aria-label="Main page"
            title="Main page"
            className="flex size-11 shrink-0 items-center justify-center border border-transparent hover:border-white/15 hover:bg-white/5"
          >
            <Home className="size-4" />
          </Link>
          <span className="size-2.5 shrink-0 bg-blue" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold tracking-tight">{PACK.name}</div>
            <div className="truncate text-xs text-theater-muted">
              {PACK.version}
              <span className="mx-1.5 opacity-40">·</span>
              {slide.section}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <IconBtn label="Overview" onClick={() => setGrid((v) => !v)}>
            {grid ? <X className="size-4" /> : <Grid2x2 className="size-4" />}
          </IconBtn>
          <IconBtn label="Speaker notes" onClick={() => setNotes((v) => !v)}>
            <StickyNote className="size-4" />
          </IconBtn>
          <IconBtn label="Fullscreen" onClick={toggleFs}>
            {fs ? <Minimize className="size-4" /> : <Maximize className="size-4" />}
          </IconBtn>
          <IconBtn label="Download PPTX" onClick={() => void downloadPptx()}>
            <Download className="size-4" />
          </IconBtn>
        </div>
      </header>

      <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          {grid ? (
            <Overview current={index} onPick={go} />
          ) : (
            <div
              ref={frameRef}
              className="relative flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden p-3 md:p-6"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest("button, a")) return;
                const r = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width;
                if (x < 0.28) go(index - 1);
                else if (x > 0.72) go(index + 1);
              }}
            >
              <div
                className="relative max-w-full overflow-hidden"
                style={{
                  width: SLIDE_W * scale,
                  height: SLIDE_H * scale,
                  boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
                }}
              >
                <div
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                    pointerEvents: "auto",
                    position: "absolute",
                    left: 0,
                    top: 0,
                  }}
                >
                  {renderSlide(slide.id, jumpId)}
                </div>
              </div>
            </div>
          )}
        </div>

        {notes ? (
          <aside className="hidden w-[300px] shrink-0 flex-col overflow-auto border-l border-white/10 bg-black/30 p-5 md:flex">
            <div className="text-xs uppercase tracking-[0.14em] text-theater-muted">Speaker notes</div>
            <div className="mt-2 text-sm font-medium">{slide.label}</div>
            <p className="mt-4 text-sm leading-relaxed text-theater-muted">{slide.notes}</p>
            <div className="mt-6 border border-white/10 p-3 text-xs leading-relaxed text-theater-muted">
              <div className="font-medium text-theater-fg">This slide is code, not a screenshot.</div>
              <p className="mt-2">
                Edit <span className="text-theater-fg">{slide.file}</span> →{" "}
                <span className="text-theater-fg">{slide.component}</span>. Order and numbers live in{" "}
                <span className="text-theater-fg">src/lib/deck.ts</span>.
              </p>
            </div>
            <button
              type="button"
              onClick={() => void downloadZip()}
              className="mt-auto inline-flex h-11 items-center justify-center border border-white/15 px-3 text-sm hover:bg-white/5"
            >
              Download source + PPTX
            </button>
          </aside>
        ) : null}
      </div>

      <footer className="flex shrink-0 items-center gap-3 border-t border-white/10 px-3 py-3 md:px-6">
        <button
          type="button"
          className="flex size-11 shrink-0 items-center justify-center border border-white/15 hover:bg-white/5 disabled:opacity-30"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Previous"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          className="flex size-11 shrink-0 items-center justify-center border border-white/15 hover:bg-white/5 disabled:opacity-30"
          onClick={() => go(index + 1)}
          disabled={index === SLIDES.length - 1}
          aria-label="Next"
        >
          <ChevronRight className="size-5" />
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3 text-xs text-theater-muted">
            <span className="truncate">
              {slide.screen} · {slide.label}
            </span>
            <span className="tabular-nums">
              {index + 1} / {SLIDES.length}
            </span>
          </div>
          <div className="mt-2 flex gap-0.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={s.label}
                onClick={() => go(i)}
                className="h-1.5 min-w-0 flex-1"
                style={{
                  background: i === index ? "#2235DC" : i < index ? "#8b8b93" : "rgba(255,255,255,0.12)",
                }}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => void downloadPptx()}
          className="hidden h-11 shrink-0 items-center border border-white/15 px-4 text-sm hover:bg-white/5 md:inline-flex"
        >
          PPTX
        </button>
        <button
          type="button"
          onClick={() => void downloadZip()}
          className="hidden h-11 shrink-0 items-center border border-white/15 px-4 text-sm hover:bg-white/5 md:inline-flex"
        >
          ZIP
        </button>
      </footer>
    </div>
  );
}

function IconBtn({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex size-11 items-center justify-center border border-transparent hover:border-white/15 hover:bg-white/5"
    >
      {children}
    </button>
  );
}

function Overview({ current, onPick }: { current: number; onPick: (i: number) => void }) {
  return (
    <div className="min-h-0 flex-1 overflow-auto p-4 md:p-6">
      <div className="mb-4 text-sm text-theater-muted">All slides · click to present</div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            role="button"
            tabIndex={0}
            onClick={() => onPick(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onPick(i);
              }
            }}
            className="group w-full min-w-0 cursor-pointer text-left"
          >
            <div
              className="relative w-full overflow-hidden border"
              style={{
                aspectRatio: "16 / 9",
                containerType: "size",
                borderColor: i === current ? "#2235DC" : "rgba(255,255,255,0.12)",
              }}
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
                {renderSlide(s.id)}
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2 text-xs">
              <span className="tabular-nums text-theater-muted">{s.screen}</span>
              <span className="text-theater-fg">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
