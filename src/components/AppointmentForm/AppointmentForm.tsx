import React, { useState } from 'react';
import { Calendar, Clock, Phone, User, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    complaint: '',
    otherComplaint: '',
    appointmentDate: '',
    appointmentTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const complaints = [
    'Bel Fıtığı',
    'Boyun Fıtığı',
    'Skolyoz',
    'Boyun Düzleşmesi',
    'Migren ve Baş Ağrısı',
    'Postür Bozuklukları',
    'Diğer'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'İsim soyisim gerekli';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası gerekli';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Geçerli bir telefon numarası giriniz';
    }
    
    if (!formData.complaint) {
      newErrors.complaint = 'Şikayet seçimi gerekli';
    }
    
    if (formData.complaint === 'Diğer' && !formData.otherComplaint.trim()) {
      newErrors.otherComplaint = 'Lütfen şikayetinizi belirtiniz';
    }
    
    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Randevu tarihi gerekli';
    }
    
    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Randevu saati gerekli';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          complaint: '',
          otherComplaint: '',
          appointmentDate: '',
          appointmentTime: ''
        });
        setErrors({});
      }, 5000);
    } catch (error) {
      console.error('Randevu oluşturma hatası:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const formatDate = (dateString) => {
    const today = new Date();
    const selectedDate = new Date(dateString);
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    
    if (selectedDate.getTime() === today.getTime()) {
      return 'Bugün';
    } else if (selectedDate.getTime() === today.getTime() + 24 * 60 * 60 * 1000) {
      return 'Yarın';
    } else {
      return selectedDate.toLocaleDateString('tr-TR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center bg-white rounded-3xl p-8 shadow-2xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-ping opacity-20"></div>
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 relative z-10" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Randevunuz Alındı!</h3>
            <p className="text-gray-600 text-lg mb-6">
              Talebiniz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <div className="bg-teal-50 p-4 rounded-xl">
              <p className="text-teal-700 font-medium">
                📞 Acil durumlar için: 0532 123 45 67
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 rounded-2xl mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Ücretsiz Randevu Al</h2>
                  <p className="text-teal-100">Ücretsiz ön muayene için randevu alın.</p>
                </div>
                <Phone className="w-12 h-12 text-teal-200" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  İsim Soyisim
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'
                  }`}
                  placeholder="Adınız ve soyadınız"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Telefon Numarası
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'
                  }`}
                  placeholder="0532 123 45 67"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Hasta Şikayeti
                </label>
                <select
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.complaint ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'
                  }`}
                >
                  <option value="">Şikayetinizi seçin</option>
                  {complaints.map(complaint => (
                    <option key={complaint} value={complaint}>{complaint}</option>
                  ))}
                </select>
                {errors.complaint && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.complaint}
                  </p>
                )}
              </div>

              {formData.complaint === 'Diğer' && (
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Diğer Şikayet
                  </label>
                  <input
                    type="text"
                    name="otherComplaint"
                    value={formData.otherComplaint}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 transition-colors ${
                      errors.otherComplaint ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'
                    }`}
                    placeholder="Şikayetinizi açıklayın"
                  />
                  {errors.otherComplaint && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.otherComplaint}
                    </p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Randevu Tarihi
                </label>
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.appointmentDate ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'
                  }`}
                />
                {formData.appointmentDate && (
                  <p className="mt-1 text-sm text-teal-600">
                    Seçilen tarih: {formatDate(formData.appointmentDate)}
                  </p>
                )}
                {errors.appointmentDate && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.appointmentDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Randevu Saati
                </label>
                <select
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.appointmentTime ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'
                  }`}
                >
                  <option value="">Saat seçin</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                {errors.appointmentTime && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.appointmentTime}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-medium text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-teal-600 hover:bg-teal-700 hover:shadow-xl'
                } text-white`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Randevu Oluşturuluyor...
                  </div>
                ) : (
                  'Randevu Oluştur'
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ankara Manuel Terapi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Ankara'da bulunan fizyoterapi merkezimizde, uzman kadromuz ve modern 
                fizyoterapi ekipmanlarımızla hizmetinizdeyiz. Fizyoterapi uzmanlarımız 
                alanlarında deneyimli ve sürekli eğitim alan profesyonellerdir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Size en son ve en etkili tedavi yöntemlerini sunarak, hareket kabiliyetinizi, 
                fonksiyonel gücünüzü ve yaşam kalitenizi artırmaya odaklanırız.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-teal-600 font-bold text-lg mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Profesyonel Hizmet
                </div>
                <p className="text-gray-600 text-sm">Uzman kadro ile kaliteli tedavi</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-teal-600 font-bold text-lg mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Hijyenik Ortam
                </div>
                <p className="text-gray-600 text-sm">Temiz ve güvenli tedavi alanı</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-teal-600 font-bold text-lg mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Uzman Kadro
                </div>
                <p className="text-gray-600 text-sm">Deneyimli fizyoterapistler</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-teal-600 font-bold text-lg mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Sonuç Odaklı
                </div>
                <p className="text-gray-600 text-sm">Etkili tedavi yaklaşımı</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Acil Durum?</h3>
                  <p className="text-teal-100">Hemen arayın, randevunuzu alın</p>
                </div>
                <a
                  href="tel:05321234567"
                  className="bg-white text-teal-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>0532 123 45 67</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;