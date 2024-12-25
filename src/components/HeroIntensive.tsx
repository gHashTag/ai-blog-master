import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HeroIntensive() {
  const navigate = useNavigate();
  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 -z-10" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Левая колонка */}
        <div className="space-y-8">
          {/* Заголовок */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900 block mb-2">КАК ОСВОИТЬ</span>
              <span className="text-gray-800">
                НЕЙРОСЕТИ С НУЛЯ
              </span>
            </h1>
            <p className="text-gray-600 text-xl max-w-xl font-medium">
              Искусственный интеллект — простой инструмент для ускорения работы и увеличения дохода. 
            </p>
          </div>

          {/* Бонус */}
          <div className="grid grid-cols-5 bg-white rounded-xl overflow-hidden shadow-lg">
  <div className="col-span-1 bg-violet-500 flex items-center justify-center p-6">
    <span className="text-7xl transform rotate-12 hover:rotate-0 transition-transform">🎁</span>
  </div>
  <div className="col-span-4 p-6">
    <div className="flex items-center gap-2 text-violet-500 font-medium mb-2">
      <Star className="w-4 h-4" />
      Бонус при регистрации
    </div>
    <p className="text-gray-900">
      PDF-книга «10 способов заработка на текстовых и графических нейросетях»
    </p>
  </div>
</div>
          
        </div>

        {/* Правая колонка - Изображение */}
        <div className="relative w-full lg:hidden">
          <img 
            src="https://dmrooqbmxdhdyblqzswu.supabase.co/storage/v1/object/public/images/prompts/photo_2567-11-12%2013.19.19%20copy.jpeg" 
            alt="AI Illustration"
            className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1] object-cover rounded-xl shadow-lg"
          />
          
          {/* Стеклянный стикер для мобильной версии */}
          <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg p-2">
            <div className="space-y-0.5">
              <p className="text-white text-sm font-semibold">Дмитрий Васильев</p>
              <p className="text-white/80 text-xs">Full Stack разработчик</p>
              <p className="text-violet-200 text-xs font-medium">20+ лет опыта</p>
            </div>
          </div>
        </div>

        {/* Десктопная версия */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl blur-3xl" />
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
            <img 
              src="https://dmrooqbmxdhdyblqzswu.supabase.co/storage/v1/object/public/images/prompts/photo_2567-11-12%2013.19.19%20copy.jpeg" 
              alt="AI Illustration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Стеклянный стикер для десктопа */}
            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-3">
              <div className="space-y-0.5">
                <p className="text-white font-semibold">Дмитрий Васильев</p>
                <p className="text-white/80 text-sm">Full Stack разработчик</p>
                <p className="text-violet-200 text-sm font-medium">20+ лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {/* Ваш контент будет здесь */}
      </div>
    </div>
  );
}