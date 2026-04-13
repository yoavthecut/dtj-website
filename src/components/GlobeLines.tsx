"use client";

// All coordinates tuned to the Spline Earth scene (globe center ~55%,52%)
// Israel sits at roughly 62%, 50% on the visible globe face
const ISRAEL = { x: 62, y: 50 };

const routes = [
  // New York
  { id: "ny",  from: { x: 36, y: 47 }, mid: { x: 49, y: 36 }, dur: "5s",   delay: "0s"   },
  // Los Angeles
  { id: "la",  from: { x: 30, y: 50 }, mid: { x: 45, y: 34 }, dur: "6s",   delay: "1.2s" },
  // London
  { id: "lon", from: { x: 53, y: 39 }, mid: { x: 58, y: 36 }, dur: "4s",   delay: "0.5s" },
  // Moscow
  { id: "mos", from: { x: 61, y: 33 }, mid: { x: 62, y: 40 }, dur: "3.5s", delay: "0.3s" },
  // São Paulo
  { id: "sp",  from: { x: 38, y: 67 }, mid: { x: 51, y: 55 }, dur: "6.5s", delay: "1.8s" },
  // Lagos
  { id: "lag", from: { x: 51, y: 59 }, mid: { x: 57, y: 53 }, dur: "4.5s", delay: "0.9s" },
  // Buenos Aires
  { id: "bue", from: { x: 35, y: 72 }, mid: { x: 48, y: 58 }, dur: "7s",   delay: "2.2s" },
  // Tokyo
  { id: "tok", from: { x: 78, y: 42 }, mid: { x: 70, y: 36 }, dur: "5.5s", delay: "1.5s" },
];

const ORANGE = "#F59E0B";

export default function GlobeLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <style>{`
        @keyframes flowLine {
          from { stroke-dashoffset: 30; }
          to   { stroke-dashoffset: -30; }
        }
      `}</style>

      {routes.map((r) => {
        const d = `M ${r.from.x} ${r.from.y} Q ${r.mid.x} ${r.mid.y} ${ISRAEL.x} ${ISRAEL.y}`;
        return (
          <g key={r.id}>
            {/* soft glow trail */}
            <path d={d} fill="none" stroke={ORANGE} strokeWidth="0.45" opacity="0.15" filter="url(#glow)" strokeLinecap="round" />
            {/* animated dashes flowing toward Israel */}
            <path
              d={d}
              fill="none"
              stroke={ORANGE}
              strokeWidth="0.2"
              strokeLinecap="round"
              strokeDasharray="2 8"
              opacity="0.9"
              style={{ animation: `flowLine ${r.dur} linear infinite`, animationDelay: r.delay }}
            />
            {/* origin dot */}
            <circle cx={r.from.x} cy={r.from.y} r="0.3" fill={ORANGE} opacity="0.8" />
          </g>
        );
      })}

      {/* Israel — pulsing gold destination */}
      <circle cx={ISRAEL.x} cy={ISRAEL.y} r="0.5" fill={ORANGE} opacity="1" filter="url(#glow)" />
      <circle cx={ISRAEL.x} cy={ISRAEL.y} r="0.5" fill="none" stroke={ORANGE} strokeWidth="0.18">
        <animate attributeName="r"       values="0.5;2.8"  dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0"    dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx={ISRAEL.x} cy={ISRAEL.y} r="0.5" fill="none" stroke={ORANGE} strokeWidth="0.12">
        <animate attributeName="r"       values="0.5;2.8"  dur="2.5s" begin="1.25s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0"    dur="2.5s" begin="1.25s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
