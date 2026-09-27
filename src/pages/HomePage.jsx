import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import TrustHighlights from '../components/sections/TrustHighlights';
import StatCounter from '../components/ui/StatCounter';
import SectionHeading from '../components/ui/SectionHeading';
import SEOHead from '../components/ui/SEOHead';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ArrowRight, 
  Boxes, 
  Truck, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Warehouse,
  TrendingUp,
  Award
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-[#FBF9F5] text-[#1A1816]">
      <SEOHead 
        title="JEBE ENTERPRISES | Wholesale Wall Panels & UV Sheets Bulk Supplier"
        description="JEBE ENTERPRISES is a premier wholesale distributor and bulk stockist of Fluted Wall Panels and UV Marble Sheets. Central warehouse depot in Selaiyur, Chennai."
      />

      {/* 1. HERO SECTION (Company Focus • No Panel Images) */}
      <HeroSection />

      {/* 2. TRUST HIGHLIGHTS */}
      <TrustHighlights />

      {/* 3. PROMINENT COMPANY CONTACT & DEPOT INFO BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 sm:p-8 shadow-md reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Sales Hotline */}
            <div className="flex items-center gap-3.5 border-b md:border-b-0 md:border-r border-[#EFECE6] pb-4 md:pb-0 pr-4">
              <div className="w-12 h-12 rounded-sm bg-[#FAF7F2] border border-[#E8E3D9] flex items-center justify-center text-gold-700 shrink-0 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gold-700 font-bold block">
                  Wholesale Sales Desk:
                </span>
                <a 
                  href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                  className="font-serif text-lg font-bold text-[#1A1816] hover:text-gold-700 transition-colors"
                >
                  {BUSINESS_CONFIG.contact.salesHotlineDisplay}
                </a>
                <span className="text-[11px] text-[#6B655D] block">Mon – Sat: 10 AM – 6 PM</span>
              </div>
            </div>

            {/* Email for Bulk Orders */}
            <div className="flex items-center gap-3.5 border-b md:border-b-0 md:border-r border-[#EFECE6] pb-4 md:pb-0 pr-4">
              <div className="w-12 h-12 rounded-sm bg-[#FAF7F2] border border-[#E8E3D9] flex items-center justify-center text-gold-700 shrink-0 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gold-700 font-bold block">
                  Bulk Inquiries & Orders:
                </span>
                <a 
                  href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                  className="text-xs font-semibold text-[#1A1816] hover:text-gold-700 transition-colors truncate block"
                >
                  {BUSINESS_CONFIG.contact.email}
                </a>
                <span className="text-[11px] text-[#6B655D] block">Tender BOQ & Purchase Orders</span>
              </div>
            </div>

            {/* Warehouse Address */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-sm bg-[#FAF7F2] border border-[#E8E3D9] flex items-center justify-center text-gold-700 shrink-0 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gold-700 font-bold block">
                  Central Depot Location:
                </span>
                <span className="text-xs text-[#1A1816] font-bold block">
                  {BUSINESS_CONFIG.contact.address.facilityName}
                </span>
                <span className="text-[11px] text-[#6B655D] block">
                  {BUSINESS_CONFIG.contact.address.line2}, {BUSINESS_CONFIG.contact.address.city}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ABOUT JEBE ENTERPRISES — COMPANY OVERVIEW & PROFILE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E8E3D9] rounded-sm p-8 sm:p-12 lg:p-16 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 reveal">
              <span className="inline-block px-3 py-1 bg-[#FAF7F2] border border-[#E8E3D9] text-gold-700 text-[10px] uppercase tracking-[0.25em] font-bold rounded-sm shadow-xs">
                About The Company
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1816] leading-tight">
                JEBE ENTERPRISES — Direct Wholesale Panel Supply & Distribution
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                <p>
                  <strong className="text-[#1A1816]">JEBE ENTERPRISES</strong> is a premier wholesale stockist and distributor of premium architectural wall panels, operating from our central warehouse depot in Selaiyur, Chennai.
                </p>
                <p>
                  We specialize in the high-volume wholesale distribution of five core interior cladding lines: <strong>Wholesale Fluted Wall Panels</strong>, <strong>High-Gloss UV Marble Sheets</strong>, <strong>Budget PVC Panels</strong>, <strong>Soffit Panels</strong>, and <strong>Louvers</strong>. Our business model bridges direct manufacturing output with commercial contractors, interior designers, architects, building material dealers, and property developers.
                </p>
                <p>
                  By eliminating multi-tiered middlemen markups and maintaining ready-stock holdings of over 50,000 units on our warehouse floor, we guarantee immediate vehicle loading, uniform batch quality, and factory-direct rate advantages.
                </p>
              </div>

              {/* Commitments Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct factory-to-buyer wholesale pricing</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero batch shade variation guarantee</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Same-day vehicle loading at our central depot</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Guaranteed delivery done within 48 hours</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ready stock for immediate project dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Company Profile Card */}
            <div className="lg:col-span-5 bg-[#FAF7F2] border border-[#E8E3D9] rounded-sm p-7 sm:p-8 space-y-6 reveal reveal-delay-2 card-hover-elevate">
              <div className="flex items-center gap-3 border-b border-[#E8E3D9] pb-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-gold-500/40 flex items-center justify-center text-gold-700 shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1816]">JEBE ENTERPRISES</h3>
                  <span className="text-[10px] uppercase tracking-wider text-gold-700 font-bold">Wholesale Panel Distributor</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs divide-y divide-[#E8E3D9]">
                <div className="flex justify-between pt-2">
                  <span className="text-[#6B655D]">Primary Business:</span>
                  <span className="font-bold text-[#1A1816] text-right">Wholesale Panel Sales</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#6B655D]">Delivery Schedule:</span>
                  <span className="font-bold text-emerald-800 text-right">Done Within 48 Hours</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#6B655D]">Core Collections:</span>
                  <span className="font-bold text-[#1A1816] text-right">Fluted, UV, Budget, Soffit & Louvers</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#6B655D]">Facility:</span>
                  <span className="font-bold text-[#1A1816] text-right">Central Warehouse & Depot</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#6B655D]">Location:</span>
                  <span className="font-bold text-[#1A1816] text-right">Selaiyur, Chennai</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#6B655D]">Service Territory:</span>
                  <span className="font-bold text-[#1A1816] text-right">Tamil Nadu & Pan-India</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#6B655D]">Procurement Support:</span>
                  <span className="font-bold text-[#1A1816] text-right">Direct Telephone Desk</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/products"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gold-gradient text-dark-950 font-bold uppercase tracking-wider text-xs rounded-sm hover:brightness-105 shadow-sm transition-all btn-sheen"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. EXPLORE OUR COLLECTIONS OVERVIEW BANNER (NO PANEL IMAGES) */}
      <section className="py-16 bg-[#F5F0E6] border-t border-b border-[#DDD6C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal">
            <span className="inline-block px-3 py-1 bg-white border border-[#E8E3D9] text-gold-700 text-[10px] uppercase tracking-[0.25em] font-bold rounded-sm mb-3 shadow-xs">
              Material Portfolios
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816]">
              Wholesale Panel Collections &amp; Accessories
            </h2>
            <p className="text-xs sm:text-sm text-[#6B655D] mt-2">
              Deep, consistent stock holdings across interior surface materials, adhesive bonding, and finishing trims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Category 1 Card */}
            <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 sm:p-8 shadow-sm flex flex-col justify-between card-hover-elevate reveal reveal-delay-1">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block mb-1">
                  Collection 01
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                  Fluted Panels
                </h3>
                <p className="text-xs text-[#6B655D] mt-2 leading-relaxed">
                  Precision tongue-and-groove vertical fluted slats in 10ft height x 1ft width. Ideal for feature walls, TV consoles, and commercial suites.
                </p>
                <div className="mt-4 pt-4 border-t border-[#E8E3D9] text-xs space-y-1.5 text-[#6B655D]">
                  <div className="flex justify-between">
                    <span>Profile:</span>
                    <strong className="text-[#1A1816]">Concealed Interlocking</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging:</span>
                    <strong className="text-[#1A1816]">10 Pieces / Box</strong>
                  </div>
                </div>
              </div>

              <Link
                to="/products?cat=fluted"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-wider"
              >
                <span>View Fluted Models &rarr;</span>
              </Link>
            </div>

            {/* Category 2 Card */}
            <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 sm:p-8 shadow-sm flex flex-col justify-between card-hover-elevate reveal reveal-delay-2">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block mb-1">
                  Collection 02
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                  UV Marble Sheets
                </h3>
                <p className="text-xs text-[#6B655D] mt-2 leading-relaxed">
                  Large-format 8ft x 4ft stone composite UV sheets with crystal high-gloss scratch-resistant surfaces for luxury backdrops and feature walls.
                </p>
                <div className="mt-4 pt-4 border-t border-[#E8E3D9] text-xs space-y-1.5 text-[#6B655D]">
                  <div className="flex justify-between">
                    <span>Dimensions:</span>
                    <strong className="text-[#1A1816]">8ft x 4ft (8 * 4)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging:</span>
                    <strong className="text-[#1A1816]">10 Pieces / Box</strong>
                  </div>
                </div>
              </div>

              <Link
                to="/products?cat=uv-sheet"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-wider"
              >
                <span>View UV Sheets &rarr;</span>
              </Link>
            </div>

            {/* Category 3 Card */}
            <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 sm:p-8 shadow-sm flex flex-col justify-between card-hover-elevate reveal reveal-delay-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block mb-1">
                  Collection 03
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                  Budget PVC Panels
                </h3>
                <p className="text-xs text-[#6B655D] mt-2 leading-relaxed">
                  Cost-effective decorative PVC panels recommended specifically for lightweight interior ceiling cladding and false ceiling finishes.
                </p>
                <div className="mt-4 pt-4 border-t border-[#E8E3D9] text-xs space-y-1.5 text-[#6B655D]">
                  <div className="flex justify-between">
                    <span>Dimensions:</span>
                    <strong className="text-[#1A1816]">10ft (H) x 1ft (W)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging:</span>
                    <strong className="text-[#1A1816]">10 Pieces / Box</strong>
                  </div>
                </div>
              </div>

              <Link
                to="/products?cat=budget-pvc"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-wider"
              >
                <span>View Budget PVC &rarr;</span>
              </Link>
            </div>

            {/* Category 4 Card */}
            <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 sm:p-8 shadow-sm flex flex-col justify-between card-hover-elevate reveal reveal-delay-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block mb-1">
                  Collection 04
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                  Soffit Panels
                </h3>
                <p className="text-xs text-[#6B655D] mt-2 leading-relaxed">
                  Axora premium wall and ceiling soffit systems combining realistic wood grain texture with industrial composite durability.
                </p>
                <div className="mt-4 pt-4 border-t border-[#E8E3D9] text-xs space-y-1.5 text-[#6B655D]">
                  <div className="flex justify-between">
                    <span>Dimensions:</span>
                    <strong className="text-[#1A1816]">300mm x 10ft / 13ft</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging:</span>
                    <strong className="text-[#1A1816]">10 Pieces / Box</strong>
                  </div>
                </div>
              </div>

              <Link
                to="/products?cat=soffit-panel"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-wider"
              >
                <span>View Soffit Panels &rarr;</span>
              </Link>
            </div>

            {/* Category 5 Card */}
            <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 sm:p-8 shadow-sm flex flex-col justify-between card-hover-elevate reveal reveal-delay-5">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block mb-1">
                  Collection 05
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                  Louvers
                </h3>
                <p className="text-xs text-[#6B655D] mt-2 leading-relaxed">
                  Architectural Wood-Plastic Composite fluted louvers engineered for luxury accent walls in 4-Line (24mm) and 8-Line (17mm) profiles.
                </p>
                <div className="mt-4 pt-4 border-t border-[#E8E3D9] text-xs space-y-1.5 text-[#6B655D]">
                  <div className="flex justify-between">
                    <span>Dimensions:</span>
                    <strong className="text-[#1A1816]">6 Inch x 9.5 Feet</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging:</span>
                    <strong className="text-[#1A1816]">10 Pieces / Box</strong>
                  </div>
                </div>
              </div>

              <Link
                to="/products?cat=wpc-louvers"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-wider"
              >
                <span>View Louvers &rarr;</span>
              </Link>
            </div>

            {/* Category 6 Card: Accessories */}
            <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 sm:p-8 shadow-sm flex flex-col justify-between card-hover-elevate reveal reveal-delay-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block mb-1">
                  Collection 06
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                  Accessories
                </h3>
                <p className="text-xs text-[#6B655D] mt-2 leading-relaxed">
                  Professional installation hardware: Heavy-duty MS polymer adhesive, concealed stainless steel clips, H joiners, L corners, and U edge trims.
                </p>
                <div className="mt-4 pt-4 border-t border-[#E8E3D9] text-xs space-y-1.5 text-[#6B655D]">
                  <div className="flex justify-between">
                    <span>Range:</span>
                    <strong className="text-[#1A1816]">Adhesive, Clamps &amp; Trims</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging:</span>
                    <strong className="text-[#1A1816]">Depends on the order</strong>
                  </div>
                </div>
              </div>

              <Link
                to="/products?cat=accessories"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-wider"
              >
                <span>View Accessories &rarr;</span>
              </Link>
            </div>

          </div>

          <div className="text-center mt-10 reveal">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-gold-gradient text-dark-950 font-bold uppercase tracking-wider text-xs sm:text-sm hover:brightness-105 shadow-md shadow-gold-500/20 btn-sheen"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY BUY WHOLESALE & OPERATIONAL CAPACITY */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8E3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHeading
              badge="Wholesale Distribution Strengths"
              title="Why Retailers & Contractors Partner With JEBE ENTERPRISES"
              subtitle="Massive stock holdings, consistent manufacturing batches, direct factory-wholesale pricing, and dependable transport logistics."
            />
          </div>

          {/* Stats Counters Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 reveal">
            {BUSINESS_CONFIG.stats.map((stat, i) => (
              <StatCounter
                key={i}
                value={stat.value}
                label={stat.label}
                note={stat.note}
              />
            ))}
          </div>

          {/* 3 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-[#E8E3D9] rounded-sm hover:border-gold-500/50 card-hover-elevate shadow-sm reveal reveal-delay-1">
              <span className="text-xs uppercase tracking-widest text-gold-700 font-bold block mb-2">01 / Full Inventory Depth</span>
              <h3 className="font-serif text-lg font-bold text-[#1A1816]">50,000+ Planks & Sheets Ready Stock</h3>
              <p className="text-xs text-[#6B655D] mt-3 leading-relaxed">
                Never halt on-site work waiting for shipments. We maintain deep inventory in Chennai ready for same-day loading and transport dispatch.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#E8E3D9] rounded-sm hover:border-gold-500/50 card-hover-elevate shadow-sm reveal reveal-delay-2">
              <span className="text-xs uppercase tracking-widest text-gold-700 font-bold block mb-2">02 / Direct Factory Pricing</span>
              <h3 className="font-serif text-lg font-bold text-[#1A1816]">Unmatched Contractor Margins</h3>
              <p className="text-xs text-[#6B655D] mt-3 leading-relaxed">
                By purchasing direct from JEBE ENTERPRISES wholesale warehouse, interior contractors and building material dealers avoid secondary distributor markups.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#E8E3D9] rounded-sm hover:border-gold-500/50 card-hover-elevate shadow-sm reveal reveal-delay-3">
              <span className="text-xs uppercase tracking-widest text-gold-700 font-bold block mb-2">03 / Batch Consistency</span>
              <h3 className="font-serif text-lg font-bold text-[#1A1816]">Zero Shade or Profile Variations</h3>
              <p className="text-xs text-[#6B655D] mt-3 leading-relaxed">
                Every box and crate is calibrated to uniform extrusion standards, guaranteeing seamless tongue-and-groove jointing and uniform finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WAREHOUSE & DEPOT VISITING INVITATION */}
      <section className="py-16 bg-[#F5F0E6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E3D9] rounded-sm p-8 sm:p-12 text-center relative overflow-hidden shadow-md reveal">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-bold block mb-2">
              Wholesale Depot & Warehouse
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816]">
              Visit JEBE ENTERPRISES Central Depot in Chennai
            </h2>
            <p className="text-xs sm:text-sm text-[#6B655D] mt-3 max-w-2xl mx-auto leading-relaxed">
              We welcome building material retailers, interior contractors, and developers to visit our central warehouse in Selaiyur, Chennai to inspect plank finishes, verify box packaging, and arrange direct vehicle loading.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 bg-gold-gradient text-dark-950 font-bold uppercase tracking-wider text-xs rounded-sm hover:brightness-105 shadow-md shadow-gold-500/20 btn-sheen"
              >
                <Phone className="w-4 h-4" />
                <span>Call Sales: {BUSINESS_CONFIG.contact.salesHotlineDisplay}</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto py-3.5 px-7 rounded-sm bg-[#FAF7F2] hover:bg-[#F5F0E6] text-[#1A1816] text-xs uppercase tracking-wider font-bold border border-[#E8E3D9] transition-colors"
              >
                View Warehouse Address & Map
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
