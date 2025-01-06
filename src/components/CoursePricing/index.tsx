import { useEffect, useState } from 'react';
import { pricingPlans } from './PricingPlans';
import { Clock } from 'lucide-react';

export function CoursePricing() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem('timeLeft');
    return savedTime ? parseInt(savedTime, 10) : 24 * 60 * 60;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime > 0 ? prevTime - 1 : 0;
        localStorage.setItem('timeLeft', newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-4 shadow-lg">
        <Clock className="w-6 h-6 animate-pulse" />
        <div className="text-xl font-bold">
          До конца акции осталось: {formatTime(timeLeft)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="flex flex-col justify-between h-full rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className={`p-4 rounded-t-lg text-white ${getColor(index)}`}>
              <h3 className="text-xl font-bold">{plan.title}</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-b-lg flex flex-col justify-between flex-grow">
              <div>
                <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: plan.description }}></p>
                <div className="text-2xl font-bold mb-2 text-center">
                  <p className="line-through text-gray-500">{plan.price} руб</p>
                  <p>{timeLeft > 0 && `${plan.discountedPrice} руб`}</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href={timeLeft > 0 ? plan.discountedLink : plan.link}
                  className={`inline-block w-full px-8 py-3 ${getButtonColor(index)} text-white font-bold rounded shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform text-center`}
                >
                  {timeLeft > 0 ? `Купить за ${plan.discountedPrice} руб` : `Купить за ${plan.price} руб`}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getColor(index: number) {
  const colors = ['bg-blue-500', 'bg-pink-500', 'bg-green-500', 'bg-purple-500'];
  return colors[index % colors.length];
}

function getButtonColor(index: number) {
  const buttonColors = [
    'bg-gradient-to-r from-blue-500 to-blue-700',
    'bg-gradient-to-r from-pink-500 to-pink-700',
    'bg-gradient-to-r from-green-500 to-green-700',
    'bg-gradient-to-r from-purple-500 to-purple-700'
  ];
  return buttonColors[index % buttonColors.length];
}