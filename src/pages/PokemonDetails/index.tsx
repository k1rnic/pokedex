import React, { useMemo } from 'react';
import PokemonCard from '../../components/PokemonCard';
import useApi from '../../hooks/useApi';
import { IPokemon } from '../../interfaces/pokemon';

interface IPokemonData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: IPokemon[];
}

type Props = {
  id: string;
};

const PokemonDetails = ({ id }: Props) => {
  const params = useMemo(() => ({ id }), [id]);
  const urlOptions = useMemo(() => ({ params }), [params]);

  const { data } = useApi<IPokemonData, 'getPokemonsById'>('getPokemonsById', urlOptions);
  const pokemon = useMemo<IPokemon>(() => data?.pokemons[0] as IPokemon, [data]);

  return <PokemonCard pokemon={pokemon} />;
};

export default PokemonDetails;
