import { useState } from 'react';
import { Play, Award, BookOpen, Users } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  const [showSeminars, setShowSeminars] = useState(false);
  const [showBroadcasts, setShowBroadcasts] = useState(false);

  const bioParagraphs: string[] = [
    'Ben uzman fizyoterapist Aleyna Yaren Bayrak. Okuduğum dönemde pek çok hastane, klinik ve tıp merkezinde staj ve gözlem yapma imkanım oldu.',
    `Lisans eğitimimi Üsküdar Üniversitesi'nde onur derecesiyle tamamladıktan sonra sinir sisteminin, bütüncül ve güncel yaklaşımların terapideki önemini anlayıp seanslarıma bunu entegre edebilmek için Fizyoterapistler için olan Nörogelişimsel Yoga, Klinik Pilates Level 1 ve 2, Floortime 101 ve 201, Theratogs, Kronik Bel Ağrısında Yaklaşım gibi çeşitli eğitimler aldım.`,
    'Bu dönemde aldığım eğitimleri seanslarıma ve çalışma şeklime entegre ederken bir yandan da akademik olarak yine Kronik ağrı ve Nörogelişimsel Yoga üzerine yaptığım Yüksek Lisans eğitimimi yüksek onur derecesiyle tamamladım.',
    `Beş yılı aşkındır yine özel klinik ve hastanelerde danışan görmekteydim. 2025 yılı itibariyle FizyoEco Pilates ve Sağlıklı Yaşam Merkezi'nde yer almakta ve danışan kabul etmekteyim.`
  ];
  const seminars: string[] = [
    'Bahçeşehir Üniversitesi Fizyoterapi ve Rehabilitasyon Kulübü Sporcu Yaralanmalarında Fizyoterapistin Önemi Sempozyumu – 20 Aralık 2017',
    'Duyu Bütünleme Derneği: Erken Dönemde Duyusal Gelişim, Çocuklarda Problem Davranışlara Yaklaşım ve Bebek ile Çocuklarda Beslenme Bozuklukları – 19 Mart 2018 (Seminer)',
    'Üsküdar Üniversitesi: ÖÇB’de Propriyosepsiyon Tartışıyoruz – 13 Ekim 2018 (Sempozyum)',
    'Üsküdar Üniversitesi: Patolojik Durumlarda İşlevsel Egzersizler – 22 Aralık 2018 (Sempozyum)',
    'Gedik Üniversitesi: Skolyozda Klinik Tanı, Değerlendirme ve Schroth Yaklaşımı – 25 Şubat 2019 (Konferans)',
    'Üsküdar Üniversitesi: Spor Travmatolojisi ve Rehabilitasyonu – 01-02 Mart 2019 (Kongre)',
    'İstanbul Bilgi Üniversitesi: I. Uluslararası Fizyoterapide Ağrı – 08 Mart 2019 (Sempozyum)',
    'Üsküdar Üniversitesi: II. Omurga Sağlığı – 06 Nisan 2019 (Sempozyum)',
    'Üsküdar Üniversitesi: FTR Öğrenci Sempozyumu – 11 Mayıs 2019',
    'FTR Seminerleri: Omurga Egzersizleri – 21 Temmuz 2019 (Seminer)',
    'FTR Seminerleri: Uygulamalı İşlevsel Egzersiz – 4 Ağustos 2019 (Seminer)',
    'Üsküdar Üniversitesi: Nörolojik Rehabilitasyon ve Yutma Bozuklukları – 24 Kasım 2019 (Sempozyum)',
    'Etkin Kampüs İstanbul: Fizyoterapi ve Rehabilitasyon Zirvesi – 07 Mart 2020',
    'Yeditepe Üniversitesi: Kadın ve Egzersiz Söyleşileri – 08 Mart 2020',
    'Sanko Üniversitesi: X. Uluslararası Katılımlı Spor Fizyoterapistleri Kongresi – 06-09 Kasım 2019',
    'FTR Seminerleri: Kas-Tendon ve Bağ Rehabilitasyonlarında Güncel Rehabilitasyon Yaklaşımları – 30 Nisan 2020',
    'FTR Seminerleri: Kalça Rehabilitasyonunda Güncel Yaklaşımlar – 02 Mayıs 2020',
    'FTR Seminerleri: Menisküs Rehabilitasyonunda Güncel Yaklaşımlar – 07 Mayıs 2020',
    'FTR Seminerleri: Aşil Tendon Rehabilitasyonunda Güncel Yaklaşımlar – 14 Mayıs 2020',
    'FTR Seminerleri: Skolyoz Rehabilitasyonunda Güncel Yaklaşımlar – 20 Mayıs 2020',
    'FTR Seminerleri: Kronik Ağrılı Kas-İskelet Sistemi Sorunlarında Güncel Fizyoterapi Yaklaşımları – 21 Mayıs 2020',
    'FTR Seminerleri: Ortopedik Rehabilitasyonda Fonksiyonel Egzersiz Prensipleri – 23 Mayıs 2020',
    'Habitat Derneği: Çevrimiçi Güvenlik Eğitimi – 28 Ağustos 2020',
    'FTR Seminerleri: Temporomandibular Eklem Rahatsızlıklarında Fizyoterapi Yaklaşımları – 27 Eylül 2020',
    'Lokman Hekim Üniversitesi: I. Fizyoterapi ve Rehabilitasyonda Özel Konular – 12-13 Kasım 2020 (Kongre)',
    'FTR Seminerleri: 5 Yaş Üstü Popülasyonda Alt Üriner Sistem Fonksiyon Bozukluklarında Değerlendirme ve Tedavi Yöntemleri – 07-09 Aralık 2020',
    'FTR Seminerleri: Erişkinlerde Alt Üriner Sistem İşlev Bozuklukları ve Rehabilitasyonu – 11 Aralık 2020',
    'Çocuk Fizyoterapistleri Derneği ve Gençlik Komisyonu: XII. Kariyer Günü – 13 Aralık 2020',
    'Çocuk Fizyoterapistleri Derneği: Uluslararası Katılımlı VI. Pediatrik Rehabilitasyon Kongresi & II. Öğrenci Sempozyumu – 4-7 Haziran 2021',
    'Nörogelişimsel Yoga: Uluslararası geçerli 200 saatlik Temel Yoga Eğitmenlik Eğitimi – 19 Haziran – 3 Ekim 2021',
    'Bel Ağrısında Güncel Bütüncül Yaklaşımlar – 30-31 Ekim 2021 (Eğitim)',
    'DIR Floortime 101 Başlangıç Düzeyi – 15-16 Kasım 2021 (Eğitim)',
    'Doğru Adımlar Medikal & Uzm. Fzt. Buse Sert eşliğinde Theratogs – 12 Aralık 2021 (Eğitim)',
    'Fzt. Osteopat ve Ultrasonografist Ümit Erkut eşliğinde Ultrason altında Dry Needling – 15-16 Ocak 2022 (Eğitim)',
    'DIR Floortime 201 – 27 Şubat – 24 Nisan 2022 (Eğitim)',
    'Uluslararası Onaylı Australia Sports Institute Eğitmenlik Eğitimi Level 1 – Ekim 2024',
    'Uluslararası Onaylı Australia Sports Institute Eğitmenlik Eğitimi Level 2 – Şubat 2025'
  ];

  const broadcasts: string[] = [
    'Çocuk Fizyoterapistleri Derneği Canlı Yayın Moderatörlüğü – Uzm. Fzt. Feride Bilir ile gerçekleşti.',
    'Çocuk Fizyoterapistleri Derneği 2. Öğrenci Sempozyumu Sunuculuğu',
    'Çocuk Fizyoterapistleri Derneği Canlı Yayın Moderatörlüğü – Uzm. Fzt. Görkem Dizdar ile gerçekleşti.',
    'Üsküdar Üniversitesi Yüksek Lisans kapsamında Nörogelişimsel Yoga & Polivagal Teori Webinarı'
  ];
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
                  <div className="text-4xl font-bold mb-2">5+</div>
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
                <h3 className="text-2xl font-semibold text-gray-900">Merhaba</h3>
                {(showFullBio ? bioParagraphs : bioParagraphs.slice(0, 2)).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <button
                  onClick={() => setShowFullBio((v) => !v)}
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                  aria-expanded={showFullBio}
                >
                  {showFullBio ? (
                    <>
                      Daha az göster <ChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      Devamını oku <ChevronDown className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-xl">
                <Award className="w-8 h-8 text-teal-600" />
                <div>
                  <div className="font-semibold text-gray-900">Uzman Fizyoterapist</div>
                  <div className="text-sm text-gray-600">Üsküdar Üniversitesi</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Kronik Bel Ağrısı, Yoga ve Kinezyofobi Üzerine</div>
                  <div className="text-sm text-gray-600">Yüksek Lisans</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <Users className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">Hasta Memnuniyeti</div>
                  <div className="text-sm text-gray-600">100+ Tedavi edilen hasta</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                <BookOpen className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">Akademik Çalışmalar</div>
                  <div className="text-sm text-gray-600">Tez, Sözel Bildiriler, Canlı Yayınlar, Makale</div>
                </div>
              </div>
            </div>

            {/* Seminars & Trainings */}
            <div className="space-y-4 mt-6">
              <h3 className="text-2xl font-bold text-gray-900">Katıldığım Eğitim, Kurs, Kongre ve Seminerler</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {(showSeminars ? seminars : seminars.slice(0, 6)).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button
                onClick={() => setShowSeminars((v) => !v)}
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                aria-expanded={showSeminars}
              >
                {showSeminars ? (
                  <>
                    Daha az göster <ChevronUp className="w-4 h-4 ml-1" />
                  </>
                ) : (
                  <>
                    Tümünü göster ({seminars.length}) <ChevronDown className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </div>

            {/* Broadcasts & Webinars */}
            <div className="space-y-4 mt-6">
              <h3 className="text-2xl font-bold text-gray-900">Seminer, Sempozyum ve Canlı Yayınlar</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {(showBroadcasts ? broadcasts : broadcasts.slice(0, 2)).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button
                onClick={() => setShowBroadcasts((v) => !v)}
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                aria-expanded={showBroadcasts}
              >
                {showBroadcasts ? (
                  <>
                    Daha az göster <ChevronUp className="w-4 h-4 ml-1" />
                  </>
                ) : (
                  <>
                    Tümünü göster ({broadcasts.length}) <ChevronDown className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;