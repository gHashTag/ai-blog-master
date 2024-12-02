import { Clock, ArrowRight, Shield } from 'lucide-react';

export function PriceBlock() {
  return (
    <div className="max-w-2xl mx-auto mb-16">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="space-y-8">
          {/* Цена */}
          <div className="space-y-4">
            <div className="flex items-baseline justify-center gap-4">
              <span className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                10 000 ₽
              </span>
              <div className="text-left">
                <span className="line-through text-gray-400 text-lg">39 900 ₽</span>
                <br />
                <span className="text-green-500 font-medium">-50% скидка</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>Осталось 12 мест по этой цене</span>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Начать обучение
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              Безопасная оплата через надежный сервис
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
