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
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3 shadow-md shadow-[#E2DCD0]/60' 
          : 'bg-[#FBF9F5]/95 backdrop-blur-md py-3.5 border-b border-[#E8E3D9]'
      }`}
      style={{
        paddingTop: isScrolled 
          ? 'calc(0.75rem + env(safe-area-inset-top, 0px))' 
          : 'calc(0.875rem + env(safe-area-inset-top, 0px))',
        paddingBottom: isScrolled ? '0.75rem' : '0.875rem'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Brand Identity / Logo */}
          <Link to="/" className="group flex items-center gap-3 focus:outline-none shrink-0">
            <img 
              src="/logo.png" 
              alt={BUSINESS_CONFIG.businessName} 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-contain shrink-0" 
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg lg:text-xl tracking-wider text-[#1A1816] group-hover:text-gold-600 transition-colors leading-tight">
                {BUSINESS_CONFIG.businessName}
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-gold-700 font-semibold mt-0.5 hidden xs:block">
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
          <div className="flex lg:hidden items-center gap-2">
            {/* "Warehouse & Depot" Button */}
            <Link
              to="/contact"
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-sm border text-[11px] sm:text-xs font-bold shadow-xs whitespace-nowrap transition-all ${
                isActive('/contact')
                  ? 'bg-white text-gold-700 border-gold-500 shadow-sm ring-1 ring-gold-500/30'
                  : 'bg-white text-[#2B2620] border-[#DDD6C8] hover:border-gold-500/70 hover:text-gold-700'
              }`}
              title="Warehouse & Depot"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span>Warehouse &amp; Depot</span>
            </Link>

            {/* Direct Phone Call Button */}
            <a
              href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
              className="w-9 h-9 rounded-sm bg-gold-gradient text-dark-950 font-bold hover:opacity-95 shadow-xs transition-opacity flex items-center justify-center shrink-0 active:scale-95"
              aria-label="Call Wholesale Desk"
              title="Call Sales Desk"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Drawer Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 text-[#1A1816] hover:text-gold-600 focus:outline-none rounded-sm border border-[#E8E3D9] bg-white shadow-xs flex items-center justify-center shrink-0 active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (< 1024px) with Safe Area & 100dvh Support */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(61px+env(safe-area-inset-top,0px))] sm:top-[calc(65px+env(safe-area-inset-top,0px))] bg-[#FBF9F5]/98 backdrop-blur-xl border-b border-[#E8E3D9] px-5 sm:px-6 py-5 transition-all duration-300 shadow-2xl max-h-[calc(100dvh-65px-env(safe-area-inset-top,0px))] pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] overflow-y-auto overscroll-contain">
          <div className="flex flex-col space-y-4">
            
            {/* Top Action Card: Warehouse & Depot Direct Card adapted to light background */}
            <div className="p-4 bg-white text-[#1A1816] rounded-sm shadow-sm border border-[#E8E3D9]">
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
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-gold-gradient text-dark-950 font-bold uppercase tracking-wider text-xs rounded-sm shadow-sm hover:opacity-95"
              >
                <span>View Warehouse &amp; Depot Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Direct Phone Banner */}
            <div className="p-3.5 bg-white border border-[#E8E3D9] rounded-sm shadow-xs flex items-center justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-gold-700 font-bold block">
                  Direct Sales Hotline:
                </span>
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                  className="text-sm font-bold text-[#1A1816] hover:text-gold-600 tracking-wide"
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

            {/* Navigation Links */}
            <div className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link) => {
                const active = isActive(link);
                const isWarehouse = link.path === '/contact';
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center justify-between text-xs sm:text-sm uppercase tracking-wider font-semibold py-2.5 px-2 rounded-xs border-b border-[#EFECE6] transition-colors ${
                      active 
                        ? 'text-gold-700 font-bold bg-gold-500/10 border-gold-500/50' 
                        : 'text-[#1A1816] hover:text-gold-600'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {isWarehouse && <MapPin className="w-3.5 h-3.5 text-gold-600" />}
                      <span>{link.name}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-gold-500/60" />
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
