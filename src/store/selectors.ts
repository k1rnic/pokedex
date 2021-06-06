/* eslint-disable import/prefer-default-export */
import { RootState } from '.';

export const selectPokemonTypes = (state: RootState) => state.pokemons.types.data;
