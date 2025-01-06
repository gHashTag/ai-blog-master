import { Book, Video, MessageCircle, UserCheck, FileText, Gift } from 'lucide-react';

export function CourseContent() {
  const features = [
    {
      icon: <Book className="w-6 h-6" />,
      title: '5 модулей пошагового обучения',
      description: 'Структурированная программа для быстрого старта'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: '9+ практических уроков',
      description: 'Подробные видео-инструкции с примерами'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Доступ к закрытому чату',
      description: 'Общение с единомышленниками и обмен опытом'
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Персональные консультации',
      description: 'Индивидуальная поддержка от экспертов'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Готовые шаблоны и инструкции',
      description: 'Проверенные материалы для быстрого результата'
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Бонусные материалы',
      description: 'Дополнительные ресурсы для развития блога'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Что вы получите в курсе?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border border-gray-200 rounded-xl hover:border-pink-500 transition-all">
            <div className="text-pink-500 mb-4">{feature.icon}</div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}