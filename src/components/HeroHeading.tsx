export function HeroHeading() {
    return (
      <div className="relative">
        {/* Декоративный фоновый элемент */}
        <div className="absolute -inset-x-20 -inset-y-10">
          <div className="w-full h-full opacity-30 blur-3xl animate-pulse">
            <div className="absolute top-0 -inset-x-20 h-40 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mix-blend-multiply" />
            <div className="absolute bottom-0 -inset-x-20 h-40 bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 mix-blend-multiply" />
          </div>
        </div>
  
        {/* Основной заголовок */}
        <div className="relative space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-purple-600 uppercase tracking-wider mb-2">
            Революция в Instagram-маркетинге
          </h2>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight lg:leading-tight">
            <span className="inline-block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 animate-gradient">
              Создавай контент на автопилоте
            </span>
            <br />
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              с помощью нейросетей
            </span>
          </h1>

  
          {/* Дополнительные преимущества */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600 mt-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Без опыта работы с ИИ
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Результат за 30 дней
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Поддержка 24/7
            </span>
    
          </div>
        </div>
      </div>
    );
  }