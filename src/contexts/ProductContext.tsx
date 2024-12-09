import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Product } from '../types/inventory';

interface ProductContextType {
  products: Product[];
  showAddForm: boolean;
  addProduct: (product: Omit<Product, 'id' | 'lastUpdated'>) => void;
  deleteProduct: (id: string) => void;
  toggleAddForm: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const addProduct = (productData: Omit<Product, 'id' | 'lastUpdated'>) => {
    const newProduct: Product = {
      ...productData,
      id: crypto.randomUUID(),
      lastUpdated: new Date(),
    };
    setProducts([...products, newProduct]);
    setShowAddForm(false);
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <ProductContext.Provider value={{ products, showAddForm, addProduct, deleteProduct, toggleAddForm }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts deve ser usado dentro de um ProductProvider');
  }
  return context;
}