import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2 } from 'lucide-react';
import ImageViewerModal from '../ui/ImageViewerModal';

export default function ProductCard({ product }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <div className="group relative bg-white border border-[#E8E3D9] rounded-sm overflow-hidden flex flex-col transition-all duration-500 hover:border-gold-500/60 hover:shadow-xl hover:shadow-[#E2DCD0]/60 card-hover-elevate shadow-sm">
      
      {/* Top Gold Accent Line (Reveals on Hover) */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

      {/* Image Container with Zoom - Click to view full image */}
      <div 
        onClick={() => setIsViewerOpen(true)}
        className="block relative aspect-[4/3] bg-[#FAF7F2] overflow-hidden group/img cursor-zoom-in select-none"
        title="Click to view full image"
      >
        <img
          src={product.primaryImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Subtle Light-to-Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

        {/* Hover Hint: Click to View Full Image */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3 py-1.5 bg-black/85 text-white text-[11px] uppercase tracking-wider font-bold rounded-sm border border-gold-500/50 shadow flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
            <span>View Full Image</span>
          </span>
        </div>

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-sm border border-[#E8E3D9] text-[10px] uppercase tracking-widest text-gold-700 font-bold shadow-sm">
          {product.categoryLabel}
        </div>

        {/* Ready Stock Status Badge */}
        <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-sm border border-emerald-500/40 text-[10px] text-emerald-700 font-semibold flex items-center gap-1 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Bulk Ready</span>
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Title & Tagline */}
          <Link to={`/products/${product.id}`} className="block group/title">
            <h3 className="font-serif text-lg font-bold text-[#1A1816] group-hover/title:text-gold-700 transition-colors leading-snug">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-xs text-[#6B655D] mt-2 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Wholesale Packaging & Dimensions Spec */}
          <div className="mt-4 pt-3 border-t border-[#EFECE6] space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between text-[#6B655D]">
              <span>Standard Size:</span>
              <span className="font-semibold text-[#1A1816]">{product.dimensions ? product.dimensions.split('[')[0] : ''}</span>
            </div>
            {product.boxPacking && (
              <div className="flex items-center justify-between text-[#6B655D]">
                <span>Wholesale Packing:</span>
                <span className="font-semibold text-gold-700">{product.boxPacking.split('(')[0]}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full-Screen High-Resolution Lightbox Modal */}
      <ImageViewerModal
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        images={product.galleryImages || [product.primaryImage]}
        initialIndex={0}
        productName={product.name}
        categoryLabel={product.categoryLabel}
        dimensions={product.dimensions}
      />

    </div>
  );
}
