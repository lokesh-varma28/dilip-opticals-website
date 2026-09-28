import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBrands from './components/TrustedBrands'
import Services from './components/Services'
import AboutSection from './components/AboutSection'
import VisitOurStore from './components/VisitOurStore'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { CheckCircle2, X } from 'lucide-react'
import business from './data/business'

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  const handleOpenAppointment = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      setAppointmentModalOpen(true)
    }
  }

  return (
    <div className="min-h-screen bg-white text-primary flex flex-col font-body selection:bg-accent/20 selection:text-primary">
      {/* Sticky Responsive Navbar */}
      <Navbar onBookAppointment={handleOpenAppointment} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Dilip Optics Grand Hero Section */}
        <Hero onBookEyeTest={handleOpenAppointment} />

        {/* Trusted Brands Strip */}
        <TrustedBrands />

        {/* Services Section */}
        <Services onSelectService={handleOpenAppointment} />

        {/* About Us Section */}
        <AboutSection />

        {/* Visit Our Store Section */}
        <VisitOurStore />

        {/* Contact & Appointment Booking Section */}
        <ContactSection />
      </main>

      {/* Appointment Booking Modal */}
      {appointmentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-elevated border border-slate-100 p-6 sm:p-8 max-w-md w-full space-y-5 relative">
            <button
              type="button"
              onClick={() => setAppointmentModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-primary p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary">Book an Appointment</h3>
                <p className="font-body text-xs text-slate-500">{business.name} • Rajahmundry</p>
              </div>
            </div>

            <p className="font-body text-sm text-slate-600">
              Schedule your comprehensive eye checkup or personal frame styling session with our certified optometrists.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formEl = e.currentTarget
                const name = formEl.elements.namedItem('name')?.value || ''
                const phone = formEl.elements.namedItem('phone')?.value || ''
                const today = new Date().toISOString().split('T')[0]
                const messageText = `Hi, I'd like to book an eye test. Name: ${name.trim()}, Phone: ${phone.trim()}, Preferred date: ${today}, Notes: None`
                window.open(`https://wa.me/919676955558?text=${encodeURIComponent(messageText)}`, '_blank', 'noopener,noreferrer')
                setAppointmentModalOpen(false)
              }}
              className="space-y-4"
            >
              <div className="space-y-3">
                <div>
                  <label htmlFor="modal-name" className="block font-heading text-xs font-semibold text-primary mb-1">
                    Full Name
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block font-heading text-xs font-semibold text-primary mb-1">
                    Phone Number
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="+91 98765 XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-sm py-2.5 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 cursor-pointer"
                >
                  Confirm Booking
                </button>
                <button
                  type="button"
                  onClick={() => setAppointmentModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-heading text-sm hover:bg-slate-50 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Footer Component */}
      <Footer />
    </div>
  )
}

