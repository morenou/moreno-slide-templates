import type { ReactNode } from "react";
import { C } from "@/lib/deck";
import { Box, Footer, Hairline, Slide, type } from "./primitives";

function IconDisc({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: 88,
        height: 88,
        background: C.iconBg,
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

const st = {
  fill: "none",
  stroke: C.ink2,
  strokeWidth: 2.2,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

const Ico = {
  clock: (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <circle cx="18" cy="18" r="13" {...st} />
      <path d="M18 10v8l6 4" {...st} />
    </svg>
  ),
  cal: (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <rect x="7" y="9" width="22" height="20" rx="0" {...st} />
      <path d="M7 15h22M12 7v4M24 7v4" {...st} />
    </svg>
  ),
  people: (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <circle cx="13" cy="14" r="4" {...st} />
      <circle cx="23" cy="14" r="4" {...st} />
      <path d="M7 27c1.2-4 3.8-6 6-6s4.8 2 6 6M17 27c1.2-4 3.8-6 6-6s4.8 2 6 6" {...st} />
    </svg>
  ),
  puzzle: (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <path d="M14 11h-3v6h6v-3M22 25h3v-6h-6v3" {...st} />
      <path d="M16 16l4 4M20 16l-4 4" {...st} />
    </svg>
  ),
  bulb: (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <path d="M18 8a8 8 0 0 1 4 14c0 2-1 3-2 3h-4c-1 0-2-1-2-3a8 8 0 0 1 4-14z" {...st} />
      <path d="M16 27h4M17 30h2" {...st} />
    </svg>
  ),
  chat: (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <path d="M8 10h20v14H14l-6 5V10z" {...st} />
    </svg>
  ),
  megaphone: (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <path d="M8 16v4h4l10 6V10L12 16H8zM26 14v8" {...st} />
    </svg>
  ),
  pin: (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <path d="M18 8c4 0 8 3 8 8 0 7-8 14-8 14S10 23 10 16c0-5 4-8 8-8z" {...st} />
      <circle cx="18" cy="16" r="2.5" {...st} />
    </svg>
  ),
};

export function SlideSolution() {
  const cols = [
    {
      n: "01",
      t: "Timezone Synchronization",
      d: "Automatically adjust meeting times to fit all participants' local time zones.",
      icon: Ico.clock,
    },
    {
      n: "02",
      t: "Automated Scheduling",
      d: "Simplify the process of finding and booking meeting times with automated tools.",
      icon: Ico.cal,
    },
    {
      n: "03",
      t: "Collaboration Tools",
      d: "Enhance team collaboration with integrated tools that keep everyone connected.",
      icon: Ico.people,
    },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={72} y={72} w={1400}>
        <div style={{ ...type.h1, color: C.ink2 }}>Solutions</div>
      </Box>
      {cols.map((c, i) => (
        <Box key={c.n} x={72 + i * 610} y={280} w={560}>
          <IconDisc>{c.icon}</IconDisc>
          <Hairline x={0} y={140} w={560} color={C.ink2} />
          <div style={{ ...type.label, color: C.muted, marginTop: 168 }}>{c.n}</div>
          <div style={{ ...type.h3, color: C.ink2, marginTop: 16, fontWeight: 400 }}>{c.t}</div>
          <div style={{ ...type.bodySm, color: C.muted, marginTop: 20 }}>{c.d}</div>
        </Box>
      ))}
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideProduct() {
  const cards = [
    { t: "Timezone Management", d: "Effortlessly coordinate meetings across different time zones.", icon: Ico.clock },
    { t: "Automated Scheduling", d: "Let Zonely handle the scheduling, so you can focus on what matters.", icon: Ico.cal },
    { t: "Team Collaboration", d: "Keep your team in sync, no matter where they are in the world.", icon: Ico.people },
    { t: "Integration Support", d: "Seamlessly integrate with your existing tools and platforms.", icon: Ico.puzzle },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={72} y={56} w={1400}>
        <div style={{ ...type.h1, color: C.ink2 }}>Services</div>
      </Box>
      {cards.map((c, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        return (
          <Box key={c.t} x={72 + col * 920} y={220 + row * 360} w={860} h={320}>
            <IconDisc>{c.icon}</IconDisc>
            <div style={{ ...type.h3, color: C.ink2, marginTop: 28, fontWeight: 400 }}>{c.t}</div>
            <div style={{ ...type.body, color: C.muted, marginTop: 14, maxWidth: 720 }}>{c.d}</div>
          </Box>
        );
      })}
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideHow() {
  const steps = [
    { n: "01", t: "Identify", d: "Analyze your team's timezone challenges and scheduling needs." },
    { n: "02", t: "Strategize", d: "Develop a customized scheduling strategy to address these challenges." },
    { n: "03", t: "Implement", d: "Integrate Zonely into your workflow and start scheduling with ease." },
    { n: "04", t: "Optimize", d: "Continuously improve your scheduling process with Zonely's insights." },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={72} y={56} w={1400}>
        <div style={{ ...type.h1, color: C.ink2 }}>Process</div>
      </Box>
      {steps.map((s, i) => (
        <Box key={s.n} x={72 + i * 460} y={260} w={430}>
          <div
            style={{
              fontSize: 160,
              lineHeight: 0.85,
              fontWeight: 400,
              color: C.ink2,
              letterSpacing: "-0.06em",
            }}
          >
            {s.n}
          </div>
          <div style={{ ...type.h3, color: C.ink2, marginTop: 36, fontWeight: 400 }}>{s.t}</div>
          <div style={{ ...type.bodySm, color: C.muted, marginTop: 16 }}>{s.d}</div>
        </Box>
      ))}
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideTam() {
  const rows = [
    { v: "$100B", k: "Total Addressable Market" },
    { v: "$50B", k: "Serviceable Available Market" },
    { v: "$10B", k: "Serviceable Obtainable Market" },
    { v: "$5B", k: "Current Market Share" },
  ];
  return (
    <Slide bg={C.navy} fg={C.white}>
      <Box x={72} y={150} w={620}>
        <div style={{ ...type.h2, color: C.white }}>
          The TAM for our product is large and growing fast.
        </div>
      </Box>
      {rows.map((row, i) => {
        const y = 110 + i * 180;
        return (
          <div key={row.k}>
            <Hairline x={780} y={y} w={1068} color="rgba(255,255,255,0.35)" />
            <Box x={780} y={y + 16} w={1068}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 32 }}>
                <div style={{ ...type.statMd, color: C.white }}>{row.v}</div>
                <div style={{ ...type.body, color: C.white, opacity: 0.9, textAlign: "right" }}>{row.k}</div>
              </div>
            </Box>
          </div>
        );
      })}
      <Hairline x={780} y={110 + 4 * 180} w={1068} color="rgba(255,255,255,0.35)" />
      <Footer color={C.white} />
    </Slide>
  );
}

export function SlideCompetitive() {
  const cards = [
    { t: "Timezone Management", d: "Coordinate meetings across regions without the usual back-and-forth.", icon: Ico.clock },
    { t: "Team Collaboration", d: "Keep everyone aligned with shared availability and clear ownership.", icon: Ico.people },
    { t: "Integration Support", d: "Connect the calendars and tools your team already lives in.", icon: Ico.puzzle },
    { t: "Advanced Analytics", d: "See where time is lost and where meetings actually convert.", icon: Ico.bulb },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={72} y={56} w={1600}>
        <div style={{ ...type.h1, color: C.ink2 }}>Competitive landscape</div>
      </Box>
      {cards.map((c, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        return (
          <Box key={c.t} x={72 + col * 920} y={220 + row * 360} w={860}>
            <IconDisc>{c.icon}</IconDisc>
            <div style={{ ...type.h3, color: C.ink2, marginTop: 28, fontWeight: 400 }}>{c.t}</div>
            <div style={{ ...type.body, color: C.muted, marginTop: 14, maxWidth: 720 }}>{c.d}</div>
          </Box>
        );
      })}
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideUsp() {
  const items = [
    { n: "01", t: "Timezone Automation", d: "Meeting times convert themselves. Nobody does the math by hand." },
    { n: "02", t: "Seamless Integration", d: "Google, Outlook, Slack, Meet — already in the stack you use." },
    { n: "03", t: "User-Friendly Interface", d: "A scheduling surface that a new hire can run on day one." },
    { n: "04", t: "Dedicated Support", d: "A real team behind the product, not a ticket void." },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={72} y={56} w={1600}>
        <div style={{ ...type.h1, color: C.ink2 }}>Unique Selling Point</div>
      </Box>
      {items.map((it, i) => (
        <Box key={it.n} x={72 + i * 460} y={280} w={430}>
          <Hairline x={0} y={0} w={400} color={C.ink2} />
          <div style={{ ...type.label, color: C.muted, marginTop: 28 }}>{it.n}</div>
          <div style={{ ...type.h3, color: C.ink2, marginTop: 16, fontWeight: 400 }}>{it.t}</div>
          <div style={{ ...type.bodySm, color: C.muted, marginTop: 18 }}>{it.d}</div>
        </Box>
      ))}
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideDemo() {
  const items = [
    { n: "01", t: "Timezone Sync", d: "Drop in attendees. Local times resolve instantly." },
    { n: "02", t: "Availability", d: "Shared free/busy across every connected calendar." },
    { n: "03", t: "Smart Suggestions", d: "Overlap windows ranked by fairness, not whoever shouts." },
    { n: "04", t: "One-Click Scheduling", d: "Pick a slot. Invites go out. Rooms follow." },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={72} y={56} w={1600}>
        <div style={{ ...type.h1, color: C.ink2 }}>Product Demo</div>
      </Box>
      {items.map((it, i) => (
        <Box key={it.n} x={72 + i * 460} y={280} w={430}>
          <div
            style={{
              fontSize: 120,
              lineHeight: 0.9,
              fontWeight: 400,
              color: C.ink2,
              letterSpacing: "-0.06em",
            }}
          >
            {it.n}
          </div>
          <div style={{ ...type.h3, color: C.ink2, marginTop: 32, fontWeight: 400 }}>{it.t}</div>
          <div style={{ ...type.bodySm, color: C.muted, marginTop: 16 }}>{it.d}</div>
        </Box>
      ))}
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideGtm() {
  const items = [
    { n: "01", t: "Product Launch", d: "Beta cohort, public launch, and the first 100 paying teams." },
    { n: "02", t: "Market Expansion", d: "Move from startups into mid-market with admin and SSO." },
    { n: "03", t: "Partnerships", d: "Calendar vendors, HRIS, and co-selling with existing stacks." },
    { n: "04", t: "Global Scale", d: "Local data residency, more languages, round-the-clock coverage." },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={72} y={56} w={1600}>
        <div style={{ ...type.h1, color: C.ink2 }}>Go-to-market strategy</div>
      </Box>
      {items.map((it, i) => (
        <Box key={it.n} x={72 + i * 460} y={300} w={430}>
          <Hairline x={0} y={0} w={400} color={C.ink2} />
          <div style={{ ...type.label, color: C.muted, marginTop: 28 }}>{it.n}</div>
          <div style={{ ...type.h3, color: C.ink2, marginTop: 16, fontWeight: 400 }}>{it.t}</div>
          <div style={{ ...type.bodySm, color: C.muted, marginTop: 18 }}>{it.d}</div>
        </Box>
      ))}
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideMarketing() {
  const cards = [
    { t: "Content Marketing", d: "Playbooks, teardown threads, and timezone math people actually forward.", icon: Ico.chat },
    { t: "Partnerships", d: "Co-marketing with the tools already on the calendar stack.", icon: Ico.people },
    { t: "Paid Advertising", d: "Search and LinkedIn against “schedule across time zones.”", icon: Ico.megaphone },
    { t: "Events & Webinars", d: "Live overlap clinics for remote-first operators.", icon: Ico.pin },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={72} y={56} w={1600}>
        <div style={{ ...type.h1, color: C.ink2 }}>Marketing Channels</div>
      </Box>
      {cards.map((c, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        return (
          <Box key={c.t} x={72 + col * 920} y={220 + row * 360} w={860}>
            <IconDisc>{c.icon}</IconDisc>
            <div style={{ ...type.h3, color: C.ink2, marginTop: 28, fontWeight: 400 }}>{c.t}</div>
            <div style={{ ...type.body, color: C.muted, marginTop: 14, maxWidth: 720 }}>{c.d}</div>
          </Box>
        );
      })}
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideTeam() {
  const people = [
    { name: "Aiken", role: "Founder & CEO", img: "/portraits/kenji.jpg" },
    { name: "Dima", role: "Head of Product", img: "/portraits/marcus.jpg" },
    { name: "Anton", role: "Lead Engineer", img: "/portraits/priya.jpg" },
    { name: "Sasha", role: "Design", img: "/portraits/sarah.jpg" },
  ];
  return (
    <Slide bg={C.ink2} fg={C.white}>
      <Box x={72} y={48} w={1400}>
        <div style={{ ...type.h1, color: C.white }}>Team</div>
      </Box>
      {people.map((p, i) => (
        <Box key={p.name} x={72 + i * 460} y={180} w={430}>
          <img
            src={p.img}
            alt={p.name}
            width={430}
            height={560}
            style={{ width: 430, height: 560, objectFit: "cover", objectPosition: "center top", display: "block" }}
            crossOrigin="anonymous"
          />
          <div style={{ ...type.h3, marginTop: 20, color: C.white, fontWeight: 400 }}>{p.name}</div>
          <div style={{ ...type.bodySm, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>{p.role}</div>
        </Box>
      ))}
      <Footer color={C.white} />
    </Slide>
  );
}

export function SlideQuote() {
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={72} y={200} w={1000}>
        <div style={{ ...type.h2, color: C.ink2, fontStyle: "italic", fontWeight: 400 }}>
          “Zonely has completely transformed how we manage meetings across time
          zones. No more confusion or missed calls—just seamless scheduling!”
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 40 }}>
          <img
            src="/portraits/sarah.jpg"
            alt="Sarah Magie"
            width={64}
            height={64}
            style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 999 }}
            crossOrigin="anonymous"
          />
          <div>
            <div style={{ ...type.bodySm, color: C.ink2, fontWeight: 700 }}>Sarah Magie</div>
            <div style={{ ...type.bodySm, color: C.muted }}>Project Manager at GlobalTech</div>
          </div>
        </div>
      </Box>
      <Box x={1180} y={520} w={680}>
        <div style={{ ...type.stat, color: C.ink2, fontSize: 160 }}>
          50<span style={{ fontSize: 88 }}>%</span>
        </div>
        <div style={{ height: 1, width: 280, background: C.line, marginTop: 16 }} />
        <div style={{ ...type.bodySm, color: C.muted, marginTop: 16, maxWidth: 360 }}>
          Faster meeting setup time due to automation.
        </div>
      </Box>
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlidePricing() {
  const plans = [
    {
      name: "Personal",
      price: "$0",
      unit: "/user /mo",
      items: ["Timezone sync", "Up to 3 calendars", "Community support"],
      hl: false,
    },
    {
      name: "Teams",
      price: "$12",
      unit: "/user /mo",
      items: ["Overlap finder", "Smart invites", "Admin controls", "Slack + Meet"],
      hl: true,
    },
    {
      name: "Enterprise",
      price: "$48",
      unit: "/user /mo",
      items: ["SSO + SCIM", "Room sync", "Dedicated CSM", "Custom SLA"],
      hl: false,
    },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={72} y={48} w={1700}>
        <div style={{ ...type.h2, color: C.ink2 }}>
          You can start using Zonely for free
          <br />
          with Personal Plan
        </div>
      </Box>
      {plans.map((p, i) => (
        <Box key={p.name} x={72 + i * 610} y={280} w={580} h={620}>
          <div
            style={{
              height: "100%",
              background: p.hl ? C.blue : C.white,
              color: p.hl ? C.white : C.ink2,
              border: p.hl ? "none" : `1px solid ${C.line}`,
              padding: "40px 40px 36px",
            }}
          >
            <div style={{ ...type.label, opacity: 0.75 }}>{p.name}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 20 }}>
              <span style={{ ...type.statMd, color: "inherit" }}>{p.price}</span>
              <span style={{ ...type.bodySm, opacity: 0.7 }}>{p.unit}</span>
            </div>
            <div style={{ height: 1, background: p.hl ? "rgba(255,255,255,0.25)" : C.line, margin: "28px 0" }} />
            {p.items.map((it) => (
              <div key={it} style={{ ...type.body, marginBottom: 14, opacity: 0.92 }}>
                {it}
              </div>
            ))}
          </div>
        </Box>
      ))}
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideThanks() {
  return (
    <Slide bg={C.blue} fg={C.white}>
      <Box x={72} y={280} w={1700}>
        <div style={{ ...type.display, color: C.white }}>Let’s talk.</div>
      </Box>
      <Box x={72} y={720} w={1776}>
        <div style={{ display: "flex", gap: 0, ...type.body, color: C.white }}>
          <span>hello@zonely.com</span>
          <span style={{ opacity: 0.4, margin: "0 28px" }}>|</span>
          <span>www.zonely.com</span>
          <span style={{ opacity: 0.4, margin: "0 28px" }}>|</span>
          <span>+1 891 098 087</span>
        </div>
      </Box>
      <Footer color={C.white} />
    </Slide>
  );
}
