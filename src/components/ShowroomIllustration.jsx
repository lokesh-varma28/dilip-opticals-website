import { Sparkles } from 'lucide-react'

export default function ShowroomIllustration() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/40 p-4 sm:p-6 flex flex-col justify-between border border-slate-200/80 shadow-card select-none">
      {/* Ambient Lighting Gradients */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Top Floating Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-heading text-xs font-bold text-primary tracking-wide">
            Optical Studio & Vision Suite
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-50 border border-accent-100 text-accent font-heading text-[10px] font-bold uppercase tracking-wider">
          <Sparkles className="w-3 h-3" />
          <span>Precision Optics</span>
        </div>
      </div>

      {/* Center SVG Vector Illustration Composition (Boutique Showroom & Eyewear Display) */}
      <div className="relative z-0 flex-1 flex items-center justify-center py-2">
        <svg
          viewBox="0 0 540 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[300px] drop-shadow-sm"
        >
          <defs>
            {/* Gold metallic gradient */}
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#DFB84B" />
              <stop offset="50%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#A67B0E" />
            </linearGradient>

            {/* Navy primary gradient */}
            <linearGradient id="navyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1B3B6F" />
              <stop offset="100%" stopColor="#0B2545" />
            </linearGradient>

            {/* Lens anti-reflective coating sheen */}
            <linearGradient id="lensSheen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#BAE6FD" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#FEF3C7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.6" />
            </linearGradient>

            {/* Soft shadow filter */}
            <filter id="shelfShadow" x="-10%" y="0%" width="120%" height="200%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0B2545" floodOpacity="0.08" />
            </filter>
            <filter id="glassesShadow" x="-20%" y="-10%" width="140%" height="150%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0B2545" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Architectural Background: Boutique Fluted Wall Accent */}
          <g opacity="0.4">
            <line x1="40" y1="20" x2="40" y2="280" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="80" y1="20" x2="80" y2="280" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="460" y1="20" x2="460" y2="280" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="500" y1="20" x2="500" y2="280" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
          </g>

          {/* Eye Chart (Snellen abstract lines on back clinic wall - no text) */}
          <g opacity="0.35" transform="translate(42, 60)">
            <rect x="0" y="0" width="55" height="80" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="22" y="10" width="11" height="12" rx="1" fill="#0B2545" />
            <rect x="14" y="28" width="8" height="8" rx="1" fill="#0B2545" />
            <rect x="33" y="28" width="8" height="8" rx="1" fill="#0B2545" />
            <rect x="11" y="42" width="6" height="6" rx="1" fill="#0B2545" />
            <rect x="24" y="42" width="6" height="6" rx="1" fill="#0B2545" />
            <rect x="37" y="42" width="6" height="6" rx="1" fill="#0B2545" />
            <line x1="8" y1="56" x2="47" y2="56" stroke="#E11D48" strokeWidth="1.5" />
            <line x1="8" y1="68" x2="47" y2="68" stroke="#059669" strokeWidth="1.5" />
          </g>

          {/* Optical Digital Reticle / Refractor (Right side ambient) */}
          <g opacity="0.45" transform="translate(435, 65)">
            <circle cx="35" cy="35" r="32" stroke="#D4A017" strokeWidth="1.5" strokeDasharray="6 3" />
            <circle cx="35" cy="35" r="22" stroke="#0B2545" strokeWidth="1" />
            <circle cx="35" cy="35" r="6" fill="#D4A017" />
            <line x1="35" y1="0" x2="35" y2="70" stroke="#0B2545" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="0" y1="35" x2="70" y2="35" stroke="#0B2545" strokeWidth="1" strokeDasharray="2 2" />
            <text x="35" y="86" fontSize="7" fill="#64748B" textAnchor="middle" fontFamily="monospace">180° AXIS</text>
          </g>

          {/* Shelf 1 (Top Floating Display Shelf) */}
          <g filter="url(#shelfShadow)">
            <rect x="100" y="70" width="340" height="7" rx="3" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="100" y="75" width="340" height="2" fill="url(#goldGrad)" opacity="0.8" />
          </g>

          {/* Spectacle Frame 1 (Top Shelf - Minimalist Round Gold) */}
          <g transform="translate(145, 45)">
            <circle cx="30" cy="18" r="14" stroke="url(#goldGrad)" strokeWidth="2.5" fill="url(#lensSheen)" />
            <circle cx="70" cy="18" r="14" stroke="url(#goldGrad)" strokeWidth="2.5" fill="url(#lensSheen)" />
            <path d="M44 14 Q50 10 56 14" stroke="url(#goldGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M16 16 L2 14" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
            <path d="M84 16 L98 14" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Spectacle Frame 2 (Top Shelf - Browline Titanium) */}
          <g transform="translate(285, 46)">
            <path d="M10 10 Q50 6 90 10" stroke="#0B2545" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M15 10 C15 24 45 24 45 10" stroke="#94A3B8" strokeWidth="1.8" fill="url(#lensSheen)" />
            <path d="M55 10 C55 24 85 24 85 10" stroke="#94A3B8" strokeWidth="1.8" fill="url(#lensSheen)" />
            <path d="M45 11 Q50 8 55 11" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
          </g>

          {/* Shelf 2 (Middle Primary Pedestal - Prominent Display) */}
          <g filter="url(#shelfShadow)">
            <rect x="70" y="165" width="400" height="12" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            <rect x="70" y="174" width="400" height="3" fill="url(#goldGrad)" />
            <rect x="180" y="152" width="180" height="14" rx="2" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
          </g>

          {/* MAIN HERO EYEWEAR (Middle Shelf - Luxury Navy & Gold Aviator / Wayfarer Blend) */}
          <g filter="url(#glassesShadow)" transform="translate(185, 100)">
            <path
              d="M12 18 C12 6, 68 6, 68 18 C68 44, 18 46, 12 18 Z"
              fill="url(#lensSheen)"
              stroke="url(#navyGrad)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M102 18 C102 6, 158 6, 158 18 C158 44, 108 46, 102 18 Z"
              fill="url(#lensSheen)"
              stroke="url(#navyGrad)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path d="M14 10 Q85 3 156 10" stroke="url(#goldGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M68 16 Q85 10 102 16" stroke="url(#goldGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <ellipse cx="64" cy="24" rx="2" ry="3.5" fill="url(#goldGrad)" />
            <ellipse cx="106" cy="24" rx="2" ry="3.5" fill="url(#goldGrad)" />
            <rect x="6" y="14" width="7" height="4" rx="1.5" fill="url(#goldGrad)" />
            <rect x="157" y="14" width="7" height="4" rx="1.5" fill="url(#goldGrad)" />
            <path d="M7 16 C-8 18 -15 32 -10 40" stroke="url(#navyGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M163 16 C178 18 185 32 180 40" stroke="url(#navyGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M22 14 L38 34" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            <path d="M28 12 L34 18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            <path d="M112 14 L128 34" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            <path d="M118 12 L124 18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          </g>

          {/* Shelf 3 (Bottom Floating Display Shelf) */}
          <g filter="url(#shelfShadow)">
            <rect x="90" y="255" width="360" height="8" rx="3" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="90" y="261" width="360" height="2" fill="url(#goldGrad)" opacity="0.7" />
          </g>

          {/* Eyewear 3 (Bottom Shelf Left - Modern Hexagonal / Geometric Frame) */}
          <g transform="translate(130, 228)">
            <polygon
              points="14,14 26,6 40,6 48,14 44,24 18,24"
              stroke="#D4A017"
              strokeWidth="2.2"
              fill="url(#lensSheen)"
              strokeLinejoin="round"
            />
            <polygon
              points="62,14 74,6 88,6 96,14 92,24 66,24"
              stroke="#D4A017"
              strokeWidth="2.2"
              fill="url(#lensSheen)"
              strokeLinejoin="round"
            />
            <path d="M48 12 Q55 8 62 12" stroke="#0B2545" strokeWidth="2" fill="none" />
          </g>

          {/* Eyewear 4 (Bottom Shelf Right - Sleek Cat-Eye Sunglasses) */}
          <g transform="translate(295, 227)">
            <path
              d="M10 6 C28 6 42 12 42 22 C38 28 18 28 10 16 Z"
              stroke="#0B2545"
              strokeWidth="2.5"
              fill="#1E293B"
              opacity="0.85"
            />
            <path
              d="M80 6 C62 6 48 12 48 22 C52 28 72 28 80 16 Z"
              stroke="#0B2545"
              strokeWidth="2.5"
              fill="#1E293B"
              opacity="0.85"
            />
            <path d="M42 12 Q45 10 48 12" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
            <path d="M16 10 L30 22" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <path d="M54 10 L68 22" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          </g>

          {/* Eyewear Hard Case on Bottom Shelf */}
          <g transform="translate(240, 240)">
            <rect x="0" y="0" width="38" height="15" rx="4" fill="#0B2545" stroke="#D4A017" strokeWidth="1" />
            <line x1="0" y1="7" x2="38" y2="7" stroke="#1E3A8A" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* Elegant Finishing Base Accent */}
      <div className="relative z-10 w-full flex items-center justify-center pt-1">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full" />
      </div>
    </div>
  )
}
