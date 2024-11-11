import React from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: 'Нужен ли опыт работы с ИИ?',
      answer: 'Нет, курс подходит даже для полных новичков. Мы начинаем с самых основ и постепенно переходим к продвинутым техникам.'
    },
    {
      question: 'Сколько времени занимает обучение?',
      answer: 'Программа рассчитана на 30 дней. В среднем потребуется 1-2 часа в день для изучения материалов и выполнения практических заданий.'
    },
    {
      question: 'Какое оборудование необходимо?',
      answer: 'Достаточно иметь компьютер или ноутбук с доступом в интернет. Все необходимые инструменты доступны онлайн.'
    },
    {
      question: 'Как проходит обучение?',
      answer: 'Обучение проходит в формате онлайн через личный кабинет. Каждый день вы получаете новый урок с практическим заданием.'
    },
    {
      question: 'Есть ли гарантия результата?',
      answer: 'Да, мы гарантируем возврат средств в течение 14 дней, если курс вам не подойдет.'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Частые вопросы</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group">
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <span className="font-medium">{faq.question}</span>
              <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="p-4 text-gray-600">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}