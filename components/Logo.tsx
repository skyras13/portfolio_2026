export function HexLogo() {
  return (
    <svg viewBox="0 0 44 44" fill="none" width="40" height="40" aria-hidden="true">
      <polygon
        className="sr-hex-outer"
        points="22,4 38,13 38,31 22,40 6,31 6,13"
        stroke="var(--accent)"
        strokeWidth="1.3"
        fill="none"
        opacity="0.45"
      />
      <polygon
        className="sr-hex-inner"
        points="22,9 34,16 34,28 22,35 10,28 10,16"
        stroke="var(--accent)"
        strokeWidth="1.3"
        fill="none"
        opacity="0.75"
      />
      <text
        x="22"
        y="26.5"
        textAnchor="middle"
        fontFamily="Space Grotesk"
        fontSize="13"
        fontWeight="700"
        fill="var(--accent)"
        letterSpacing="-0.5"
      >
        SR
      </text>
    </svg>
  );
}
