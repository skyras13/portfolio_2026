import type { FeaturedKind } from "@/lib/content";

function CruzVis() {
  const nodes: ReadonlyArray<[number, number, string]> = [
    [120, 30, "LLM"],
    [50, 90, "MCP"],
    [190, 90, "VEC"],
    [120, 100, "TS"],
    [50, 160, "NET"],
    [190, 160, "API"],
    [120, 180, "UI"],
  ];
  return (
    <svg className="cruz-vis" viewBox="0 0 240 200" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="cruzGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g stroke="var(--accent)" strokeWidth="0.6" opacity="0.35">
        <line x1="120" y1="30" x2="50" y2="90">
          <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="120" y1="30" x2="190" y2="90">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="120" y1="30" x2="120" y2="100" />
        <line x1="50" y1="90" x2="50" y2="160">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="190" y1="90" x2="190" y2="160">
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="120" y1="100" x2="50" y2="160" />
        <line x1="120" y1="100" x2="190" y2="160" />
        <line x1="50" y1="160" x2="120" y2="180" />
        <line x1="190" y1="160" x2="120" y2="180" />
      </g>
      {nodes.map(([x, y, l]) => (
        <g key={l}>
          <circle cx={x} cy={y} r="18" fill="url(#cruzGlow)" opacity="0.4" />
          <circle cx={x} cy={y} r="10" fill="var(--bg-2)" stroke="var(--accent)" strokeWidth="1" />
          <text x={x} y={y + 3} textAnchor="middle" fontSize="7" fill="var(--accent)" fontFamily="JetBrains Mono">
            {l}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function FeaturedVisual({ kind }: { kind: FeaturedKind }) {
  if (kind === "tether") {
    return (
      <div className="fv fv-tether">
        <div className="fv-journal">
          <div className="fv-page fv-page-a">
            <div className="fv-date">MON 04.23</div>
            <div className="fv-prompt">What surprised you today?</div>
            <div className="fv-scribble">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="fv-spine"></div>
          <div className="fv-page fv-page-b">
            <div className="fv-date">MON 04.23</div>
            <div className="fv-prompt">What surprised you today?</div>
            <div className="fv-scribble">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="fv-lock">unlocked together</div>
      </div>
    );
  }
  if (kind === "clear") {
    return (
      <div className="fv fv-clear">
        <div className="fv-report">
          <div className="fv-report-head">
            <div className="fv-chip">LIC 624</div>
            <div className="fv-status">
              <span className="fv-dot"></span>reviewing
            </div>
          </div>
          <div className="fv-lines">
            <div className="fv-line w1"></div>
            <div className="fv-line w2 flagged">
              <span className="fv-flag">liability phrasing</span>
            </div>
            <div className="fv-line w3"></div>
            <div className="fv-line w2"></div>
          </div>
          <div className="fv-meta">
            <span>AI review</span>
            <span className="fv-ok">✓ ready to submit</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="fv fv-cruz">
      <CruzVis />
    </div>
  );
}
