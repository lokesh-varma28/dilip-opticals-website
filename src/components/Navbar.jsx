import { useState, useEffect } from 'react'
import { Glasses, Calendar, Menu, X, MessageCircle, Clock, MapPin } from 'lucide-react'
import business from '../data/business'

export default function Navbar({ onBookAppointment }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Visit Us', href: '#visit-us' },
    { name: 'Contact', href: '#contact' },
  ]

  // Track scroll position to enhance shadow and styling when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleLinkClick = (name) => {
    setActiveLink(name)
    setIsOpen(false)
  }

  const handleCtaClick = () => {
    setIsOpen(false)
    if (onBookAppointment) {
      onBookAppointment()
    } else {
      const element = document.getElementById('appointment') || document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled
          ? 'shadow-soft border-b border-slate-100/80 py-2.5'
          : 'shadow-[0_2px_15px_-3px_rgba(11,37,69,0.05)] border-b border-slate-50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={() => handleLinkClick('Home')}
            className="group flex items-center gap-3 select-none border-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none"
            style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
            aria-label={`${business.name} - Home`}
          >
            {/* Optical Icon Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-all duration-300 shadow-sm">
              <Glasses className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
            </div>

            {/* Logo Text & Tagline */}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl sm:text-2xl text-primary tracking-tight leading-none">
                {business.name}
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-amber-700 leading-none">
                  Since {business.establishedYear}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="font-body text-[10px] text-slate-600 font-medium tracking-wide">
                  Rajahmundry
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`relative font-body text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-primary font-semibold bg-primary-50/70'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full"></span>
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action: Prominent CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Book Appointment CTA Button (High-contrast primary on gold) */}
            <button
              type="button"
              onClick={handleCtaClick}
              className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-sm px-4.5 py-2.5 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 text-primary border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 border-t border-slate-100 mt-2.5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white px-4 pt-3 pb-6 space-y-4 shadow-lg">
          {/* Links */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>}
                </a>
              )
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 active:scale-95 text-white font-heading font-semibold text-base py-3 px-4 rounded-xl shadow-soft transition-all duration-200"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book Appointment</span>
            </button>

            {/* Quick Contact & Store Info */}
            <div className="bg-primary-50/60 rounded-xl p-3 text-xs text-slate-600 space-y-1.5 border border-primary-100/50">
              <div className="flex items-center gap-2 text-primary font-medium">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="truncate">JN Road, Gandhipuram, Rajahmundry</span>
              </div>
              <div className="flex items-center justify-between text-slate-500 pt-1">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-slate-400" /> {business.hours}
                </span>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-700 font-semibold hover:underline"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-600" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

