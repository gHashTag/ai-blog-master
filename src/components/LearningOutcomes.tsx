import { Brain, Users, DollarSign } from 'lucide-react';

export function LearningOutcomes() {
    const outcomes = [
      {
        icon: <Brain className="w-6 h-6" />,
        title: "Навыки работы с ИИ",
        description: "Научитесь эффективно использовать ChatGPT, Midjourney, FLUX 1 и другие нейросети"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Клиентский портфель",
        description: "Сможете работать с клиентами и настраивать системы под их потребности"
      },
      {
        icon: <DollarSign className="w-6 h-6" />,
        title: "Монетизация навыков",
        description: "Узнаете, как зарабатывать на настройке нейросетей для блогеров"
      }
    ];
  
    return (
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Чему вы научитесь</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                {outcome.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{outcome.title}</h3>
              <p className="text-gray-600">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }