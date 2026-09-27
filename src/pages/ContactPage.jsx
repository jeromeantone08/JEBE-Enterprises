import React from 'react';
import SEOHead from '../components/ui/SEOHead';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Truck,
  Boxes,
  ShieldCheck,
  ArrowUpRight,
  Warehouse,
  CheckCircle2
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#FBF9F5] text-[#1A1816] pt-28 pb-24 min-h-screen">
      <SEOHead 
        title="Wholesale Warehouse & Contact Directory | Direct Phone & Depot"
        description="Direct contact details for our wholesale Fluted Panels and UV Sheets depot. Call our sales desk, dispatch coordinator, or visit our central Selaiyur warehouse in Chennai."
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block px-3 py-1 bg-white border border-[#E8E3D9] text-gold-700 text-[10px] uppercase tracking-[0.25em] font-bold rounded-sm mb-3 shadow-xs">
            Direct Warehouse Directory
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1816]">
            Wholesale Depot & Sales Desks
          </h1>
          <p className="mt-3 text-xs sm:text-base text-[#6B655D] max-w-2xl mx-auto leading-relaxed">
            Reach our sales coordinators and dispatch managers directly by phone or visit our central warehouse for material inspection and vehicle loading.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Info Cards (Direct Phone Numbers & Warehouse Hours) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Wholesale Sales Desk (Phone) */}
          <div className="p-6 sm:p-7 bg-white border-2 border-gold-500/60 rounded-sm shadow-md flex flex-col justify-between card-hover-elevate reveal reveal-delay-1">
            <div>
              <div className="w-10 h-10 rounded-sm bg-gold-gradient text-dark-950 flex items-center justify-center font-bold mb-4 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gold-700 font-bold block">Wholesale Sales Desk</span>
              <a 
                href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                className="font-serif text-xl font-bold text-[#1A1816] hover:text-gold-700 block mt-1 tracking-wide"
              >
                {BUSINESS_CONFIG.contact.salesHotlineDisplay}
              </a>
              <p className="text-xs text-[#6B655D] mt-2">Plank rates, carton discounts & stock booking</p>
            </div>
            <a
              href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
              className="mt-5 w-full py-2.5 bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider rounded-sm text-center shadow-xs hover:brightness-105 btn-sheen"
            >
              Call Sales Now
            </a>
          </div>

          {/* Card 2: Email for PO & BOQ */}
          <div className="p-6 sm:p-7 bg-white border border-[#E8E3D9] rounded-sm shadow-sm hover:border-gold-500/50 transition-colors flex flex-col justify-between card-hover-elevate reveal reveal-delay-2">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#FBF9F5] border border-[#E8E3D9] flex items-center justify-center text-gold-700 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#6B655D] font-bold block">Bulk Inquiries & PO</span>
              <a 
                href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                className="font-serif text-sm font-bold text-[#1A1816] hover:text-gold-700 block mt-1 truncate"
              >
                {BUSINESS_CONFIG.contact.email}
              </a>
              <p className="text-xs text-[#6B655D] mt-2">Send tender BOQ, drawings & purchase orders</p>
            </div>
            <a
              href={`mailto:${BUSINESS_CONFIG.contact.email}`}
              className="mt-5 w-full py-2.5 bg-[#FBF9F5] border border-[#E8E3D9] text-[#1A1816] hover:border-gold-600 font-bold text-xs uppercase tracking-wider rounded-sm text-center transition-colors"
            >
              Send Email
            </a>
          </div>

          {/* Card 3: Operating Hours */}
          <div className="p-6 sm:p-7 bg-white border border-[#E8E3D9] rounded-sm shadow-sm flex flex-col justify-between card-hover-elevate reveal reveal-delay-3">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#FBF9F5] border border-[#E8E3D9] flex items-center justify-center text-gold-700 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#6B655D] font-bold block">Depot Loading Hours</span>
              <span className="font-serif text-base font-bold text-[#1A1816] block mt-1">Mon – Sat: 10 AM – 6 PM</span>
              <p className="text-xs text-[#6B655D] mt-2">Sunday: Scheduled full-container & lorry loading only</p>
            </div>
            <div className="mt-5 py-2.5 px-3 bg-[#FBF9F5] border border-[#E8E3D9] rounded-sm text-center">
              <span className="text-[11px] text-emerald-700 font-bold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Loading Docks Open
              </span>
            </div>
          </div>

        </div>

        {/* Main Grid: Warehouse Facility Details (Left 6 cols) + Map (Right 6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left: Warehouse Details & Direct Pickup Protocols */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 sm:p-8 shadow-sm reveal">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm bg-[#FBF9F5] border border-[#E8E3D9] flex items-center justify-center text-gold-700 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block mb-1">
                    Central Distribution Depot
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1816]">
                    {BUSINESS_CONFIG.contact.address.facilityName}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B655D] mt-2 leading-relaxed">
                    {BUSINESS_CONFIG.contact.address.line1}, {BUSINESS_CONFIG.contact.address.line2}, {BUSINESS_CONFIG.contact.address.city}, {BUSINESS_CONFIG.contact.address.state} - {BUSINESS_CONFIG.contact.address.pincode}
                  </p>
                  
                  <div className="mt-6 pt-5 border-t border-[#E8E3D9] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[#6B655D] block text-[10px] uppercase font-bold">Wholesale Sales Hotline</span>
                      <a href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`} className="font-bold text-[#1A1816] hover:text-gold-700 text-sm">
                        {BUSINESS_CONFIG.contact.salesHotlineDisplay}
                      </a>
                    </div>
                    <div>
                      <span className="text-[#6B655D] block text-[10px] uppercase font-bold">Warehouse Hours</span>
                      <span className="font-bold text-[#1A1816] text-sm">Mon - Sat (10 AM - 6 PM)</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_CONFIG.contact.address.line1 + ', ' + BUSINESS_CONFIG.contact.address.line2 + ', ' + BUSINESS_CONFIG.contact.address.city + ' ' + BUSINESS_CONFIG.contact.address.pincode)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E8E3D9] hover:border-gold-600 text-[#1A1816] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shadow-xs active:scale-95"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Warehouse Facilities & Contractor Guidelines */}
            <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 sm:p-8 shadow-sm reveal">
              <h4 className="font-serif text-lg font-bold text-[#1A1816] mb-4 flex items-center gap-2">
                <Warehouse className="w-5 h-5 text-gold-700" />
                <span>Depot Protocols for Dealers & Contractors</span>
              </h4>

              <div className="space-y-3.5 text-xs text-[#6B655D]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1816]">Material Physical Inspection:</strong> Contractors and architects can inspect batch fluting profiles and UV sheet stone veining before loading.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1816]">Forklift & Crane Facility:</strong> Mechanical loading available for open lorries, Tata Ace, pickup trucks, and 20ft container vehicles.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1816]">Immediate GST Invoicing:</strong> Computerized tax invoices and E-way bills issued directly at the warehouse dispatch desk for fast exit.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1816]">Matching Trims & Accessories:</strong> L-corners, starter clips, aluminum joining tracks, and adhesives loaded alongside panel cartons.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Google Map Embed Frame */}
          <div className="lg:col-span-6 flex flex-col justify-between reveal reveal-delay-2">
            <div className="relative h-full min-h-[420px] bg-white rounded-sm overflow-hidden border border-[#E8E3D9] shadow-md">
              <iframe
                title="Wholesale Warehouse Location Map"
                src={BUSINESS_CONFIG.contact.address.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[420px]"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-sm border border-[#E8E3D9] text-xs font-bold text-[#1A1816] shadow-md">
                <span className="text-gold-700 block text-[10px] uppercase tracking-wider">Depot Location</span>
                Selaiyur, Chennai
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner: Direct Telephone Reminder */}
        <div className="bg-white border border-[#E8E3D9] rounded-sm p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md text-center md:text-left reveal">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-bold block mb-1">
              Immediate Assistance
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1816]">
              Have a Site Order Ready for Dispatch?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B655D] mt-1.5 max-w-xl">
              Give our sales coordinator a direct phone call for instant crate pricing and lorry scheduling.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider rounded-sm hover:brightness-105 shadow-md shadow-gold-500/20 btn-sheen"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_CONFIG.contact.salesHotlineDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
