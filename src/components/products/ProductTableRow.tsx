import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import type { Product } from '../../types/inventory';
import { useProducts } from '../../contexts/ProductContext';

interface ProductTableRowProps {
  product: Product;
}

export function ProductTableRow({ product }: ProductTableRowProps) {
  const { deleteProduct } = useProducts();

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{product.name}</div>
        <div className="text-sm text-gray-500">{product.description}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.quantity}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button 
          className="text-indigo-600 hover:text-indigo-900 mr-4"
          onClick={() => alert('Funcionalidade de edição em desenvolvimento')}
        >
          <Edit2 size={18} />
        </button>
        <button 
          className="text-red-600 hover:text-red-900"
          onClick={() => deleteProduct(product.id)}
        >
          <Trash2 size={18} />
        </button>
      </td>
    </tr>
  );
}