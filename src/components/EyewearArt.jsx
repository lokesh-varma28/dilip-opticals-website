import { useId } from 'react'

/**
 * EyewearArt - Bespoke SVG optical showroom artwork.
 * Renders tailored eyewear silhouettes for each frame style,
 * lens technology, and contact lens category.
 *
 * @param {Object} props
 * @param {number|string} [props.productId] - ID of the product (1-8)
 * @param {string} [props.category] - Product category ('frames', 'blue-cut', 'sunglasses', 'progressives', 'contacts')
 * @param {string} [props.name] - Product name for accessibility
 * @param {string} [props.className] - Container CSS classes
 */
export default function EyewearArt({ productId, category, name = 'Eyewear', className = '' }) {
  const uid = useId().replace(/:/g, '')

  // Gradients and filter IDs
  const goldGrad = `gold-${uid}`
  const roseGoldGrad = `rosegold-${uid}`
  const navyGrad = `navy-${uid}`
  const lensSheen = `sheen-${uid}`
  const blueShieldGrad = `bluecut-${uid}`
  const sunTintGrad = `suntint-${uid}`
  const aquaHydroGrad = `aqua-${uid}`
  const dropShadow = `shadow-${uid}`
  const softGaze = `gaze-${uid}`

  const numericId = Number(productId)

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none overflow-hidden ${className}`}
      role="img"
      aria-label={name}
    >
      <svg
        viewBox="0 0 400 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain drop-shadow-sm transition-transform duration-500"
      >
        <defs>
          {/* Gold Metallic Foil */}
          <linearGradient id={goldGrad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F9F2DB" />
            <stop offset="25%" stopColor="#DFB84B" />
            <stop offset="60%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#8C5E09" />
          </linearGradient>

          {/* Rose Gold Metallic */}
          <linearGradient id={roseGoldGrad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE4E6" />
            <stop offset="35%" stopColor="#F4A261" />
            <stop offset="70%" stopColor="#E76F51" />
            <stop offset="100%" stopColor="#C85A32" />
          </linearGradient>

          {/* Deep Navy Acetate / Titanium */}
          <linearGradient id={navyGrad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#0B2545" />
            <stop offset="100%" stopColor="#051329" />
          </linearGradient>

          {/* Clear Anti-Reflective Optical Sheen */}
          <linearGradient id={lensSheen} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.7" />
            <stop offset="45%" stopColor="#BAE6FD" stopOpacity="0.3" />
            <stop offset="75%" stopColor="#FEF3C7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.5" />
          </linearGradient>

          {/* Blue-Cut Filter Arc */}
          <linearGradient id={blueShieldGrad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
          </linearGradient>

          {/* Polarized Sunglass Dark Tint */}
          <linearGradient id={sunTintGrad} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F172A" stopOpacity="0.94" />
            <stop offset="60%" stopColor="#1E293B" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.72" />
          </linearGradient>

          {/* Contact Lens Aqua Hydrogel */}
          <radialGradient id={aquaHydroGrad} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E0F7FA" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#4DD0E1" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#0097A7" stopOpacity="0.85" />
          </radialGradient>

          {/* Studio Pedestal Ambient Light */}
          <radialGradient id={softGaze} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#D4A017" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#0B2545" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          {/* Soft Shadow Filter */}
          <filter id={dropShadow} x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#0B2545" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* Studio Showcase Background Glow & Reflection Base */}
        <ellipse cx="200" cy="130" rx="175" ry="90" fill={`url(#${softGaze})`} />
        <ellipse cx="200" cy="205" rx="140" ry="12" fill="#0B2545" opacity="0.06" filter="blur(6px)" />

        {/* ========================================================================= */}
        {/* PRODUCT 1: Ultra-Lightweight Titanium Pure (Minimalist Panto / Round Wire) */}
        {/* ========================================================================= */}
        {(numericId === 1 || (category === 'frames' && numericId !== 2 && numericId !== 5)) && (
          <g filter={`url(#${dropShadow})`}>
            {/* Left Lens */}
            <circle cx="138" cy="120" r="42" fill={`url(#${lensSheen})`} stroke={`url(#${goldGrad})`} strokeWidth="3" />
            {/* Right Lens */}
            <circle cx="262" cy="120" r="42" fill={`url(#${lensSheen})`} stroke={`url(#${goldGrad})`} strokeWidth="3" />

            {/* High Arch Bridge */}
            <path d="M180 114 Q200 102 220 114" stroke={`url(#${goldGrad})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Lower Keyhole Accent */}
            <path d="M183 124 Q200 118 217 124" stroke={`url(#${goldGrad})`} strokeWidth="1.6" fill="none" opacity="0.75" />

            {/* Silicone Nose Pads */}
            <ellipse cx="178" cy="127" rx="3.5" ry="6" fill="#F8FAFC" stroke={`url(#${goldGrad})`} strokeWidth="1" opacity="0.9" />
            <ellipse cx="222" cy="127" rx="3.5" ry="6" fill="#F8FAFC" stroke={`url(#${goldGrad})`} strokeWidth="1" opacity="0.9" />

            {/* Screwless Hinge Blocks */}
            <rect x="88" y="116" width="9" height="7" rx="2" fill={`url(#${goldGrad})`} />
            <rect x="303" y="116" width="9" height="7" rx="2" fill={`url(#${goldGrad})`} />

            {/* Ultra-Slim Beta-Titanium Temples */}
            <path d="M88 119 C68 120 46 132 40 146" stroke={`url(#${goldGrad})`} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M312 119 C332 120 354 132 360 146" stroke={`url(#${goldGrad})`} strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Anti-Reflective Optical Highlight Streaks */}
            <path d="M118 100 L148 142" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <path d="M128 96 L138 108" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <path d="M242 100 L272 142" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <path d="M252 96 L262 108" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          </g>
        )}

        {/* ========================================================================= */}
        {/* PRODUCT 2: Classic Handcrafted Acetate Wayfarer (Bold Tortoise / Navy)    */}
        {/* ========================================================================= */}
        {numericId === 2 && (
          <g filter={`url(#${dropShadow})`}>
            {/* Left Acetate Rim */}
            <path
              d="M92 92 C115 88 175 88 178 98 C182 124 175 152 142 154 C104 154 88 136 92 92 Z"
              fill={`url(#${lensSheen})`}
              stroke={`url(#${navyGrad})`}
              strokeWidth="11"
              strokeLinejoin="round"
            />
            {/* Right Acetate Rim */}
            <path
              d="M308 92 C285 88 225 88 222 98 C218 124 225 152 258 154 C296 154 312 136 308 92 Z"
              fill={`url(#${lensSheen})`}
              stroke={`url(#${navyGrad})`}
              strokeWidth="11"
              strokeLinejoin="round"
            />

            {/* Keyhole Saddle Bridge */}
            <path d="M174 96 Q200 90 226 96" stroke={`url(#${navyGrad})`} strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d="M185 116 C190 102 210 102 215 116" stroke={`url(#${navyGrad})`} strokeWidth="4" fill="none" />

            {/* Dual Diamond Rivet Studs (Gold Handcrafted Boutique Detail) */}
            <polygon points="86,95 89,92 92,95 89,98" fill={`url(#${goldGrad})`} />
            <polygon points="314,95 311,92 308,95 311,98" fill={`url(#${goldGrad})`} />

            {/* Bold Acetate Temples */}
            <path d="M85 96 C62 98 42 118 36 138" stroke={`url(#${navyGrad})`} strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M315 96 C338 98 358 118 364 138" stroke={`url(#${navyGrad})`} strokeWidth="7" fill="none" strokeLinecap="round" />

            {/* Glossy Bevel Sheen Lines */}
            <path d="M96 92 Q136 90 170 95" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
            <path d="M230 95 Q264 90 304 92" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />

            {/* Lens Glare */}
            <path d="M112 108 L138 142" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M246 108 L272 142" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          </g>
        )}

        {/* ========================================================================= */}
        {/* PRODUCT 3: Crizal Shield Blue-Cut Glasses (Digital Blue Light Shield)     */}
        {/* ========================================================================= */}
        {numericId === 3 && (
          <g filter={`url(#${dropShadow})`}>
            {/* Left Lens Frame (Sleek Rounded Square) */}
            <rect
              x="96"
              y="85"
              width="88"
              height="72"
              rx="18"
              fill={`url(#${lensSheen})`}
              stroke={`url(#${navyGrad})`}
              strokeWidth="4.5"
            />
            {/* Right Lens Frame */}
            <rect
              x="216"
              y="85"
              width="88"
              height="72"
              rx="18"
              fill={`url(#${lensSheen})`}
              stroke={`url(#${navyGrad})`}
              strokeWidth="4.5"
            />

            {/* Bridge with Gold Accent Inlay */}
            <path d="M184 105 Q200 97 216 105" stroke={`url(#${navyGrad})`} strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M186 102 Q200 95 214 102" stroke={`url(#${goldGrad})`} strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Blue-Cut Filter Arc Holographic Waves (Representing Blue Light Shield) */}
            <path
              d="M106 142 C126 106 156 104 174 128"
              stroke={`url(#${blueShieldGrad})`}
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M116 146 C132 118 152 116 166 134"
              stroke={`url(#${blueShieldGrad})`}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M226 142 C246 106 276 104 294 128"
              stroke={`url(#${blueShieldGrad})`}
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M236 146 C252 118 272 116 286 134"
              stroke={`url(#${blueShieldGrad})`}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* Temples with Gold Hinge */}
            <rect x="91" y="98" width="6" height="10" rx="1.5" fill={`url(#${goldGrad})`} />
            <rect x="303" y="98" width="6" height="10" rx="1.5" fill={`url(#${goldGrad})`} />
            <path d="M91 103 C68 105 48 120 40 140" stroke={`url(#${navyGrad})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M309 103 C332 105 352 120 360 140" stroke={`url(#${navyGrad})`} strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Silicone Nose Pads */}
            <ellipse cx="182" cy="120" rx="3" ry="5.5" fill="#E2E8F0" stroke={`url(#${goldGrad})`} strokeWidth="1" />
            <ellipse cx="218" cy="120" rx="3" ry="5.5" fill="#E2E8F0" stroke={`url(#${goldGrad})`} strokeWidth="1" />
          </g>
        )}

        {/* ========================================================================= */}
        {/* PRODUCT 4: Polarized Aviator Navigator (Double Brow Bar & Dark Sun Tint) */}
        {/* ========================================================================= */}
        {numericId === 4 && (
          <g filter={`url(#${dropShadow})`}>
            {/* Left Teardrop Aviator Lens */}
            <path
              d="M92 90 C90 76 182 76 180 92 C180 134 162 162 134 160 C106 158 92 132 92 90 Z"
              fill={`url(#${sunTintGrad})`}
              stroke={`url(#${goldGrad})`}
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Right Teardrop Aviator Lens */}
            <path
              d="M308 90 C310 76 218 76 220 92 C220 134 238 162 266 160 C294 158 308 132 308 90 Z"
              fill={`url(#${sunTintGrad})`}
              stroke={`url(#${goldGrad})`}
              strokeWidth="3.5"
              strokeLinejoin="round"
            />

            {/* Signature Double Brow Bar */}
            <path d="M102 78 Q200 68 298 78" stroke={`url(#${goldGrad})`} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M178 89 Q200 84 222 89" stroke={`url(#${goldGrad})`} strokeWidth="3.5" fill="none" strokeLinecap="round" />

            {/* Nose Pads */}
            <ellipse cx="178" cy="106" rx="3" ry="5" fill="#F8FAFC" stroke={`url(#${goldGrad})`} strokeWidth="1" />
            <ellipse cx="222" cy="106" rx="3" ry="5" fill="#F8FAFC" stroke={`url(#${goldGrad})`} strokeWidth="1" />

            {/* Gold Wire Temples */}
            <path d="M89 89 C64 92 44 112 36 136" stroke={`url(#${goldGrad})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M311 89 C336 92 356 112 364 136" stroke={`url(#${goldGrad})`} strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Tortoise Temple Tips */}
            <path d="M42 128 C39 135 36 142 34 146" stroke={`url(#${navyGrad})`} strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M358 128 C361 135 364 142 366 146" stroke={`url(#${navyGrad})`} strokeWidth="5" fill="none" strokeLinecap="round" />

            {/* Polarized Gradient Sheen Streak */}
            <path d="M106 88 L152 152" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
            <path d="M248 88 L294 152" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
          </g>
        )}

        {/* ========================================================================= */}
        {/* PRODUCT 5: Executive Minimalist Rimless (Floating Lenses, Titanium Pins) */}
        {/* ========================================================================= */}
        {numericId === 5 && (
          <g filter={`url(#${dropShadow})`}>
            {/* Left Rimless Beveled Lens */}
            <rect
              x="96"
              y="92"
              width="86"
              height="60"
              rx="14"
              fill={`url(#${lensSheen})`}
              stroke="#CBD5E1"
              strokeWidth="1.2"
            />
            {/* Right Rimless Beveled Lens */}
            <rect
              x="218"
              y="92"
              width="86"
              height="60"
              rx="14"
              fill={`url(#${lensSheen})`}
              stroke="#CBD5E1"
              strokeWidth="1.2"
            />

            {/* Polished Facet Edge Highlight */}
            <path d="M99 95 L179 95" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <path d="M221 95 L301 95" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

            {/* Drill-Mount Gold Screws & Compression Bushings */}
            <circle cx="176" cy="112" r="2.5" fill={`url(#${goldGrad})`} />
            <circle cx="224" cy="112" r="2.5" fill={`url(#${goldGrad})`} />
            <circle cx="102" cy="112" r="2.5" fill={`url(#${goldGrad})`} />
            <circle cx="298" cy="112" r="2.5" fill={`url(#${goldGrad})`} />

            {/* Sculpted Memory Titanium Arch Bridge */}
            <path d="M176 112 Q200 98 224 112" stroke={`url(#${goldGrad})`} strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Minimalist Rimless Nose Pads */}
            <ellipse cx="180" cy="123" rx="2.5" ry="5" fill="#FFFFFF" stroke={`url(#${goldGrad})`} strokeWidth="1" />
            <ellipse cx="220" cy="123" rx="2.5" ry="5" fill="#FFFFFF" stroke={`url(#${goldGrad})`} strokeWidth="1" />

            {/* Featherweight Temples */}
            <path d="M102 112 C78 114 54 126 44 142" stroke={`url(#${goldGrad})`} strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M298 112 C322 114 346 126 356 142" stroke={`url(#${goldGrad})`} strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Crystal Clear Lens Reflex */}
            <path d="M115 102 L142 142" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <path d="M237 102 L264 142" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          </g>
        )}

        {/* ========================================================================= */}
        {/* PRODUCT 6: Digital Freeform Progressive Lenses (Precision Optics Contour) */}
        {/* ========================================================================= */}
        {(numericId === 6 || category === 'progressives') && (
          <g filter={`url(#${dropShadow})`}>
            {/* Precision Lens Silhouette 1 */}
            <path
              d="M100 86 C140 82 180 92 184 122 C188 152 146 166 114 162 C86 158 80 126 100 86 Z"
              fill={`url(#${lensSheen})`}
              stroke={`url(#${navyGrad})`}
              strokeWidth="3.5"
            />
            {/* Precision Lens Silhouette 2 */}
            <path
              d="M300 86 C260 82 220 92 216 122 C212 152 254 166 286 162 C314 158 320 126 300 86 Z"
              fill={`url(#${lensSheen})`}
              stroke={`url(#${navyGrad})`}
              strokeWidth="3.5"
            />

            {/* Progressive Optical Corridors (Digital Freeform Wavefront Mapping) */}
            {/* Distance Zone (Top) */}
            <path d="M112 104 Q142 98 172 106" stroke={`url(#${goldGrad})`} strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.8" />
            <path d="M228 106 Q258 98 288 104" stroke={`url(#${goldGrad})`} strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.8" />

            {/* Intermediate Progressive Corridor (Channel) */}
            <path d="M136 108 L134 136" stroke={`url(#${blueShieldGrad})`} strokeWidth="1.5" strokeDasharray="2 2" />
            <path d="M148 108 L150 136" stroke={`url(#${blueShieldGrad})`} strokeWidth="1.5" strokeDasharray="2 2" />
            <path d="M252 108 L250 136" stroke={`url(#${blueShieldGrad})`} strokeWidth="1.5" strokeDasharray="2 2" />
            <path d="M264 108 L266 136" stroke={`url(#${blueShieldGrad})`} strokeWidth="1.5" strokeDasharray="2 2" />

            {/* Reading Zone (Bottom Sphere) */}
            <circle cx="142" cy="144" r="14" stroke={`url(#${goldGrad})`} strokeWidth="1.5" fill="none" opacity="0.75" />
            <circle cx="258" cy="144" r="14" stroke={`url(#${goldGrad})`} strokeWidth="1.5" fill="none" opacity="0.75" />

            {/* Bridge */}
            <path d="M182 110 Q200 102 218 110" stroke={`url(#${navyGrad})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M184 107 Q200 100 216 107" stroke={`url(#${goldGrad})`} strokeWidth="1.5" fill="none" />

            {/* Laser Engraving Reference Crosshairs */}
            <circle cx="120" cy="120" r="2.5" stroke={`url(#${goldGrad})`} strokeWidth="1" fill="none" />
            <circle cx="280" cy="120" r="2.5" stroke={`url(#${goldGrad})`} strokeWidth="1" fill="none" />
          </g>
        )}

        {/* ========================================================================= */}
        {/* PRODUCT 7: Modern Hexagonal Blue-Blocker (Geometric Rose Gold Wireframe)   */}
        {/* ========================================================================= */}
        {numericId === 7 && (
          <g filter={`url(#${dropShadow})`}>
            {/* Left Hexagonal Polygon Rim */}
            <polygon
              points="136,80 178,92 178,138 136,156 100,138 100,92"
              fill={`url(#${lensSheen})`}
              stroke={`url(#${roseGoldGrad})`}
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Right Hexagonal Polygon Rim */}
            <polygon
              points="264,80 300,92 300,138 264,156 222,138 222,92"
              fill={`url(#${lensSheen})`}
              stroke={`url(#${roseGoldGrad})`}
              strokeWidth="3.5"
              strokeLinejoin="round"
            />

            {/* Angular Bridge */}
            <polyline points="178,102 192,94 208,94 222,102" stroke={`url(#${goldGrad})`} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            {/* Hex Silicone Nose Pads */}
            <ellipse cx="184" cy="116" rx="3" ry="5.5" fill="#FFFFFF" stroke={`url(#${goldGrad})`} strokeWidth="1" />
            <ellipse cx="216" cy="116" rx="3" ry="5.5" fill="#FFFFFF" stroke={`url(#${goldGrad})`} strokeWidth="1" />

            {/* Rose Gold Wire Temples */}
            <path d="M100,98 C76,102 54,120 44,142" stroke={`url(#${roseGoldGrad})`} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M300,98 C324,102 346,120 356,142" stroke={`url(#${roseGoldGrad})`} strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Blue-Cut Reflection Flare on Hex Lens */}
            <path d="M112 120 L158 98" stroke={`url(#${blueShieldGrad})`} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <path d="M234 120 L280 98" stroke={`url(#${blueShieldGrad})`} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          </g>
        )}

        {/* ========================================================================= */}
        {/* PRODUCT 8: Bausch + Lomb PureVision & SofLens (Hydrogel Contact Lenses)   */}
        {/* ========================================================================= */}
        {(numericId === 8 || category === 'contacts') && (
          <g filter={`url(#${dropShadow})`}>
            {/* Blister Pack / Sterile Solution Base */}
            <ellipse cx="140" cy="148" rx="60" ry="24" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6" />
            <ellipse cx="260" cy="148" rx="60" ry="24" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" opacity="0.6" />

            {/* Left Contact Lens (Convex Hydrating Sphere) */}
            <ellipse cx="140" cy="124" rx="42" ry="32" fill={`url(#${aquaHydroGrad})`} stroke="#0284C7" strokeWidth="2" />
            <ellipse cx="140" cy="120" rx="32" ry="22" fill="#E0F2FE" opacity="0.45" />
            <path d="M118 114 Q140 104 162 114" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
            <circle cx="152" cy="116" r="3" fill="#FFFFFF" opacity="0.8" />

            {/* Right Contact Lens */}
            <ellipse cx="260" cy="124" rx="42" ry="32" fill={`url(#${aquaHydroGrad})`} stroke="#0284C7" strokeWidth="2" />
            <ellipse cx="260" cy="120" rx="32" ry="22" fill="#E0F2FE" opacity="0.45" />
            <path d="M238 114 Q260 104 282 114" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
            <circle cx="272" cy="116" r="3" fill="#FFFFFF" opacity="0.8" />

            {/* Moisture Droplets & Hydration Rings */}
            <circle cx="140" cy="160" r="4" fill="#38BDF8" opacity="0.75" />
            <circle cx="260" cy="160" r="4" fill="#38BDF8" opacity="0.75" />
            <circle cx="196" cy="125" r="3" fill="#0284C7" opacity="0.5" />
            <circle cx="204" cy="135" r="2" fill="#38BDF8" opacity="0.6" />

            {/* Gold Purity Sparkle Badges */}
            <polygon points="200,90 203,96 209,99 203,102 200,108 197,102 191,99 197,96" fill={`url(#${goldGrad})`} />
            <polygon points="110,80 112,84 116,86 112,88 110,92 108,88 104,86 108,84" fill={`url(#${goldGrad})`} opacity="0.8" />
            <polygon points="290,80 292,84 296,86 292,88 290,92 288,88 284,86 288,84" fill={`url(#${goldGrad})`} opacity="0.8" />
          </g>
        )}
      </svg>
    </div>
  )
}
