import { ArrowRight, Activity, Bone, Heart } from 'lucide-react';
import manualterapi1 from '../../assets/manualterapi1.jpg';
import fiziktedavi1 from '../../assets/fiziktedavi1.jpg';
import yoga1 from '../../assets/yoga1.jpg';
import pilates1 from '../../assets/pilates1.jpg';

const Services = () => {
  const services = [
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'Manuel Terapi',
      description: 'Elektroterapi ajanları, mobilizasyon teknikleri, kolaylaştırıcı araçlar, duyu topu, theregun ve manuel tekniklerle ağrı, hareket kısıtlılığı ve fonksiyon kayıplarını azaltmaya yönelik çalışırken mümkün olan tam bağımsızlık ve ağrısız bir yaşam kalitesi hedefleriz.',
      image: manualterapi1,
      color: 'teal'
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'Fizik Tedavi Seansları',
      description: 'Bireye, yaşadığı ortopedik veya nörolojik gibi rahatsızlığına özgü gözlem ve planlama ile yardımcı ekipmanlar eşliğinde egzersiz, elektroterapi ve manuel teknikleri içeren kapsamlı fizik tedavi seansları gerçekleştiririz.',
      image: fiziktedavi1,
      color: 'blue'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Bireysel / Grup Yoga Dersi',
      description: 'Nefes, postür, doğru yük aktarımı, esneklik ile mobilite ve beden farkındalığı odaklı; bireysel veya grupla yine kişiye ve gereksinimlerine özgü yoga seansları vermekteyiz.',
      image: yoga1,
      color: 'purple'
    },
    {
      icon: <Bone className="w-12 h-12" />,
      title: 'Bireysel / Grup Pilates Dersi',
      description: 'Doğru postür ve duruş, core kuvveti ile stabilizasyonu, sağlıklı yaş alabilme, koordinasyon ile denge odaklı ve fonksiyonel olarak kas kuvvetini geliştiren bireysel, düet veya grup pilates dersleri vermekteyiz.',
      image: pilates1,
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