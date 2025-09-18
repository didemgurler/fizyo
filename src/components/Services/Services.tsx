import React from 'react';
import { ArrowRight, Activity, Brain, Bone, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'Manuel Terapi',
      description: 'Eller ile yapılan özel tedavi teknikleri ile kas ve eklem problemlerinizin çözümü için etkili yaklaşımlar.',
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'teal'
    },
    {
      icon: <Bone className="w-12 h-12" />,
      title: 'Bel Fıtığı Tedavisi',
      description: 'Bel fıtığı problemleriniz için modern fizik tedavi yöntemleri ve manuel terapi uygulamaları.',
      image: 'https://images.pexels.com/photos/6111610/pexels-photo-6111610.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'blue'
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Boyun Fıtığı ve Tedavisi',
      description: 'Boyun bölgesi fıtık problemleri için özel egzersiz programları ve manuel tedavi teknikleri.',
      image: 'https://images.pexels.com/photos/7659710/pexels-photo-7659710.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'green'
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'Skolyoz Tedavisi',
      description: 'Omurga eğrilikleri için özel egzersiz programları ve postür düzeltme teknikleri.',
      image: 'https://images.pexels.com/photos/7659675/pexels-photo-7659675.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'purple'
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Migren ve Baş Ağrısı Tedavisi',
      description: 'Kronik baş ağrıları ve migren problemleri için manuel terapi ve özel egzersiz programları.',
      image: 'https://images.pexels.com/photos/7659528/pexels-photo-7659528.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'red'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Postür Bozukluğu Tedavisi',
      description: 'Modern yaşamın getirdiği postür problemleri için özel egzersiz ve manuel terapi uygulamaları.',
      image: 'https://images.pexels.com/photos/7659589/pexels-photo-7659589.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      teal: 'text-teal-600 bg-teal-50 hover:bg-teal-600',
      blue: 'text-blue-600 bg-blue-50 hover:bg-blue-600',
      green: 'text-green-600 bg-green-50 hover:bg-green-600',
      purple: 'text-purple-600 bg-purple-50 hover:bg-purple-600',
      red: 'text-red-600 bg-red-50 hover:bg-red-600',
      orange: 'text-orange-600 bg-orange-50 hover:bg-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern fizyoterapi yaklaşımları ile size özel tedavi programları sunuyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className={`absolute top-4 left-4 p-3 rounded-2xl ${getColorClasses(service.color)} group-hover:text-white transition-all duration-300`}>
                  {service.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium group/btn">
                  <span>Hizmeti Görüntüle</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Tüm Hizmetleri Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;