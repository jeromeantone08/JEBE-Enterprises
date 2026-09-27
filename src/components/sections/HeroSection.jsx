import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Boxes, MapPin, ChevronDown, Sparkles, Truck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
export default function HeroSection() {
  return (
    <section className="relative min-h-[92dvh] lg:min-h-[100dvh] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[#FBF9F5]">
      
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none panel-flute-pattern"></div>
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none architectural-pattern"></div>
      
      {/* Ambient Warm Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gold-500/10 via-amber-100/30 to-transparent rounded-full blur-3xl pointer-events-none animate-ambient-breathe"></div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Wholesale Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-500/40 text-[11px] uppercase tracking-[0.22em] text-gold-800 backdrop-blur-md mb-6 shadow-sm font-semibold transition-all duration-300 hover:border-gold-500 hover:shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{BUSINESS_CONFIG.hero.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1816] leading-[1.15] max-w-4xl transition-all duration-500">
          {BUSINESS_CONFIG.hero.headlineLine1}
          <span className="block text-gold-gradient mt-1">
            {BUSINESS_CONFIG.hero.headlineLine2}
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-[#57534E] max-w-2xl mx-auto font-normal leading-relaxed">
          {BUSINESS_CONFIG.hero.subheading}
        </p>

        {/* Action CTAs: Direct Call & Explore Collections */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <Link
            to="/products"
            className="btn-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm bg-gold-gradient text-dark-950 font-bold uppercase tracking-wider text-xs sm:text-sm hover:brightness-105 shadow-lg shadow-gold-500/20 active:scale-[0.98] transition-all duration-300 group"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Direct Phone Call Button */}
          <a
            href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm bg-white hover:bg-[#FAF7F2] text-[#1A1816] hover:text-gold-700 font-bold uppercase tracking-wider text-xs sm:text-sm border border-[#E8E3D9] hover:border-gold-500/60 shadow-sm transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-gold-700" />
            <span>Call: {BUSINESS_CONFIG.contact.salesHotlineDisplay}</span>
          </a>
        </div>

        {/* Company Wholesale Highlights (No Panel Images) */}
        <div className="mt-14 pt-8 border-t border-[#E8E3D9] grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl w-full text-left">
          
          {/* Feature 1 */}
          <div className="flex items-center gap-3.5 p-4 rounded-sm bg-white border border-[#E8E3D9] shadow-sm">
            <div className="w-11 h-11 rounded-sm bg-[#FAF7F2] border border-[#E8E3D9] flex items-center justify-center text-gold-700 shrink-0 shadow-xs">
              <Boxes className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-gold-700 font-bold block">Central Depot</span>
              <h3 className="font-serif text-sm font-bold text-[#1A1816]">
                Selaiyur, Chennai
              </h3>
              <p className="text-[11px] text-[#6B655D] mt-0.5">
                50,000+ Ready Stock
              </p>
            </div>
          </div>

          {/* Feature 2: 48-Hour Delivery Guarantee */}
          <div className="flex items-center gap-3.5 p-4 rounded-sm bg-[#F4F9F4] border border-emerald-300/80 shadow-sm">
            <div className="w-11 h-11 rounded-sm bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0 shadow-xs">
              <Truck className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold block">Logistics Guarantee</span>
              <h3 className="font-serif text-sm font-bold text-emerald-950">
                Delivery Within 48 Hours
              </h3>
              <p className="text-[11px] text-emerald-700 mt-0.5">
                Guaranteed Fast Transport
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3.5 p-4 rounded-sm bg-white border border-[#E8E3D9] shadow-sm">
            <div className="w-11 h-11 rounded-sm bg-[#FAF7F2] border border-[#E8E3D9] flex items-center justify-center text-gold-700 shrink-0 shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-gold-700 font-bold block">Direct Wholesale</span>
              <h3 className="font-serif text-sm font-bold text-[#1A1816]">
                Factory-Direct Rates
              </h3>
              <p className="text-[11px] text-[#6B655D] mt-0.5">
                Zero Middlemen Markups
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Subtle Scroll Down */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#8C827A] pointer-events-none">
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>

    </section>
  );
}
