import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/cards/ServiceCard';
import SectionHeading from '../components/ui/SectionHeading';
import SEOHead from '../components/ui/SEOHead';
import { SERVICES } from '../data/servicesData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Phone, MapPin, ArrowRight, Boxes, Truck, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-[#FBF9F5] text-[#1A1816] pt-28 pb-24 min-h-screen">
      <SEOHead 
        title="Wholesale Supply, Logistics & Contractor Support Services"
        description="Explore our wholesale services: bulk panel supply, same-day warehouse vehicle loading, guaranteed 48-hour transport delivery (no samples provided), and contractor technical support."
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block px-3 py-1 bg-white border border-[#E8E3D9] text-gold-700 text-[10px] uppercase tracking-[0.25em] font-bold rounded-sm mb-3 shadow-xs">
            Wholesale Capabilities
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1816]">
            Wholesale Supply & Support Services
          </h1>
          <p className="mt-3 text-xs sm:text-base text-[#6B655D] max-w-2xl mx-auto leading-relaxed">
            From container-load warehouse dispatch and forklift loading to contractor telephone assistance and guaranteed 48-hour delivery (wholesale orders only; samples are not provided).
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 6 Wholesale Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`reveal reveal-delay-${(index % 3) + 1}`}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {/* Direct Call & Warehouse Action Card */}
        <div className="bg-white border border-[#E8E3D9] rounded-sm p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-md reveal">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816]">
            Need Bulk Material Dispatch or Contractor Pricing?
          </h2>
          <p className="text-xs sm:text-sm text-[#6B655D] mt-3 max-w-xl mx-auto leading-relaxed">
            Call our sales coordinators directly by phone to check real-time stock levels, carton packing counts, or to schedule customer lorry loading.
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
              className="w-full sm:w-auto py-3.5 px-7 rounded-sm bg-white hover:bg-cream-200 text-[#1A1816] text-xs uppercase tracking-wider font-semibold border border-[#E8E3D9] transition-colors"
            >
              Warehouse Location & Map
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
