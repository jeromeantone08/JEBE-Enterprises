import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import ScrollRevealManager from './components/ui/ScrollRevealManager';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen min-h-[100dvh] w-full overflow-x-hidden bg-[#FBF9F5] text-[#1A1816] selection:bg-gold-500/25 selection:text-gold-800">
        <ScrollToTop />
        <ScrollRevealManager />
        <Navbar />
        
        <main className="flex-grow page-enter-animation w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/projects" element={<Navigate to="/products" replace />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-choose-us" element={<Navigate to="/" replace />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
