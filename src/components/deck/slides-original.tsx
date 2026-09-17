import { C } from "@/lib/deck";
import { Box, Footer, Hairline, Slide, type } from "./primitives";

export function SlideTitle() {
  return (
    <Slide bg={C.blue} fg={C.white}>
      <Box x={70} y={215} w={1350} h={340}>
        <div style={{ ...type.display, color: C.white }}>
          Schedule Meetings
          <br />
          Across Time Zones
          <br />
          With Confidence.
        </div>
      </Box>
      <Footer color={C.white} />
    </Slide>
  );
}

export function SlideToc({ onJump }: { onJump?: (id: string) => void }) {
  const rows = [
    { n: "01", t: "Problem and Solution", id: "challenges" },
    { n: "02", t: "Market Research", id: "market-bars" },
    { n: "03", t: "Product and Services", id: "product" },
    { n: "04", t: "Go to Market Strategy", id: "gtm" },
    { n: "05", t: "Financial Breakdown", id: "financials" },
    { n: "06", t: "Conclusion", id: "milestones" },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={70} y={90} w={520} h={200}>
        <div style={{ ...type.h1, color: C.ink2 }}>
          Table of
          <br />
          content
        </div>
      </Box>
      {rows.map((row, i) => {
        const lineY = 90 + i * 92;
        return (
          <div
            key={row.n}
            role="button"
            tabIndex={0}
            onClick={() => onJump?.(row.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onJump?.(row.id);
              }
            }}
            style={{
              position: "absolute",
              left: 710,
              top: lineY,
              width: 1140,
              height: 92,
              cursor: "pointer",
            }}
          >
            <Hairline x={0} y={0} w={1140} color={C.line} />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 18,
                width: 90,
                height: 50,
                ...type.label,
                color: C.muted,
                fontSize: 30,
              }}
            >
              {row.n}
            </div>
            <div
              style={{
                position: "absolute",
                left: 96,
                top: 18,
                width: 1000,
                height: 50,
                ...type.h3,
                color: C.ink2,
              }}
            >
              {row.t}
            </div>
          </div>
        );
      })}
      <Hairline x={710} y={90 + 6 * 92} w={1140} color={C.line} />
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideChallenges() {
  return (
    <Slide bg={C.slate} fg={C.white}>
      <Box x={70} y={80} w={1500} h={180}>
        <div style={{ ...type.h2, color: C.white }}>
          Identifying Challenges
          <br />
          and Delivering Solutions
        </div>
      </Box>
      <Box x={70} y={420} w={76} h={40}>
        <div style={{ ...type.label, color: C.white, fontSize: 30 }}>01</div>
      </Box>
      <Box x={150} y={418} w={800} h={50}>
        <div style={{ fontSize: 30, fontWeight: 400, color: C.white }}>The Problems</div>
      </Box>
      <Box x={150} y={486} w={900} h={230}>
        <div style={{ ...type.body, color: C.white, fontSize: 26, lineHeight: 1.7 }}>
          •&nbsp;&nbsp;Time zone confusion
          <br />
          •&nbsp;&nbsp;Manual processes
          <br />
          •&nbsp;&nbsp;Missed collaboration opportunities
        </div>
      </Box>
      <Footer color={C.white} />
    </Slide>
  );
}

