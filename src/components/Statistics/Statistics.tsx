import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Heart, Clock } from 'lucide-react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    patients: 0,
    experience: 0,
    treatments: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  const finalCounts = {
    patients: 100,
    experience: 5,
    treatments: 15,
    satisfaction: 98
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          patients: Math.floor(finalCounts.patients * progress),
          experience: Math.floor(finalCounts.experience * progress),
          treatments: Math.floor(finalCounts.treatments * progress),
          satisfaction: Math.floor(finalCounts.satisfaction * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: <Users className="w-12 h-12" />,
      count: counts.patients,
      suffix: '+',
      title: 'Mutlu Hasta',
      description: 'Tedavi gören hasta sayımız',
      color: 'teal'
    },
    {
      icon: <Award className="w-12 h-12" />,
      count: counts.experience,
      suffix: '+',
      title: 'Yıllık Deneyim',
      description: 'Fizyoterapi alanında deneyim',
      color: 'blue'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      count: counts.treatments,
      suffix: '+',
      title: 'Tedavi Yöntemi',
      description: 'Uygulanan farklı tedavi türü',
      color: 'green'
    },
    {
      icon: <Clock className="w-12 h-12" />,
      count: counts.satisfaction,
      suffix: '%',
      title: 'Memnuniyet',
      description: 'Hasta memnuniyet oranı',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      teal: 'bg-teal-50 text-teal-600',
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Rakamlarla Başarılarımız
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Yılların getirdiği deneyim ve binlerce hastanın güvenini kazanmış olmaktan gurur duyuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`inline-flex p-4 rounded-2xl mb-4 ${getColorClasses(stat.color)} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2">
                  {stat.count.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {stat.title}
                </div>
                <div className="text-teal-100">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full border-2 border-white"
                  ></div>
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold">Güvenilir Hizmet</div>
                <div className="text-teal-100 text-sm">Binlerce memnun hasta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;