import { Clock, CheckCircle, ChevronRight } from 'lucide-react';

export function CourseStructure() {
  const modules = [
    {
      title: "Нулевая ступень",
      subtitle: "Знакомство с миром ИИ",
      description: "Базовые знания и подготовка к работе с нейросетями",
      duration: "2 недели",
      lessons: ["Добро пожаловать в мир ИИ", "Основы работы с ИИ", "Учимся учиться"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Первая ступень",
      subtitle: "Создание личного бренда",
      description: "Настройка и запуск вашего блога с помощью ИИ",
      duration: "4 недели",
      lessons: ["Введение в нейросети", "Создание контента", "Автоматизация процессов"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Вторая ступень",
      subtitle: "Работа с клиентами",
      description: "Настройка нейросетей под блоги клиентов",
      duration: "4 недели",
      lessons: ["Анализ блога клиента", "Настройка инструментов", "Запуск системы"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
      <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        Программа обучения
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Пошаговый путь от новичка до профессионала в работе с ИИ
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {modules.map((module, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
          >
            {/* Номер модуля */}
            <div className={`absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center text-white font-bold shadow-lg`}>
              {index + 1}
            </div>
            
            {/* Заголовок и описание */}
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-1 group-hover:text-pink-600 transition-colors">
                {module.title}
              </h3>
              <h4 className="text-lg font-semibold mb-3 text-gray-600">
                {module.subtitle}
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                {module.description}
              </p>
              
              {/* Длительность */}
              <div className="inline-flex items-center gap-2 text-sm text-pink-600 bg-pink-50 px-3 py-1.5 rounded-full mb-6">
                <Clock className="w-4 h-4" />
                {module.duration}
              </div>
              
              {/* Уроки */}
              <div className="space-y-3 flex-grow">
                {module.lessons.map((lesson, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 group-hover:bg-pink-50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      {lesson}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Кнопка "Подробнее" */}
              <button className="mt-6 w-full inline-flex items-center justify-center gap-2 text-pink-600 hover:text-pink-700 transition-colors py-2 px-4 rounded-xl border border-pink-200 hover:bg-pink-50">
                Подробнее о модуле
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}