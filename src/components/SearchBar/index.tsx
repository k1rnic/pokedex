import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import s from './style.module.scss';

type Props = {
  debounceTime?: number;
  onSearch: (searchValue: string) => void;
};

const SearchBar = ({ debounceTime = 300, onSearch }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, debounceTime);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  useEffect(() => {
    onSearch(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return <input className={s.root} value={searchValue} onChange={handleChange} />;
};

export default SearchBar;
