import { Code, Brain, Star, Globe, Rocket } from 'lucide-react';

interface AuthorSectionProps {
  imageUrl: string;
}

export function AuthorSection({
  imageUrl,
}: AuthorSectionProps) {
  return (
    <section className="py-16 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Фото автора */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img 
              src={imageUrl} 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Карточка достижений */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 md:p-6">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg">20+</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
            </div>
          </div>
        </div>

        {/* Информация об авторе */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Об авторе курса</h2>
          <h3 className="text-2xl font-semibold mb-4">Васильев Дмитрий Владимирович</h3>
          <p className="text-gray-600 mb-8">
            Full Stack разработчик с более чем 20-летним опытом. Автор первого курса по React Native и AWS Amplify в русскоязычном интернете. 
            Член программы AWS Community Builders от Amazon. Основатель нескольких успешных IT-проектов, включая LEELA Chakra AI и DAO 999 NFT.
          </p>

          {/* Достижения */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Code className="w-6 h-6 text-pink-500 flex-shrink-0" />
              <div>
                <div className="font-semibold">Full Stack Developer</div>
                <div className="text-sm text-gray-600">React Native, AWS, Web3</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Brain className="w-6 h-6 text-pink-500 flex-shrink-0" />
              <div>
                <div className="font-semibold">AI Эксперт</div>
                <div className="text-sm text-gray-600">Интеграция ИИ в приложения</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-pink-500 flex-shrink-0" />
              <div>
                <div className="font-semibold">Международный опыт</div>
                <div className="text-sm text-gray-600">Работа в UAE, Thailand, Indonesia</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Rocket className="w-6 h-6 text-pink-500 flex-shrink-0" />
              <div>
                <div className="font-semibold">Основатель</div>
                <div className="text-sm text-gray-600">LEELA AI, DAO 999 NFT, JS CAMP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}