import React, { useEffect, useState } from 'react';
import { SortOptions, selectSortOptions } from '../../types/SortOptions';
import { redirectTo, toggleSingleParam } from '../../utils/Route';
import { TextInput } from '../Input/TextInput';
import { Select } from '../Select/Select';
import styles from './ProductsUtilityPanel.module.scss';

type ProductsUtilityPanelProps = {
  queryParams?: URLSearchParams,
  total?: number,
  sort: SortOptions,
  onQueryUpdate: (queryParams: URLSearchParams) => void
  search: string
}

const FOUND_TITLE = 'Found';
const SEARCH_PRODUCT = 'Search product';

const ProductsUtilityPanel = ({ total, sort, search, queryParams, onQueryUpdate }: ProductsUtilityPanelProps) => {
  const [select, setSelect] = useState<SortOptions>(sort);
  const [inputText, setInputText] = React.useState<string>(search.trim());

  useEffect(() => {
    setInputText(search);
    setSelect(sort);
  })

  const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
    const param = e.target.value as SortOptions;
    setSelect(param);
    const key = 'search';
    const query = queryParams? queryParams : new URLSearchParams(window.location.search);
    const newQueryParams = toggleSingleParam(query, key, param);
    const currentUrl = `${window.location.origin}${window.location.pathname}`;
    onQueryUpdate(newQueryParams);
    redirectTo(currentUrl,  newQueryParams)
  };

  const handleCangeSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const param = e.target.value as SortOptions;
    setSelect(param);
    const key = 'sort';
    const query = queryParams? queryParams : new URLSearchParams(window.location.search);
    const newQueryParams = toggleSingleParam(query, key, param);
    const currentUrl = `${window.location.origin}${window.location.pathname}`;
    onQueryUpdate(newQueryParams);
    redirectTo(currentUrl,  newQueryParams)
  };

  return (
    <div className={styles.cardsHeader}>
      <Select value={select} options={selectSortOptions} onChange={handleCangeSorting} />
      <span>{FOUND_TITLE}: {total}</span>
      <TextInput value={inputText} onChange={handleChangeInputText} placeholder={SEARCH_PRODUCT} />
    </div>
  );
}

export default ProductsUtilityPanel;