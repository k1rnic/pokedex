import { useEffect, useState } from 'react';
import POKEMONS from '../assets/data/pokemons';
import { IPokemon } from '../interfaces/pokemon';

export default () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    Promise.resolve(POKEMONS).then(setPokemons);
  }, []);

  return pokemons;
};
