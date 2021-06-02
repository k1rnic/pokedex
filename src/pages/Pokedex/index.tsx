import { navigate } from 'hookrouter';
import React, { FC, useMemo, useState } from 'react';
import SearchInput from '../../components/atoms/SearchInput';
import Typography from '../../components/atoms/Typography';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/organisms/Card';
import useApi from '../../hooks/useApi';
import { IPokemon } from '../../interfaces/pokemon';
import s from './style.module.scss';

interface IPokemonData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: IPokemon[];
}

type PokemonDataQuery = Partial<
  {
    name?: string;
  } & Omit<IPokemonData, 'pokemons'>
>;

const Pokedex: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const query = useMemo<PokemonDataQuery>(() => ({ limit: 9, name: searchValue }), [searchValue]);

  const { data, isLoading, isError } = useApi<IPokemonData, 'getPokemons'>('getPokemons', query);

  const pokemons = useMemo(() => data?.pokemons || [], [data]);
  const totalCount = useMemo(() => data?.total, [data]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleCardClick = ({ id }: IPokemon) => {
    navigate(`pokedex/${id}`);
  };

  return (
    <Layout className={s.root}>
      <Typography variant="p" className={s.title}>
        {totalCount} <b>Pokemons</b> for you to choose your favorite
      </Typography>
      <div className={s.searchWrap}>
        <SearchInput onSearch={handleSearch} />
      </div>

      {isError && <span>Something went wrong</span>}
      {isLoading && <span>Loading...</span>}

      {!isLoading && (
        <div className={s.pokemonCardsWrap}>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={handleCardClick} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Pokedex;
