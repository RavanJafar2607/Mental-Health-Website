export interface BasketInitialState {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  quantity: number;
}
export interface BasketTypes {
  basket: BasketInitialState[];
  basketState: boolean;
}
