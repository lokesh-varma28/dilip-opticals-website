import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Glasses,
  Sun,
  Laptop,
  Sparkles,
  ShieldCheck,
  Eye,
  CheckCircle2,
  Calendar,
  ArrowRight,
  MessageCircle,
  Layers,
  MapPin,
} from 'lucide-react'
import TrustedBrands from '../components/TrustedBrands'
import business from '../data/business'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'frames', name: 'Spectacles & Frames' },
    { id: 'blue-cut', name: 'Blue-Cut & Computer' },
    { id: 'sunglasses', name: 'Sunglasses' },
    { id: 'progressives', name: 'Progressive Lenses' },
    { id: 'contacts', name: 'Contact Lenses' },
  ]

  const products = [
    {
      id: 1,
      category: 'frames',
      name: 'Ultra-Lightweight Titanium Pure',
      material: 'Aerospace Grade Japanese Titanium',
      tag: 'Best Seller',
      weight: '12 grams',
      description: 'Featherlight and hypoallergenic. Flexible beta-titanium temples designed for all-day pressure-free wearing.',
      features: ['Corrosion Proof', 'Screwless Flex Hinge', 'Hypoallergenic'],
    },
    {
      id: 2,
      category: 'frames',
      name: 'Classic Handcrafted Acetate Wayfarer',
      material: 'Organic Italian Acetate',
      tag: 'Iconic Classic',
      weight: '24 grams',
      description: 'Rich, glossy tortoiseshell and deep black tones with reinforced multi-barrel metallic core hinges.',
      features: ['Hand-Polished Finish', 'Wide Field of View', 'Durable Core Wire'],
    },
    {
      id: 3,
      category: 'blue-cut',
      name: 'Crizal Shield Blue-Cut Glasses',
      material: 'High-Index Polycarbonate Lenses',
      tag: 'Screen Favorite',
      weight: 'Custom Fit',
      description: 'Engineered specifically for software engineers, students, and frequent screen users across Rajahmundry.',
      features: ['Filters High-Energy Blue Light', 'Anti-Glare Night Driving', 'Smudge & Scratch Resistant'],
    },
    {
      id: 4,
      category: 'sunglasses',
      name: 'Polarized Aviator Navigator',
      material: 'Stainless Steel & TAC Polarized Lenses',
      tag: 'UV400 Shield',
      weight: '18 grams',
      description: 'Eliminates blinding reflective glare from wet asphalt, water, and direct sunlight with high optical clarity.',
      features: ['100% UVA/UVB Protection', 'Category 3 Sun Filter', 'Double Brow Bar'],
    },
    {
      id: 5,
      category: 'frames',
      name: 'Executive Minimalist Rimless',
      material: 'Memory Titanium Bridge & Temples',
      tag: 'Premium Luxury',
      weight: '9 grams',
      description: 'Subtle and sophisticated. Invisible rimless construction that lets your natural facial features shine.',
      features: ['Featherlight Feel', 'Custom Lens Shapes', 'Zero Obstruction'],
    },
    {
      id: 6,
      category: 'progressives',
      name: 'Digital Freeform Progressive Lenses',
      material: 'Digitally Surfaced 1.60 / 1.67 Resin',
      tag: 'Precision Optics',
      weight: 'Laser Calibrated',
      description: 'Smooth corridors between distance, intermediate (computer), and reading zones without unsightly bifocal lines.',
      features: ['Wider Distortion-Free Corridor', 'Rapid Adaptation Guarantee', 'Custom Corridor Heights'],
    },
    {
      id: 7,
      category: 'blue-cut',
      name: 'Modern Hexagonal Blue-Blocker',
      material: 'Slim Metal Alloy Frame',
      tag: 'Trendy Style',
      weight: '15 grams',
      description: 'Contemporary geometric profile crafted in elegant rose gold, silver, and matte gunmetal finishes.',
      features: ['Digital Eye Strain Relief', 'Adjustable Silicone Pads', 'Comfort Ear Tips'],
    },
    {
      id: 8,
      category: 'contacts',
      name: 'Bausch + Lomb PureVision & SofLens',
      material: 'Silicone Hydrogel & Comfort Solutions',
      tag: 'High Oxygen',
      weight: 'Daily / Monthly',
      description: 'High-oxygen breathable contact lenses providing all-day moisture retention and crisp visual clarity.',
      features: ['Spherical & Toric Astigmatism', 'High Water Content', 'Multi-Purpose Solution Included'],
    },
  ]

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const lensTech = [
    {
      title: 'Digital Blue-Cut Shield',
      desc: 'Filters harmful 415-455nm blue wavelengths from monitors and phones to prevent digital eye strain and sleep disturbance.',
    },
    {
      title: 'Anti-Reflective Clarity (AR)',
      desc: 'Multi-layer anti-reflective coatings eliminate headlight glare during night driving and remove ghost reflections.',
    },
    {
      title: 'Photochromic Transitions',
      desc: 'Lenses that automatically darken under outdoor sunlight into sunglasses and turn crystal clear indoors.',
    },
    {
      title: 'High-Index Ultra Thin',
      desc: 'Compacted high-refractive resins (1.60, 1.67, 1.74) that keep strong power prescriptions lightweight and slim.',
    },
  ]

  return (
    <div className="space-y-0">
      {/* 1. Header & Hero */}
      <section className="bg-gradient-to-b from-primary-50/70 to-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
              <Glasses className="w-3.5 h-3.5 text-accent" />
              Eyewear & Lens Studio
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.12]">
              Curated Eyewear & Lens Collections
            </h1>

            <p className="font-body text-slate-600 text-lg sm:text-xl leading-relaxed">
              Discover lightweight titanium frames, classic handcrafted acetates, digital blue-cut lenses, and polarized sunglasses at {business.name}.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>1,000+ In-Store Styles</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>100% Genuine Branded Optics</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Try In-Person on JN Road</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter & Product Showcase */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4.5 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-soft'
                      : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-primary'
                  }`}
                >
                  {cat.name}
                </button>
              )
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Badge & Weight */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/70">
                      {item.tag}
                    </span>
                    <span className="font-body text-xs font-semibold text-slate-400">
                      {item.weight}
                    </span>
                  </div>

                  {/* Icon Card Header */}
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-accent transition-colors flex items-center justify-center border border-primary-100 shadow-xs">
                    {item.category === 'sunglasses' ? (
                      <Sun className="w-6 h-6" />
                    ) : item.category === 'blue-cut' ? (
                      <Laptop className="w-6 h-6" />
                    ) : item.category === 'contacts' ? (
                      <Eye className="w-6 h-6" />
                    ) : (
                      <Glasses className="w-6 h-6" />
                    )}
                  </div>

                  {/* Title & Material */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary group-hover:text-primary transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="font-body text-xs text-amber-700 font-medium mt-1">
                      {item.material}
                    </p>
                  </div>

                  <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Feature Bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={`${business.whatsapp}?text=${encodeURIComponent(
                      `Hi ${business.name}, I'm interested in the "${item.name}" (${item.material}). Could you share available colors and price details?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-heading font-semibold py-2.5 px-3 rounded-xl border border-emerald-200 inline-flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire</span>
                  </a>

                  <Link
                    to="/contact"
                    className="flex-1 bg-primary hover:bg-primary-800 text-white text-xs font-heading font-semibold py-2.5 px-3 rounded-xl inline-flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Try In-Store</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Lens Technology Breakdown */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
              <Layers className="w-3.5 h-3.5 text-accent" />
              Lens Engineering
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              High-Precision Lens Technologies
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              We partner with global optical innovators to deliver crystal-clear acuity and all-day eye protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {lensTech.map((lt) => (
              <div
                key={lt.title}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-soft space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-accent flex items-center justify-center border border-primary-100/80">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary">
                  {lt.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brand Partners */}
      <TrustedBrands />

      {/* 5. In-Store Trial Call to Action */}
      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Personalized Frame Fitting
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Find the Perfect Frame for Your Face
          </h2>

          <p className="font-body text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Visit our Rajahmundry store on JN Road to try on frames in person. Our certified optometrists will verify your prescription and ensure your frames sit perfectly on your bridge and temples.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-base py-3.5 px-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span>Visit Showroom & Book Trial</span>
            </Link>

            <Link
              to="/services"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-heading font-semibold text-base py-3 px-6 rounded-xl transition-all duration-200 inline-flex items-center gap-2"
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
