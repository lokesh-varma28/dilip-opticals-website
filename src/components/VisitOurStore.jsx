import { MapPin, Clock, Navigation, MessageCircle, Store, Phone, Star, ExternalLink } from 'lucide-react'
import business from '../data/business'

export default function VisitOurStore() {
  const mapEmbedUrl = business.mapEmbedUrl
  const telUrl = `tel:${business.phone}`

  return (
    <section id="visit-us" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 scroll-mt-16">
      {/* Anchor alias so any legacy links to #branches still resolve smoothly */}
      <div id="branches" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            Our Rajahmundry Store
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Visit Our Store
          </h2>

          <p className="font-body text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Visit {business.name} on JN Road for computerized digital eye testing, master frame fitting, and personal vision care consultation.
          </p>
        </div>

        {/* Responsive Layout: One Card Next to Embedded Google Map; Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Store Details & Actions Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Header & Brand Icon */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center border border-primary-100 shrink-0">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary">
                      {business.name}
                    </h3>
                    <p className="font-body text-xs text-slate-500 font-medium">
                      Eyewear Studio & Diagnostic Vision Care
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Reviews Trust Pill */}
              <a
                href={business.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 text-slate-800 text-xs font-medium transition-colors group shadow-2xs"
                title="View reviews on Google Maps"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 shrink-0" />
                <span className="font-semibold text-slate-900">{business.googleRating}</span>
                <span className="text-slate-400">·</span>
                <span>{business.reviewCount} Google reviews</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-primary transition-colors ml-0.5" />
              </a>

              {/* Address, Hours, and Phone */}
              <div className="pt-4 space-y-4 border-t border-slate-100">
                {/* Full Address */}
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-sm font-body">
                    <strong className="block font-heading font-semibold text-slate-900">
                      Store Address
                    </strong>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {business.address}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3 text-slate-600">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-sm font-body">
                    <strong className="block font-heading font-semibold text-slate-900">
                      Opening Hours
                    </strong>
                    <p className="font-body text-xs sm:text-sm text-slate-700 font-medium">
                      {business.hours}
                    </p>
                  </div>
                </div>

                {/* Contact Phone */}
                <div className="flex items-start gap-3 text-slate-600">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-sm font-body">
                    <strong className="block font-heading font-semibold text-slate-900">
                      Phone Number
                    </strong>
                    <a
                      href={telUrl}
                      className="font-body text-xs sm:text-sm text-slate-700 font-medium hover:text-primary transition-colors block"
                    >
                      {business.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Call / WhatsApp / Get Directions */}
            <div className="pt-5 border-t border-slate-100 flex flex-wrap sm:flex-nowrap items-center gap-2.5">
              {/* Call Button */}
              <a
                href={telUrl}
                className="flex-1 min-w-[90px] bg-slate-50 hover:bg-slate-100 text-primary font-heading font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl border border-slate-200 inline-flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                title={`Call ${business.name}`}
                aria-label={`Call ${business.name}`}
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>Call</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[105px] bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-heading font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl border border-emerald-200 inline-flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                title={`Message ${business.name} on WhatsApp`}
                aria-label={`WhatsApp ${business.name}`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              {/* Get Directions Button */}
              <a
                href={business.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 min-w-[130px] bg-primary hover:bg-primary-800 text-white font-heading font-semibold text-xs sm:text-sm py-2.5 px-3.5 rounded-xl shadow-xs inline-flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-accent" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map iframe */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card min-h-[380px] sm:min-h-[460px] relative">
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full min-h-[380px] sm:min-h-[460px] border-0"
              loading="lazy"
              title={`${business.name} Location Map`}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