export function SlideMarketBars() {
  const bars = [
    { h: 218.4, color: C.chart1, x: 650, top: 711.6 },
    { h: 374.4, color: C.chart2, x: 956, top: 555.6 },
    { h: 546, color: C.chart3, x: 1262, top: 384 },
    { h: 756.6, color: C.chart4, x: 1568, top: 173.4 },
  ];
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={70} y={90} w={520} h={320}>
        <div style={{ ...type.h2, color: C.ink2 }}>
          The market for our product is both expansive and rapidly expanding.
        </div>
      </Box>
      {bars.map((b) => (
        <div key={b.x}>
          <Box x={b.x} y={b.top - 58} w={270} h={44}>
            <div style={{ ...type.h3, color: C.ink2 }}>$XXMM</div>
          </Box>
          <div
            style={{
              position: "absolute",
              left: b.x,
              top: b.top,
              width: 270,
              height: b.h,
              background: b.color,
            }}
          />
        </div>
      ))}
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideFinancials() {
  const rows = [
    { k: "Revenue", v: "$500K", y: 110 },
    { k: "Expense", v: "68%", y: 260 },
    { k: "Profit", v: "$300K", y: 410 },
    { k: "Loss", v: "$100K", y: 560 },
  ];
  return (
    <Slide bg={C.navy} fg={C.white}>
      <Box x={70} y={150} w={600} h={320}>
        <div style={{ ...type.h2, color: C.white }}>
          The market for our product is large and growing fast.
        </div>
      </Box>
      {rows.map((row) => (
        <div key={row.k}>
          <Hairline x={780} y={row.y} w={1070} color={C.white} />
          <Box x={780} y={row.y} w={300} h={150} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: 22, color: C.white }}>{row.k}</div>
          </Box>
          <Box x={1050} y={row.y} w={800} h={150} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ ...type.stat, color: C.white }}>{row.v}</div>
          </Box>
        </div>
      ))}
      <Hairline x={780} y={710} w={1070} color={C.white} />
      <Footer color={C.white} />
    </Slide>
  );
}

