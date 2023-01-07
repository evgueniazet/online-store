import { FilterLists } from './FilterList';

export type FilterBoxProps = {
  queryParams?: URLSearchParams,
  filterLists: FilterLists,
  onQueryUpdate: (queryParams: URLSearchParams) => void
}