"use client";

interface ShoeIllustrationProps {
  category: string;
  className?: string;
}

export default function ShoeIllustration({ category, className = "" }: ShoeIllustrationProps) {
  const common = `${className}`;

  switch (category) {
    case "topuklu":
      return (
        <svg viewBox="0 0 200 160" fill="none" className={common}>
          {/* High heel shoe */}
          <path
            d="M30 120 C30 120 35 70 55 55 C70 44 90 42 110 45 C130 48 150 55 165 60 L170 65 L175 70 C175 70 172 80 165 82 L90 95 L85 120 Z"
            fill="white"
            fillOpacity="0.15"
          />
          <path
            d="M30 120 C30 120 35 70 55 55 C70 44 90 42 110 45 C130 48 150 55 165 60 L170 65 L175 70 C175 70 172 80 165 82 L90 95 L85 120"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Heel */}
          <path
            d="M35 120 L30 120 L42 75 L48 78 Z"
            fill="white"
            fillOpacity="0.15"
            stroke="white"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          {/* Sole line */}
          <line x1="30" y1="121" x2="85" y2="121" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
          {/* Strap detail */}
          <path
            d="M95 60 C95 50 105 46 115 50"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      );

    case "sneaker":
      return (
        <svg viewBox="0 0 200 160" fill="none" className={common}>
          {/* Sneaker body */}
          <path
            d="M25 105 L25 85 C25 85 30 60 55 55 C70 52 85 53 100 55 L140 60 C155 62 170 70 175 80 L178 90 C178 95 175 100 170 102 L165 105 Z"
            fill="currentColor"
            fillOpacity="0.12"
          />
          <path
            d="M25 105 L25 85 C25 85 30 60 55 55 C70 52 85 53 100 55 L140 60 C155 62 170 70 175 80 L178 90 C178 95 175 100 170 102 L165 105"
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Sole */}
          <path
            d="M22 105 L168 105 C172 105 175 108 175 112 L175 115 C175 118 172 120 168 120 L22 120 C18 120 15 118 15 115 L15 112 C15 108 18 105 22 105 Z"
            fill="currentColor"
            fillOpacity="0.1"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          {/* Lace holes */}
          <circle cx="70" cy="65" r="2" fill="currentColor" fillOpacity="0.2" />
          <circle cx="85" cy="63" r="2" fill="currentColor" fillOpacity="0.2" />
          <circle cx="100" cy="62" r="2" fill="currentColor" fillOpacity="0.2" />
          {/* Swoosh detail */}
          <path
            d="M45 90 C65 75 100 72 155 85"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Tongue */}
          <path
            d="M55 55 C50 42 55 32 65 30 C75 28 80 35 78 48"
            stroke="currentColor"
            strokeOpacity="0.15"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      );

    case "gunluk":
      return (
        <svg viewBox="0 0 200 160" fill="none" className={common}>
          {/* Loafer / casual shoe */}
          <path
            d="M30 105 C30 105 30 80 40 70 C50 60 65 55 85 53 C105 51 130 53 150 58 C165 62 175 72 178 85 L180 95 C180 100 177 104 172 105 Z"
            fill="white"
            fillOpacity="0.13"
          />
          <path
            d="M30 105 C30 105 30 80 40 70 C50 60 65 55 85 53 C105 51 130 53 150 58 C165 62 175 72 178 85 L180 95 C180 100 177 104 172 105"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Sole */}
          <path
            d="M28 106 L174 106 L176 112 C176 116 173 118 170 118 L28 118 C24 118 22 116 22 112 L24 106 Z"
            fill="white"
            fillOpacity="0.08"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
          {/* Stitching */}
          <path
            d="M55 72 C70 65 100 62 140 68"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="1"
            strokeDasharray="4 3"
            fill="none"
          />
          {/* Collar */}
          <path
            d="M45 75 C55 68 70 65 85 67"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      );

    case "bagcik":
      return (
        <svg viewBox="0 0 200 160" fill="none" className={common}>
          {/* Lace / accessory display */}
          {/* Left aglet */}
          <rect x="40" y="45" width="8" height="20" rx="3" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
          {/* Right aglet */}
          <rect x="152" y="45" width="8" height="20" rx="3" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
          {/* Lace curve */}
          <path
            d="M44 65 C44 100 70 120 100 120 C130 120 156 100 156 65"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Bow */}
          <ellipse cx="85" cy="90" rx="18" ry="10" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="1" transform="rotate(-20 85 90)" />
          <ellipse cx="115" cy="90" rx="18" ry="10" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="1" transform="rotate(20 115 90)" />
          <circle cx="100" cy="88" r="4" fill="white" fillOpacity="0.25" />
          {/* Decorative dots */}
          <circle cx="65" cy="78" r="2" fill="white" fillOpacity="0.15" />
          <circle cx="135" cy="78" r="2" fill="white" fillOpacity="0.15" />
          {/* Sparkle */}
          <path d="M100 50 L102 56 L108 58 L102 60 L100 66 L98 60 L92 58 L98 56 Z" fill="white" fillOpacity="0.2" />
        </svg>
      );

    case "ozel-seri":
      return (
        <svg viewBox="0 0 200 160" fill="none" className={common}>
          {/* Premium stiletto with detail */}
          <path
            d="M28 118 C28 118 34 68 52 52 C66 40 88 38 108 42 C128 46 148 54 163 60 L168 66 L172 72 C172 72 170 80 163 82 L88 94 L83 118 Z"
            fill="white"
            fillOpacity="0.12"
          />
          <path
            d="M28 118 C28 118 34 68 52 52 C66 40 88 38 108 42 C128 46 148 54 163 60 L168 66 L172 72 C172 72 170 80 163 82 L88 94 L83 118"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Thin heel */}
          <path
            d="M33 118 L28 118 L40 72 L45 75 Z"
            fill="white"
            fillOpacity="0.12"
            stroke="white"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          {/* Sole line */}
          <line x1="28" y1="119" x2="83" y2="119" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" />
          {/* Diamond / premium sparkle */}
          <path d="M130 52 L133 58 L139 60 L133 62 L130 68 L127 62 L121 60 L127 58 Z" fill="white" fillOpacity="0.3" />
          <path d="M105 45 L106.5 48 L110 49 L106.5 50 L105 53 L103.5 50 L100 49 L103.5 48 Z" fill="white" fillOpacity="0.2" />
          {/* Strap detail */}
          <path
            d="M90 58 C90 48 100 44 112 48"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M75 65 C75 55 85 52 95 55"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 160" fill="none" className={common}>
          <path
            d="M30 110 C30 110 35 70 55 55 C75 40 120 45 150 60 L170 75 C175 80 172 90 165 92 L85 105 Z"
            fill="white"
            fillOpacity="0.12"
            stroke="white"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
        </svg>
      );
  }
}