export function SlideResults() {
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={70} y={90} w={1000} h={200}>
        <div style={{ ...type.h2, color: C.ink2 }}>
          Our results are a reflection of
          <br />
          tried and true processes.
        </div>
      </Box>
      <Box x={70} y={320} w={820} h={180}>
        <div style={{ ...type.bodySm, color: C.muted }}>
          Zonely specializes in advanced scheduling solutions for global teams,
          simplifying time zone coordination and optimizing remote collaboration.
          Netting $2.2m in annual revenue.
        </div>
      </Box>
      <Box x={70} y={720} w={400} h={120}>
        <div style={{ ...type.statMd, color: C.ink2 }}>
          80<span style={{ fontSize: 40 }}> %</span>
        </div>
      </Box>
      <Hairline x={70} y={860} w={340} color={C.line} />
      <Box x={70} y={876} w={340} h={90}>
        <div style={{ ...type.caption, color: C.muted }}>
          Reduction in scheduling conflicts for global teams.
        </div>
      </Box>
      <Box x={560} y={720} w={400} h={120}>
        <div style={{ ...type.statMd, color: C.ink2 }}>
          50<span style={{ fontSize: 40 }}> %</span>
        </div>
      </Box>
      <Hairline x={560} y={860} w={340} color={C.line} />
      <Box x={560} y={876} w={340} h={90}>
        <div style={{ ...type.caption, color: C.muted }}>Faster meeting setup time due to automation.</div>
      </Box>
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideMilestones() {
  const items = [
    {
      q: "Q1 2024",
      title: "Milestone One",
      body: "Product development and testing phase. Launch beta version.",
      color: C.dot1,
      y: 390,
      x: 90,
    },
    {
      q: "Q2 2024",
      title: "Milestone Two",
      body: "Full platform launch and customer acquisition.",
      color: C.dot2,
      y: 680,
      x: 536,
    },
    {
      q: "Q3 2024",
      title: "Milestone Three",
      body: "Expand partnerships with SaaS platforms and other scheduling tools.",
      color: C.dot3,
      y: 390,
      x: 982,
    },
    {
      q: "Q4 2024",
      title: "Milestone Four",
      body: "Implement advanced features and scale globally.",
      color: C.dot4,
      y: 680,
      x: 1428,
    },
  ];
  return (
    <Slide bg={C.stone} fg={C.white}>
      <Box x={70} y={70} w={900} h={190}>
        <div style={{ ...type.h2, color: C.white }}>
          Milestones on the
          <br />
          Path to Success
        </div>
      </Box>
      <Hairline x={90} y={640} w={1740} color={C.white} />
      {items.map((it) => (
        <div key={it.q}>
          <div
            style={{
              position: "absolute",
              left: it.x,
              top: 631,
              width: 20,
              height: 20,
              background: it.color,
              borderRadius: 999,
            }}
          />
          <Box x={it.x} y={it.y} w={280} h={26}>
            <div style={{ ...type.caption, color: C.white, fontSize: 16 }}>{it.q}</div>
          </Box>
          <Box x={it.x} y={it.y + 30} w={280} h={40}>
            <div style={{ fontSize: 26, fontWeight: 400, color: C.white }}>{it.title}</div>
          </Box>
          <Box x={it.x} y={it.y + 72} w={280} h={130}>
            <div style={{ ...type.caption, color: C.white }}>{it.body}</div>
          </Box>
        </div>
      ))}
      <Footer color={C.white} />
    </Slide>
  );
}

export function SlideTestimonial() {
  return (
    <Slide bg={C.paper} fg={C.ink2}>
      <Box x={70} y={90} w={1000} h={200}>
        <div style={{ ...type.h2, color: C.ink2 }}>
          Our results are a reflection of
          <br />
          tried and true processes.
        </div>
      </Box>
      <Box x={70} y={320} w={720} h={180}>
        <div style={{ ...type.bodySm, color: C.muted }}>
          Zonely specializes in advanced scheduling solutions for global teams,
          simplifying time zone coordination and optimizing remote collaboration.
          Netting $2.2m in annual revenue.
        </div>
      </Box>
      <Box x={70} y={720} w={400} h={120}>
        <div style={{ ...type.statMd, color: C.ink2 }}>
          80<span style={{ fontSize: 40 }}> %</span>
        </div>
      </Box>
      <Hairline x={70} y={860} w={340} color={C.line} />
      <Box x={70} y={876} w={340} h={90}>
        <div style={{ ...type.caption, color: C.muted }}>
          Reduction in scheduling conflicts for global teams.
        </div>
      </Box>
      <Box x={470} y={720} w={400} h={120}>
        <div style={{ ...type.statMd, color: C.ink2 }}>
          50<span style={{ fontSize: 40 }}> %</span>
        </div>
      </Box>
      <Hairline x={470} y={860} w={340} color={C.line} />
      <Box x={470} y={876} w={340} h={90}>
        <div style={{ ...type.caption, color: C.muted }}>Faster meeting setup time due to automation.</div>
      </Box>
      <Box x={900} y={720} w={470} h={150}>
        <div style={{ fontSize: 18, lineHeight: 1.45, color: C.ink2 }}>
          “Zonely has completely transformed how we manage meetings across time
          zones. No more confusion or missed calls—just seamless scheduling!”
        </div>
      </Box>
      <img
        src="/portraits/sarah.jpg"
        alt="Sarah Magie"
        width={46}
        height={46}
        crossOrigin="anonymous"
        style={{
          position: "absolute",
          left: 900,
          top: 900,
          width: 46,
          height: 46,
          objectFit: "cover",
          borderRadius: 999,
          background: C.iconBg,
        }}
      />
      <Box x={958} y={904} w={420} h={60}>
        <div style={{ fontSize: 18, fontWeight: 700, color: C.ink2 }}>Sarah Magie</div>
        <div style={{ fontSize: 15, color: C.muted }}>Project Manager at GlobalTech</div>
      </Box>
      <Footer color={C.ink2} />
    </Slide>
  );
}

export function SlideFree() {
  return (
    <Slide bg={C.blue} fg={C.white}>
      <div
        style={{
          position: "absolute",
          left: 70,
          top: 150,
          width: 120,
          height: 120,
          border: "3px solid #fff",
          borderRadius: 999,
        }}
      />
      <Box x={96} y={206} w={70} h={60}>
        <div style={{ fontSize: 40, fontWeight: 700, color: C.white, textAlign: "center" }}>:)</div>
      </Box>
      <Box x={70} y={540} w={1500} h={260}>
        <div style={{ ...type.display, color: C.white }}>
          You can use Zonely
          <br />
          for free
        </div>
      </Box>
      <Box x={74} y={800} w={1300} h={60}>
        <div style={{ ...type.body, color: C.white }}>
          Everyone can use Zonely for free with the Personal Plan.
        </div>
      </Box>
      <Footer color={C.white} />
    </Slide>
  );
}
