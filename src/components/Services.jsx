import { ScanEye, Glasses, Droplets, Wrench, ArrowRight } from 'lucide-react'
import business from '../data/business'

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'eye-testing',
      icon: ScanEye,
      title: 'Computerized Eye Testing',
      description: 'Advanced digital refraction and corneal analysis for pin-point accurate vision prescriptions.',
      badge: 'Certified Optometrists',
    },
    {
      id: 'prescription-glasses',
      icon: Glasses,
      title: 'Prescription Glasses & Fashion Frames',
      description: 'Extensive curated collection of designer, lightweight titanium, and blue-cut digital frames.',
      badge: '1000+ Styles',
    },
    {
      id: 'contact-lenses',
      icon: Droplets,
      title: 'Contact Lenses & Solutions',
      description: 'Premium daily, monthly, and toric contact lenses with sterile hydrating solutions and fittings.',
      badge: 'Leading Brands',
    },
    {
      id: 'frame-maintenance',
      icon: Wrench,
      title: 'Frame Adjustment & Maintenance',
      description: 'Complimentary ultrasonic deep cleaning, nose-pad renewal, screw adjustments, and custom fitting.',
      badge: 'Complimentary In-Store',
    },
  ]

  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Our Clinical & Optical Services
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Dedicated Eye Care Excellence
          </h2>

          <p className="font-body text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Combining over {business.yearsInBusiness} years of clinical precision in Rajahmundry with modern diagnostic technology and curated global eyewear.
          </p>
        </div>

        {/* 4 Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                role="button"
                tabIndex={0}
                onClick={() => onSelectService?.(service)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onSelectService?.(service)
                  }
                }}
                className="group relative bg-white rounded-xl p-7 border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Top: Navy Icon & Pill */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    {/* Navy Icon Container */}
                    <div className="w-14 h-14 rounded-xl bg-primary-50/80 border border-primary-100/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-colors duration-300 shadow-xs">
                      <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>

                    <span className="font-body text-[11px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-primary group-hover:text-primary transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* One-line Description */}
                  <p className="font-body text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Interactive Footer Link */}
                <div className="pt-6 mt-6 border-t border-slate-100/80 flex items-center text-xs font-heading font-semibold text-primary group-hover:text-accent transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
