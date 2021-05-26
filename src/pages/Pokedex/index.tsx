import React, { FC, useMemo, useState } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import SearchBar from '../../components/SearchBar';
import Typography from '../../components/Typography';
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
  const [query, setQuery] = useState<PokemonDataQuery>({
    limit: 9,
  });

  const { data, isLoading, isError } = useApi<IPokemonData, 'getPokemons'>('getPokemons', query);

  const pokemons = useMemo(() => data?.pokemons || [], [data]);
  const totalCount = useMemo(() => data?.total, [data]);

  const handleSearch = (searchValue: string) => {
    setQuery((state) => ({
      ...state,
      name: searchValue,
    }));
  };

  return (
    <Layout className={s.root}>
      <Typography variant="p" className={s.title}>
        {totalCount} <b>Pokemons</b> for you to choose your favorite
      </Typography>
      <div className={s.searchWrap}>
        <SearchBar onSearch={handleSearch} />
      </div>

      {isError && <span>Something went wrong</span>}
      {isLoading && <span>Loading...</span>}

      <div className={s.pokemonCardsWrap}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Layout>
  );
};

export default Pokedex;
