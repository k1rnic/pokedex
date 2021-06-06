import { Reducer } from 'react';
import { PokemonActions, PokemonActionTypes } from './actions';

export type PokemonState = {
  types: {
    isLoading: boolean;
    isError: boolean;
    data: string[];
  };
};

const initialState: PokemonState = {
  types: {
    isLoading: false,
    isError: false,
    data: [],
  },
};

const pokemonReducer: Reducer<PokemonState, PokemonActions> = (state = initialState, action): PokemonState => {
  switch (action.type) {
    case PokemonActionTypes.FetchPokemonTypes:
      return {
        ...state,
        types: {
          data: [],
          isError: false,
          isLoading: true,
        },
      };
    case PokemonActionTypes.FetchPokemonTypesSuccess:
      return {
        ...state,
        types: {
          data: action.payload,
          isError: false,
          isLoading: false,
        },
      };
    case PokemonActionTypes.FetchPokemonTypesFailure:
      return {
        ...state,
        types: {
          data: [],
          isError: true,
          isLoading: false,
        },
      };
    default:
      return state;
  }
};

export default pokemonReducer;
