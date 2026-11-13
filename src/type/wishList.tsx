export interface WishListInitialState {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  quantity: number;
}
export interface WishListTypes {
  wishList: WishListInitialState[];
  wishListState: boolean;
}
