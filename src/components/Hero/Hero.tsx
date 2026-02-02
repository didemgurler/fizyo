import React from 'react';
import { Play, Award, Users, Calendar, Phone } from 'lucide-react';
import profileImg from '../../assets/aleynayaren.jpg';

const Hero = () => {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-50 to-blue-50 pt-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-teal-600/10 to-blue-600/10"></div>
        {/* You can add a background video here if needed */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Uzman Fizyoterapist</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                FizyoEco Pilates ve Sağlıklı Yaşam Merkezi
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Ankara Çayyolu'nda bulunan fizyoterapi ve sağlıklı yaşam merkezimizde uzman kadromuz ve modern
                fizyoterapi yaklaşımlarıyla hizmetinizdeyiz. Bireysel, grup ve düet pilates ile nörogelişimsel
                yoga dersleri vermekteyiz. Günlük yaşam aktivitelerinde görülen ağrı ve kısıtlılığı azaltarak
                hareket özgürlüğünüzü yeniden kazanmanız için yanınızdayız.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Award className="w-6 h-6 text-teal-600" />
                <span className="text-gray-700 font-medium">Profesyonel Hizmet</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Users className="w-6 h-6 text-teal-600" />
                <span className="text-gray-700 font-medium">Uzman Kadro</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Calendar className="w-6 h-6 text-teal-600" />
                <span className="text-gray-700 font-medium">Ücretsiz Deneme Dersi</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Play className="w-6 h-6 text-teal-600" />
                <span className="text-gray-700 font-medium">Güncel ve Bütüncül Yaklaşımlar</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToAppointment}
                className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Ücretsiz Randevu Al
              </button>
              <a
                href="tel:05305546198"
                className="inline-flex items-center justify-center border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 font-medium text-lg text-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Hemen Ara</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <img
                  src={profileImg}
                  alt="Aleyna Yaren - Fizyoterapist"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Uzm. Fzt. Aleyna Yaren Bayrak Uzun</h3>
                  <div className="mt-4 flex justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-teal-600 text-white px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Yıllık Deneyim</div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">Yüzlerce</div>
                  <div className="text-xs text-gray-600">Mutlu Hasta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-300/20 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-blue-300/20 rounded-full animate-pulse delay-1500"></div>
      </div>
    </section>
  );
};

export default Hero;