import { XCircle, AlertTriangle, TrendingDown, Clock, ImageOff, Users, Target } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Нехватка времени',
      description: 'Создание контента занимает слишком много времени',
      color: 'from-orange-500 to-pink-500',
      bgColor: 'from-orange-50 to-pink-50'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Отсутствие идей',
      description: 'Сложно постоянно придумывать новые темы для постов',
      color: 'from-pink-500 to-purple-500',
      bgColor: 'from-pink-50 to-purple-50'
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Падение охватов',
      description: 'Алгоритмы все меньше показывают ваши посты',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50'
    },
    {
      icon: <ImageOff className="w-6 h-6" />,
      title: 'Качество контента',
      description: 'Фото и тексты не дотягивают до желаемого уровня',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Низкая вовлеченность',
      description: 'Подписчики редко взаимодействуют с контентом',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Нет конверсии',
      description: 'Подписчики не конвертируются в клиентов',
      color: 'from-cyan-500 to-teal-500',
      bgColor: 'from-cyan-50 to-teal-50'
    }
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16 relative">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Знакомые трудности?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            95% блогеров сталкиваются с этими проблемами ежедневно.
            Но теперь есть решение
          </p>
        </div>

        {/* Сетка проблем */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Градиентный фон при наведении */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              />

              {/* Иконка */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${problem.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${problem.color} flex items-center justify-center text-white`}>
                  {problem.icon}
                </div>
              </div>

              {/* Контент */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.description}
              </p>

              {/* Декоративная линия */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${problem.color} group-hover:w-full transition-all duration-300`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors text-3xl">
            <svg className="w-8 h-8 animate-bounce transform rotate-180 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Узнать, как решить эти проблемы
            <svg className="w-8 h-8 animate-bounce mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}