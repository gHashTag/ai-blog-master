import { ArrowRight, Star } from 'lucide-react';

export function HeroIntensive() {
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

          {/* CTA */}
          <div className="flex items-center gap-6">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              ПРИНЯТЬ УЧАСТИЕ
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-baseline gap-3">
  <span className="line-through text-gray-400 text-lg">15 000₽</span>
  <span className="text-gray-900 text-2xl font-bold">10 000₽</span>
</div>
          </div>
        </div>

        {/* Правая колонка - Изображение */}
        <div className="relative hidden lg:block">
  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl blur-3xl" />
  <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
    <img 
      src="https://dmrooqbmxdhdyblqzswu.supabase.co/storage/v1/object/public/images/prompts/photo_2567-11-12%2013.19.19%20copy.jpeg" 
      alt="AI Illustration"
      className="w-full h-full object-cover"
    />
    
    {/* Стикер об авторе */}
    <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-lg">
  <div className="space-y-0.5">
    <p className="text-white font-semibold">Дмитрий Нейрокодер</p>
    <p className="text-white/80 text-sm">Full Stack разработчик</p>
    <p className="text-violet-200 text-sm font-medium">20+ лет опыта</p>
  </div>
</div>
  </div>
</div>
      <div className="mt-4">
        {/* Ваш контент будет здесь */}
      </div>
      </div>
    </div>
  );
}