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
  Navigation,
  Store,
} from 'lucide-react'
import business from '../data/business'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    slot: '',
    message: '',
  })

  const [phoneError, setPhoneError] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Local date in YYYY-MM-DD for min date attribute
  const now = new Date()
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

  const validatePhone = (value) => {
    const raw = value.trim()
    if (!raw) {
      return 'Phone number is required.'
    }
    const digits = raw.replace(/\D/g, '')
    let tenDigits = digits
    if (digits.length === 12 && digits.startsWith('91')) {
      tenDigits = digits.slice(2)
    } else if (digits.length === 11 && digits.startsWith('0')) {
      tenDigits = digits.slice(1)
    }

    if (tenDigits.length !== 10) {
      return 'Please enter a valid 10-digit mobile number.'
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'phone') {
      if (phoneError) {
        setPhoneError(validatePhone(value))
      }
    }
  }

  const handlePhoneBlur = () => {
    if (formData.phone) {
      setPhoneError(validatePhone(formData.phone))
    }
  }

  const getCleanPhone = (phoneStr) => {
    const digits = phoneStr.replace(/\D/g, '')
    if (digits.length === 12 && digits.startsWith('91')) return digits.slice(2)
    if (digits.length === 11 && digits.startsWith('0')) return digits.slice(1)
    return digits
  }

  const getAppointmentWhatsAppUrl = (data = formData) => {
    const name = data.name.trim()
    const phone = getCleanPhone(data.phone.trim())
    const date = data.date.trim()
    const slot = data.slot.trim() || 'Not specified'
    const notes = data.message.trim() || 'None'
    const messageText = `Hi Dilip Optics Grand, I'd like to book an eye test / consultation:\n• Name: ${name}\n• Phone: ${phone}\n• Preferred Date: ${date}\n• Time Slot: ${slot}\n• Notes: ${notes}`
    return `https://wa.me/919676955558?text=${encodeURIComponent(messageText)}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')

    const phoneValidation = validatePhone(formData.phone)
    if (phoneValidation) {
      setPhoneError(phoneValidation)
    } else {
      setPhoneError('')
    }

    if (!formData.name.trim() || !formData.phone.trim() || !formData.date || !formData.slot) {
      setErrorMessage('Please fill in your name, 10-digit phone number, preferred date, and time slot.')
      return
    }

    if (phoneValidation) {
      return
    }

    setIsSubmitting(true)

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
      slot: '',
      message: '',
    })
    setSubmitted(false)
    setErrorMessage('')
    setPhoneError('')
  }

  const defaultWhatsappUrl = `${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to schedule an eye test / frame consultation.`
  )}`

  return (
    <div className="space-y-0">
      {/* 1. Header & Trust Banner */}
      <section className="bg-gradient-to-b from-primary-50/70 to-white py-10 sm:py-14 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              Appointments & Store Visit
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.12]">
              Book an Eye Test or Visit Us
            </h1>

            <p className="font-body text-slate-600 text-lg sm:text-xl leading-relaxed">
              Schedule your computerized refraction examination, prescription frame fitting, or contact lens consultation with our optometrists in Rajahmundry.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>JN Road, Gandhipuram, Rajamahendravaram</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>{business.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Booking Form & Direct Contact */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-card">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary">
                  Schedule an Appointment
                </h2>
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
                      className="min-h-[44px] bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-heading font-bold text-sm px-6 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 text-slate-950" />
                      <span>Open WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="min-h-[44px] bg-primary hover:bg-primary-800 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center justify-center cursor-pointer active:scale-95"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              ) : (
                /* Booking Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-body font-medium animate-fade-in">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name & Phone in 2 cols */}
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
                        className="w-full min-h-[44px] px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-slate-50/50"
                      />
                    </div>

                    {/* Phone Number with inline error */}
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
                        onBlur={handlePhoneBlur}
                        aria-invalid={!!phoneError}
                        aria-describedby={phoneError ? "phone-error" : undefined}
                        className={`w-full min-h-[44px] px-4 py-3 rounded-xl border ${
                          phoneError ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary focus:ring-primary/10'
                        } text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all bg-slate-50/50`}
                      />
                      {phoneError && (
                        <p id="phone-error" className="text-xs text-red-600 font-medium mt-1 animate-fade-in" role="alert">
                          {phoneError}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Date & Time Slot in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        className="w-full min-h-[44px] px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-slate-50/50 cursor-pointer"
                      />
                    </div>

                    {/* Time Slot Select */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="slot"
                        className="block font-heading text-xs font-bold text-primary tracking-wide uppercase"
                      >
                        Time Slot <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="slot"
                          name="slot"
                          required
                          value={formData.slot}
                          onChange={handleChange}
                          className="w-full min-h-[44px] px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-slate-50/50 cursor-pointer appearance-none pr-10"
                        >
                          <option value="">Select a time slot</option>
                          <option value="Morning">Morning (9:30 AM – 1:00 PM)</option>
                          <option value="Afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
                          <option value="Evening">Evening (5:00 PM – 9:00 PM)</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                          <Clock className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
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
                      className="w-full min-h-12 bg-accent hover:bg-accent-400 disabled:opacity-70 text-primary font-heading font-bold text-base py-3 px-6 rounded-xl shadow-soft hover:shadow-card active:scale-[0.99] transition-all duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin shrink-0" />
                          <span className="whitespace-nowrap">Opening WhatsApp...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-primary shrink-0" />
                          <span className="whitespace-nowrap">Request Appointment</span>
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

                {/* WhatsApp-only CTA: Navy card with thin gold border, only icon green, responsive stack */}
                <a
                  href={defaultWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] bg-[#0B2545] hover:bg-primary-800 text-white p-4 rounded-xl border border-accent/40 shadow-soft hover:shadow-card transition-all duration-200 block group active:scale-[0.99] cursor-pointer"
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2.5">
                      <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 transition-transform group-hover:scale-110" />
                      <span className="font-heading font-bold text-base text-white">
                        WhatsApp us
                      </span>
                    </div>
                    <p className="font-body text-xs text-slate-300 font-medium leading-relaxed">
                      Chat with us for appointments and queries.
                    </p>
                  </div>
                </a>

                {/* Direct Phone Call Button */}
                <a
                  href={`tel:${business.phone}`}
                  className="w-full min-h-[44px] bg-slate-50 hover:bg-slate-100 text-primary font-heading font-bold text-sm whitespace-nowrap py-3 px-4 rounded-xl border border-slate-200 shadow-xs transition-all duration-200 inline-flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span className="whitespace-nowrap text-sm">Call {business.phoneDisplay}</span>
                </a>

                {/* Single Store Hours (address removed to prevent duplication with Store Location section) */}
                <div className="pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary block font-heading">Showroom & Store Hours</strong>
                      <span>{business.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust / Assurance Card */}
              {business.claims.yearsInBusiness != null && (
                <div className="bg-primary text-white rounded-2xl p-6 shadow-card border border-primary-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif font-bold text-base text-white">
                      {business.claims.yearsInBusiness}+ Years of Optical Trust
                    </h4>
                    <p className="font-body text-xs text-primary-200 leading-relaxed">
                      Serving Rajahmundry{business.claims.establishedYear != null ? ` since ${business.claims.establishedYear}` : ''} with computerized eye tests and eyewear.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visit Our Store Section with Map & Directions */}
      <section className="py-12 sm:py-14 lg:py-16 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Store Location & Directions
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Visit Our Rajahmundry Showroom
            </h2>

            <p className="font-body text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Find {business.name} conveniently on JN Road in Gandhipuram, near Ravindra Bharathi School.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Details Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center border border-primary-100 shrink-0">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary">
                      {business.name}
                    </h3>
                    <p className="font-body text-xs text-slate-500 font-medium">
                      Eyewear Studio & Vision Care
                    </p>
                  </div>
                </div>

                {/* Google Reviews Chip (Shown only once here on this page) */}
                <a
                  href={business.googleListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-lg bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 text-slate-800 text-xs font-medium transition-colors group shadow-2xs"
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 shrink-0" />
                  <span className="font-semibold text-slate-900">{business.googleRating}</span>
                  <span className="text-slate-400">·</span>
                  <span>{business.reviewCount} Google reviews</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-primary transition-colors ml-0.5" />
                </a>

                <div className="pt-4 space-y-4 border-t border-slate-100">
                  <div className="flex items-start gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-0.5 text-sm font-body">
                      <strong className="block font-heading font-semibold text-slate-900">
                        Address
                      </strong>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {business.address}
                      </p>
                    </div>
                  </div>

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

                  <div className="flex items-start gap-3 text-slate-600">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-0.5 text-sm font-body">
                      <strong className="block font-heading font-semibold text-slate-900">
                        Phone Number
                      </strong>
                      <a
                        href={`tel:${business.phone}`}
                        className="font-body text-xs sm:text-sm text-slate-700 font-medium hover:text-primary transition-colors inline-flex items-center min-h-[44px] py-1"
                      >
                        {business.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons with min-h-[44px] */}
              <div className="pt-5 border-t border-slate-100 flex flex-wrap sm:flex-nowrap items-center gap-2.5">
                <a
                  href={`tel:${business.phone}`}
                  className="flex-1 min-w-[90px] min-h-[44px] bg-slate-50 hover:bg-slate-100 text-primary font-heading font-semibold text-xs sm:text-sm py-3 px-3 rounded-xl border border-slate-200 inline-flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>Call</span>
                </a>

                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[105px] min-h-[44px] bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-heading font-semibold text-xs sm:text-sm py-3 px-3 rounded-xl border border-emerald-200 inline-flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                {/* Get Directions Button */}
                <a
                  href={business.googleListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 min-w-[130px] min-h-[44px] bg-primary hover:bg-primary-800 text-white font-heading font-semibold text-xs sm:text-sm py-3 px-3.5 rounded-xl shadow-xs inline-flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-accent" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Column: Embedded Google Map (Overlay button removed per specs) */}
            <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card min-h-[380px] sm:min-h-[460px] relative">
              <iframe
                src={business.mapEmbedUrl}
                className="w-full h-full min-h-[380px] sm:min-h-[460px] border-0"
                loading="lazy"
                title="Dilip Optics Grand location"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
