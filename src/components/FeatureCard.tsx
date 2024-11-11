import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  image: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, image, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-white to-pink-50/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-3 inline-block mb-2 shadow-lg">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
}