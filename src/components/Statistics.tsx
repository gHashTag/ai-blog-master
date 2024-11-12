import { Users, Heart, DollarSign } from 'lucide-react';
import { StatCard } from './StatCard';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-pink-500" />,
    value: "500k+",
    label: "Новых подписчиков",
    description: "у наших учеников"
  },
  {
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    value: "3.5x",
    label: "Рост охватов",
    description: "в среднем"
  },
  {
    icon: <DollarSign className="w-8 h-8 text-pink-500" />,
    value: "$5k+",
    label: "Доход в месяц",
    description: "после внедрения"
  }
];

interface StatisticsProps {
  className?: string;
}

export function Statistics({ className = "" }: StatisticsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ${className}`}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          description={stat.description}
        />
      ))}
    </div>
  );
} 