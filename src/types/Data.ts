import { FilterLists, FilterListsOptions } from './FilterList';
import { Product } from './Product';
import { SortOptions } from './SortOptions';

export type Data = {
  products: Product[], 
  filterLists: FilterLists,
  sort: SortOptions,
  total: number,
  search: string
}

export type EnabledFilters = {
  [FilterListsOptions.category]: string[],
  [FilterListsOptions.brand]: string[]
};

export type SortField = keyof Product;

export enum SortOrders {
  ASC = 'ASC',
  DESC = 'DESC'
}