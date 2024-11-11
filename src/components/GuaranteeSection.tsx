import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="bg-white p-4 rounded-full">
        <ShieldCheck className="w-16 h-16 text-pink-500" />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">Гарантия возврата средств</h3>
        <p className="text-gray-600 mb-4">
          Если в течение 14 дней вы поймете, что курс вам не подходит, мы вернем 100% оплаты без лишних вопросов
        </p>
        <button className="text-pink-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          Узнать условия
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}