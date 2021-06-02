import React, { ReactText, useMemo } from 'react';
import PokemonCard from '../../components/organisms/Card';
import useApi from '../../hooks/useApi';
import { IPokemon } from '../../interfaces/pokemon';

type Props = {
  id: ReactText;
};

const PokemonDetails = ({ id }: Props) => {
  const query = useMemo(() => ({ id }), [id]);

  const { data: pokemon } = useApi<IPokemon, 'getPokemonsById'>('getPokemonsById', query);

  return pokemon && <PokemonCard pokemon={pokemon} />;
};

export default PokemonDetails;
