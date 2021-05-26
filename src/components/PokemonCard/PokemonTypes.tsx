import cn from 'classnames';
import React from 'react';
import s from './style.module.scss';

export type Props = {
  types: string[];
};

const PokemonTypes = ({ types }: Props) => {
  const getPokemonColor = (type: string) => `var(--pokemon-${type})`;

  return (
    <div className={s.pokemonTypes}>
      {types.map((type) => (
        <span key={type} className={cn(s.pokemonType, s[type])} style={{ backgroundColor: getPokemonColor(type) }}>
          {type}
        </span>
      ))}
    </div>
  );
};

export default PokemonTypes;
