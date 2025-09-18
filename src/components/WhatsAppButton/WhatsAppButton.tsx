import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Show tooltip after 3 seconds of page load
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "905305546198"; // Turkish phone number format for WhatsApp
    const message = encodeURIComponent(
      "Merhaba Aleyna Yaren, web sitenizden ulaşıyorum. Fizyoterapi hizmetleriniz hakkında bilgi almak istiyorum."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 bg-white rounded-lg shadow-lg p-3 max-w-xs animate-bounce">
          <button
            onClick={closeTooltip}
            className="absolute top-1 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-gray-800 pr-6">
            Ücretsiz randevu için WhatsApp'tan yazabilirsiniz! 💬
          </p>
          <div className="absolute bottom-[-6px] right-6 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
        aria-label="WhatsApp ile iletişim"
      >
        {/* Ripple Effect */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30"></div>
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10" />
        
        {/* Hover Text */}
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp ile yazın
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>

        {/* Online Indicator */}
        <div className="absolute -top-1 -right-1 bg-green-400 w-4 h-4 rounded-full border-2 border-white animate-pulse">
          <div className="w-full h-full bg-green-500 rounded-full"></div>
        </div>
      </button>

      {/* Secondary Action Buttons */}
      <div className="absolute bottom-20 right-0 space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <button
          onClick={() => window.open('tel:05305546198', '_self')}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          aria-label="Telefon ara"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;