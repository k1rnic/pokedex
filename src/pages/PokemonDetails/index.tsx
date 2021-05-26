import React, { useMemo } from 'react';
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

type Props = {
  id: string;
};

const PokemonDetails = ({ id }: Props) => {
  const query = useMemo(() => ({}), []);
  const params = useMemo(() => ({ id }), [id]);

  const { data } = useApi<IPokemonData, 'getPokemonsById'>('getPokemonsById', query, params);
  const pokemon = useMemo(() => data?.pokemons[0] || {}, [data]);

  return (
    <div className={s.root}>
      <div className={s.pokemon}>
        <div className={s.pokemonImg} />
        <div className={s.pokemonType} />
      </div>
      <div className={s.pokemonStat}>
        <div className={s.name} />
        <div className={s.generation} />

        <div className={s.abilities} />
        <div className={s.points}>
          <div className={s.health} />
          <div className={s.exp} />
        </div>
        <div className={s.skills}>
          <div className={s.def} />
          <div className={s.attack} />
          <div className={s.spAttack} />
          <div className={s.spDef} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
