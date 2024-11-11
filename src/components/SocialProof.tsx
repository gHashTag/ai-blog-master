import React from 'react';
import { Star, TrendingUp, Users } from 'lucide-react';

export function SocialProof() {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
          </div>
          <div>
            <div className="font-semibold">2,431+</div>
            <div className="text-sm text-gray-600">активных учеников</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-yellow-100 p-2 rounded-lg">
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
          <div>
            <div className="font-semibold">4.9 из 5</div>
            <div className="text-sm text-gray-600">средняя оценка курса</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
          <div>
            <div className="font-semibold">93%</div>
            <div className="text-sm text-gray-600">успешных выпускников</div>
          </div>
        </div>
      </div>
    </div>
  );
}