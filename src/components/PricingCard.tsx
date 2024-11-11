import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, features, isPopular = false }: PricingCardProps) {
  return (
    <div className={`relative p-8 rounded-2xl ${
      isPopular 
        ? 'bg-gradient-to-b from-pink-50 to-purple-50 border-2 border-pink-500' 
        : 'bg-white border border-gray-200'
    }`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Популярный выбор
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-600">₽</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-pink-500" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={isPopular ? 'primary' : 'secondary'} 
        className={`w-full ${isPopular ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600' : ''}`}
      >
        Выбрать тариф
      </Button>
    </div>
  );
}