import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    title: "ИИ создает профессиональные фото",
    description: "Автоматическая обработка и улучшение изображений",
    overlayColor: "from-pink-500/20 to-purple-500/20"
  },
  {
    url: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?w=800",
    title: "Умные алгоритмы для контента",
    description: "Персонализированные рекомендации для вашей аудитории",
    overlayColor: "from-blue-500/20 to-purple-500/20"
  },
  {
    url: "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?w=800",
    title: "Автоматизация публикаций",
    description: "Планирование и публикация постов в лучшее время",
    overlayColor: "from-purple-500/20 to-pink-500/20"
  },
];

export function HeroGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const galleryRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Параллакс эффект
  const handleMouseMove = (e: React.MouseEvent) => {
    if (galleryRef.current) {
      const rect = galleryRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

  const getParallaxStyle = (index: number) => {
    if (index !== currentSlide) return {};
    const xOffset = (mousePosition.x - 0.5) * 20;
    const yOffset = (mousePosition.y - 0.5) * 20;
    return {
      transform: `translate(${xOffset}px, ${yOffset}px) scale(1.1)`,
      transition: 'transform 0.2s ease-out',
    };
  };

  return (
    <div 
      ref={galleryRef}
      onMouseMove={handleMouseMove}
      className="relative mb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.4/1] rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative w-full h-full">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Фоновый градиент */}
              <div className={`absolute inset-0 bg-gradient-to-br ${image.overlayColor} mix-blend-overlay z-10`} />
              
              {/* Изображение с параллакс эффектом */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                style={getParallaxStyle(index)}
              />
              
              {/* Текстовый контент */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-6 lg:p-8 z-20">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-white transform translate-y-0 transition-transform duration-500">
                    {image.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 transform translate-y-0 transition-transform duration-500 delay-100">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Кнопки навигации - скрыты на мобильных */}
      <div className="hidden sm:block">
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur-sm z-30"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur-sm z-30"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Индикаторы */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-pink-500 w-8 sm:w-12' 
                : 'bg-gray-300 hover:bg-pink-300'
            }`}
          />
        ))}
      </div>

      {/* Декоративные элементы */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-20 blur-2xl z-0" />
    </div>
  );
}