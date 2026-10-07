import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Collections', path: '/products' },
    { name: 'Accessories', path: '/products?cat=accessories' },
    { name: 'Services', path: '/services' },
    { name: 'Warehouse & Depot', path: '/contact' },
  ];

  const isActive = (link) => {
    const path = typeof link === 'string' ? link : link.path;
    if (path.includes('?')) {
      return location.pathname + location.search === path;
    }
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/products') {
      return location.pathname === '/products' && !location.search.includes('cat=accessories');
    }
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-[#FBF9F5] py-2.5 sm:py-3 border-b border-[#E8E3D9] shadow-sm'
            : isScrolled 
              ? 'bg-[#FBF9F5] py-2.5 sm:py-3 border-b border-[#E8E3D9] shadow-md shadow-[#E2DCD0]/60' 
              : 'bg-[#FBF9F5] py-2.5 sm:py-3.5 border-b border-[#E8E3D9]'
        }`}
        style={{
          paddingTop: isScrolled || mobileMenuOpen
            ? 'calc(0.625rem + env(safe-area-inset-top, 0px))' 
            : 'calc(0.75rem + env(safe-area-inset-top, 0px))',
          paddingBottom: isScrolled || mobileMenuOpen ? '0.625rem' : '0.75rem'
        }}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-1.5 sm:gap-4">
            
            {/* Left: Brand Identity / Logo */}
            <Link to="/" className="group flex items-center gap-1.5 sm:gap-3 focus:outline-none min-w-0">
              <img 
                src="/logo.png" 
                alt={BUSINESS_CONFIG.businessName} 
                className="w-7 h-7 min-[380px]:w-8 min-[380px]:h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full object-contain shrink-0" 
              />
              <div className="flex flex-col min-w-0">
                <span className="font-serif font-bold text-xs min-[360px]:text-sm sm:text-base lg:text-xl tracking-tight sm:tracking-wider text-[#1A1816] group-hover:text-gold-600 transition-colors leading-tight truncate">
                  {BUSINESS_CONFIG.businessName}
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-gold-700 font-semibold mt-0.5 hidden md:block">
                  Wholesale Fluted Panels &amp; UV Sheets
                </span>
              </div>
            </Link>

            {/* Right: Desktop Navigation Links & Wholesale Desk Phone Box Perfectly Aligned */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
              
              {/* Desktop Navigation Links */}
              <nav className="flex items-center gap-3.5 xl:gap-5">
                {navLinks.map((link) => {
                  const active = isActive(link);
                  const isWarehouse = link.path === '/contact';

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`relative text-xs tracking-wider uppercase font-semibold py-2 px-1 transition-colors duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                        active 
                          ? 'text-gold-700 font-bold' 
                          : 'text-[#403A34] hover:text-gold-600'
                      }`}
                    >
                      {isWarehouse && (
                        <MapPin className={`w-3.5 h-3.5 ${active ? 'text-gold-700' : 'text-gold-600'}`} />
                      )}
                      <span>{link.name}</span>
                      {active && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-gradient rounded-full"></span>
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Vertical Divider */}
              <div className="h-6 w-px bg-[#E2DCD0]"></div>

              {/* Wholesale Desk Phone Box */}
              <a
                href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-white border border-[#E8E3D9] hover:border-gold-500/60 transition-colors shadow-xs group"
                title="Call Wholesale Sales Desk Directly"
              >
                <div className="w-7 h-7 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-700 group-hover:bg-gold-500 group-hover:text-dark-950 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-[#6B655D] font-medium leading-none">Wholesale Desk</span>
                  <span className="text-xs font-bold text-[#1A1816] group-hover:text-gold-600 tracking-wide mt-0.5">
                    {BUSINESS_CONFIG.contact.salesHotlineDisplay}
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile & Tablet Header Bar Actions (< 1024px) */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              {/* "Warehouse & Depot" Button */}
              <Link
                to="/contact"
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-sm border text-[10px] min-[360px]:text-[11px] sm:text-xs font-bold shadow-xs whitespace-nowrap transition-all shrink-0 ${
                  isActive('/contact')
                    ? 'bg-white text-gold-700 border-gold-500 shadow-sm ring-1 ring-gold-500/30'
                    : 'bg-white text-[#2B2620] border-[#DDD6C8] hover:border-gold-500/70 hover:text-gold-700'
                }`}
                title="Warehouse & Depot"
              >
                <MapPin className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 text-gold-600 shrink-0" />
                <span className="hidden min-[370px]:inline">Warehouse &amp; </span>
                <span>Depot</span>
              </Link>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-gold-gradient text-dark-950 font-bold hover:opacity-95 shadow-xs transition-opacity flex items-center justify-center shrink-0 active:scale-95"
                aria-label="Call Wholesale Desk"
                title="Call Sales Desk"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              {/* Mobile Drawer Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-8 h-8 sm:w-9 sm:h-9 text-[#1A1816] hover:text-gold-600 focus:outline-none rounded-sm border border-[#E8E3D9] bg-white shadow-xs flex items-center justify-center shrink-0 active:scale-95"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Dimmer Backdrop */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 z-30 bg-black/60 transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu (< 1024px) - 100% Solid Opaque, Landscape & Portrait Optimized */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 z-40 bg-[#FBF9F5] border-b border-[#E8E3D9] px-4 sm:px-6 py-4 sm:py-5 shadow-2xl overflow-y-auto overscroll-contain"
          style={{
            top: 'calc(53px + env(safe-area-inset-top, 0px))',
            maxHeight: 'calc(100dvh - 53px - env(safe-area-inset-top, 0px))',
            paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom, 0px))'
          }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Responsive Grid: 2 columns in landscape / wider screens, 1 column in portrait */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              
              {/* Column 1: Navigation Links with Solid Opaque High-Contrast Styling */}
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#6B655D] font-bold px-1 block mb-1">
                  Menu Navigation
                </span>
                {navLinks.map((link) => {
                  const active = isActive(link);
                  const isWarehouse = link.path === '/contact';
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between text-xs sm:text-sm uppercase tracking-wider font-bold py-2.5 sm:py-3 px-3.5 rounded-sm transition-all border shadow-xs ${
                        active 
                          ? 'text-gold-800 bg-gold-500/15 border-gold-500/50' 
                          : 'text-[#1A1816] bg-white border-[#E8E3D9] hover:border-gold-500/60 hover:text-gold-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isWarehouse && <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />}
                        <span>{link.name}</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-gold-600 shrink-0" />
                    </Link>
                  );
                })}
              </div>

              {/* Column 2: Warehouse Location & Phone Hotline Details */}
              <div className="space-y-3 pt-2 md:pt-0">
                <span className="text-[10px] uppercase tracking-widest text-[#6B655D] font-bold px-1 block mb-1">
                  Quick Depot &amp; Contact
                </span>

                {/* Warehouse & Depot Direct Card */}
                <div className="p-3.5 sm:p-4 bg-white text-[#1A1816] rounded-sm shadow-xs border border-[#E8E3D9]">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-sm bg-gold-500/15 text-gold-700 flex items-center justify-center font-bold shadow-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block">Central Location</span>
                      <span className="text-sm font-bold text-[#1A1816] tracking-wide">Warehouse &amp; Depot</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#6B655D] mb-3 leading-relaxed">
                    {BUSINESS_CONFIG.contact.address.line1}, {BUSINESS_CONFIG.contact.address.city}
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 sm:py-2.5 bg-gold-gradient text-dark-950 font-bold uppercase tracking-wider text-xs rounded-sm shadow-xs hover:opacity-95"
                  >
                    <span>View Warehouse Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Direct Phone Sales Hotline */}
                <div className="p-3 sm:p-3.5 bg-white border border-[#E8E3D9] rounded-sm shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gold-700 font-bold block">
                      Direct Sales Hotline:
                    </span>
                    <a
                      href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                      className="text-xs sm:text-sm font-bold text-[#1A1816] hover:text-gold-600 tracking-wide"
                    >
                      {BUSINESS_CONFIG.contact.salesHotlineDisplay}
                    </a>
                  </div>
                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                    className="p-2 rounded-full bg-gold-500/20 text-gold-700 hover:bg-gold-500 hover:text-dark-950 transition-colors shadow-xs"
                    aria-label="Call Now"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
