import { Product } from '../types/Product';
import enumKeys from './EnumKeys';
import { FilterListsOptions, FilterLists } from '../types/FilterList';
import { SortOptions } from '../types/SortOptions';
import { Data, EnabledFilters, SortField, SortOrders } from '../types/Data';
import { SearchQueryKeys } from '../types/SearchQueryKeys';
import { DataProvidible } from '../interfaces/DataProvidible';

class DataService implements DataProvidible {
  private static instance: DataService;
  private products: Product[] = [];
  private filterListsOptions: FilterListsOptions[] = [];
  private filterLists: FilterLists = {
    [FilterListsOptions.category]: [],
    [FilterListsOptions.brand]: [],
  };

  private constructor() {}

  public static getInstance(): DataService {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    }

    return DataService.instance;
  }

  public initialiseData(fetchedProducts: Product[]) {
    this.initialiseFilterLists();
    this.products = fetchedProducts;
    this.buildInitialFilterLists();
  }

  public getData(queryParams?: URLSearchParams) {
    const enabledFilters: EnabledFilters = {
      [FilterListsOptions.category]: [],
      [FilterListsOptions.brand]: [],
    };
    const data: Data = {
      products: [...this.products],
      filterLists: this.filterLists,
      sort: SortOptions.none,
      total: this.products.length,
      search: '',
    };

    if (queryParams) {
      if (queryParams.has(FilterListsOptions.category)) {
        const params = queryParams.get(FilterListsOptions.category)?.split(':');
        if (Array.isArray(params)) {
          enabledFilters[`${FilterListsOptions.category}`] = params;
        }

        data.products = data.products.filter(({ category }) => params?.includes(category));
      }

      if (queryParams.has(FilterListsOptions.brand)) {
        const params = queryParams.get(FilterListsOptions.brand)?.split(':');
        if (Array.isArray(params)) {
          enabledFilters[`${FilterListsOptions.brand}`] = params;
        }
        data.products = data.products.filter(({ brand }) => params?.includes(brand));
      }

      if (queryParams.has(SearchQueryKeys.search)) {
        const param = queryParams.get(SearchQueryKeys.search);
        if (param) {
          data.products = data.products.filter(({ description }) =>
            description.toLocaleLowerCase().includes(param.toLocaleLowerCase()),
          );
          data.search = param;
        }
      }

      if (queryParams.has(SearchQueryKeys.sort)) {
        const sortQuery = queryParams.get(SearchQueryKeys.sort);
        if (sortQuery) {
          const params = sortQuery?.split('-');
          if (params !== undefined && params[0] && params[1]) {
            const sortField  = params[0] as keyof Product;
            const sortOrder = params[1] as SortOrders;
            const compareFunc = this.getCompareSortFunc(sortField, sortOrder);

            data.products = data.products.sort((a, b) => compareFunc(a, b));

            data.sort = sortQuery as SortOptions;
          }
        }
      }
      data.filterLists = this.updateFilterLists(data.products, enabledFilters);
      data.total = data.products.length;
    }

    return data;
  }

  private initialiseFilterLists() {
    for (const filterOption of enumKeys(FilterListsOptions)) {
      this.filterLists[filterOption] = [];
    }
  }

  public updateFilterLists(products: Product[], enabledFilters: EnabledFilters) {
    const filterLists: FilterLists = structuredClone(this.filterLists);

    for (const filterOption of enumKeys(FilterListsOptions)) {
      for (const filterListItem of filterLists[filterOption]) {
        filterListItem.selected = products.filter(
          (product) => product[filterOption] === filterListItem.label,
        ).length;
        if (enabledFilters[filterOption].includes(filterListItem.label)) {
          filterListItem.isChecked = true;
        }
      }
    }

    return filterLists;
  }

  private buildInitialFilterLists() {
    for (const filterOption of enumKeys(FilterListsOptions)) {
      for (const product of this.products) {
        const i = this.filterLists[filterOption].findIndex(
          (filter) => filter.label === product[filterOption],
        );
        if (i < 0 || !this.filterLists) {
          this.filterLists[filterOption].push({
            label: product[filterOption],
            available: 1,
            selected: 1,
            isChecked: false,
          });
        } else {
          this.filterLists[filterOption][i].available =
            this.filterLists[filterOption][i].available + 1;
          this.filterLists[filterOption][i].selected =
            this.filterLists[filterOption][i].selected + 1;
        }
      }
    }
  }

  private getCompareSortFunc(sortField: SortField, sortOrder: SortOrders) {
    const sortAsc = (a: Product, b: Product) => {
      const aa = a[sortField];
      const bb = b[sortField];
      if (aa === bb) return 0;
      return aa < bb ? -1 : 1;
    };

    const sortDesc = (a: Product, b: Product) => {
      const aa = a[sortField];
      const bb = b[sortField];
      if (aa === bb) return 0;
      return aa > bb ? -1 : 1;
    };

    return sortOrder === SortOrders.ASC ? sortAsc : sortDesc;
  }

  public getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  public getProductsById(ids: number[]): Product[] | undefined {
    return this.products.filter(({ id }) => ids.includes(id));
  }
}

export default DataService;