import React from 'react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/ui/StatCounter';
import SEOHead from '../components/ui/SEOHead';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { flutedImagesList } from '../data/productsData';
import { 
  Boxes, 
  Truck, 
  CheckCircle2, 
  Phone, 
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#FBF9F5] text-[#1A1816] pt-28 pb-20">
      <SEOHead 
        title="About JEBE ENTERPRISES | Wholesale Fluted Panels & UV Sheets Stockist"
        description="Learn about JEBE ENTERPRISES central wholesale distribution depot in Chennai, bulk stock holdings of Fluted Wall Panels and UV Sheets, and supply network."
      />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block px-3 py-1 bg-white border border-[#E8E3D9] text-gold-700 text-[10px] uppercase tracking-[0.25em] font-bold rounded-sm mb-4 shadow-xs">
            Wholesale Distribution Depot
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1816] leading-tight">
            {BUSINESS_CONFIG.about.headline}
          </h1>
          <p className="mt-5 text-sm sm:text-base text-[#6B655D] leading-relaxed">
            {BUSINESS_CONFIG.about.subheading}
          </p>
        </div>
      </div>

      {/* Main Story Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-[#E8E3D9] p-6 sm:p-10 lg:p-14 rounded-sm shadow-md">
          
          {/* Left Text Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 reveal">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-bold block">
              Wholesale Distribution Infrastructure
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816] leading-snug">
              Eliminating Supply Bottlenecks for Contractors & Retailers
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#6B655D] leading-relaxed">
              <p>
                <strong>{BUSINESS_CONFIG.businessName}</strong> operates as a specialized wholesale stockist and distributor focused on 5 specialized collections: <strong>Wholesale Fluted Wall Panels</strong>, <strong>High-Gloss UV Marble Sheets</strong>, <strong>Budget PVC Panels</strong>, <strong>Soffit Panels</strong>, and <strong>Louvers</strong>.
              </p>
              <p>
                Contractors and building material shops often face long factory lead times, damaged shipments, or inconsistent batch shading. By maintaining central warehousing with 50,000+ units in ready stock in Chennai, we provide same-day vehicle loading and direct freight transport dispatch across regional hubs.
              </p>
              <p>
                We supply box-carton quantities for individual residential sites as well as multi-pallet lots and full container loads for commercial developments and dealer showrooms.
              </p>
            </div>

            {/* Quality & Wholesale Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="flex items-start gap-2.5 text-xs text-[#1A1816]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Heavy carton packing with reinforced corner guards</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#1A1816]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Strict batch dye-lot control for zero color variation</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#1A1816]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Class B1 fire retardant and 100% moisture tested</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#1A1816]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Immediate vehicle loading at our central depot</span>
              </div>
            </div>

          </div>

          {/* Right Image Showcase (5 cols) */}
          <div className="lg:col-span-5 reveal reveal-delay-2">
            <div className="relative rounded-sm overflow-hidden border border-[#E8E3D9] shadow-md card-hover-elevate">
              <img
                src={flutedImagesList[0] || ""}
                alt="Wholesale Warehouse Panel Inventory"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-sm border border-[#E8E3D9] shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block">
                  Central Wholesale Depot
                </span>
                <p className="text-xs text-[#1A1816] font-medium mt-1">
                  Wholesale carton inventory and warehouse crates available for physical contractor inspection.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision & Core Principles */}
      <section className="py-20 bg-white border-t border-b border-[#E8E3D9] mb-24 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 bg-[#FBF9F5] border border-[#E8E3D9] rounded-sm card-hover-elevate reveal reveal-delay-1">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#E8E3D9] flex items-center justify-center text-gold-700 mb-6 shadow-xs">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1816]">Our Mission</h3>
              <p className="text-xs text-[#6B655D] mt-3 leading-relaxed">
                {BUSINESS_CONFIG.about.mission}
              </p>
            </div>

            <div className="p-8 bg-[#FBF9F5] border border-[#E8E3D9] rounded-sm card-hover-elevate reveal reveal-delay-2">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#E8E3D9] flex items-center justify-center text-gold-700 mb-6 shadow-xs">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1816]">Logistics Speed</h3>
              <p className="text-xs text-[#6B655D] mt-3 leading-relaxed">
                Ensuring fast, same-day vehicle loading for customer lorries and coordinated dispatch across southern and pan-India transport terminals.
              </p>
            </div>

            <div className="p-8 bg-[#FBF9F5] border border-[#E8E3D9] rounded-sm card-hover-elevate reveal reveal-delay-3">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#E8E3D9] flex items-center justify-center text-gold-700 mb-6 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1816]">Contractor Value</h3>
              <p className="text-xs text-[#6B655D] mt-3 leading-relaxed">
                Transparent box and crate rate cards, consistent stock replenishment, and dedicated sales telephone support for active project sites.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Wholesale Stats Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-10 reveal">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-bold block mb-2">
            Wholesale Scale
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816]">
            Depot Capacity & Distribution Reach
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 reveal">
          {BUSINESS_CONFIG.stats.map((stat, i) => (
            <StatCounter
              key={i}
              value={stat.value}
              label={stat.label}
              note={stat.note}
            />
          ))}
        </div>
      </section>

      {/* Direct Phone Call CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E8E3D9] rounded-sm p-8 sm:p-12 text-center relative overflow-hidden shadow-md reveal">
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-bold block mb-2">
              Direct Phone Hotline
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816]">
              Need Stock Verification or Wholesale Rate Card?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B655D] mt-3 max-w-xl mx-auto leading-relaxed">
              Speak directly with our sales coordinator by phone or visit our warehouse depot.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-sm bg-gold-gradient text-dark-950 font-bold uppercase tracking-wider text-xs hover:brightness-105 shadow-md shadow-gold-500/20 btn-sheen"
              >
                <Phone className="w-4 h-4" />
                <span>Call Sales: {BUSINESS_CONFIG.contact.salesHotlineDisplay}</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto py-3.5 px-7 rounded-sm bg-white hover:bg-cream-200 text-[#1A1816] text-xs uppercase tracking-wider font-semibold border border-[#E8E3D9] transition-colors"
              >
                Warehouse Depot Details
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
