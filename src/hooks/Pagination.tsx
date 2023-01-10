import { useState } from 'react';
import { PaginationProps } from '../interfaces/PaginationProps';
import { PaginationReturn } from '../interfaces/PaginationReturn';

type UsePagination = (arg0: PaginationProps) => PaginationReturn;

export const Pagination: UsePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / contentPerPage);
  const lastIndex = page * contentPerPage;
  const firstIndex = lastIndex - contentPerPage;

  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };
  const setNumberPage = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };
  return {
    page,
    totalPages: pageCount,
    setPage: setNumberPage,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    firstIndex,
    lastIndex,
  };
};