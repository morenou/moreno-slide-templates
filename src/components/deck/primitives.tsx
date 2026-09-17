import { createContext, useContext, type CSSProperties, type ReactNode } from "react";
import { BRAND, C, DATE_LABEL, SLIDE_H, SLIDE_W } from "@/lib/deck";

export const SlideChromeContext = createContext({ screen: "01" });

export function Slide({
  bg,
  fg = C.white,
  children,
}: {
  bg: string;
  fg?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="deck-stage"
      style={{
        width: SLIDE_W,
        height: SLIDE_H,
        background: bg,
        color: fg,
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-deck)",
      }}
    >
      {children}
    </div>
  );
}

export function Footer({ color, screen }: { color: string; screen?: string }) {
  const ctx = useContext(SlideChromeContext);
  const n = screen ?? ctx.screen;
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: 70,
          top: 1016,
          width: 14,
          height: 14,
          background: color,
          borderRadius: 999,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 92,
          top: 1010,
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: "26px",
          color,
        }}
      >
        {BRAND}
      </div>
      <div
        style={{
          position: "absolute",
          left: 1420,
          top: 1010,
          width: 430,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: "26px",
          color,
          textAlign: "right",
        }}
      >
        {n}
        <span style={{ display: "inline-block", width: 36 }} />
        {DATE_LABEL}
      </div>
    </>
  );
}

export function Box({
  x,
  y,
  w,
  h,
  style,
  children,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export const type = {
  display: {
    fontSize: 96,
    lineHeight: 1.12,
    fontWeight: 400,
    letterSpacing: "-0.03em",
  } as CSSProperties,
  h1: {
    fontSize: 60,
    lineHeight: 1.12,
    fontWeight: 400,
    letterSpacing: "-0.03em",
  } as CSSProperties,
  h2: {
    fontSize: 56,
    lineHeight: 1.14,
    fontWeight: 400,
    letterSpacing: "-0.03em",
  } as CSSProperties,
  h3: {
    fontSize: 34,
    lineHeight: 1.2,
    fontWeight: 400,
    letterSpacing: "-0.02em",
  } as CSSProperties,
  body: {
    fontSize: 26,
    lineHeight: 1.45,
    fontWeight: 400,
  } as CSSProperties,
  bodySm: {
    fontSize: 24,
    lineHeight: 1.45,
    fontWeight: 400,
  } as CSSProperties,
  label: {
    fontSize: 30,
    lineHeight: 1.2,
    fontWeight: 400,
  } as CSSProperties,
  caption: {
    fontSize: 16,
    lineHeight: 1.4,
    fontWeight: 400,
  } as CSSProperties,
  stat: {
    fontSize: 104,
    lineHeight: 0.92,
    fontWeight: 400,
    letterSpacing: "-0.04em",
    fontVariantNumeric: "tabular-nums",
  } as CSSProperties,
  statMd: {
    fontSize: 96,
    lineHeight: 0.92,
    fontWeight: 400,
    letterSpacing: "-0.04em",
    fontVariantNumeric: "tabular-nums",
  } as CSSProperties,
};

export function Hairline({
  x,
  y,
  w,
  color = C.line,
  h = 2,
}: {
  x: number;
  y: number;
  w: number;
  color?: string;
  h?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        background: color,
      }}
    />
  );
}
