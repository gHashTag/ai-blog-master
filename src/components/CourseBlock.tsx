import {  Book, Video, MessageCircle, Sparkles } from 'lucide-react';

export function CourseBlock() {
  const features = [
    {
      icon: <Book className="w-5 h-5" />,
      title: "Доступ к курсу навсегда",
      description: "Обучайтесь в своем темпе"
    },
    {
      icon: <Video className="w-5 h-5" />,
      title: "12+ практических уроков",
      description: "С проверкой и обратной связью"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Поддержка кураторов 24/7",
      description: "Помощь на каждом этапе"
    }
  ];

  const bonuses = [
    {
      icon: "✨",
      title: "Готовые промпты",
      description: "Библиотека проверенных промптов для разных задач"
    },
    {
      icon: "📋",
      title: "Чек-листы",
      description: "Пошаговые инструкции для работы с нейросетями"
    },
    {
      icon: "🎯",
      title: "Шаблоны",
      description: "Набор готовых шаблонов для разных типов постов"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50/50 to-pink-50/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Специальное предложение
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Присоединяйтесь к курсу сейчас
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Получите полный набор инструментов для автоматизации вашего Instagram
          </p>
        </div>


        {/* Основные преимущества */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group hover:bg-white hover:shadow-lg rounded-2xl p-6 transition-all">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Бонусы */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">Бонусы к курсу</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition-all flex flex-col items-center text-center">
                <div className="text-3xl mb-4">
                  {bonus.icon}
                </div>
                <div>
                  <h4 className="font-bold mb-2">{bonus.title}</h4>
                  <p className="text-sm text-gray-600">{bonus.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
} 