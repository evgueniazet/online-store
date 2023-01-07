import { CardProp } from '../interfaces/Product';

export type Product = {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

export type ProductCardsProps = {
  queryParams?: URLSearchParams,
  products: CardProp[]
}

export enum FilterListsOptions {
  category = 'category',
  brand = 'brand'
}