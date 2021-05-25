import cn from 'classnames';
import React from 'react';
import { IPokemon } from '../../interfaces/pokemon';
import Typography from '../Typography';
import s from './style.module.scss';

type Props = {
  pokemon: IPokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  const { name, img, stats, types } = pokemon;

  const getPokemonColor = (type: string) => `var(--pokemon-${type})`;

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Typography variant="h4" className={s.pokemonName}>
          {name}
        </Typography>

        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>

          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>

        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={cn(s.label, s[type])} style={{ backgroundColor: getPokemonColor(type) }}>
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className={s.pictureWrap} style={{ backgroundColor: getPokemonColor(types[0]) }}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default React.memo(PokemonCard);
