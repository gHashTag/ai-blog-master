import { Star } from 'lucide-react';

export function HeroIntensive() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 -z-10" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Левая колонка */}
        <div className="space-y-8">
          {/* Заголовок */}
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text- text-gray-900 block mb-2">КАК ОСВОИТЬ</span>
              <span className="text-gray-800">НЕЙРОСЕТИ С НУЛЯ</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-xl font-medium">
              Искусственный интеллект — простой инструмент для ускорения работы и увеличения дохода.
            </p>
          </div>

          {/* Бонус */}
          <div className="grid grid-cols-5 bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="col-span-1 bg-violet-500 flex items-center justify-center p-4 sm:p-6">
              <span className="text-5xl sm:text-7xl transform rotate-12 hover:rotate-0 transition-transform">🎁</span>
            </div>
            <div className="col-span-4 p-4 sm:p-6">
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
        <div className="relative w-full">
          <img
            src="https://yuukfqcsdhkyxegfwlcb.supabase.co/storage/v1/object/public/landingpage/ava.jpg"
            alt="AI Illustration"
            className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-lg" // Увеличена высота на десктопе
          />

          {/* Стеклянный стикер */}
          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-3">
            <div className="space-y-0.5">
              <p className="text-white font-semibold">Дмитрий Васильев</p>
              <p className="text-white/80 text-sm">Full Stack разработчик</p>
              <p className="text-violet-200 text-sm font-medium">10+ лет опыта</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}