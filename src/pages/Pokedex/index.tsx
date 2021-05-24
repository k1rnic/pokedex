import React, { FC, useMemo } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
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

const Pokedex: FC = () => {
  const { data, isLoading, isError } = useApi<IPokemonData>('getPokemons');
  const pokemons = useMemo(() => data?.pokemons || [], [data]);

  const renderCards = () => {
    if (isError) {
      return <span>Something went wrong</span>;
    }
    if (isLoading) {
      return <span>Loading...</span>;
    }

    return pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />);
  };

  return <Layout className={s.root}>{renderCards()}</Layout>;
};

export default Pokedex;
