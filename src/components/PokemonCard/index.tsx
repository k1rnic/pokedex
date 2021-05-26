import { navigate } from 'hookrouter';
import React from 'react';
import { IPokemon } from '../../interfaces/pokemon';
import Typography from '../Typography';
import PokemonStat from './PokemonStat';
import PokemonTypes from './PokemonTypes';
import s from './style.module.scss';

type Props = {
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

        <PokemonStat stats={pokemon.stats} />
        <PokemonTypes types={pokemon.types} />
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
