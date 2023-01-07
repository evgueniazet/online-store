import { SortOptions } from './SortOptions';

export type ProductsUtilityPanelProps = {
  queryParams?: URLSearchParams,
  total?: number,
  sort: SortOptions,
  onQueryUpdate: (queryParams: URLSearchParams) => void
  search: string
}