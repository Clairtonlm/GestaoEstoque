import React from 'react';
import { ProductTableHeader } from './ProductTableHeader';
import { ProductTableRow } from './ProductTableRow';
import { useProducts } from '../../contexts/ProductContext';

export function ProductList() {
  const { products } = useProducts();

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
        Nenhum produto cadastrado ainda.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <ProductTableHeader />
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <ProductTableRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}