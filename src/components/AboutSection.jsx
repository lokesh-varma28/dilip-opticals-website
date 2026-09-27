import { Sparkles, Award, ShieldCheck, HeartHandshake, MapPin, CheckCircle2 } from 'lucide-react'
import dilipRealPhoto from '../assets/dilip-opticals-real.jpg'

export default function AboutSection() {
  const pillars = [
    {
      icon: Award,
      title: '58+ Years of Heritage',
      description: 'Founded in 1967 in Rajahmundry, we have proudly served three generations of families with clinical integrity and optical dedication.',
    },
    {
      icon: ShieldCheck,
      title: 'Clinical Precision',
      description: 'Every prescription is checked using computerized auto-refractometers and verified by certified senior optometrists.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Ergonomics',
      description: 'Custom frame fitting, pupil distance calibration, and tailored progressive lens alignments for effortless all-day clarity.',
    },
  ]

  const milestones = [
    { year: '1967', title: 'The Beginning', desc: 'First optical dispensary established in Rajahmundry.' },
    { year: '2013', title: 'Dilip Optics Grand', desc: 'Inauguration of flagship showroom on JN Road.' },
    { year: 'Present', title: '4 Showrooms', desc: 'Serving the Godavari region with modern diagnostic care.' },
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-slate-50/70 border-b border-slate-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Responsive Heritage Header: Text on One Side, Real Shop Photo on the Other */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Column 1: Heading + Description Text */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Our Heritage & Story
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-[1.15]">
              A Legacy of Vision Care Since 1967
            </h2>

            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
              What started in 1967 as a humble optical dispensary in Rajahmundry has grown into four landmark showrooms trusted across the Godavari region for genuine optics and ethical patient care.
            </p>

            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              For nearly six decades, Dilip Opticals has stood for clinical accuracy, authentic branded lenses, and personalized eyewear styling for three generations of discerning families.
            </p>

            {/* Quick Heritage Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-200/80">
              <div className="border-l-2 border-accent pl-3 sm:pl-4">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">58+</div>
                <div className="font-body text-xs text-slate-500 font-medium">Years of Heritage</div>
              </div>
              <div className="border-l-2 border-accent pl-3 sm:pl-4">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">4 Stores</div>
                <div className="font-body text-xs text-slate-500 font-medium">In Rajahmundry</div>
              </div>
              <div className="border-l-2 border-accent pl-3 sm:pl-4 col-span-2 sm:col-span-1">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">3rd Gen</div>
                <div className="font-body text-xs text-slate-500 font-medium">Family Optometry</div>
              </div>
            </div>
          </div>

          {/* Column 2: Real Shop Photo (Enhanced Heritage Image Presentation) */}
          <div className="lg:col-span-5 w-full relative">
            {/* Decorative blurred gold circle behind the image (positioned top-right, low opacity, purely decorative) */}
            <div
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#C9A227]/20 blur-3xl pointer-events-none -z-0"
              aria-hidden="true"
            />

            <div className="relative z-10 bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl border-[1.5px] border-[#C9A227] shadow-[0_24px_50px_-12px_rgba(11,37,69,0.35),0_12px_24px_-8px_rgba(11,37,69,0.2)] hover:shadow-[0_32px_64px_-12px_rgba(11,37,69,0.45)] transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100">
                <img
                  src={dilipRealPhoto}
                  alt="Dilip Opticals authentic optical dispensary in Rajahmundry"
                  width="800"
                  height="600"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  style={{ filter: 'contrast(1.05) saturate(1.08)' }}
                  loading="lazy"
                />
                {/* Subtle Gradient & Tag Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent pointer-events-none" />

                {/* Caption Strip */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white pointer-events-none">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#0B2545]/95 via-[#091f3a]/95 to-[#07172c]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs font-medium shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="truncate">Dilip Opticals Dispensary • Rajahmundry</span>
                  </div>
                  <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md bg-accent text-primary text-[11px] font-heading font-bold uppercase tracking-wider shadow-sm">
                    Est. 1967
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-7 border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-accent flex items-center justify-center border border-primary-100">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Heritage Timeline & Trust Banner (Zero bitmap images) */}
        <div className="bg-primary text-white rounded-2xl p-6 sm:p-10 shadow-card border border-primary-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-primary-800/80">
            {milestones.map((item, idx) => (
              <div key={item.year} className={`${idx !== 0 ? 'pt-6 md:pt-0 md:pl-8' : ''} space-y-2`}>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-heading text-xs font-bold uppercase tracking-wider">
                  {item.year}
                </div>
                <h4 className="font-heading font-bold text-lg text-white">
                  {item.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-primary-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-primary-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-primary-200">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>4 Convenient Optical Showrooms in Rajahmundry, Andhra Pradesh</span>
            </span>
            <span className="text-accent font-heading font-semibold">
              Trusted by 3+ Generations • Est. 1967
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
