import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function CountdownTimer() {
  const [time, setTime] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%_100%] animate-gradient text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-4 shadow-lg">
    <Clock className="w-6 h-6 animate-pulse" />
    <div className="text-xl font-bold">
      До конца акции осталось: 
      <span className="inline-flex gap-1 ml-2">
        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">{String(time.hours).padStart(2, '0')}</span>
        <span>:</span>
        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">{String(time.minutes).padStart(2, '0')}</span>
        <span>:</span>
        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">{String(time.seconds).padStart(2, '0')}</span>
      </span>
      </div>
    </div>
  );
}