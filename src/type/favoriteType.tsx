export interface FavoriteInitialState {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}
export interface FavoriteType {
  favorite: FavoriteInitialState[];
  favoriteState: boolean;
}
