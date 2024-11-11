import React from 'react';
import { Instagram } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  text: string;
  stats: string;
  instagramHandle: string;
}

export function TestimonialCard({ name, image, text, stats, instagramHandle }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-pink-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full filter blur-3xl opacity-20 -translate-y-16 translate-x-16 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
      
      <div className="flex items-center gap-4 mb-6 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-20 h-20 rounded-2xl object-cover ring-4 ring-pink-500/20 group-hover:ring-pink-500/40 transition-all duration-300 transform group-hover:scale-105"
        />
        <div>
          <h4 className="font-bold text-xl">{name}</h4>
          <p className="text-pink-600 font-medium text-lg">{stats}</p>
          <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full">
            <Instagram className="w-4 h-4" />
            {instagramHandle}
          </div>
        </div>
      </div>
      
      <div className="relative">
        <p className="text-gray-600 leading-relaxed">{text}</p>
        <div className="absolute -left-2 -top-2 text-8xl text-pink-500/10 font-serif">"</div>
      </div>
    </div>
  );
}