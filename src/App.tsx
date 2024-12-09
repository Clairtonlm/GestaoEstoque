import React from 'react';
import { Header } from './components/layout/Header';
import { StockSummary } from './components/dashboard/StockSummary';
import { ProductList } from './components/products/ProductList';
import { AddProductForm } from './components/products/AddProductForm';
import { Package } from 'lucide-react';
import { ProductProvider } from './contexts/ProductContext';
import { useProducts } from './contexts/ProductContext';

function AppContent() {
  const { showAddForm, toggleAddForm } = useProducts();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <StockSummary />
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Produtos</h2>
            <button 
              onClick={toggleAddForm}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <Package size={20} />
              {showAddForm ? 'Cancelar' : 'Adicionar Produto'}
            </button>
          </div>
          
          {showAddForm ? <AddProductForm /> : <ProductList />}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ProductProvider>
      <AppContent />
    </ProductProvider>
  );
}

export default App;