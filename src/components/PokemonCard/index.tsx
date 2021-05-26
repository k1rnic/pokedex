import cn from 'classnames';
import { navigate } from 'hookrouter';
import React from 'react';
import { IPokemon } from '../../interfaces/pokemon';
import Typography from '../Typography';
import s from './style.module.scss';

export type Props = {
  pokemon: IPokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  const getPokemonColor = (type: string) => `var(--pokemon-${type})`;

  return pokemon ? (
    <div className={s.root} onClick={() => navigate(`pokedex/${pokemon.id}`)}>
      <div className={s.infoWrap}>
        <Typography variant="h4" className={s.pokemonName}>
          {pokemon.name}
        </Typography>

        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>

          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>

        <div className={s.labelWrap}>
          {pokemon.types.map((type) => (
            <span key={type} className={cn(s.label, s[type])} style={{ backgroundColor: getPokemonColor(type) }}>
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className={s.pictureWrap} style={{ backgroundColor: getPokemonColor(pokemon.types[0]) }}>
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(PokemonCard);
