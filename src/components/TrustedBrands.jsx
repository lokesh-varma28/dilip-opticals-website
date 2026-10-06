import { Sparkles } from 'lucide-react'

/**
 * Brand definitions for Dilip Optics Grand.
 * Kept at the top of the file for effortless editing and maintenance.
 * Only these 5 brands are carried; styled text wordmarks only (no downloaded copyrighted logos).
 */
const BRANDS = [
  {
    id: 'fastrack',
    name: 'Fastrack',
    accentColor: '#E63946',
    description: 'Dynamic sports frames and polarized sunglasses for active lifestyles',
    renderWordmark: () => (
      <div className="flex items-center gap-1.5 transition-transform duration-300 md:group-hover:scale-105">
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
    description: 'Contemporary European-cut acetates and sleek modern silhouettes',
    renderWordmark: () => (
      <div className="flex items-center transition-transform duration-300 md:group-hover:scale-105">
        <span className="font-heading font-black text-2xl sm:text-3xl tracking-[0.28em] uppercase border-y-2 border-current px-2.5 py-0.5">
          IDEE
        </span>
      </div>
    ),
  },
  {
    id: 'crizal',
    name: 'Crizal',
    accentColor: '#0072CE',
    description: 'Clear vision and blue-cut optical lens technology',
    renderWordmark: () => (
      <div className="flex items-center gap-0.5 transition-transform duration-300 md:group-hover:scale-105">
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
    accentColor: '#00818A',
    description: 'Soft contact lenses and sterile eye care solutions',
    renderWordmark: () => (
      <div className="flex flex-col items-center text-center transition-transform duration-300 md:group-hover:scale-105">
        <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight leading-tight uppercase">
          BAUSCH + LOMB
        </span>
      </div>
    ),
  },
  {
    id: 'st-marks',
    name: "St. Mark's",
    accentColor: '#0B2545',
    description: 'Titanium frames',
    renderWordmark: () => (
      <div className="flex items-center gap-2 transition-transform duration-300 md:group-hover:scale-105 whitespace-nowrap">
        <div className="hidden sm:flex w-5 h-5 rounded-full border border-current items-center justify-center text-[10px] font-serif font-bold">
          M
        </div>
        <span className="font-heading font-semibold text-base sm:text-xl tracking-wide sm:tracking-wider uppercase font-serif">
          ST. MARK'S
        </span>
      </div>
    ),
  },
]

/**
 * TrustedBrands - Premium "Brands We Carry" Section
 * Clean wordmark cards in a responsive flex-wrap layout.
 *
 * Mobile (<md): wordmarks shown in brand colour by default (no hover on touch).
 * Desktop (md+): grey-to-colour hover effect.
 *
 * TODO: Re-enable brand links (Link or button) once the owner confirms
 *       the brand-to-product mapping for each brand.
 *
 * @param {Object} props
 * @param {Function} [props.onSelectBrand] - Optional callback when brand card is clicked
 * @param {string} [props.selectedBrand] - Currently selected brand filter name
 */
export default function TrustedBrands({ onSelectBrand: _onSelectBrand, selectedBrand }) {
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

        {/* Responsive Brand Layout - flex-wrap with centered last row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {BRANDS.map((brand) => {
            const isSelected = selectedBrand && selectedBrand.toLowerCase() === brand.name.toLowerCase()

            {/* TODO: Re-enable links/buttons once owner confirms brand-to-product mapping.
                      Replace <div> with <Link to={`/products?brand=${encodeURIComponent(brand.name)}`}> */}
            return (
              <div
                key={brand.id}
                className={`
                  group relative bg-white rounded-2xl py-6 px-4
                  h-24 md:h-28
                  basis-[calc(50%-0.375rem)] sm:basis-[calc(33.333%-1rem)] lg:basis-[calc(20%-1rem)]
                  border shadow-soft
                  md:hover:shadow-card md:hover:-translate-y-1
                  transition-all duration-300
                  flex items-center justify-center
                  select-none overflow-hidden
                  brand-card
                  ${isSelected ? 'ring-2 ring-accent border-accent/60 bg-amber-50/20' : 'border-slate-200/80'}
                `}
                style={{
                  '--brand-color': brand.accentColor,
                }}
                aria-label={`${brand.name} eyewear`}
              >
                {/* Subtle ambient hover background glow (md+ only) */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${brand.accentColor}0F 0%, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Wordmark Centerpiece
                    Mobile: brand colour by default (no hover on touch devices)
                    Desktop (md+): grey → brand colour on hover */}
                <div
                  className="flex items-center justify-center transition-colors duration-300"
                  style={{ color: brand.accentColor }}
                >
                  {/* Mobile: always brand colour. Desktop: grey by default, brand colour on hover */}
                  <div className="md:text-slate-400 md:group-hover:text-[var(--brand-color)] transition-colors duration-300">
                    {brand.renderWordmark()}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
