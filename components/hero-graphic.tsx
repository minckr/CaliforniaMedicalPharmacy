export default function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 360 360"
      width="100%"
      height="100%"
      aria-hidden="true"
      className="hero-graphic"
    >
      <circle cx="180" cy="180" r="150" fill="var(--paper-raised)" stroke="var(--line)" />

      <g transform="translate(180,180)">
        <g transform="rotate(0) translate(0,-38)">
          <rect x="-30" y="-46" width="60" height="88" rx="14" fill="var(--teal-700)" opacity="0.14" />
        </g>
        <g transform="rotate(90) translate(0,-38)">
          <rect x="-30" y="-46" width="60" height="88" rx="14" fill="var(--gold-500)" opacity="0.18" />
        </g>
        <g transform="rotate(180) translate(0,-38)">
          <rect x="-30" y="-46" width="60" height="88" rx="14" fill="var(--teal-500)" opacity="0.16" />
        </g>
        <g transform="rotate(270) translate(0,-38)">
          <rect x="-30" y="-46" width="60" height="88" rx="14" fill="var(--gold-700)" opacity="0.14" />
        </g>

        <g transform="rotate(0)">
          <path d="M 0 -3 Q -13 -15 0 -34 Q 13 -15 0 -3 Z" fill="var(--teal-700)" />
        </g>
        <g transform="rotate(90)">
          <path d="M 0 -3 Q -13 -15 0 -34 Q 13 -15 0 -3 Z" fill="var(--gold-500)" />
        </g>
        <g transform="rotate(180)">
          <path d="M 0 -3 Q -13 -15 0 -34 Q 13 -15 0 -3 Z" fill="var(--teal-500)" />
        </g>
        <g transform="rotate(270)">
          <path d="M 0 -3 Q -13 -15 0 -34 Q 13 -15 0 -3 Z" fill="var(--gold-700)" />
        </g>
        <circle cx="0" cy="0" r="7" fill="var(--ink)" />
      </g>
    </svg>
  );
}
