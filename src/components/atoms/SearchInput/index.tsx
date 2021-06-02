import React, { useEffect, useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import s from './style.module.scss';

export type Props = {
  debounceTime?: number;
  placeholder?: string;
  onSearch: (searchValue: string) => void;
};

const SearchInput = ({ debounceTime = 300, placeholder = 'Search...', onSearch }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, debounceTime);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  return <input className={s.root} value={searchValue} placeholder={placeholder} onChange={handleChange} />;
};

export default SearchInput;
