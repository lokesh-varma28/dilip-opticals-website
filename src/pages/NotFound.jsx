import { Link } from 'react-router-dom'
import { Glasses, Home, Phone, MessageCircle } from 'lucide-react'
import business from '../data/business'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Optical 404 Visual Icon */}
        <div className="relative inline-block">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary shadow-soft mx-auto">
            <Glasses className="w-12 h-12 sm:w-14 sm:h-14 text-primary" />
          </div>
          <span className="absolute -bottom-2 -right-2 px-3 py-1 bg-accent text-primary font-heading font-black text-xs rounded-full border-2 border-white shadow-xs">
            404
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-3">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Can't Find That View
          </h1>
          <p className="font-body text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, renamed, or no longer exists. Let's get your vision back on track.
          </p>
        </div>

        {/* Quick Route Links */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="bg-primary hover:bg-primary-800 text-white font-heading font-bold text-sm py-3 px-6 rounded-xl shadow-soft hover:shadow-card active:scale-95 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4 text-accent" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/products"
            className="bg-white hover:bg-slate-50 text-primary border border-slate-200 font-heading font-semibold text-sm py-3 px-6 rounded-xl shadow-2xs hover:border-slate-300 transition-all duration-200 inline-flex items-center gap-2"
          >
            <span>Browse Eyewear</span>
          </Link>

          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-400 text-primary font-heading font-bold text-sm py-3 px-6 rounded-xl shadow-soft transition-all duration-200 inline-flex items-center gap-2"
          >
            <span>Contact & Visit</span>
          </Link>
        </div>

        {/* Store Help Card */}
        <div className="pt-6 border-t border-slate-200/80">
          <p className="font-heading text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
            Need Immediate Help from {business.name}?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-body text-slate-600">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-primary font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>Call: {business.phoneDisplay}</span>
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
