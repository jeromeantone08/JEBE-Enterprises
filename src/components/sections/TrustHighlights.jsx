import React from 'react';
import { Boxes, TrendingUp, ShieldCheck, Truck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';

const ICON_MAP = {
  Boxes: Boxes,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  Truck: Truck,
};

export default function TrustHighlights() {
  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {BUSINESS_CONFIG.wholesaleStrengths.map((pillar, idx) => {
          const Icon = ICON_MAP[pillar.iconName] || Boxes;
          return (
            <div
              key={pillar.id}
              className={`group relative bg-white border border-[#E8E3D9] hover:border-gold-500/60 p-6 sm:p-7 rounded-sm shadow-md hover:shadow-xl hover:shadow-[#E2DCD0]/60 card-hover-elevate reveal reveal-delay-${idx + 1}`}
            >
              {/* Gold Indicator Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-[#FAF7F2] border border-[#E8E3D9] flex items-center justify-center text-gold-700 group-hover:bg-gold-500 group-hover:text-dark-950 transition-colors duration-300 shadow-sm mb-4">
                <Icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-base font-bold text-[#1A1816] group-hover:text-gold-700 transition-colors">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#6B655D] mt-2 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
