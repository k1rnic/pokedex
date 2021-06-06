import { combineReducers } from 'redux';
import pokemonReducer, { PokemonState } from './pokemon/reducer';

export type RootState = {
  pokemons: PokemonState;
};

const rootReducer = () =>
  combineReducers({
    pokemons: pokemonReducer,
  });

export default rootReducer;
