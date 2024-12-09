import React, { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  valueColor?: string;
  icon: ReactNode;
  iconBgColor: string;
}

export function StatCard({ title, value, valueColor = 'text-gray-900', icon, iconBgColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
        </div>
        <div className={`${iconBgColor} p-3 rounded-full`}>
          {icon}
        </div>
      </div>
    </div>
  );
}