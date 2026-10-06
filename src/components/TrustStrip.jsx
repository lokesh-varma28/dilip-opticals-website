import { Star, Clock, MapPin } from 'lucide-react'
import business from '../data/business'

export default function TrustStrip() {
  return (
    <section className="bg-slate-50 border-y border-slate-200/90 py-3.5 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm text-slate-700">
          {/* Google Reviews */}
          <a
            href={business.googleListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group"
            title="View Dilip Optics Grand on Google Maps"
          >
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 shrink-0" />
              <span className="font-bold text-slate-900">{business.googleRating}</span>
            </div>
            <span className="font-medium text-slate-600 group-hover:underline">
              {business.reviewCount} Google reviews
            </span>
          </a>

          <span className="hidden md:inline text-slate-300" aria-hidden="true">|</span>

          {/* Operating Hours */}
          <div className="inline-flex items-center gap-2 text-slate-600">
            <Clock className="w-4 h-4 text-accent shrink-0" />
            <span className="font-medium">
              Open daily 9:30 AM – 9:00 PM
            </span>
          </div>

          <span className="hidden md:inline text-slate-300" aria-hidden="true">|</span>

          {/* Location */}
          <div className="inline-flex items-center gap-2 text-slate-600">
            <MapPin className="w-4 h-4 text-accent shrink-0" />
            <span className="font-medium">
              JN Road, Gandhipuram
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
