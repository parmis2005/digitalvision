import { useId } from "react";

type DigitalVisionLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  showMark?: boolean;
  showTagline?: boolean;
};

export function DigitalVisionLogo({
  className,
  size = "md",
  showMark = true,
  showTagline = true,
}: DigitalVisionLogoProps) {
  const reactId = useId().replace(/:/g, "");
  const rootClassName = [
    "dv-logo",
    `dv-logo--${size}`,
    showMark ? null : "dv-logo--text-only",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={rootClassName}>
      {showMark ? (
        <span className="dv-logo-mark" aria-hidden="true">
          <svg viewBox="0 0 112 112" role="presentation" focusable="false">
            <defs>
              <linearGradient
                id={`${reactId}-stroke-gradient`}
                x1="18"
                y1="18"
                x2="96"
                y2="96"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#3fe5ff" />
                <stop offset="56%" stopColor="#42a9ff" />
                <stop offset="100%" stopColor="#b86bff" />
              </linearGradient>
              <linearGradient
                id={`${reactId}-pixel-gradient`}
                x1="20"
                y1="20"
                x2="56"
                y2="72"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#46e6ff" />
                <stop offset="100%" stopColor="#8d5cff" />
              </linearGradient>
            </defs>
            <path
              d="M56 16h16c19.9 0 36 16.1 36 36s-16.1 36-36 36H56"
              fill="none"
              stroke={`url(#${reactId}-stroke-gradient)`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="11"
            />
            <path
              d="M46 40 62 73 86 40"
              fill="none"
              stroke={`url(#${reactId}-stroke-gradient)`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="11"
            />
            <rect x="26" y="28" width="10" height="10" fill={`url(#${reactId}-pixel-gradient)`} rx="1.6" />
            <rect x="18" y="44" width="14" height="14" fill={`url(#${reactId}-pixel-gradient)`} rx="2" />
            <rect x="36" y="40" width="12" height="12" fill={`url(#${reactId}-pixel-gradient)`} rx="1.8" />
            <rect x="30" y="60" width="11" height="11" fill={`url(#${reactId}-pixel-gradient)`} rx="1.8" />
            <rect x="46" y="54" width="13" height="13" fill={`url(#${reactId}-pixel-gradient)`} rx="2" />
            <rect x="34" y="82" width="8" height="8" fill={`url(#${reactId}-pixel-gradient)`} rx="1.4" />
          </svg>
        </span>
      ) : null}
      <span className="dv-logo-copy">
        <span className="dv-logo-wordmark">
          <span className="dv-logo-name">DIGITALVISION</span>
        </span>
        {showTagline ? (
          <span className="dv-logo-tagline">
            <span className="dv-logo-rule" />
            <span>DIGITALE LÖSUNGEN</span>
            <span className="dv-logo-rule" />
          </span>
        ) : null}
      </span>
    </span>
  );
}
