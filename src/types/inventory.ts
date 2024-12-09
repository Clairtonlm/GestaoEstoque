export interface Product {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: string;
  minStockLevel: number;
  lastUpdated: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}