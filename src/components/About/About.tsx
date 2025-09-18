import React from 'react';
import { Play, Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7447214/pexels-photo-7447214.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Aleyna Yaren - Uzman Fizyoterapist"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Play Button for Video */}
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-xl hover:bg-white transition-all duration-300 group">
                  <Play className="w-12 h-12 text-teal-600 group-hover:scale-110 transition-transform" />
                </div>
              </button>

              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-teal-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">8+</div>
                  <div className="text-sm font-medium">Yıllık Deneyim</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Uzm. Fizyoterapist
                <span className="block text-teal-600">Aleyna Yaren</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Uzman Fizyoterapist Aleyna Yaren, Ankara doğumlu olup ilköğretim ve lise 
                  eğitimini Ankara'da tamamladı. 2016 yılında Başkent Üniversitesi Sağlık 
                  Bilimleri Fakültesi Fizik Tedavi ve Rehabilitasyon bölümünü burslu kazanarak 
                  başladı ve 2021 yılında üniversiteyi dereceyle bitirerek 'fizyoterapist' 
                  olarak mezun oldu.
                </p>
                <p>
                  Manuel Terapi alanındaki Yüksek Lisans eğitimini Başkent Üniversitesi Sağlık 
                  Bilimleri Fakültesi Fizyoterapi ve Rehabilitasyon bölümünde tamamlayarak 2023 
                  yılında Uzman Fizyoterapist unvanını aldı.
                </p>
                <p>
                  Uluslararası akademik çalışmaları önemli dergilerde yayınlanmıştır. Akademik 
                  kariyeri ve bilimsel çalışmaları devam etmektedir.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-xl">
                <Award className="w-8 h-8 text-teal-600" />
                <div>
                  <div className="font-semibold text-gray-900">Uzman Fizyoterapist</div>
                  <div className="text-sm text-gray-600">Başkent Üniversitesi</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Manuel Terapi</div>
                  <div className="text-sm text-gray-600">Yüksek Lisans</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <Users className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-600">Tedavi edilen hasta</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                <BookOpen className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">Akademik</div>
                  <div className="text-sm text-gray-600">Yayınlar</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ücretsiz Muayene</h3>
                  <p className="text-teal-100">Hemen arayın, randevunuzu alın</p>
                </div>
                <a
                  href="tel:05321234567"
                  className="bg-white text-teal-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                >
                  0532 123 45 67
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors font-medium">
                Daha Fazla Bilgi
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 font-medium">
                CV İndir
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;