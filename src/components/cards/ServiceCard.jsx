import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Sparkles, 
  Tv, 
  Building2, 
  Sliders, 
  Compass, 
  Truck,
  Clock,
  Boxes,
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const ICON_MAP = {
  Layers: Layers,
  Sparkles: Sparkles,
  Tv: Tv,
  Building2: Building2,
  Sliders: Sliders,
  Compass: Compass,
  Truck: Truck,
  Clock: Clock,
  Boxes: Boxes,
};

export default function ServiceCard({ service, index }) {
  const IconComponent = ICON_MAP[service.icon] || Layers;

  return (
    <div className="group relative bg-white border border-[#E8E3D9] rounded-sm p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-gold-500/60 hover:shadow-xl card-hover-elevate">
      
      {/* Top Gold Subtle Accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      <div>
        {/* Header with Icon and Step Index */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-sm bg-[#FBF9F5] border border-[#E8E3D9] flex items-center justify-center text-gold-700 group-hover:bg-gold-500 group-hover:text-dark-950 transition-colors duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="font-serif text-sm tracking-widest text-[#6B655D]/50 font-bold">
            0{index + 1}
          </span>
        </div>

        {/* Service Titles */}
        <h3 className="font-serif text-xl font-bold text-[#1A1816] group-hover:text-gold-700 transition-colors">
          {service.title}
        </h3>

        <p className="text-xs text-gold-700 font-bold tracking-wide mt-1 uppercase">
          {service.subtitle}
        </p>

        <p className="text-xs text-[#6B655D] mt-3.5 leading-relaxed">
          {service.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="mt-6 pt-5 border-t border-[#E8E3D9] space-y-2">
          {service.deliverables.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-[#6B655D]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA at Bottom */}
      <div className="mt-8 pt-5 border-t border-[#E8E3D9] flex items-center justify-between">
        <span className="text-[11px] text-[#6B655D]">Wholesale Support</span>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-700 hover:text-gold-800 group-hover:translate-x-0.5 transition-all"
        >
          <span>Depot Desk</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
