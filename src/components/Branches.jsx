import { MapPin, Clock, Navigation, MessageCircle, Store, Sparkles, Phone } from 'lucide-react'


export default function Branches() {
  const branches = [
    {
      id: 'av-appa-rao-road',
      name: 'AV Appa Rao Road Branch',
      subtitle: 'Vision Care & Dispensary',
      landmark: 'Near Naveen Emergency, Opposite Savera Bar',
      area: 'AV Appa Rao Road, Rajahmundry, Andhra Pradesh',
      timings: 'Mon – Sat: 9:30 AM – 8:30 PM',
      phone: '+91 99497 04909',
      whatsapp: '919949704909',
      mapQuery: 'Dilip Opticals, Near Naveen Emergency, Opposite Savera Bar, AV Appa Rao Road, Rajahmundry, Andhra Pradesh',
      isFlagship: false,
    },
    {
      id: 'dilip-optics-grand',
      name: 'Dilip Optics Grand',
      subtitle: 'Flagship Showroom • Est. 2013',
      landmark: 'Near Ravindra Bharathi School, Opposite Reliance Digital',
      area: 'JN Road, Gandhipuram, Rajahmundry, Andhra Pradesh',
      timings: 'Mon – Sun: 9:30 AM – 9:00 PM',
      phone: '+91 96769 55558',
      whatsapp: '919676955558',
      mapQuery: 'Dilip Optics Grand, Near Ravindra Bharathi School, Opposite Reliance Digital, JN Road, Gandhipuram, Rajahmundry, Andhra Pradesh',
      isFlagship: true,
      badge: 'Flagship Store',
    },
    {
      id: 'vikas-nagar',
      name: 'Vikas Nagar Branch',
      subtitle: 'Optical Studio & Testing',
      landmark: 'Near Reliance Digital, Opposite Bajaj Electronic',
      area: 'Vikas Nagar, Rajahmundry, Andhra Pradesh',
      timings: 'Mon – Sat: 9:30 AM – 8:30 PM',
      phone: '+91 99497 04909',
      whatsapp: '919949704909',
      mapQuery: 'Dilip Opticals, Near Reliance Digital, Opposite Bajaj Electronic, Vikas Nagar, Rajahmundry, Andhra Pradesh',
      isFlagship: false,
    },
    {
      id: 't-nagar',
      name: 'T Nagar Branch',
      subtitle: 'Eyewear & Lens Studio',
      landmark: 'Near Ambedkar Bomma',
      area: 'T Nagar, Rajahmundry, Andhra Pradesh',
      timings: 'Mon – Sat: 9:30 AM – 8:30 PM',
      phone: '+91 99497 04909',
      whatsapp: '919949704909',
      mapQuery: 'Dilip Opticals, Near Ambedkar Bomma, T Nagar, Rajahmundry, Andhra Pradesh',
      isFlagship: false,
    },
  ]

  return (
    <section id="branches" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            Our Rajahmundry Showrooms
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Visit Dilip Opticals Near You
          </h2>

          <p className="font-body text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Four convenient optical centers equipped with digital eye testing, master frame fitting, and immediate prescription assistance.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {branches.map((branch) => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              branch.mapQuery
            )}`
            const whatsappUrl = `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(
              `Hello Dilip Opticals, I would like to inquire about the ${branch.name}.`
            )}`
            const telUrl = `tel:${branch.phone.replace(/[\s\-()]/g, '')}`

            return (
              <div
                key={branch.id}
                className="group relative bg-white rounded-xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Badge & Store Icon */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center border border-primary-100 group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                        <Store className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary group-hover:text-primary transition-colors">
                          {branch.name}
                        </h3>
                        <p className="font-body text-xs text-slate-500 font-medium">
                          {branch.subtitle}
                        </p>
                      </div>
                    </div>

                    {branch.isFlagship && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-heading text-xs font-bold uppercase tracking-wider border border-amber-200/80 shrink-0">
                        <Sparkles className="w-3 h-3 text-amber-700" />
                        {branch.badge}
                      </span>
                    )}
                  </div>

                  {/* Details: Address, Timings and Phone */}
                  <div className="pt-2 space-y-3 border-t border-slate-100">
                    {/* Landmark & Address */}
                    <div className="flex items-start gap-3 text-slate-600">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div className="space-y-0.5 text-sm font-body">
                        <p className="font-semibold text-slate-800">{branch.landmark}</p>
                        <p className="text-slate-500 text-xs">{branch.area}</p>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-center gap-3 text-slate-600">
                      <Clock className="w-5 h-5 text-primary shrink-0" />
                      <p className="font-body text-sm text-slate-700 font-medium">
                        {branch.timings}
                      </p>
                    </div>

                    {/* Contact Number */}
                    <div className="flex items-center gap-3 text-slate-600">
                      <Phone className="w-5 h-5 text-accent shrink-0" />
                      <a
                        href={telUrl}
                        className="font-body text-sm text-slate-700 font-medium hover:text-primary transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions: Get Directions, WhatsApp & Call */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap sm:flex-nowrap items-center gap-2.5">
                  {/* Get Directions Button */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] bg-primary hover:bg-primary-800 text-white font-heading font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-xs inline-flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 text-accent" />
                    <span>Get Directions</span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-heading font-semibold text-xs py-2.5 px-3 rounded-xl border border-emerald-200 inline-flex items-center gap-1.5 transition-colors active:scale-95"
                    title={`Message ${branch.name} on WhatsApp`}
                    aria-label={`WhatsApp ${branch.name}`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Call Button */}
                  <a
                    href={telUrl}
                    className="bg-slate-50 hover:bg-slate-100 text-primary font-heading font-semibold text-xs py-2.5 px-3 rounded-xl border border-slate-200 inline-flex items-center gap-1.5 transition-colors active:scale-95"
                    title={`Call ${branch.name} at ${branch.phone}`}
                    aria-label={`Call ${branch.name}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <span>Call</span>
                  </a>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
