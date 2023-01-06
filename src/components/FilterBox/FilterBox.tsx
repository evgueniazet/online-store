import React, { useState, ChangeEvent } from 'react';
import styles from './FilterBox.module.scss';
import '../../styles/fonts.scss';
import { MultiRangeSliderData } from '../../interfaces/MultiRangeSliderData';
import { MultiRangeSlider } from '../MultiRangeSlider/MultiRangeSlider';
import FilterList from '../FilterList/FilterList';
import { FilterListsOptions } from '../../types/FilterList';
import { toggleFilterParam, redirectTo, resetQueryParams } from '../../utils/Route';
import { ButtonColors } from '../../enums/ButtonColors';
import { Button } from '../Button/Button';
import RangeBoxLayout from '../RangeBoxLayout/RangeBoxLayout';
import { priceRangeConfig } from '../../utils/config/priceRange';
import { stockRangeConfig } from '../../utils/config/stockRange';
import { FilterRangeType } from '../../types/FilterRangeType';
import { FilterBoxProps } from '../../types/FilterBox';

const RESET_FILTERS_LABEL = 'Reset Filters';
const COPY_LINK_LABEL = 'Copy Link';
const LINK_COPIED_LABEL = 'Copied!';

const FilterBox = ({ queryParams, filterLists, onQueryUpdate }: FilterBoxProps) => {
  const filterCateroriesTitle = 'Category';
  const filterBrandsTitle = 'Brand';
  const filterCategoriesList = filterLists[FilterListsOptions.category];
  const filterBrandsList = filterLists[FilterListsOptions.brand];
  const [copyLinkButtonLabel, setCopyLinkButtonLabel] = useState<string>(COPY_LINK_LABEL);
  const [minPriceRange, setMinPiceRange] = useState<number>(priceRangeConfig.min);
  const [maxPriceRange, setMaxPiceRange] = useState<number>(priceRangeConfig.max);

  const [minStockRange, setMinStockRange] = useState<number>(stockRangeConfig.min);
  const [maxStockRange, setMaxStockRange] = useState<number>(stockRangeConfig.max);

  const handleChangePriceRange = ({ min, max }: MultiRangeSliderData) => {
    handleChangeRange('price', { min, max });
  }

  const handleChangeStockRange = ({ min, max }: MultiRangeSliderData) => {
    handleChangeRange('stock', { min, max });
  }

  const handleChangeRange = ( rangType: FilterRangeType, { min, max }: MultiRangeSliderData) => {
    // TODO: resolve issue with shange range event on init
    //  console.log(`type: ${rangType} min = ${min}, max = ${max}`);
    //  const param = `${min}:${max}`;
    //  const query = queryParams? queryParams : new URLSearchParams(window.location.search);
    //  const newQueryParams = toggleSingleParam(query, rangType, param);
    //  const currentUrl = `${window.location.origin}${window.location.pathname}`;
    //  onQueryUpdate(newQueryParams);
    //  redirectTo(currentUrl,  newQueryParams)
  }

  const handleChangeFilters = (option: FilterListsOptions, event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.type === 'checkbox' && event.target.id) {
      const param = event.target.id;
      const query = queryParams? queryParams : new URLSearchParams(window.location.search);
      const newQueryParams = toggleFilterParam(query, option, param);
      const currentUrl = `${window.location.origin}${window.location.pathname}`;
      onQueryUpdate(newQueryParams);
      redirectTo(currentUrl,  newQueryParams)
    }
  }

  const handleResetFilters = () => {
    const currentUrl = `${window.location.origin}${window.location.pathname}`;
    const query = queryParams? queryParams : new URLSearchParams(window.location.search);
    const newQueryParams = resetQueryParams(query);
    onQueryUpdate(newQueryParams);
    redirectTo(currentUrl, newQueryParams);
  }
  
  const handleChangeCategory = (event: ChangeEvent<HTMLInputElement>): void => {
    handleChangeFilters(FilterListsOptions.category, event); 
  }

  const handleChangeBrand = (event: ChangeEvent<HTMLInputElement>): void => {
    handleChangeFilters(FilterListsOptions.brand, event); 
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyLinkButtonLabel(LINK_COPIED_LABEL);
    setTimeout(() => setCopyLinkButtonLabel(COPY_LINK_LABEL), 500);
  }

  return (
    <div className={styles.filters}>
      <Button color={ButtonColors.Primary} title={RESET_FILTERS_LABEL} onClick={handleResetFilters} />
      <Button color={ButtonColors.Primary} title={copyLinkButtonLabel} onClick={handleCopyLink} />
      <FilterList title={filterCateroriesTitle} listItems={filterCategoriesList} handleFilterChange={handleChangeCategory} />
      <FilterList title={filterBrandsTitle} listItems={filterBrandsList} handleFilterChange={handleChangeBrand} />

      <RangeBoxLayout title={priceRangeConfig.title}>
        <MultiRangeSlider
          min={minPriceRange}
          max={maxPriceRange}
          onChange={handleChangePriceRange}
        />
      </RangeBoxLayout> 

      <RangeBoxLayout title={stockRangeConfig.title}>
        <MultiRangeSlider
          min={minStockRange}
          max={maxStockRange}
          onChange={handleChangeStockRange}
        />
      </RangeBoxLayout> 

    </div>
  );
}

export default FilterBox;

