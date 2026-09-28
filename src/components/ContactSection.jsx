import { useState } from 'react'
import {
  Calendar,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  Send,
  Phone,
  Star,
  ExternalLink,
} from 'lucide-react'
import business from '../data/business'

export default function ContactSection() {
  // Form State without branch field
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Minimum date selectable is today
  const todayStr = new Date().toISOString().split('T')[0]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const getAppointmentWhatsAppUrl = (data = formData) => {
    const name = data.name.trim()
    const phone = data.phone.trim()
    const date = data.date.trim()
    const notes = data.message.trim() || 'None'
    const messageText = `Hi, I'd like to book an eye test. Name: ${name}, Phone: ${phone}, Preferred date: ${date}, Notes: ${notes}`
    return `https://wa.me/919676955558?text=${encodeURIComponent(messageText)}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')

    // Basic Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      setErrorMessage('Please fill in your name, phone number, and preferred date.')
      return
    }

    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.')
      return
    }

    setIsSubmitting(true)

    // Build URL and open in a new tab
    const waUrl = getAppointmentWhatsAppUrl()
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    } catch (err) {
      console.error('Failed to open WhatsApp window:', err)
    }

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      date: '',
      message: '',
    })
    setSubmitted(false)
    setErrorMessage('')
  }

  const defaultWhatsappUrl = `${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to schedule an eye test / frame consultation.`
  )}`

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              Appointments & Inquiries
            </div>

            {/* Google Trust Badge near Contact Section Header (No extra star character) */}
            <a
              href={business.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100/90 border border-amber-200/80 text-slate-800 text-xs sm:text-sm font-medium transition-colors shadow-xs group"
              title="View Google Reviews for Dilip Optics Grand"
            >
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              </div>
              <span className="font-semibold text-slate-900">{business.googleRating}</span>
              <span className="text-slate-400">·</span>
              <span>{business.reviewCount} Google reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors ml-0.5" />
            </a>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Book an Eye Test or Visit Us
          </h2>

          <p className="font-body text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule your computerized refraction examination, prescription frame fitting, or contact lens consultation with our optometrists.
          </p>
        </div>

        {/* Two-Column Layout on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-card">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <div className="flex items-center gap-2 text-primary font-heading font-bold text-xl sm:text-2xl">
                <span>Appointment Booking Form</span>
              </div>
              <p className="font-body text-slate-500 text-xs sm:text-sm mt-1">
                Fill out the form below. We'll confirm your slot on WhatsApp or by phone.
              </p>
            </div>

            {submitted ? (
              /* Success State */
              <div className="py-8 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100 shadow-xs">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">
                  Opening WhatsApp to send your request
                </h3>
                <p className="font-body text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-primary">{formData.name}</strong>. If WhatsApp did not open automatically,{' '}
                  <a
                    href={getAppointmentWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-semibold underline hover:text-emerald-800"
                  >
                    click here to send your message
                  </a>. We'll confirm your slot on WhatsApp or by phone.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={getAppointmentWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-heading font-bold text-sm px-6 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-slate-950" />
                    <span>Open WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-primary hover:bg-primary-800 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Book Another Slot
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-body font-medium animate-fade-in">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Phone in 2 cols on tablet+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block font-heading text-xs font-bold text-primary tracking-wide uppercase"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-slate-50/50"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="block font-heading text-xs font-bold text-primary tracking-wide uppercase"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="+91 98765 XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="date"
                    className="block font-heading text-xs font-bold text-primary tracking-wide uppercase"
                  >
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    autoComplete="off"
                    min={todayStr}
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-slate-50/50 cursor-pointer"
                  />
                </div>

                {/* Message / Specific Needs */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block font-heading text-xs font-bold text-primary tracking-wide uppercase"
                  >
                    Notes or Specific Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    autoComplete="off"
                    placeholder="Mention eye power history, frame preferences (progressive, blue-cut, sunglasses), or doctor references..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-slate-50/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-400 disabled:opacity-70 text-primary font-heading font-bold text-base py-3.5 px-6 rounded-xl shadow-soft hover:shadow-card active:scale-[0.99] transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                        <span>Opening WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-primary" />
                        <span>Confirm Appointment Request</span>
                      </>
                    )}
                  </button>
                  <p className="font-body text-xs text-slate-600 text-center mt-2.5 font-medium">
                    We'll confirm your slot on WhatsApp or by phone.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Call, WhatsApp & Single Location Highlights */}
          <div className="lg:col-span-5 space-y-6">
            {/* Instant Contact Action Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-6">
              <div className="space-y-1 border-b border-slate-100 pb-4">
                <h3 className="font-heading font-bold text-xl text-primary">
                  Need Immediate Assistance?
                </h3>
                <p className="font-body text-slate-500 text-xs sm:text-sm">
                  Speak directly with an optometrist or our customer desk in Rajahmundry.
                </p>
              </div>

              {/* WhatsApp-only CTA: Message us for appointment */}
              <a
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-heading font-bold text-base p-4 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 flex items-center justify-between group active:scale-[0.99] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-black/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-slate-950 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="text-left">
                    <span className="block text-base font-bold leading-tight text-slate-950">Message us for appointment</span>
                    <span className="block text-xs text-slate-900 font-medium mt-0.5">Instant WhatsApp chat & prescription help</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-black/10 px-2.5 py-1 rounded text-slate-950 shadow-xs">
                  WhatsApp
                </span>
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${business.phone}`}
                className="w-full bg-slate-50 hover:bg-slate-100 text-primary font-heading font-bold text-sm py-3 px-4 rounded-xl border border-slate-200 shadow-xs transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Us Directly: {business.phoneDisplay}</span>
              </a>

              {/* Single Store Hours & Address */}
              <div className="pt-2 space-y-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-heading">Showroom & Clinic Hours</strong>
                    <span>{business.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-heading">Store Location</strong>
                    <span className="text-slate-600">{business.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-heading">Appointments Help You Save Time</strong>
                    <span className="text-slate-600">Booking ahead lets our team prepare and reduce your wait at the store.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Heritage / Assurance Card */}
            <div className="bg-primary text-white rounded-2xl p-6 shadow-card border border-primary-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-heading font-bold text-base text-white">{business.yearsInBusiness}+ Years of Optical Trust</h4>
                <p className="font-body text-xs text-primary-200 leading-relaxed">
                  Serving Rajahmundry since {business.establishedYear} with genuine branded lenses and computerized eye tests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
