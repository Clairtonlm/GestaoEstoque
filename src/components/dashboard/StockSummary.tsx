import React from 'react';
import { AlertCircle, TrendingUp, Package } from 'lucide-react';
import { StatCard } from './StatCard';

export function StockSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <StatCard
        title="Total de Produtos"
        value="1.234"
        icon={<Package className="text-blue-600" size={24} />}
        iconBgColor="bg-blue-100"
      />

      <StatCard
        title="Produtos com Estoque Baixo"
        value="12"
        valueColor="text-orange-600"
        icon={<AlertCircle className="text-orange-600" size={24} />}
        iconBgColor="bg-orange-100"
      />

      <StatCard
        title="Valor do Estoque"
        value="R$ 45.678"
        icon={<TrendingUp className="text-green-600" size={24} />}
        iconBgColor="bg-green-100"
      />
    </div>
  );
}