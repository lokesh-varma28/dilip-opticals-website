import { Glasses, MapPin, Clock, ArrowUp } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Showroom Branches', href: '#branches' },
    { name: 'Book Appointment', href: '#contact' },
  ]

  const branches = [
    {
      name: 'AV Appa Rao Road',
      detail: 'Near Naveen Emergency, opp. Savera Bar',
    },
    {
      name: 'Dilip Optics Grand (JN Road)',
      detail: 'Gandhipuram, opp. Reliance Digital (Est. 2013)',
    },
    {
      name: 'Vikas Nagar Branch',
      detail: 'Near Reliance Digital, opp. Bajaj Electronic',
    },
    {
      name: 'T Nagar Branch',
      detail: 'Near Ambedkar Bomma',
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0B2545] text-slate-300 border-t border-primary-800 relative z-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-accent">
                <Glasses className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-white tracking-tight leading-none">
                  Dilip Opticals
                </span>
                <span className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-accent mt-1 leading-none">
                  Since 1967
                </span>
              </div>
            </div>

            <p className="font-body text-slate-300/90 text-sm leading-relaxed max-w-sm">
              Rajahmundry’s trusted optical landmark for over 58 years. Providing computerized eye testing, luxury spectacle frames, and high-precision prescription lenses.
            </p>

            {/* Social Icons Placeholders */}
            <div className="pt-2">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Follow Our Collections
              </p>
              <div className="flex items-center gap-3">
                {/* Instagram Placeholder */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/15 text-slate-300 hover:text-accent flex items-center justify-center transition-all duration-200 active:scale-95"
                  aria-label="Instagram (Dilip Opticals)"
                  title="Follow Dilip Opticals on Instagram"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* Facebook Placeholder */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/15 text-slate-300 hover:text-accent flex items-center justify-center transition-all duration-200 active:scale-95"
                  aria-label="Facebook (Dilip Opticals)"
                  title="Follow Dilip Opticals on Facebook"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-accent transition-colors duration-150 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/60"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: All 4 Branches in a Compact List (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Rajahmundry Branches
            </h4>
            <ul className="space-y-3 font-body text-xs sm:text-sm">
              {branches.map((b) => (
                <li key={b.name} className="flex items-start gap-2.5 group">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-semibold text-white group-hover:text-accent transition-colors block">
                      {b.name}
                    </span>
                    <span className="text-slate-400 text-xs block leading-tight">
                      {b.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Timings & Hotline (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Hours & Info
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="block text-white font-medium">Mon – Sat:</span>
                  <span className="text-slate-400">9:30 AM – 8:30 PM</span>
                  <span className="block text-white font-medium mt-1">Sunday:</span>
                  <span className="text-slate-400">9:30 AM – 1:30 PM</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="block text-[11px] font-heading uppercase tracking-wider text-slate-400">
                  Quick Appointment
                </span>
                <a
                  href="https://wa.me/919676955558?text=Hello%20Dilip%20Opticals%2C%20I%20would%20like%20to%20message%20you%20for%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-bold text-xs sm:text-sm text-accent hover:text-amber-400 transition-colors block mt-0.5"
                >
                  Message us on WhatsApp →
                </a>
                <a
                  href="tel:+919676955558"
                  className="font-heading font-semibold text-xs text-slate-300 hover:text-accent transition-colors block mt-1.5"
                >
                  Call: +91 96769 55558
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-slate-400">
          <div className="text-center sm:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} <strong className="text-white font-medium">Dilip Opticals</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-300/80">
              Established in 1967 in Rajahmundry • Certified Ophthalmic Dispensing & Vision Care
            </p>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-slate-300 hover:text-accent px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
