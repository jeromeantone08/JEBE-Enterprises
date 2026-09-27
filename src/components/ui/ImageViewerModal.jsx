import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Phone 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';

export default function ImageViewerModal({
  isOpen,
  onClose,
  images = [],
  initialIndex = 0,
  productName = '',
  categoryLabel = '',
  dimensions = ''
}) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [zoomScale, setZoomScale] = useState(1);

  // Touch Swipe Gesture State for Mobile (iOS & Android)
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });
  const lastTapRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(initialIndex);
      setZoomScale(1);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setZoomScale(1);
      }
      if (e.key === 'ArrowLeft' && images.length > 1) {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setZoomScale(1);
      }
      if (e.key === '+' || e.key === '=') {
        setZoomScale((prev) => Math.min(prev + 0.25, 3));
      }
      if (e.key === '-' || e.key === '_') {
        setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Cross-platform scroll locking (Windows, macOS, iOS, Android)
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [isOpen, images.length, onClose]);

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    }
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
    const duration = Date.now() - touchStartRef.current.time;

    // Detect double-tap to zoom on mobile
    const now = Date.now();
    if (now - lastTapRef.current < 300 && Math.abs(deltaX) < 15 && Math.abs(deltaY) < 15) {
      setZoomScale((prev) => (prev > 1 ? 1 : 2));
      lastTapRef.current = 0;
      return;
    }
    lastTapRef.current = now;

    // Fast swipe gesture (within 600ms)
    if (duration < 600) {
      // Horizontal swipe to change image (if not zoomed in)
      if (zoomScale === 1 && Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
        if (deltaX < 0 && images.length > 1) {
          // Swipe Left -> Next
          setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
          setZoomScale(1);
        } else if (deltaX > 0 && images.length > 1) {
          // Swipe Right -> Prev
          setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          setZoomScale(1);
        }
      } 
      // Swipe down to dismiss (native mobile modal feel)
      else if (zoomScale === 1 && deltaY > 80 && Math.abs(deltaY) > Math.abs(deltaX) * 1.5) {
        onClose();
      }
    }
  };

  if (!isOpen || typeof document === 'undefined' || images.length === 0) {
    return null;
  }

  const currentImage = images[activeIndex] || images[0];

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in touch-none select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar with iOS Notch / Dynamic Island Safe Area */}
      <div className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 pt-[max(0.75rem,env(safe-area-inset-top,0px))] flex items-center justify-between bg-gradient-to-b from-black/95 via-black/80 to-transparent">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
          {categoryLabel && (
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-400 font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/60 border border-gold-500/30 rounded-sm shrink-0">
              {categoryLabel}
            </span>
          )}
          <div className="text-white min-w-0 truncate">
            <h3 className="font-serif text-xs sm:text-base font-bold truncate">
              {productName}
            </h3>
            {dimensions && (
              <span className="text-[10px] sm:text-[11px] text-stone-400 hidden sm:inline">
                {dimensions} • Full Resolution View
              </span>
            )}
          </div>
        </div>

        {/* Top Right Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Zoom In */}
          <button
            onClick={() => setZoomScale((prev) => Math.min(prev + 0.25, 3))}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-colors border border-white/10 flex items-center justify-center cursor-pointer"
            title="Zoom In (+)"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={() => setZoomScale((prev) => Math.max(prev - 0.25, 0.75))}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-colors border border-white/10 flex items-center justify-center cursor-pointer"
            title="Zoom Out (-)"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Reset Zoom */}
          {zoomScale !== 1 && (
            <button
              onClick={() => setZoomScale(1)}
              className="px-2 py-1 sm:px-2.5 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-sm bg-white/10 hover:bg-white/20 active:scale-95 text-gold-400 transition-colors border border-white/10 flex items-center gap-1 cursor-pointer"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden xs:inline">Reset</span>
            </button>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-white/10 hover:bg-red-500/80 active:scale-95 text-white transition-colors border border-white/10 flex items-center justify-center cursor-pointer"
            title="Close (Esc)"
            aria-label="Close Full Image View"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Desktop/Tablet Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
              setZoomScale(1);
            }}
            className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-black/60 hover:bg-gold-500 hover:text-black active:scale-95 text-white border border-white/20 transition-all shadow-xl items-center justify-center cursor-pointer"
            title="Previous Image (Left Arrow)"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
              setZoomScale(1);
            }}
            className="hidden sm:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-black/60 hover:bg-gold-500 hover:text-black active:scale-95 text-white border border-white/20 transition-all shadow-xl items-center justify-center cursor-pointer"
            title="Next Image (Right Arrow)"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Full-Screen Image Viewing Area */}
      <div 
        className="w-full h-full flex items-center justify-center overflow-hidden p-2 sm:p-4 pt-16 sm:pt-20 pb-16 sm:pb-20 select-none"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div 
          className="transition-transform duration-200 ease-out max-h-full max-w-full flex items-center justify-center"
          style={{ transform: `scale(${zoomScale})` }}
        >
          <img
            src={currentImage}
            alt={productName}
            className="max-h-[76dvh] max-w-[94vw] w-auto h-auto object-contain block mx-auto rounded-sm shadow-2xl pointer-events-auto transition-all"
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom Bar: Safe Area Support for iOS & Android Gesture Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-50 px-4 sm:px-6 py-2.5 sm:py-3.5 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] bg-gradient-to-t from-black/95 via-black/80 to-transparent flex items-center justify-between text-xs text-stone-300">
        <div className="flex items-center gap-2 sm:gap-3">
          {images.length > 1 && (
            <span className="font-semibold text-gold-400 text-[11px] sm:text-xs">
              {activeIndex + 1} / {images.length}
            </span>
          )}
          <span className="hidden md:inline text-stone-400 text-[11px]">
            Swipe, arrow keys, or zoom controls • Esc to close
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS_CONFIG.contact.salesHotlineCall}`}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 bg-gold-gradient text-dark-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider rounded-sm shadow active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Sales Desk</span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
