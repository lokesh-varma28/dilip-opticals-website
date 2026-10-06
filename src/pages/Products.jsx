import { useState, useEffect, useRef } from 'react'
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
import { useReveal } from '../hooks/useReveal'
import business from '../data/business'

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

function ProductCard({ item, index, onSelectProduct, isImageLoaded, onImageLoad }) {
  const { ref, style } = useReveal(index)

  return (
    <div
      ref={ref}
      style={style}
      className="bg-white rounded-xl border border-slate-200 shadow-[0_2px_12px_rgba(11,37,69,0.04)] hover:shadow-[0_12px_32px_rgba(11,37,69,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col h-full overflow-hidden group active:scale-[0.98]"
    >
      {/* Product Image Container: fills container with aspect-[4/3], object-cover, bg-[#F2F3F5], rounded-t-xl */}
      <div
        onClick={() => onSelectProduct(item)}
        className="relative w-full aspect-[4/3] rounded-t-xl bg-[#F2F3F5] overflow-hidden cursor-pointer"
      >
        {/* Shimmer skeleton until image loads */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
        )}
        <img
          src={item.photo}
          alt={item.alt || item.name}
          width="400"
          height="300"
          loading="lazy"
          onLoad={() => onImageLoad(item.id)}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Small tag badge if exists */}
        {item.tag && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-white/95 text-primary border border-slate-200/80 shadow-2xs">
            {item.tag}
          </span>
        )}

        {/* Quick View Hover Badge on desktop */}
        <div className="absolute inset-0 bg-primary-950/15 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-primary text-xs font-body font-semibold shadow-card transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 border border-slate-200/80">
            <Eye className="w-3.5 h-3.5 text-[#D4A017]" />
            Quick View
          </span>
        </div>
      </div>

      {/* Card Content: Compact layout below md */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {item.showBrand && (
          <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.18em] uppercase font-body block mb-1">
            {item.brand}
          </span>
        )}

        {/* Product Name */}
        <h3
          onClick={() => onSelectProduct(item)}
          className="font-serif text-base sm:text-lg font-semibold text-primary leading-snug group-hover:text-accent-700 transition-colors mb-1 cursor-pointer"
        >
          {item.name}
        </h3>

        {/* Material line: generic type */}
        <p className="text-xs text-slate-500 font-medium mb-2">
          {item.material}
        </p>

        {/* Description: 1 line below md (line-clamp-1), 2 lines on desktop */}
        <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed mb-3 line-clamp-1 md:line-clamp-2">
          {item.description}
        </p>

        {/* Bullets moved to Quick View modal on mobile; shown on desktop */}
        <div className="hidden md:block space-y-1.5 mb-4 pt-3 border-t border-slate-100">
          {item.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A017] shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto pt-3 border-t border-slate-100 space-y-2">
          {/* WhatsApp inquiry: navy background with emerald icon only */}
          <a
            href={`${business.whatsapp}?text=${encodeURIComponent(
              `Hi ${business.name}, I am interested in "${item.name}" (${item.material}). Could you please share availability and pricing?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full min-h-10 bg-[#0B2545] hover:bg-primary-800 active:scale-[0.98] text-white text-xs font-body font-semibold py-2.5 px-3 rounded-lg shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            aria-label={`Inquire about ${item.name} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Inquire on WhatsApp</span>
          </a>

          {/* View details button: opens Quick View bottom sheet / modal */}
          <button
            type="button"
            onClick={() => onSelectProduct(item)}
            className="w-full min-h-9 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] text-primary text-xs font-body font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#D4A017]" />
            <span>View details</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeBrand = searchParams.get('brand') || 'all'
  const activeCategory = searchParams.get('category') || 'all'
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loadedImages, setLoadedImages] = useState({})
  const tabsContainerRef = useRef(null)

  // Scroll active tab into view horizontally on mobile
  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeBtn = tabsContainerRef.current.querySelector('[data-active="true"]')
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }, [activeCategory])

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

  // TODO: Owner to confirm specifications, materials, and marketing claims
  const catalogProducts = [
    {
      id: 1,
      category: 'frames',
      brand: "St. Mark's",
      showBrand: false,
      bgColor: '#F2F3F5',
      name: 'Classic Round Metal Spectacles',
      photo: 'st-marks-titanium.webp',
      alt: 'Metal round spectacles',
      // TODO: Owner to confirm frame material
      material: 'Metal frame',
      tag: null,
      description: 'Round eyeglasses designed for lightweight everyday comfort.',
      // TODO: Owner to confirm specifications (max 2 bullets, no spec claims)
      features: ['Flexible spring hinges', 'Adjustable nose pads'],
    },
    {
      id: 2,
      category: 'frames',
      brand: 'IDEE',
      showBrand: false,
      bgColor: '#F2F3F5',
      name: 'Classic Square Spectacles',
      photo: 'idee-wayfarer.webp',
      aliases: ['idee-round.webp', 'idee-classic.webp'],
      alt: 'Classic square spectacles',
      // TODO: Owner to confirm frame material
      material: 'Acetate frame',
      tag: null,
      description: 'Square profile spectacles with sturdy temple reinforcement for durable daily wear.',
      // TODO: Owner to confirm specifications (max 2 bullets, no spec claims)
      features: ['Classic square profile', 'Comfort bridge fit'],
    },
    {
      id: 3,
      category: 'blue-cut',
      brand: 'Crizal',
      showBrand: false,
      bgColor: '#F2F3F5',
      name: 'Blue-Cut Computer Glasses',
      photo: 'crizal-shield.webp',
      aliases: ['crizal-bluecut.webp', 'crizal-blue-cut.webp'],
      alt: 'Blue-cut computer glasses',
      // TODO: Owner to confirm lens material
      material: 'Blue-cut lenses',
      tag: null,
      description: 'Computer spectacles filtering digital screen glare during screen work.',
      // TODO: Owner to confirm specifications (max 2 bullets, no spec claims)
      features: ['Blue light filter', 'Screen comfort'],
    },
    {
      id: 4,
      category: 'sunglasses',
      brand: 'Fastrack',
      showBrand: false,
      bgColor: '#F2F3F5',
      name: 'Polarized Aviator Sunglasses',
      photo: 'fastrack-aviator.webp',
      aliases: ['fastrack-navigator.webp'],
      alt: 'Polarized aviator sunglasses',
      // TODO: Owner to confirm sunglass material
      material: 'Sunglasses',
      tag: null,
      description: 'Classic double-bridge sunglasses with polarized lenses to cut outdoor glare.',
      // TODO: Owner to confirm specifications (max 2 bullets, no spec claims)
      features: ['Polarized sun lenses', 'Double bridge design'],
    },
    {
      id: 5,
      category: 'frames',
      brand: "St. Mark's",
      showBrand: false,
      bgColor: '#F2F3F5',
      name: 'Minimalist Rimless Spectacles',
      photo: 'st-marks-rimless.webp',
      alt: 'Minimalist rimless spectacles',
      // TODO: Owner to confirm frame material
      material: 'Rimless frame',
      tag: null,
      description: 'Lightweight rimless spectacles with sleek bridge and temples for an unobstructed view.',
      // TODO: Owner to confirm specifications (max 2 bullets, no spec claims)
      features: ['Lightweight rimless profile', 'Adjustable nose pads'],
    },
    {
      id: 6,
      category: 'progressives',
      brand: 'Crizal',
      showBrand: false,
      bgColor: '#F2F3F5',
      name: 'Progressive Eyewear Lenses',
      photo: 'crizal-progressive.webp',
      alt: 'Progressive optical lenses',
      // TODO: Owner to confirm lens material
      material: 'Progressive lenses',
      tag: null,
      description: 'Vision transitions between distance, computer, and reading zones without bifocal lines.',
      // TODO: Owner to confirm specifications (max 2 bullets, no spec claims)
      features: ['Seamless multifocal transition', 'Wide reading zone'],
    },
    {
      id: 7,
      category: 'blue-cut',
      brand: 'IDEE',
      showBrand: false,
      bgColor: '#F2F3F5',
      name: 'Hexagonal Blue-Cut Spectacles',
      photo: 'idee-hexagonal.webp',
      aliases: ['idee-blue-blocker.webp'],
      alt: 'Hexagonal blue-cut spectacles',
      // TODO: Owner to confirm frame material
      material: 'Metal frame',
      tag: null,
      description: 'Geometric hexagonal frame fitted with blue light filtering lenses for screen work.',
      // TODO: Owner to confirm specifications (max 2 bullets, no spec claims)
      features: ['Blue light protection', 'Slim metal temples'],
    },
    {
      id: 8,
      category: 'contacts',
      brand: 'Bausch + Lomb',
      showBrand: false,
      bgColor: '#F2F3F5',
      name: 'Daily Soft Contact Lenses',
      photo: 'bausch-lomb-purevision.webp',
      aliases: ['bausch-lomb.webp', 'bausch-lomb-contacts.webp'],
      alt: 'Daily soft contact lenses',
      // TODO: Owner to confirm contact lens material
      material: 'Contact lenses',
      tag: null,
      description: 'Contact lenses providing clear vision and comfortable wear throughout the day.',
      // TODO: Owner to confirm specifications (max 2 bullets, no spec claims)
      features: ['Clear daily vision', 'Soft comfortable wear'],
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

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }))
  }

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    const matchesBrand =
      activeBrand === 'all' || p.brand.toLowerCase() === activeBrand.toLowerCase()
    return matchesCategory && matchesBrand
  })

  // Lens options: max 12 words each, plain wording
  const lensTech = [
    {
      icon: Shield,
      title: 'Digital Blue-Cut Shield',
      desc: 'Reduces glare from digital screens.',
    },
    {
      icon: Sparkles,
      title: 'Anti-Reflective Clarity (AR)',
      desc: 'Reduces reflections and headlight glare.',
    },
    {
      icon: SunMedium,
      title: 'Photochromic Lenses',
      desc: 'Lenses that darken under sunlight and clear quickly indoors.',
    },
    {
      icon: Feather,
      title: 'High-Index Ultra Thin',
      desc: 'Slimmer, lightweight lenses designed for higher power prescriptions.',
    },
  ]

  return (
    <div className="space-y-0 bg-white">
      {/* 1. Header & Hero */}
      <section className="bg-gradient-to-b from-[#F5F6F8] to-white py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.22em] uppercase font-body block">
              Optical Showroom & Eye Testing
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-[1.15]">
              The Eyewear Collection
            </h1>

            <div className="w-12 h-[2px] bg-[#D4A017] mx-auto my-3" />

            <p className="font-body text-slate-600 text-[15px] sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Browse spectacles, frames, blue-cut lenses and sunglasses at {business.name}.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
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

      {/* 2. Products Filter Tabs: Pill style, horizontally scrollable, right-edge fade gradient */}
      <nav
        id="filter-bar"
        aria-label="Filter products"
        style={{ top: 'var(--navbar-height, 72px)' }}
        className="sticky z-40 bg-white border-b border-slate-200 shadow-[0_2px_8px_rgba(11,37,69,0.03)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-2.5 flex items-center justify-between gap-4 relative">
            {/* Right edge fade gradient on mobile */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent md:hidden z-10" />

            {/* Filter Tabs Container */}
            <div
              ref={tabsContainerRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 pr-8 md:pr-0 w-full"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    data-active={isActive ? 'true' : 'false'}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`shrink-0 font-body text-xs sm:text-sm font-semibold rounded-full px-4 py-2 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98] ${
                      isActive
                        ? 'bg-[#0B2545] text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {cat.name}
                  </button>
                )
              })}
            </div>

            {/* Reset button if filter is active */}
            {(activeCategory !== 'all' || activeBrand !== 'all') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#D4A017] hover:underline cursor-pointer shrink-0 pl-2 ml-auto z-20"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* 3. Product Showcase Grid (Tightened top spacing to remove blank gap) */}
      <section id="products-showcase" className="pt-5 pb-12 sm:pb-16 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header count summary */}
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 text-xs text-slate-500">
            <span>
              Displaying <strong className="font-semibold text-primary">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'eyewear style' : 'eyewear styles'}
            </span>
            <span className="hidden sm:inline-block font-body text-slate-400">
              Visit our showroom to try frames in person.
            </span>
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 px-4 bg-[#F5F6F8] rounded-xl border border-slate-200 max-w-md mx-auto space-y-4">
              <h3 className="font-serif text-xl font-normal text-primary">
                No styles found in this collection
              </h3>
              <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                We couldn't locate any eyewear matching the active category filter.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="bg-primary hover:bg-primary-800 text-white font-body font-semibold text-xs py-2.5 px-5 rounded-lg transition-colors cursor-pointer active:scale-[0.98]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            /* Product Grid: 1 col mobile, 2 col tablet, 4 col desktop */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {filteredProducts.map((item, index) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  index={index}
                  onSelectProduct={setSelectedProduct}
                  isImageLoaded={Boolean(loadedImages[item.id])}
                  onImageLoad={handleImageLoad}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Quick View Bottom Sheet / Modal (Bottom sheet on mobile, dialog on desktop) */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-primary-950/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden animate-fade-in"
          onClick={() => setSelectedProduct(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-h-[85vh] sm:max-h-[90vh] sm:max-w-3xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-product-title"
          >
            {/* Mobile drag handle */}
            <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto mt-3 mb-1 sm:hidden" />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 sm:bg-white/90 hover:bg-slate-200 sm:hover:bg-white text-slate-500 hover:text-primary border border-slate-200 shadow-xs flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close product quick view"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Product Image Container */}
              <div className="md:col-span-6 bg-[#F2F3F5] aspect-[4/3] sm:aspect-square flex items-center justify-center relative border-b md:border-b-0 md:border-r border-slate-200 overflow-hidden">
                <img
                  src={selectedProduct.photo}
                  alt={selectedProduct.alt || selectedProduct.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Details & Actions */}
              <div className="md:col-span-6 p-5 sm:p-7 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  {selectedProduct.showBrand && (
                    <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.2em] uppercase font-body block">
                      {selectedProduct.brand}
                    </span>
                  )}

                  <div>
                    <h2
                      id="modal-product-title"
                      className="font-serif text-xl sm:text-2xl font-bold text-primary leading-tight"
                    >
                      {selectedProduct.name}
                    </h2>
                    <p className="font-body text-xs sm:text-sm font-medium text-slate-500 mt-1">
                      {selectedProduct.material}
                    </p>
                  </div>

                  <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Feature Checklist (bullets moved to modal) */}
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

                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80">
                    <MapPin className="w-3.5 h-3.5 text-[#D4A017] shrink-0" />
                    <span>Available for in-person fitting on JN Road</span>
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
                    className="flex-1 min-h-11 bg-[#0B2545] hover:bg-primary-800 active:scale-[0.98] text-white text-xs sm:text-sm font-body font-semibold py-2.5 px-4 rounded-lg shadow-xs inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <Link
                    to="/contact"
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 min-h-11 border border-slate-200 hover:bg-slate-50 active:scale-[0.98] inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-body font-semibold text-primary hover:text-accent transition-colors py-2.5 px-4 rounded-lg cursor-pointer"
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

      {/* 5. Lens Technology Breakdown (Alternating bg-slate-50) */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.2em] uppercase font-body block">
              Lens Options
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Choose the right lenses
            </h2>
            <div className="w-12 h-[2px] bg-[#D4A017] mx-auto my-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {lensTech.map((lt) => {
              const IconComponent = lt.icon
              return (
                <div
                  key={lt.title}
                  className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-[0_2px_12px_rgba(11,37,69,0.04)] space-y-3"
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
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.22em] uppercase font-body block">
            Personalized Frame Fitting
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Find the Perfect Frame for Your Face
          </h2>

          <div className="w-12 h-[2px] bg-[#D4A017] mx-auto my-3" />

          <p className="font-body text-slate-300 text-[15px] sm:text-lg max-w-2xl mx-auto leading-relaxed">
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
