import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Check } from 'lucide-react'

/**
 * Brand definitions for Dilip Optics Grand.
 * Kept at the top of the file for effortless editing and maintenance.
 * Only these 5 brands are carried; styled text wordmarks only (no downloaded copyrighted logos).
 */
const BRANDS = [
  {
    id: 'fastrack',
    name: 'Fastrack',
    tagline: 'Youth Eyewear & Polarized Sunglasses',
    category: 'Youth & Sunglasses',
    accentColor: '#E63946',
    hoverText: 'group-hover:text-[#E63946]',
    hoverBorder: 'group-hover:border-[#E63946]/40',
    hoverBg: 'group-hover:bg-[#E63946]/[0.03]',
    hoverBadge: 'group-hover:bg-[#E63946]/10 group-hover:text-[#E63946]',
    description: 'Dynamic sports frames and polarized sunglasses for active lifestyles',
    renderWordmark: () => (
      <div className="flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105">
        <span className="font-heading font-black italic text-xl sm:text-2xl tracking-tighter uppercase">
          FASTRACK
        </span>
      </div>
    ),
  },
  {
    id: 'idee',
    name: 'IDEE',
    accentColor: '#0F172A',
    hoverText: 'group-hover:text-[#0F172A]',
    hoverBorder: 'group-hover:border-slate-800/40',
    hoverBg: 'group-hover:bg-slate-900/[0.03]',
    hoverBadge: 'group-hover:bg-slate-900/10 group-hover:text-slate-900',
    description: 'Contemporary European-cut acetates and sleek modern silhouettes',
    renderWordmark: () => (
      <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
        <span className="font-heading font-black text-2xl sm:text-3xl tracking-[0.28em] uppercase border-y-2 border-current px-2.5 py-0.5">
          IDEE
        </span>
      </div>
    ),
  },
  {
    id: 'crizal',
    name: 'Crizal',
    tagline: 'Anti-Glare Clarity & Blue-Cut Lenses',
    category: 'Precision Lenses',
    accentColor: '#0072CE',
    hoverText: 'group-hover:text-[#0072CE]',
    hoverBorder: 'group-hover:border-[#0072CE]/40',
    hoverBg: 'group-hover:bg-[#0072CE]/[0.03]',
    hoverBadge: 'group-hover:bg-[#0072CE]/10 group-hover:text-[#0072CE]',
    description: 'Global benchmark for anti-reflective, blue-cut, and scratch-free vision',
    renderWordmark: () => (
      <div className="flex items-center gap-0.5 transition-transform duration-300 group-hover:scale-105">
        <span className="font-heading font-black italic text-2xl sm:text-3xl tracking-tight">
          Crizal
        </span>
        <span className="text-[10px] font-sans font-bold text-current opacity-70 align-top -mt-3.5">
          ®
        </span>
      </div>
    ),
  },
  {
    id: 'bausch-lomb',
    name: 'Bausch + Lomb',
    tagline: 'Breathable Contact Lenses & Solutions',
    category: 'Contact Lenses',
    accentColor: '#00818A',
    hoverText: 'group-hover:text-[#00818A]',
    hoverBorder: 'group-hover:border-[#00818A]/40',
    hoverBg: 'group-hover:bg-[#00818A]/[0.03]',
    hoverBadge: 'group-hover:bg-[#00818A]/10 group-hover:text-[#00818A]',
    description: 'Ultra-breathable silicone hydrogel lenses and sterile care solutions',
    renderWordmark: () => (
      <div className="flex flex-col items-center text-center transition-transform duration-300 group-hover:scale-105">
        <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight leading-tight uppercase">
          BAUSCH + LOMB
        </span>
        <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.22em] uppercase opacity-75 mt-0.5">
          See better. Live better.
        </span>
      </div>
    ),
  },
  {
    id: 'st-marks',
    name: "St. Mark's",
    tagline: 'Titanium & Classic Quality Frames',
    category: 'Quality Frames',
    accentColor: '#0B2545',
    hoverText: 'group-hover:text-[#0B2545]',
    hoverBorder: 'group-hover:border-[#0B2545]/40',
    hoverBg: 'group-hover:bg-[#0B2545]/[0.03]',
    hoverBadge: 'group-hover:bg-primary-50 group-hover:text-primary',
    description: 'Titanium frames',
    renderWordmark: () => (
      <div className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
        <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-serif font-bold">
          M
        </div>
        <span className="font-heading font-semibold text-lg sm:text-xl tracking-wider uppercase font-serif">
          ST. MARK'S
        </span>
      </div>
    ),
  },
]

