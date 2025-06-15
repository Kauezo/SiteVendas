
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  installments?: number;
  image: string;
  category: string;
  freeShipping: boolean;
  description: string;
}
