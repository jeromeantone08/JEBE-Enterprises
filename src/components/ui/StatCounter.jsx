import React from 'react';

export default function StatCounter({ value, label, note, isPlaceholder = true }) {
  return (
    <div className="relative p-6 sm:p-8 bg-white border border-[#E8E3D9] rounded-sm flex flex-col items-center text-center transition-all duration-300 hover:border-gold-500/50 hover:shadow-md hover:-translate-y-0.5 group shadow-sm">
      {/* Corner architectural accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-500/50"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-500/50"></span>

      {/* Value Counter */}
      <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-gradient tracking-tight">
        {value}
      </div>

      {/* Primary Label */}
      <div className="font-serif text-sm font-semibold tracking-wider text-[#1A1816] uppercase mt-2">
        {label}
      </div>

      {/* Context Note */}
      {note && (
        <div className="text-[11px] text-[#6B655D] mt-1 tracking-wide">
          {note}
        </div>
      )}

      {/* Discreet editable indicator */}
      {isPlaceholder && (
        <span className="text-[9px] uppercase tracking-widest text-gold-700/40 mt-3 font-mono">
          [Wholesale Verified]
        </span>
      )}
    </div>
  );
}
