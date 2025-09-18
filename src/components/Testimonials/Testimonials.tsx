import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ayşe Demir',
      title: 'Hasta',
      rating: 5,
      text: 'Aleyna hanıma bel fıtığı problemim için geldim. Kendisi çok profesyonel ve ilgili. 5 seans sonrasında ağrılarım büyük oranda geçti. Kesinlikle tavsiye ederim.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mehmet Kaya',
      title: 'Hasta',
      rating: 5,
      text: 'Boyun düzleşmesi sorunu yaşıyordum. Aleyna hocanın tedavisi sayesinde hem ağrılarım geçti hem de postürüm düzeldi. Çok memnun kaldım.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Fatma Öztürk',
      title: 'Hasta',
      rating: 5,
      text: 'Skolyoz tedavim için gitmiştim. Çok güler yüzlü ve samimi bir yaklaşımı var. Tedavi sürecim boyunca sürekli motivasyon verdi. Sonuçlardan çok memnunum.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ali Yılmaz',
      title: 'Hasta',
      rating: 5,
      text: 'Migren problemim için manuel terapi aldım. İlk seanstan itibaren rahatlama hissettim. Aleyna hocanın deneyimi ve yaklaşımı gerçekten takdire şayan.',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Zehra Ak',
      title: 'Hasta',
      rating: 5,
      text: 'Postür bozukluğum için tedavi gördüm. Çok detaylı bir muayene yaparak problemi tespit etti. Verdiği egzersizlerle birlikte büyük iyileşme yaşadım.',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Can Arslan',
      title: 'Hasta',
      rating: 5,
      text: 'Uzun süre devam eden sırt ağrılarım vardı. Manuel terapi seansları sonrasında ağrılarım tamamen geçti. Hem teknik bilgisi hem de insan ilişkileri mükemmel.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Hasta Yorumları
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Hastalarımızın tedavi deneyimleri ve memnuniyetleri bizim en büyük motivasyonumuz
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <Quote className="w-12 h-12 text-teal-600" />
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentIndex].rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-lg text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-teal-600 font-medium">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
            <span className="font-semibold">4.9/5</span>
            <span className="mx-2">•</span>
            <span>200+ Hasta Yorumu</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;