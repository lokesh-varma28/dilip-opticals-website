import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Navigation } from 'lucide-react'
import business from '../data/business'

export default function MobileBottomBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleMenuState = (e) => {
      if (e?.detail && typeof e.detail.isOpen === 'boolean') {
        setIsMenuOpen(e.detail.isOpen)
      }
    }

    window.addEventListener('mobile-menu-state', handleMenuState)
    return () => window.removeEventListener('mobile-menu-state', handleMenuState)
  }, [])

  if (isMenuOpen) {
    return null
  }

  return (
    <aside
      aria-label="Quick contact actions"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      className="md:hidden fixed inset-x-0 bottom-0 z-30 bg-[#0B2545] border-t border-primary-800 text-white shadow-[0_-4px_20px_rgba(11,37,69,0.25)]"
    >
      <div className="grid grid-cols-3 divide-x divide-white/10">
        {/* Call */}
        <a
          href={`tel:${business.phone}`}
          className="min-h-12 py-2 flex flex-col items-center justify-center gap-1 text-[11px] font-heading font-semibold text-slate-200 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all"
          aria-label={`Call ${business.name}`}
        >
          <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-12 py-2 flex flex-col items-center justify-center gap-1 text-[11px] font-heading font-semibold text-slate-200 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all"
          aria-label="Message on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#D4A017] shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={business.googleListingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-12 py-2 flex flex-col items-center justify-center gap-1 text-[11px] font-heading font-semibold text-slate-200 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all"
          aria-label="Get directions on Google Maps"
        >
          <Navigation className="w-4 h-4 text-[#D4A017] shrink-0" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  )
}
