import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Eye,
  CheckCircle2,
  Calendar,
  ArrowRight,
  MessageCircle,
  MapPin,
  X,
  RotateCcw,
  Shield,
  Sparkles,
  SunMedium,
  Feather,
} from 'lucide-react'
import TrustedBrands from '../components/TrustedBrands'
import business from '../data/business'

const SHOW_BRAND_FILTER = false

const productImages = import.meta.glob('../assets/products/*.webp', { eager: true })

/**
 * Resolves a product photo URL by filename or aliases from eagerly loaded WebP images.
 */
function getProductPhotoUrl(filename, aliases = []) {
  if (!filename) return null
  const candidates = [filename, ...aliases].filter(Boolean)

  for (const candidate of candidates) {
    const targetName = candidate.split('/').pop().toLowerCase()
    const targetBase = targetName.replace(/\.(webp|jpe?g|png|avif)$/i, '')

    for (const [filePath, module] of Object.entries(productImages)) {
      const entryFile = filePath.split('/').pop().toLowerCase()
      const entryBase = entryFile.replace(/\.webp$/i, '')

      if (entryFile === targetName || entryBase === targetBase) {
        return module.default || module
      }
    }
  }

  return null
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeBrand = searchParams.get('brand') || 'all'
  const activeCategory = searchParams.get('category') || 'all'
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Close Quick View modal on Escape key press and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null)
      }
    }

    if (selectedProduct) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedProduct])

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'frames', name: 'Spectacles & Frames' },
    { id: 'blue-cut', name: 'Blue-Cut & Computer' },
    { id: 'sunglasses', name: 'Sunglasses' },
    { id: 'progressives', name: 'Progressive Lenses' },
    { id: 'contacts', name: 'Contact Lenses' },
  ]

  const brandOptions = [
    { id: 'all', name: 'All Brands' },
    { id: 'Fastrack', name: 'Fastrack' },
    { id: 'IDEE', name: 'IDEE' },
    { id: 'Crizal', name: 'Crizal' },
    { id: 'Bausch + Lomb', name: 'Bausch + Lomb' },
    { id: "St. Mark's", name: "St. Mark's" },
  ]

  // TODO: Owner to confirm brand mapping and verified marketing tags after real photos are added.
  const catalogProducts = [
    {
      id: 1,
      category: 'frames',
      brand: "St. Mark's",
      showBrand: false,
      bgColor: '#e4e7e3',
      name: 'Classic Round Titanium Spectacles',
      photo: 'st-marks-titanium.webp',
      alt: "Titanium round spectacles",
      material: 'Titanium frame',
      tag: null,
      description: 'Round eyeglasses with flexible titanium temples designed for lightweight everyday comfort.',
      features: ['Beta titanium build', 'Flexible spring hinges', 'Nose pads'],
    },
    {
      id: 2,
      category: 'frames',
      brand: 'IDEE',
      showBrand: false,
      bgColor: '#eeeeee',
      name: 'Classic Acetate Square Spectacles',
      photo: 'idee-wayfarer.webp',
      aliases: ['idee-round.webp', 'idee-classic.webp'],
      alt: 'Classic acetate square spectacles',
      material: 'Acetate frame',
      tag: null,
      description: 'Glossy black square profile with sturdy temple wire reinforcement for durable daily wear.',
      features: ['Glossy acetate frame', 'Reinforced temple core', 'Comfort bridge fit'],
    },
    {
      id: 3,
      category: 'blue-cut',
      brand: 'Crizal',
      showBrand: false,
      bgColor: '#efefef',
      name: 'Blue-Cut Computer Glasses',
      photo: 'crizal-shield.webp',
      aliases: ['crizal-bluecut.webp', 'crizal-blue-cut.webp'],
      alt: 'Blue-cut rectangular computer glasses',
      material: 'Polycarbonate blue-cut lenses',
      tag: null,
      description: 'Rectangular computer spectacles filtering digital screen glare for professionals and students during long work hours.',
      features: ['Blue light filter', 'Anti-reflective coating', 'Scratch resistant surface'],
    },
    {
      id: 4,
      category: 'sunglasses',
      brand: 'Fastrack',
      showBrand: false,
      bgColor: '#dedede',
      name: 'Polarized Aviator Sunglasses',
      photo: 'fastrack-aviator.webp',
      aliases: ['fastrack-navigator.webp'],
      alt: 'Gold polarized aviator sunglasses',
      material: 'Stainless steel frame',
      tag: null,
      description: 'Classic double-bridge gold sunglasses with polarized lenses to cut outdoor glare on roads and water.',
      features: ['Polarized sun lenses', 'Double bridge design', 'UV protection'],
    },
    {
      id: 5,
      category: 'frames',
      brand: "St. Mark's",
      showBrand: false,
      bgColor: '#e3e3e3',
      name: 'Minimalist Rimless Spectacles',
      photo: 'st-marks-rimless.webp',
      alt: 'Minimalist rimless titanium spectacles',
      material: 'Titanium rimless frame',
      tag: null,
      description: 'Lightweight rimless spectacles with sleek titanium bridge and temples for an unobstructed clear view.',
      features: ['Titanium bridge construction', 'Rimless lightweight profile', 'Adjustable nose pads'],
    },
    {
      id: 6,
      category: 'progressives',
      brand: 'Crizal',
      showBrand: false,
      bgColor: '#ececec',
      name: 'Progressive Eyewear Lenses',
      photo: 'crizal-progressive.webp',
      alt: 'Progressive precision optical lenses',
      material: 'Progressive optical lenses',
      tag: null,
      description: 'Smooth vision transitions between distance, computer, and reading zones without visible bifocal divider lines.',
      features: ['Seamless multifocal transition', 'Wide reading zone', 'Anti-glare protection'],
    },
    {
      id: 7,
      category: 'blue-cut',
      brand: 'IDEE',
      showBrand: false,
      bgColor: '#ebebeb',
      name: 'Hexagonal Blue-Cut Spectacles',
      photo: 'idee-hexagonal.webp',
      aliases: ['idee-blue-blocker.webp'],
      alt: 'Hexagonal rose gold blue-cut spectacles',
      material: 'Metal alloy frame',
      tag: null,
      description: 'Geometric hexagonal rose gold frame fitted with blue light filtering lenses for screen work.',
      features: ['Blue light protection', 'Silicone nose pads', 'Slim metal temples'],
    },
    {
      id: 8,
      category: 'contacts',
      brand: 'Bausch + Lomb',
      showBrand: false,
      bgColor: '#ebebeb',
      name: 'Soft Hydrogel Contact Lenses',
      photo: 'bausch-lomb-purevision.webp',
      aliases: ['bausch-lomb.webp', 'bausch-lomb-contacts.webp'],
      alt: 'Soft hydrogel contact lenses',
      material: 'Silicone hydrogel lenses',
      tag: null,
      description: 'Breathable contact lenses providing daily hydration, clear vision, and comfortable wear throughout the day.',
      features: ['High moisture content', 'Breathable silicone material', 'Clear daily vision'],
    },
  ]

  // Map each product to its image through a photo field by filename
  const products = catalogProducts.map((p) => ({
    ...p,
    photoFilename: p.photo,
    photo: getProductPhotoUrl(p.photo, p.aliases),
  }))

  const handleBrandChange = (brandName) => {
    const newParams = new URLSearchParams(searchParams)
    if (!brandName || brandName.toLowerCase() === 'all') {
      newParams.delete('brand')
    } else {
      newParams.set('brand', brandName)
    }
    setSearchParams(newParams, { replace: true })

    const showcaseEl = document.getElementById('products-showcase')
    if (showcaseEl) {
      showcaseEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCategoryChange = (categoryName) => {
    const newParams = new URLSearchParams(searchParams)
    if (!categoryName || categoryName.toLowerCase() === 'all') {
      newParams.delete('category')
    } else {
      newParams.set('category', categoryName)
    }
    setSearchParams(newParams, { replace: true })

    const showcaseEl = document.getElementById('products-showcase')
    if (showcaseEl) {
      showcaseEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResetFilters = () => {
    const newParams = new URLSearchParams(searchParams)
    newParams.delete('category')
    newParams.delete('brand')
    setSearchParams(newParams, { replace: true })
  }

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    const matchesBrand =
      activeBrand === 'all' || p.brand.toLowerCase() === activeBrand.toLowerCase()
    return matchesCategory && matchesBrand
  })

  const lensTech = [
    {
      icon: Shield,
      title: 'Digital Blue-Cut Shield',
      desc: 'Filters harmful blue light from digital screens to alleviate everyday eye strain.',
    },
    {
      icon: Sparkles,
      title: 'Anti-Reflective Clarity (AR)',
      desc: 'Eliminates night driving headlight glare and removes distracting surface reflections.',
    },
    {
      icon: SunMedium,
      title: 'Photochromic Lenses',
      desc: 'Light-reactive lenses that darken under outdoor sunlight and clear swiftly indoors.',
    },
    {
      icon: Feather,
      title: 'High-Index Ultra Thin',
      desc: 'Refined high-index materials keep stronger prescriptions exceptionally lightweight and sleek.',
    },
  ]

  return (
    <div className="space-y-0 bg-white">
      {/* 1. Header & Hero - Optical Showroom Aesthetic */}
      <section className="bg-gradient-to-b from-[#F5F6F8] to-white py-12 sm:py-14 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.22em] uppercase font-body block">
              Optical Showroom & Eye Testing
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-primary tracking-tight leading-[1.15]">
              The Eyewear Collection
            </h1>

            {/* Thin gold divider line under section heading */}
            <div className="w-12 h-[2px] bg-[#D4A017] mx-auto my-3" />

            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Discover lightweight titanium frames, classic handcrafted acetates, digital blue-cut lenses, and polarized sunglasses at {business.name}.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              {business.claims.inStoreStyles != null && (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>{business.claims.inStoreStyles} In-Store Styles</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4A017]" />
                <span>Try In-Person on JN Road</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Unified Sticky Filter Bar with Two Dedicated Rows */}
      <nav
        id="filter-bar"
        aria-label="Filter products"
        style={{ top: 'var(--navbar-height, 72px)' }}
        className="sticky z-40 bg-white border-b border-slate-200 shadow-[0_2px_8px_rgba(11,37,69,0.03)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1: Category Underline Tabs */}
          <div className={`${SHOW_BRAND_FILTER ? 'border-b border-slate-100' : ''} py-3 flex items-center justify-between gap-4`}>
            <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth pr-4 sm:pr-0 after:content-[''] after:w-4 after:shrink-0">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`font-body text-xs sm:text-sm whitespace-nowrap transition-colors pb-1.5 cursor-pointer border-b-2 shrink-0 ${
                      isActive
                        ? 'font-bold text-primary border-primary'
                        : 'font-medium text-slate-500 hover:text-primary border-transparent'
                    }`}
                  >
                    {cat.name}
                  </button>
                )
              })}
            </div>

            {!SHOW_BRAND_FILTER && (activeCategory !== 'all' || activeBrand !== 'all') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D4A017] hover:underline cursor-pointer shrink-0 pl-2 ml-auto"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Row 2: Brand Underline Selector */}
          {SHOW_BRAND_FILTER && (
            <div className="py-2.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth flex-1 min-w-0 pr-4 sm:pr-0 after:content-[''] after:w-4 after:shrink-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
                  Brand:
                </span>
                <div className="flex items-center gap-4 shrink-0">
                  {brandOptions.map((brand) => {
                    const isSelected = activeBrand.toLowerCase() === brand.id.toLowerCase()
                    return (
                      <button
                        key={brand.id}
                        type="button"
                        onClick={() => handleBrandChange(brand.id)}
                        className={`font-body text-xs whitespace-nowrap transition-colors pb-1 cursor-pointer border-b-2 shrink-0 ${
                          isSelected
                            ? 'font-bold text-[#D4A017] border-[#D4A017]'
                            : 'font-normal text-slate-500 hover:text-primary border-transparent'
                        }`}
                      >
                        {brand.name}
                      </button>
                    )
                  })}
                </div>
              </div>

              {(activeCategory !== 'all' || activeBrand !== 'all') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D4A017] hover:underline cursor-pointer shrink-0 pl-2 ml-auto"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* 3. Small Note under Filter Bar */}
      <div className="bg-[#FAFBFD] border-b border-slate-100 py-2.5 px-4 text-center">
        <p className="text-xs text-slate-500 font-body">
          Images are for illustration. Visit our store to see actual frames.
        </p>
      </div>

      {/* 4. Product Showcase Grid (Mobile 1, Tablet 2, Desktop 4) */}
      <section id="products-showcase" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header count summary */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-100 text-xs text-slate-500">
            <span>
              Displaying <strong className="font-semibold text-primary">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'eyewear style' : 'eyewear styles'}
            </span>
            <span className="hidden sm:inline-block font-body text-slate-400">
              Visit our showroom to try frames.
            </span>
          </div>

          {/* Empty State when no items match both filters */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 px-4 bg-[#F5F6F8] rounded-xl border border-slate-200 max-w-md mx-auto space-y-4">
              <h3 className="font-serif text-xl font-normal text-primary">
                No styles found in this collection
              </h3>
              <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                We couldn't locate any eyewear matching the active category and brand filters.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="bg-primary hover:bg-primary-800 text-white font-body font-semibold text-xs py-2.5 px-5 rounded-lg transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            /* Product Grid: 1 col mobile, 2 col tablet, 4 col desktop */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {filteredProducts.map((item, index) => (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-label={`Quick view ${item.name}`}
                  onClick={() => setSelectedProduct(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedProduct(item)
                    }
                  }}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className="product-card-enter bg-white rounded-xl border border-slate-200 shadow-[0_2px_12px_rgba(11,37,69,0.04)] hover:shadow-[0_12px_32px_rgba(11,37,69,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col h-full overflow-hidden group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {/* Fixed aspect-[4/3] image container matching product image background with no visible inner rectangle */}
                  <div
                    className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center border-b border-slate-100"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <img
                      src={item.photo}
                      alt={item.alt || item.name}
                      className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />

                    {/* Small badge on top-left corner (only rendered if verified tag exists) */}
                    {item.tag && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-white/95 text-primary border border-slate-200/80 shadow-2xs backdrop-blur-xs">
                        {item.tag}
                      </span>
                    )}

                    {/* Subtle Quick View Hover Badge */}
                    <div className="absolute inset-0 bg-primary-950/15 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-primary text-xs font-body font-semibold shadow-card transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 border border-slate-200/80">
                        <Eye className="w-3.5 h-3.5 text-[#D4A017]" />
                        Quick View
                      </span>
                    </div>
                  </div>

                  {/* Card Content: brand label (conditional) -> product name -> material -> description -> features -> buttons */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* 1. Small uppercase brand label (only rendered when showBrand is true) */}
                    {/* TODO: Owner must confirm brand mapping after real photos are added */}
                    {item.showBrand && (
                      <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.18em] uppercase font-body block mb-2">
                        {item.brand}
                      </span>
                    )}

                    {/* 2. Product Name: font-serif, allow natural wrapping, no truncation */}
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-primary leading-snug group-hover:text-accent-700 transition-colors mb-1.5">
                      {item.name}
                    </h3>

                    {/* 3. Plain material wording (no sparkle icon, no truncation) */}
                    <p className="text-xs text-slate-500 font-medium mb-3">
                      {item.material}
                    </p>

                    {/* 4. Description (no line-clamp, rewritten under 18 words) */}
                    <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* 5. Features (no truncation, plain wording under 4 words) */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                      {item.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A017] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* 6. Buttons pinned at bottom: Primary WhatsApp in Navy (#0B2545) + Secondary Try In-Store text link with arrow */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2">
                      <a
                        href={`${business.whatsapp}?text=${encodeURIComponent(
                          `Hi ${business.name}, I am interested in "${item.name}" (${item.material}). Could you please share availability and pricing?`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-[#0B2545] hover:bg-primary-800 active:scale-[0.98] text-white text-xs font-body font-semibold py-2.5 px-3 rounded-lg shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                        aria-label={`Inquire about ${item.name} on WhatsApp`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-white shrink-0" />
                        <span>Inquire on WhatsApp</span>
                      </a>

                      <div className="flex justify-center pt-1">
                        <Link
                          to="/contact"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-body font-medium text-primary hover:text-[#D4A017] transition-colors cursor-pointer group/link py-1"
                          aria-label={`Try ${item.name} in store on JN Road`}
                        >
                          <span>Try In-Store</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-primary-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedProduct(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-product-title"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-500 hover:text-primary border border-slate-200 shadow-xs flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close product quick view"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Side: Consistent Aspect-[4/3] Image Container matching product background */}
              <div
                className="md:col-span-6 p-6 sm:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 min-h-[260px] sm:min-h-[340px] relative"
                style={{ backgroundColor: selectedProduct.bgColor }}
              >
                <div className="w-full h-full max-h-[320px] aspect-[4/3] flex items-center justify-center">
                  <img
                    src={selectedProduct.photo}
                    alt={selectedProduct.alt || selectedProduct.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>Available for in-person fitting on JN Road</span>
                </div>
              </div>

              {/* Right Side: Details & Actions */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Small gold brand label */}
                  {/* TODO: Owner must confirm brand mapping after real photos are added */}
                  {selectedProduct.showBrand && (
                    <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.2em] uppercase font-body block">
                      {selectedProduct.brand}
                    </span>
                  )}

                  <div>
                    <h2
                      id="modal-product-title"
                      className="font-serif text-2xl sm:text-3xl font-normal text-primary leading-tight"
                    >
                      {selectedProduct.name}
                    </h2>
                    <p className="font-body text-xs sm:text-sm font-medium text-slate-500 mt-1.5">
                      {selectedProduct.material}
                    </p>
                  </div>

                  <p className="font-body text-slate-600 text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="font-body text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                      Key Highlights
                    </div>
                    <div className="space-y-1.5">
                      {selectedProduct.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#D4A017] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick View Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={`${business.whatsapp}?text=${encodeURIComponent(
                      `Hi ${business.name}, I am interested in "${selectedProduct.name}" (${selectedProduct.material}). Could you please share availability and pricing?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#0B2545] hover:bg-primary-800 active:scale-[0.98] text-white text-xs sm:text-sm font-body font-semibold py-3 px-4 rounded-lg shadow-xs inline-flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0 text-white" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <Link
                    to="/contact"
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-body font-semibold text-primary hover:text-accent transition-colors py-3 px-4 cursor-pointer"
                  >
                    <span>Try In-Store</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Lens Technology Breakdown - Refined Whitespace & Hairline Borders */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F5F6F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.2em] uppercase font-body block">
              Lens Options
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-primary">
              Choose the right lenses
            </h2>
            {/* Thin gold divider line */}
            <div className="w-12 h-[2px] bg-[#D4A017] mx-auto my-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {lensTech.map((lt) => {
              const IconComponent = lt.icon
              return (
                <div
                  key={lt.title}
                  className="bg-white rounded-xl p-7 border border-slate-200 shadow-[0_2px_12px_rgba(11,37,69,0.04)] space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-accent flex items-center justify-center border border-primary-100/80">
                    <IconComponent className="w-5 h-5 text-[#D4A017]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-primary">
                    {lt.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lt.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. Brand Partners */}
      <TrustedBrands onSelectBrand={handleBrandChange} selectedBrand={activeBrand} />

      {/* 7. In-Store Trial Call to Action */}
      <section className="bg-primary text-white py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.22em] uppercase font-body block">
            Personalized Frame Fitting
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight">
            Find the Perfect Frame for Your Face
          </h2>

          {/* Thin gold divider line */}
          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto my-3" />

          <p className="font-body text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Visit our Rajahmundry showroom on JN Road to try on frames in person. Our optometrists verify your prescription and ensure your frames fit with pinpoint accuracy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-400 active:scale-95 text-primary font-body font-bold text-sm sm:text-base py-3.5 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span>Visit Showroom & Book Trial</span>
            </Link>

            <Link
              to="/services"
              className="border border-white/40 text-white hover:bg-white/10 font-body font-semibold text-sm sm:text-base py-3.5 px-7 rounded-lg transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>View Eye Care Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