/**
 * TrustedBrands - Premium "Brands We Carry" Section
 * Clean monochrome wordmark cards that turn to colour on hover, in a responsive grid.
 *
 * @param {Object} props
 * @param {Function} [props.onSelectBrand] - Optional callback when brand card is clicked
 * @param {string} [props.selectedBrand] - Currently selected brand filter name
 */
export default function TrustedBrands({ onSelectBrand, selectedBrand }) {
  return (
    <section className="bg-slate-50/70 border-y border-slate-200/80 py-12 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Curated Eyewear & Optics
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Brands We Carry
          </h2>

          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Eyewear and lens brands available at our Rajahmundry showroom.
          </p>
        </div>

        {/* Responsive Brand Grid (2 cols mobile with 5th spanning full, 3 cols tablet, 5 cols desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {BRANDS.map((brand, index) => {
            const isSelected = selectedBrand && selectedBrand.toLowerCase() === brand.name.toLowerCase()
            const isLastOnMobile = index === 4

            const cardInner = (
              <>
                {/* Subtle ambient hover background glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${brand.accentColor}0F 0%, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Selected Indicator Badge */}
                {isSelected && (
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 bg-accent/20 text-accent-900 border border-accent/40 rounded-full px-2 py-0.5 text-[10px] font-heading font-bold uppercase tracking-wider">
                    <Check className="w-3 h-3 text-accent-700" />
                    Active
                  </div>
                )}

                {/* Wordmark Centerpiece (Strictly monochrome by default, transitions to brand color on hover) */}
                <div className="h-20 w-full flex items-center justify-center text-slate-400 group-hover:text-current transition-colors duration-300">
                  <div className={`${brand.hoverText} transition-colors duration-300 text-slate-400`}>
                    {brand.renderWordmark()}
                  </div>
                </div>

                {/* Category Pill / Tag */}
                {brand.category && (
                  <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className={`px-2.5 py-0.5 rounded-md bg-slate-100/90 text-slate-500 transition-colors duration-300 ${brand.hoverBadge}`}>
                      {brand.category}
                    </span>

                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-accent transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                )}
              </>
            )

            // Responsive span class: on mobile, 5th card spans both columns for a balanced layout
            const layoutClasses = isLastOnMobile ? 'col-span-2 sm:col-span-1 max-w-sm sm:max-w-none mx-auto w-full' : ''

            // Base card styles
            const baseCardClasses = `group relative bg-white rounded-2xl p-5 sm:p-6 border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between select-none cursor-pointer overflow-hidden ${brand.hoverBorder} ${brand.hoverBg} ${
              isSelected ? 'ring-2 ring-accent border-accent/60 bg-amber-50/20' : 'border-slate-200/80'
            } ${layoutClasses}`

            // If an onSelectBrand handler is passed (e.g. on Products page filter)
            if (onSelectBrand) {
              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => onSelectBrand(brand.name)}
                  className={`${baseCardClasses} text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
                  aria-label={`Filter eyewear by ${brand.name}${brand.category ? ` (${brand.category})` : ''}`}
                >
                  {cardInner}
                </button>
              )
            }

            // Otherwise, link directly to the Products page filtered by this brand
            return (
              <Link
                key={brand.id}
                to={`/products?brand=${encodeURIComponent(brand.name)}`}
                className={`${baseCardClasses} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
                aria-label={`Explore ${brand.name} eyewear collection${brand.category ? ` - ${brand.category}` : ''}`}
                title={`Explore ${brand.name} - ${brand.description}`}
              >
                {cardInner}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

