import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Glasses, Calendar, Menu, X, MessageCircle, Clock, MapPin } from 'lucide-react'
import business from '../data/business'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const toggleButtonRef = useRef(null)
  const location = useLocation()

  // Dynamically set --navbar-height CSS variable on root for sticky elements like filter bars
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--navbar-height',
          `${headerRef.current.offsetHeight}px`
        )
      }
    }
    updateNavbarHeight()
    window.addEventListener('resize', updateNavbarHeight)
    return () => window.removeEventListener('resize', updateNavbarHeight)
  }, [isScrolled])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
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

  // Close mobile menu on route change
  const currentPath = location.pathname + location.search
  const prevPathRef = useRef(currentPath)
  useEffect(() => {
    if (prevPathRef.current !== currentPath) {
      prevPathRef.current = currentPath
      setIsOpen(false)
    }
  }, [currentPath])

  // Lock body scroll while mobile menu is open and notify bottom action bar
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('mobile-menu-state', { detail: { isOpen } }))
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  // Close menu on tap/click outside
  useEffect(() => {
    if (!isOpen) return

    const handlePointerDownOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDownOutside)
    return () => document.removeEventListener('pointerdown', handlePointerDownOutside)
  }, [isOpen])

  // Close menu if viewport expands to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled
          ? 'shadow-soft border-b border-slate-100/80 py-2.5'
          : 'shadow-[0_2px_15px_-3px_rgba(11,37,69,0.05)] border-b border-slate-50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
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
                {business.claims.establishedYear != null && (
                  <>
                    <span className="font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-amber-700 leading-none">
                      Since {business.claims.establishedYear}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  </>
                )}
                <span className="font-body text-[10px] text-slate-600 font-medium tracking-wide">
                  Rajahmundry
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links with Active State */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `relative font-body text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-primary font-semibold bg-primary-50/70'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Prominent CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Book Appointment CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-sm px-4.5 py-2.5 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span>Book Appointment</span>
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-slate-50 hover:bg-slate-100 text-primary border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-primary" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Panel below Header */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        style={{ top: 'var(--navbar-height, 72px)' }}
        className={`md:hidden fixed inset-x-0 bottom-0 overflow-y-auto bg-white z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="bg-white px-4 pt-4 pb-8 space-y-5 min-h-full flex flex-col justify-between border-t border-slate-100 shadow-xl max-w-lg mx-auto">
          <div className="space-y-4">
            {/* Mobile Links */}
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `min-h-[44px] flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-semibold text-base py-3 px-4 rounded-xl shadow-soft transition-all duration-200"
              >
                <Calendar className="w-5 h-5 text-primary shrink-0" />
                <span>Book Appointment</span>
              </Link>

              {/* Quick Contact & Store Info */}
              <div className="bg-primary-50/60 rounded-xl p-3.5 text-xs text-slate-600 space-y-2 border border-primary-100/50">
                <div className="flex items-center gap-2 text-primary font-medium min-h-[24px]">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="truncate">JN Road, Gandhipuram, Rajahmundry</span>
                </div>
                <div className="flex items-center justify-between text-slate-500 pt-1">
                  <span className="flex items-center gap-1.5 min-h-[44px]">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {business.hours}
                  </span>
                  <a
                    href={business.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:underline px-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
