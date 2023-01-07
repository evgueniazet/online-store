import React, { useState } from 'react';
import { PageProps } from '../../types/Page';
import DataService from '../../utils/DataService';
import { CardProp } from '../../interfaces/Product';
import { SortOptions } from '../../types/SortOptions';
import { FilterLists } from '../../types/FilterList';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import CommonLayout from '../CommonLayout/CommonLayout';
import ShowcaseLayout from '../ShowcaseLayout/ShowcaseLayout';
import FilterBox from '../FilterBox/FilterBox';
import ProductsUtilityPanel from '../ProductsUtilityPanel/ProductsUtilityPanel';
import ProductCards from '../ProductCards/ProductCards';

const HomePage = ({ queryParams }: PageProps) => {
  const dataService: DataService = DataService.getInstance();

  const { products: initProducts, total: initTotal, sort: initSort, filterLists: initFiltrLists, search: initSearch } = dataService.getData(queryParams);

  const [products, setProducts] = useState<CardProp[]>(initProducts);
  const [total, setTotal] = useState<number>(initTotal);
  const [sort, setSort] = useState<SortOptions>(initSort);
  const [filterLists, setFilterLists] = useState<FilterLists>(initFiltrLists);
  const [search, setSearch] = useState<string>(initSearch);

  const handleQueryUpdate = (queryParams: URLSearchParams) => {
    const { products, total, sort, filterLists, search } = dataService.getData(queryParams);
    setProducts(products);
    setTotal(total);
    setSort(sort);
    setFilterLists(filterLists);
    setSearch(search);
  }

  return (
    <CommonLayout >
      <Header price={1000} />
      <ShowcaseLayout queryParams={queryParams}>
        <FilterBox queryParams={queryParams} filterLists={filterLists} onQueryUpdate={handleQueryUpdate} />
        <ProductsUtilityPanel queryParams={queryParams} total={total} sort={sort} search={search} onQueryUpdate={handleQueryUpdate} />
        <ProductCards queryParams={queryParams} products={products} />
      </ShowcaseLayout>
      <Footer />
    </CommonLayout>
  );
};

export default HomePage;
