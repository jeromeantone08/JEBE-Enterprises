import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { PRODUCT_CATEGORIES } from '../../data/productsData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight,
  Boxes,
  Truck,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F0E6] border-t border-[#DDD6C8] text-[#1A1816] relative overflow-hidden">
      {/* Subtle architectural vertical lines in footer */}
      <div className="absolute inset-0 panel-flute-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 pb-[calc(3rem+env(safe-area-inset-bottom,0px))] relative z-10">
        
        {/* Top Wholesale Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-[#DDD6C8] mb-12">
          <div className="flex items-start gap-4 p-5 bg-white border border-[#E8E3D9] rounded-sm shadow-sm card-hover-elevate reveal reveal-delay-1">
            <div className="p-3 bg-[#FAF7F2] border border-[#E8E3D9] rounded-sm text-gold-700 shrink-0">
              <Boxes className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-sm tracking-wide text-[#1A1816]">Wholesale Ready Stock</h4>
              <p className="text-xs text-[#6B655D] mt-1 leading-relaxed">
                Massive ready inventory across Fluted Wall Panels and UV Marble Sheets for immediate contractor vehicle loading.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white border border-[#E8E3D9] rounded-sm shadow-sm card-hover-elevate reveal reveal-delay-2">
            <div className="p-3 bg-[#FAF7F2] border border-[#E8E3D9] rounded-sm text-gold-700 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-sm tracking-wide text-[#1A1816]">48-Hour Delivery Guarantee</h4>
              <p className="text-xs text-[#6B655D] mt-1 leading-relaxed">
                Guaranteed delivery done within 48 hours. Daily container, lorry, and transport dispatch serving regional retailers and contractors.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white border border-[#E8E3D9] rounded-sm shadow-sm card-hover-elevate reveal reveal-delay-3">
            <div className="p-3 bg-[#FAF7F2] border border-[#E8E3D9] rounded-sm text-gold-700 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-sm tracking-wide text-[#1A1816]">Contractor & Dealer Pricing</h4>
              <p className="text-xs text-[#6B655D] mt-1 leading-relaxed">
                Direct factory-wholesale box and crate price tiers with guaranteed batch color consistency.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14">
          
          {/* Col 1: Brand & Bio (2 spans on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt={BUSINESS_CONFIG.businessName} className="w-10 h-10 rounded-full object-contain" />
              <span className="font-serif font-bold text-xl tracking-wider text-[#1A1816]">
                {BUSINESS_CONFIG.businessName}
              </span>
            </div>

            <p className="text-xs tracking-[0.2em] text-gold-700 font-semibold uppercase">
              {BUSINESS_CONFIG.tagline}
            </p>

            <p className="text-xs text-[#6B655D] leading-relaxed max-w-sm">
              Direct wholesale supplier of Fluted Wall Panels and UV Marble Sheets. Supplying retailers, contractors, and builders with immediate warehouse inventory and transport dispatch.
            </p>

            {/* Direct Call Hotlines Callout */}
            <div className="pt-3 space-y-2 max-w-sm">
              <div className="p-3.5 bg-white border border-gold-500/40 rounded-sm shadow-sm">
                <span className="text-[10px] uppercase tracking-wider text-gold-700 font-bold block">
                  Wholesale Sales Desk Phone:
                </span>
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                  className="font-serif text-lg font-bold text-[#1A1816] hover:text-gold-700 block mt-0.5 tracking-wide"
                >
                  {BUSINESS_CONFIG.contact.salesHotlineDisplay}
                </a>
                <span className="text-[11px] text-[#6B655D] mt-1 block">
                  Mon – Sat: 10 AM – 6 PM
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#1A1816] uppercase pb-3 border-b border-[#DDD6C8] mb-4">
              Wholesale Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#6B655D]">
              <li>
                <Link to="/" className="hover:text-gold-700 transition-colors flex items-center gap-1.5">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-700 transition-colors flex items-center gap-1.5">
                  <span>About JEBE ENTERPRISES</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gold-700 transition-colors flex items-center gap-1.5">
                  <span>Collections</span>
                </Link>
              </li>
              <li>
                <Link to="/products?cat=accessories" className="hover:text-gold-700 transition-colors flex items-center gap-1.5">
                  <span>Accessories & Hardware</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-700 transition-colors flex items-center gap-1.5">
                  <span>Contractor & Bulk Services</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-700 transition-colors flex items-center gap-1.5">
                  <span>Warehouse Contact & Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Wholesale Collections */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#1A1816] uppercase pb-3 border-b border-[#DDD6C8] mb-4">
              Wholesale Collections
            </h4>
            <ul className="space-y-3 text-xs text-[#6B655D]">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?cat=${cat.id}`}
                    className="hover:text-gold-700 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="font-medium text-[#1A1816] block group-hover:text-gold-700">{cat.name}</span>
                      <span className="text-[10px] text-[#8C827A]">{cat.tagline}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-500/50 group-hover:text-gold-700 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Warehouse Location & Direct Contacts */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#1A1816] uppercase pb-3 border-b border-[#DDD6C8] mb-4">
              Depot & Contacts
            </h4>
            <ul className="space-y-3 text-xs text-[#6B655D]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-[#1A1816] block">{BUSINESS_CONFIG.contact.address.facilityName}</strong>
                  {BUSINESS_CONFIG.contact.address.line1}, {BUSINESS_CONFIG.contact.address.line2}, {BUSINESS_CONFIG.contact.address.city} - {BUSINESS_CONFIG.contact.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-700 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase text-[#8C827A] block">Direct Call:</span>
                  <a href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`} className="hover:text-gold-700 transition-colors font-bold text-[#1A1816]">
                    {BUSINESS_CONFIG.contact.salesHotlineDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-700 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase text-[#8C827A] block">Bulk Orders & PO:</span>
                  <a href={`mailto:${BUSINESS_CONFIG.contact.email}`} className="hover:text-gold-700 transition-colors font-medium text-[#1A1816]">
                    {BUSINESS_CONFIG.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 pt-1 border-t border-[#DDD6C8]">
                <Clock className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-[11px]">
                  <p className="text-[#1A1816] font-medium">{BUSINESS_CONFIG.contact.businessHours.weekdays}</p>
                  <p className="text-gold-800">{BUSINESS_CONFIG.contact.businessHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-[#DDD6C8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B655D]">
          <p>© {currentYear} {BUSINESS_CONFIG.legalName}. Wholesale Wall Panels & Surfaces.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-gold-700 font-semibold">Direct Wholesale Supply</span>
            <span className="text-[#DDD6C8]">•</span>
            <Link to="/contact" className="hover:text-gold-700 transition-colors">Warehouse Directions</Link>
            <span className="text-[#DDD6C8]">•</span>
            <a href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`} className="hover:text-gold-700 transition-colors">
              Call {BUSINESS_CONFIG.contact.salesHotlineDisplay}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
