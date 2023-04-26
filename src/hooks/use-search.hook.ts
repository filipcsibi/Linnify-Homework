import {T, useDebounce} from './use-debounce.hook';
import {useEffect, useState} from 'react';

export const useSearch = <T>(
  searchTerm: string,
  items: T[],
  searchKey: string,
) => {
  const [searchResults, setSearchResults] = useState<T[]>([]);

  // const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const key = setTimeout(() => {
      const results = items.filter((item: any) => {
        if (searchKey) {
          return item[searchKey]
          .toUpperCase()
          .includes(searchTerm?.toUpperCase());
        }
      });
      setSearchResults(results);
    }, 500);
    return () => clearTimeout(key);
  }, [searchTerm]);

  return searchResults;
};
