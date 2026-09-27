import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/productsData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import SEOHead from '../components/ui/SEOHead';
import ProductCard from '../components/cards/ProductCard';
import ImageViewerModal from '../components/ui/ImageViewerModal';
import { 
  ArrowLeft, 
  Phone, 
  Boxes, 
  Truck, 
  ShieldCheck, 
  MapPin, 
  Wrench, 
  Sparkles,
  CheckCircle2,
  Info,
  Maximize2,
  ZoomIn
} from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-dark-900 text-ivory pt-36 pb-20 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="font-serif text-2xl font-bold text-ivory">Panel Profile Not Found</h2>
        <p className="text-xs text-ivory-muted mt-2">The wholesale panel you are looking for may have been updated or moved.</p>
        <Link
          to="/products"
          className="mt-6 px-6 py-3 bg-gold-gradient text-dark-950 font-bold uppercase tracking-wider text-xs rounded-sm"
        >
          Return to Wholesale Catalog
        </Link>
      </div>
    );
  }

  // Active gallery image & Full-Screen Image Lightbox modal state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  const galleryImages = product.galleryImages || [product.primaryImage];

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  return (
    <div className="bg-[#FBF9F5] text-[#1A1816] pt-28 pb-24">
      <SEOHead 
        title={`${product.name} | ${product.categoryLabel} Wholesale`}
        description={product.shortDesc}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link & Breadcrumb Navigation */}
        <div className="mb-8 reveal">
          <Link 
            to={`/products?cat=${product.category}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-wider mb-3 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to {product.categoryLabel} Collection</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-[#6B655D]">
            <Link to="/" className="hover:text-gold-700 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gold-700 transition-colors">Collections</Link>
            <span>/</span>
            <Link 
              to={`/products?cat=${product.category}`} 
              className="hover:text-gold-700 transition-colors text-gold-700 font-bold"
            >
              {product.categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-[#1A1816] truncate max-w-xs font-medium">{product.name}</span>
          </div>
        </div>

        {/* Main Product Showcase Grid (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
          
          {/* Left Column: Image Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4 reveal">
            {/* Primary Large Image View - Click to view full image */}
            <div 
              onClick={() => setIsImageViewerOpen(true)}
              className="relative aspect-[4/3] bg-white rounded-sm overflow-hidden border border-[#E8E3D9] shadow-md cursor-zoom-in group transition-all hover:border-gold-500/80 hover:shadow-xl"
              title="Click image to view full image"
            >
              <img
                src={galleryImages[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

              {/* Top-Left Floating Badge: Click to view full image */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-black/75 hover:bg-black/90 backdrop-blur-md rounded-sm border border-gold-500/50 text-xs text-white font-semibold flex items-center gap-1.5 shadow-md transition-all">
                <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                <span>Click image to view full image</span>
              </div>

              {/* Tag / Dimensions pill */}
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-sm border border-[#E8E3D9] text-xs text-[#1A1816] shadow-sm">
                <span className="text-gold-700 font-bold">{product.dimensions}</span>
              </div>

              {/* Stock badge */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-emerald-600 text-white font-bold text-xs rounded-sm shadow">
                {product.stockStatus || 'Ready Warehouse Stock'}
              </div>

              {/* Center Zoom Hover Prompt */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2.5 bg-black/85 text-white text-xs uppercase tracking-wider font-bold rounded-sm border border-gold-500/60 shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-4 h-4 text-gold-400" />
                  <span>View Full Image</span>
                </span>
              </div>
            </div>

            {/* Explicit Action Button: View Full Image */}
            <button
              type="button"
              onClick={() => setIsImageViewerOpen(true)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-stone-50 border border-[#E8E3D9] text-[#1A1816] text-xs font-bold uppercase tracking-wider rounded-sm shadow-xs transition-all hover:border-gold-500 hover:text-gold-700 cursor-pointer"
            >
              <Maximize2 className="w-4 h-4 text-gold-600" />
              <span>Click to View Full Image (Full Screen Modal)</span>
            </button>

            {/* Thumbnail Selector */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-video rounded-sm overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx 
                        ? 'border-gold-600 shadow-md ring-1 ring-gold-500 scale-[1.02]' 
                        : 'border-[#E8E3D9] opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Wholesale Specifications, Packaging & Direct Phone Contact (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 reveal reveal-delay-2">
            <div>
              {/* Category Pill */}
              <div className="inline-block px-3 py-1 bg-white border border-[#E8E3D9] text-gold-700 text-[10px] uppercase tracking-[0.25em] font-bold rounded-sm mb-3 shadow-xs">
                {product.categoryLabel}
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1816] leading-tight">
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="text-xs text-gold-700 font-bold tracking-wide mt-2">
                {product.tagline}
              </p>

              {/* Wholesale Packaging & Dimensions Highlight Box */}
              <div className="mt-4 p-4 bg-white rounded-sm border border-[#E8E3D9] space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B655D] font-bold">Standard Size:</span>
                  <span className="text-xs font-bold text-emerald-800">{product.dimensions}</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#E8E3D9] pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B655D] font-bold">Wholesale Packaging:</span>
                  <span className="text-xs font-bold text-gold-700">{product.boxPacking}</span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#6B655D] mt-4 leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="mt-5 pt-4 border-t border-[#E8E3D9]">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B655D] block mb-2.5 font-bold">
                    Key Features:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1A1816]">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 bg-[#FBF9F5] p-2 rounded-sm border border-[#E8E3D9]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-700 shrink-0 mt-0.5" />
                        <span className="leading-snug text-[11px] text-[#403A34]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications Tags */}
              <div className="mt-5 pt-4 border-t border-[#E8E3D9]">
                <span className="text-[10px] uppercase tracking-wider text-[#6B655D] block mb-2 font-bold">
                  Recommended For:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 bg-white rounded-sm border border-[#E8E3D9] text-[#1A1816] font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Variation Disclaimer Notice */}
              <div className="mt-4 p-3 bg-amber-50/80 border border-amber-200/80 rounded-sm flex items-start gap-2.5 text-xs text-amber-900">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  <strong className="font-semibold">Color Notice:</strong> The original product color may vary slightly due to lighting conditions when the photo was taken.
                </p>
              </div>
            </div>

            {/* 48-Hour Delivery Commitment */}
            <div className="p-3.5 bg-[#F4F9F4] border border-emerald-300/80 rounded-sm flex items-center gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 font-bold text-xs">
                48h
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-900 block">
                  Delivery Done Within 48 Hours
                </span>
                <span className="text-[11px] text-emerald-700">
                  Direct warehouse dispatch with guaranteed 48-hour transport delivery.
                </span>
              </div>
            </div>

            {/* Direct Wholesale Phone CTAs */}
            <div className="pt-6 border-t border-[#E8E3D9] flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-sm bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md shadow-gold-500/20 transition-all btn-sheen"
              >
                <Phone className="w-4 h-4" />
                <span>Call Sales Desk: {BUSINESS_CONFIG.contact.salesHotlineDisplay}</span>
              </a>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-white border border-[#E8E3D9] text-[#1A1816] text-xs font-bold hover:border-gold-600 transition-colors shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-700" />
                <span>Visit Central Warehouse & Depot</span>
              </Link>
            </div>

          </div>

        </div>

        {/* Technical Data & Packaging Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white border border-[#E8E3D9] rounded-sm p-6 sm:p-10 mb-20 shadow-md">
          
          {/* Col 1: Core Specifications */}
          <div className="space-y-4 reveal reveal-delay-1">
            <h3 className="font-serif text-lg font-bold text-[#1A1816] flex items-center gap-2 border-b border-[#E8E3D9] pb-3">
              <ShieldCheck className="w-5 h-5 text-gold-700" />
              <span>Plank & Material Data</span>
            </h3>

            <div className="space-y-2 text-xs divide-y divide-[#E8E3D9]">
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">Dimensions:</span>
                <span className="font-semibold text-[#1A1816]">{product.dimensions}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">Material Composition:</span>
                <span className="font-semibold text-[#1A1816] text-right max-w-[200px]">{product.material}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">Fire Rating:</span>
                <span className="font-bold text-amber-800">{product.fireRating}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">Water Resistance:</span>
                <span className="font-bold text-emerald-800">{product.waterResistance}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">Plank Weight:</span>
                <span className="font-semibold text-[#1A1816]">{product.weight}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">Interlock Profile:</span>
                <span className="font-semibold text-[#1A1816]">{product.interlockType}</span>
              </div>
              {product.ecoFriendly && (
                <div className="flex justify-between py-1.5">
                  <span className="text-[#6B655D]">Eco-Friendly:</span>
                  <span className="font-semibold text-emerald-800 text-right">{product.ecoFriendly}</span>
                </div>
              )}
              {product.chemicalResistance && (
                <div className="flex justify-between py-1.5">
                  <span className="text-[#6B655D]">Chemical Resistance:</span>
                  <span className="font-semibold text-[#1A1816] text-right">{product.chemicalResistance}</span>
                </div>
              )}
              {product.stainResistance && (
                <div className="flex justify-between py-1.5">
                  <span className="text-[#6B655D]">Stain Resistance:</span>
                  <span className="font-semibold text-[#1A1816] text-right">{product.stainResistance}</span>
                </div>
              )}
              {product.termiteBorerResistance && (
                <div className="flex justify-between py-1.5">
                  <span className="text-[#6B655D]">Pest / Mold:</span>
                  <span className="font-semibold text-emerald-800 text-right">{product.termiteBorerResistance}</span>
                </div>
              )}
              {product.uvResistance && (
                <div className="flex justify-between py-1.5">
                  <span className="text-[#6B655D]">UV Resistance:</span>
                  <span className="font-semibold text-[#1A1816] text-right">{product.uvResistance}</span>
                </div>
              )}
              {product.easyMaintenance && (
                <div className="flex justify-between py-1.5">
                  <span className="text-[#6B655D]">Maintenance:</span>
                  <span className="font-semibold text-[#1A1816] text-right">{product.easyMaintenance}</span>
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Wholesale Packaging & Logistics */}
          <div className="space-y-4 reveal reveal-delay-2">
            <h3 className="font-serif text-lg font-bold text-[#1A1816] flex items-center gap-2 border-b border-[#E8E3D9] pb-3">
              <Boxes className="w-5 h-5 text-gold-700" />
              <span>Packaging & Loading</span>
            </h3>

            <div className="space-y-2 text-xs divide-y divide-[#E8E3D9]">
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">{product.category === 'accessories' ? 'Wholesale Packing:' : 'Standard Box:'}</span>
                <span className="font-bold text-gold-700 text-right">{product.boxPacking}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">Delivery Schedule:</span>
                <span className="font-bold text-emerald-800">Within 48 Hours</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">Warehouse Status:</span>
                <span className="font-bold text-emerald-800">{product.stockStatus}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">Edge Protection:</span>
                <span className="font-semibold text-[#1A1816]">Reinforced Carton Corners</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B655D]">Pallet Packing:</span>
                <span className="font-semibold text-[#1A1816]">Stretch-Wrapped Wooden Pallets</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#6B655D] leading-relaxed">
              We assist customer vehicles and commercial transport lorries with mechanical loading at our central depot.
            </div>
          </div>

          {/* Col 3: Installation & Maintenance */}
          <div className="space-y-4 reveal reveal-delay-3">
            <h3 className="font-serif text-lg font-bold text-[#1A1816] flex items-center gap-2 border-b border-[#E8E3D9] pb-3">
              <Wrench className="w-5 h-5 text-gold-700" />
              <span>Contractor Fitting & Care</span>
            </h3>

            <p className="text-xs text-[#6B655D] leading-relaxed">
              {product.installationInfo}
            </p>

            {product.category !== 'uv-sheet' && (
              <div className="p-3.5 bg-[#FBF9F5] rounded-sm border border-[#E8E3D9] text-xs text-[#6B655D] mt-2">
                <span className="text-gold-700 font-bold block mb-1">Color-Matched Trims in Stock:</span>
                L-corners, starting clips, and aluminum joining profiles available directly with panel orders.
              </div>
            )}
          </div>

        </div>

        {/* Related Category Panels */}
        {relatedProducts.length > 0 && (
          <div className="reveal">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-bold block">
                  Same Category Planks
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#1A1816] mt-1">
                  More from {product.categoryLabel}
                </h2>
              </div>
              <Link 
                to={`/products?cat=${product.category}`} 
                className="text-xs text-gold-700 hover:text-gold-800 font-bold uppercase tracking-wider"
              >
                View Category &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p, rIdx) => (
                <div key={p.id} className={`reveal reveal-delay-${(rIdx % 3) + 1}`}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Full Image Viewer Lightbox Modal */}
      <ImageViewerModal
        isOpen={isImageViewerOpen}
        onClose={() => setIsImageViewerOpen(false)}
        images={galleryImages}
        initialIndex={activeImageIndex}
        productName={product.name}
        categoryLabel={product.categoryLabel}
        dimensions={product.dimensions}
      />
    </div>
  );
}
