import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import local images
import manualterapi1 from '../../assets/manualterapi1.jpg';
import fiziktedavi1 from '../../assets/fiziktedavi1.jpg';
import pilates1 from '../../assets/pilates1.jpg';
import yoga1 from '../../assets/yoga1.jpg';
import manualterapi2 from '../../assets/manualterapi2.jpg';
import fiziktedavi2 from '../../assets/fiziktedavi2.jpg';
import pilates2 from '../../assets/pilates2.jpg';
import yoga2 from '../../assets/yoga2.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: manualterapi1,
      alt: 'Manuel terapi seansı'
    },
    {
      src: fiziktedavi1,
      alt: 'Fizik tedavi egzersizleri'
    },
    {
      src: pilates1,
      alt: 'Pilates eğitimi'
    },
    {
      src: yoga1,
      alt: 'Yoga terapisi'
    },
    {
      src: manualterapi2,
      alt: 'Özel manuel terapi teknikleri'
    },
    {
      src: fiziktedavi2,
      alt: 'Fizik tedavi cihazları'
    },
    {
      src: pilates2,
      alt: 'Grup pilates dersi'
    },
    {
      src: yoga2,
      alt: 'Terapötik yoga seansı'
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bizden Kareler
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tedavi merkezimizden ve hastalarımızın iyileşme sürecinden kareler
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="text-lg font-semibold">Görüntüle</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="text-center mt-4 text-white">
                <p className="text-lg">{images[currentIndex].alt}</p>
                <p className="text-sm text-gray-300 mt-2">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Daha Fazla Fotoğraf
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;