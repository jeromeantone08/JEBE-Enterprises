import React from 'react';

export default function SectionHeading({ 
  badge, 
  title, 
  subtitle, 
  align = 'center',
  light = false 
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-sm text-[11px] uppercase tracking-[0.25em] font-semibold mb-3.5 bg-white text-gold-800 border border-[#E8E3D9] shadow-sm`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide leading-tight text-[#1A1816]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#6B655D]">
          {subtitle}
        </p>
      )}

      {/* Subtle gold accent divider */}
      <div className={`mt-5 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="w-12 h-0.5 bg-gold-gradient rounded-full"></span>
        <span className="w-2 h-2 rotate-45 border border-gold-600"></span>
        <span className="w-6 h-0.5 bg-gold-600/40 rounded-full"></span>
      </div>
    </div>
  );
}
