import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-teal-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>bilgi@aleynayaren.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Ankara Merkez, Çankaya/Ankara</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>0532 123 45 67</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-teal-600">
              Aleyna Yaren
            </h1>
            <p className="text-sm text-gray-600">Fizyoterapist</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {[
              { label: 'Anasayfa', id: 'hero' },
              { label: 'Hakkımda', id: 'about' },
              { label: 'Hizmetler', id: 'services' },
              { label: 'Galeri', id: 'gallery' },
              { label: 'Yorumlar', id: 'testimonials' },
              { label: 'Blog', id: 'blog' },
              { label: 'İletişim', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('appointment')}
              className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Ücretsiz Randevu Al
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {[
                { label: 'Anasayfa', id: 'hero' },
                { label: 'Hakkımda', id: 'about' },
                { label: 'Hizmetler', id: 'services' },
                { label: 'Galeri', id: 'gallery' },
                { label: 'Yorumlar', id: 'testimonials' },
                { label: 'Blog', id: 'blog' },
                { label: 'İletişim', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('appointment')}
                className="w-full bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition-all duration-300 font-medium mt-4"
              >
                Ücretsiz Randevu Al
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;