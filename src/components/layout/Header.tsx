import React from 'react';
import { Package } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Package size={32} />
            <h1 className="text-2xl font-bold">Controle de Estoque</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#dashboard" className="hover:text-indigo-200 transition-colors">Painel</a>
            <a href="#products" className="hover:text-indigo-200 transition-colors">Produtos</a>
            <a href="#categories" className="hover:text-indigo-200 transition-colors">Categorias</a>
            <a href="#reports" className="hover:text-indigo-200 transition-colors">Relatórios</a>
          </nav>
        </div>
      </div>
    </header>
  );
}