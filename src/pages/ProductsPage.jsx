import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/cards/ProductCard';
import SectionHeading from '../components/ui/SectionHeading';
import SEOHead from '../components/ui/SEOHead';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/productsData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Search, Phone, Boxes, X, ArrowRight, ShieldCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(catParam);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state if URL search param changes
  useEffect(() => {
    setSelectedCategory(catParam);
  }, [catParam]);

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', catId);
    }
    setSearchParams(searchParams);
  };

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCat = selectedCategory === 'all' || product.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        product.name.toLowerCase().includes(query) ||
        product.categoryLabel.toLowerCase().includes(query) ||
        product.shortDesc.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FBF9F5] text-[#1A1816] pt-28 pb-24 min-h-screen">
      <SEOHead 
        title="Wholesale Panel Collections — Category by Category | Fluted Panels & UV Sheets"
        description="Browse wholesale interior wall panels category by category: Fluted Wall Panels and UV Marble Sheets. Direct carton and pallet pricing with immediate depot dispatch."
      />

      {/* Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block px-3.5 py-1 bg-white border border-[#E8E3D9] text-gold-700 text-[10px] uppercase tracking-[0.25em] font-bold rounded-sm mb-3 shadow-sm">
            Wholesale Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1816]">
            Wholesale Panel Collections
          </h1>
          <p className="mt-3 text-xs sm:text-base text-[#6B655D] max-w-2xl mx-auto leading-relaxed">
            Supplied strictly in wholesale cartons and crates for contractors, retailers, and builders: Fluted Wall Panels, UV Marble Sheets, Budget PVC Panels, Soffit Panels, Louvers, and Accessories (Adhesive, Clamps &amp; Trims). Direct warehouse dispatch.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Wholesale Sales Phone Banner */}
        <div className="mb-10 p-5 sm:p-6 bg-white border border-[#E8E3D9] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm reveal">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-sm bg-gold-500 text-dark-950 flex items-center justify-center font-bold shrink-0 shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gold-700 font-bold block">
                Wholesale Sales Hotline for Carton & Pallet Rates:
              </span>
              <a 
                href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`} 
                className="font-serif text-lg sm:text-xl font-bold text-[#1A1816] hover:text-gold-700"
              >
                {BUSINESS_CONFIG.contact.salesHotlineDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-3 py-1.5 rounded-sm border border-emerald-200 hidden md:inline-flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Guaranteed Delivery Within 48 Hours</span>
            </span>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#F5F0E6] text-[#1A1816] text-xs uppercase tracking-wider font-bold rounded-sm border border-[#E8E3D9] transition-colors"
            >
              Warehouse Location
            </Link>
          </div>
        </div>

        {/* Search & Category Filter Header Bar */}
        <div className="bg-white border border-[#E8E3D9] rounded-sm p-4 sm:p-5 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm reveal">
          
          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8C827A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search panel numbers (e.g. 320SL, 3D-01)..."
              className="w-full pl-10 pr-9 py-2.5 bg-[#FAF7F2] border border-[#E8E3D9] rounded-sm text-base sm:text-xs text-[#1A1816] placeholder:text-[#8C827A] focus:outline-none focus:border-gold-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C827A] hover:text-[#1A1816]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Result Count and Active Indicator */}
          <div className="flex items-center gap-3 text-xs text-[#6B655D] w-full md:w-auto justify-between md:justify-end">
            <span>
              Showing <strong className="text-gold-700 font-bold">{filteredProducts.length}</strong> of {PRODUCTS.length} Planks & Sheets
            </span>
            {(selectedCategory !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  searchParams.delete('cat');
                  setSearchParams(searchParams);
                }}
                className="text-[11px] text-gold-700 hover:text-gold-800 underline underline-offset-4 flex items-center gap-1 font-bold"
              >
                <X className="w-3 h-3" />
                <span>Show All Collections</span>
              </button>
            )}
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14 max-w-5xl mx-auto reveal">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`py-2.5 sm:py-3 px-4 sm:px-5 text-xs font-bold rounded-sm text-center transition-all shadow-xs flex items-center justify-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-gold-gradient text-dark-950 shadow-md shadow-gold-500/20'
                : 'bg-white text-[#403A34] hover:text-[#1A1816] hover:border-gold-400 border border-[#E8E3D9]'
            }`}
          >
            <span className="uppercase tracking-wider">All Collections</span>
            <span className={`text-[11px] font-semibold ${selectedCategory === 'all' ? 'text-dark-900/80' : 'text-gold-700'}`}>
              ({PRODUCTS.length})
            </span>
          </button>

          {PRODUCT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`py-2.5 sm:py-3 px-4 sm:px-5 text-xs font-bold rounded-sm text-center transition-all shadow-xs flex items-center justify-center gap-2 whitespace-normal ${
                  isSelected
                    ? 'bg-gold-gradient text-dark-950 shadow-md shadow-gold-500/20'
                    : 'bg-white text-[#403A34] hover:text-[#1A1816] hover:border-gold-400 border border-[#E8E3D9]'
                }`}
              >
                <span className="uppercase tracking-wider">{cat.name}</span>
                <span className={`text-[11px] font-semibold shrink-0 ${isSelected ? 'text-dark-900/80' : 'text-gold-700'}`}>
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Category by Category Presentation */}
        {selectedCategory === 'all' && !searchQuery ? (
          <div className="space-y-20">
            {PRODUCT_CATEGORIES.map((cat, idx) => {
              const categoryProducts = PRODUCTS.filter(p => p.category === cat.id);
              return (
                <div key={cat.id} className="pt-2 border-t border-[#E8E3D9]">
                  {/* Category Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 reveal">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block mb-1">
                        Wholesale Collection 0{idx + 1}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1816]">
                        {cat.name}
                      </h2>
                      <p className="text-xs text-[#6B655D] mt-1.5 max-w-xl leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-sm border border-emerald-200">
                        <Truck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Delivery Within 48h</span>
                      </span>
                      <button
                        onClick={() => handleCategoryClick(cat.id)}
                        className="text-xs text-gold-700 hover:text-gold-800 font-bold uppercase tracking-wider"
                      >
                        View Collection ({categoryProducts.length}) &rarr;
                      </button>
                    </div>
                  </div>

                  {/* Category Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {categoryProducts.map((product, pIdx) => (
                      <div key={product.id} className={`reveal reveal-delay-${(pIdx % 3) + 1}`}>
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Filtered View */
          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProducts.map((product, pIdx) => (
                  <div key={product.id} className={`reveal reveal-delay-${(pIdx % 3) + 1}`}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[#E8E3D9] rounded-sm p-12 text-center max-w-lg mx-auto shadow-sm reveal">
                <Boxes className="w-10 h-10 text-gold-600 mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-[#1A1816]">No Matching Panels Found</h3>
                <p className="text-xs text-[#6B655D] mt-2">
                  Try refining your search keyword or clearing the selected category filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    searchParams.delete('cat');
                    setSearchParams(searchParams);
                  }}
                  className="mt-6 px-6 py-2.5 bg-gold-gradient text-dark-950 text-xs font-bold uppercase rounded-sm hover:brightness-105 shadow-sm btn-sheen"
                >
                  Show All Collections
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bulk Order Contractor Callout */}
        <div className="mt-20 bg-white border border-[#E8E3D9] rounded-sm p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md reveal">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-bold block mb-1">
              Contractors • Dealers • High-Volume Buyers
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1816]">
              Ordering 500+ Sq.Ft. or Pallet Lots?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B655D] mt-2 max-w-xl leading-relaxed">
              Contact our wholesale desk directly for container discounts, freight consolidation, and project spec sheets. We arrange same-day vehicle loading at our central depot.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-4 bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider rounded-sm hover:brightness-105 shadow-md shadow-gold-500/20 btn-sheen"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_CONFIG.contact.salesHotlineDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
