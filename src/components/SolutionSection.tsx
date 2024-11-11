import React from 'react';
import { Sparkles, Image, Clock, Users, Zap, Target, Star } from 'lucide-react';

export function SolutionSection() {
  const solutions = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'ИИ создает посты в вашем стиле',
      description: 'Уникальный контент, который звучит как вы',
      color: 'from-orange-500 to-pink-500',
      bgColor: 'from-orange-50 to-pink-50'
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: 'Красивые фото генерируются за секунды',
      description: 'Профессиональные изображения без фотографа',
      color: 'from-pink-500 to-purple-500', 
      bgColor: 'from-pink-50 to-purple-50'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Контент публикуется по расписанию',
      description: 'Автоматическое планирование постов',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Ваш цифровой двойник общается с подписчиками',
      description: 'Мгновенные ответы на комментарии',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Все процессы автоматизированы',
      description: 'Больше времени на важные задачи',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Высокая конверсия в продажи',
      description: 'Контент, который привлекает клиентов',
      color: 'from-cyan-500 to-teal-500',
      bgColor: 'from-cyan-50 to-teal-50'
    }
  ];

  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Автоматизация блога
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Представьте, что ваш блог работает автоматически
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Нейросети возьмут на себя рутинные задачи, а вы сможете сосредоточиться на развитии
          </p>
        </div>

        {/* Сетка решений */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Градиентный фон при наведении */}
              <div className={`absolute inset-0 bg-gradient-to-r ${solution.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Контент */}
              <div className="relative">
                {/* Иконка */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>

              {/* Декоративная линия */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${solution.color} group-hover:w-full transition-all duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}