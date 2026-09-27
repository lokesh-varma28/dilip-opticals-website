export default function TrustedBrands() {
  const brands = [
    {
      name: 'Fastrack',
      category: 'Youth Eyewear & Sunglasses',
      renderLogo: () => (
        <div className="flex items-center gap-2 group-hover:text-[#E63946] transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="font-heading font-black text-xl sm:text-2xl tracking-tighter uppercase">
            FASTRACK
          </span>
        </div>
      ),
    },
    {
      name: 'IDEE',
      category: 'Designer Frames',
      renderLogo: () => (
        <div className="flex items-center gap-1 group-hover:text-[#111827] transition-colors">
          <span className="font-heading font-black text-2xl sm:text-3xl tracking-[0.25em] uppercase border-y-2 border-current px-1 py-0.5">
            IDEE
          </span>
        </div>
      ),
    },
    {
      name: 'Crizal',
      category: 'Anti-Glare Clarity Lenses',
      renderLogo: () => (
        <div className="flex items-center gap-1.5 group-hover:text-[#0072CE] transition-colors">
          <span className="font-heading font-black italic text-2xl sm:text-3xl tracking-tight">
            Crizal
          </span>
          <span className="text-[10px] font-sans font-bold text-accent align-top -mt-3">
            ®
          </span>
        </div>
      ),
    },
    {
      name: 'Bausch + Lomb',
      category: 'Contact Lenses & Eye Care',
      renderLogo: () => (
        <div className="flex items-center gap-1.5 group-hover:text-[#00818A] transition-colors">
          <div className="font-heading font-bold text-lg sm:text-xl tracking-tight leading-tight text-center">
            <span className="block font-extrabold">BAUSCH + LOMB</span>
            <span className="block text-[9px] font-medium tracking-[0.2em] uppercase opacity-80">
              See better. Live better.
            </span>
          </div>
        </div>
      ),
    },
    {
      name: "St. Mark's",
      category: 'Classic & Luxury Frames',
      renderLogo: () => (
        <div className="flex items-center gap-1.5 group-hover:text-[#0B2545] transition-colors">
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

  return (
    <section className="bg-slate-50/90 border-y border-slate-200/70 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
            <h2 className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-700">
              Authorized Dealers of Leading Eyewear Brands
            </h2>
            <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
          </div>
        </div>

        {/* Brands Horizontal Container (Centered, evenly spaced, wraps on mobile) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-20">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 select-none hover:scale-105"
              title={`${brand.name} - ${brand.category}`}
            >
              <div className="h-10 flex items-center justify-center text-slate-800">
                {brand.renderLogo()}
              </div>
              <span className="font-body text-[11px] text-slate-600 transition-colors mt-1 font-semibold tracking-wide">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
