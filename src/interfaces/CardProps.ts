import { Product } from './Product'

export interface CardProps extends Product {
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
  isExistInBasket: boolean;
}