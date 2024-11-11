import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

export function StatCard({ icon, value, label, description }: StatCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
      <div className="mb-4">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}