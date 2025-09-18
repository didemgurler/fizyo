import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Aleyna Yaren</h3>
              <p className="text-gray-300 leading-relaxed">
                Ankara'da bulunan fizyoterapi merkezimizde, uzman kadromuz ve modern 
                fizyoterapi ekipmanlarımızla hizmetinizdeyiz. Hareket özgürlüğünüzü 
                yeniden kazanmanız için yanınızdayız.
              </p>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-teal-600 rounded-lg">
              <Phone className="w-5 h-5 text-white" />
              <a href="tel:05321234567" className="text-white font-semibold hover:text-teal-100 transition-colors">
                0532 123 45 67
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {[
                { label: 'Anasayfa', id: 'hero' },
                { label: 'Hakkımda', id: 'about' },
                { label: 'Hizmetler', id: 'services' },
                { label: 'Galeri', id: 'gallery' },
                { label: 'Blog', id: 'blog' },
                { label: 'İletişim', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Çalışma Saatleri</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300 font-medium">Randevu Saatleri</span>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pazartesi - Cuma:</span>
                  <span className="text-teal-400 font-medium">09:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cumartesi:</span>
                  <span className="text-teal-400 font-medium">09:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pazar:</span>
                  <span className="text-red-400 font-medium">Kapalı</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">İletişim Bilgileri</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-1" />
                <div>
                  <p className="text-gray-300">
                    Ankara Ticaret Merkezi A Blok<br />
                    Kat: 6 No: 32<br />
                    Çankaya/Ankara
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <a 
                  href="mailto:bilgi@aleynayaren.com" 
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  bilgi@aleynayaren.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <a 
                  href="tel:05321234567" 
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  0532 123 45 67
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-3">Sosyal Medya</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} Aleyna Yaren Fizyoterapi. Tüm hakları saklıdır.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
              >
                Anasayfa
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
              >
                Hakkımda
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
              >
                Hizmetler
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
              >
                İletişim
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;