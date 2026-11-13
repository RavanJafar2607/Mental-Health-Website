export interface ProductInitialState {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}
export interface ProductTypes {
  product: ProductInitialState[];
}
