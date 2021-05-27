import React, { useMemo } from 'react';
import PokemonCard from '../../components/organisms/Card';
import useApi from '../../hooks/useApi';
import { IPokemon } from '../../interfaces/pokemon';

type Props = {
  id: string;
};

const PokemonDetails = ({ id }: Props) => {
  const params = useMemo(() => ({ id }), [id]);
  const urlOptions = useMemo(() => ({ params }), [params]);

  const { data: pokemon } = useApi<IPokemon, 'getPokemonsById'>('getPokemonsById', urlOptions);

  return pokemon && <PokemonCard pokemon={pokemon} />;
};

export default PokemonDetails;
