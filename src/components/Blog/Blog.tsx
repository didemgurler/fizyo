import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Bel Fıtığı Nedir ve Nasıl Tedavi Edilir?',
      excerpt: 'Bel fıtığı günümüzde sık karşılaştığımız bir sağlık problemidir. Bu yazımızda bel fıtığının nedenleri ve tedavi yöntemlerini detaylı olarak inceliyoruz.',
      image: 'https://images.pexels.com/photos/6111610/pexels-photo-6111610.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '5 dk',
      category: 'Bel Sağlığı'
    },
    {
      title: 'Manuel Terapinin Faydaları ve Uygulama Alanları',
      excerpt: 'Manuel terapi, eller ile yapılan özel tedavi tekniklerini içerir. Bu yazımızda manuel terapinin nasıl uygulandığı ve hangi durumlarda faydalı olduğunu öğrenin.',
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      readTime: '4 dk',
      category: 'Manuel Terapi'
    },
    {
      title: 'Postür Bozukluğu: Nedenleri ve Çözümleri',
      excerpt: 'Modern yaşamın getirdiği yanlış oturma ve duruş alışkanlıkları postür bozukluklarına yol açar. Doğru postür için yapılması gerekenler.',
      image: 'https://images.pexels.com/photos/7659589/pexels-photo-7659589.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-08',
      readTime: '3 dk',
      category: 'Postür'
    },
    {
      title: 'Evde Yapılabilecek Boyun Egzersizleri',
      excerpt: 'Boyun ağrısı ve sertliği için günlük hayatta kolayca yapabileceğiniz egzersizler. Uzman fizyoterapist önerileri ile boyun sağlığınızı koruyun.',
      image: 'https://images.pexels.com/photos/7659710/pexels-photo-7659710.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      readTime: '4 dk',
      category: 'Boyun Sağlığı'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bizden Haberler
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sağlık ve fizik tedavi konularında güncel bilgiler ve uzman tavsiyeleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <User className="w-4 h-4" />
                    <span>Aleyna Yaren</span>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium group/btn">
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Tüm Yazıları Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;