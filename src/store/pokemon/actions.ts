import { Dispatch } from 'react';
import request from '../../utils/request';

export enum PokemonActionTypes {
  FetchPokemonTypes = '[pokemons] FetchPokemonTypes',
  FetchPokemonTypesSuccess = '[pokemons] FetchPokemonTypesSuccess',
  FetchPokemonTypesFailure = '[pokemons] FetchPokemonTypesFailure',
}

type FetchPokemonTypesAction = {
  type: PokemonActionTypes.FetchPokemonTypes;
};

type FetchPokemonTypesSuccessAction = {
  type: PokemonActionTypes.FetchPokemonTypesSuccess;
  payload: string[];
};

type FetchPokemonTypesFailureAction = {
  type: PokemonActionTypes.FetchPokemonTypesFailure;
};

export const fetchPokemonTypes = () => async (dispatch: Dispatch<PokemonActions>) => {
  dispatch({ type: PokemonActionTypes.FetchPokemonTypes });

  try {
    const payload = await request<string[], 'getPokemonTypes'>('getPokemonTypes', {});
    dispatch({ type: PokemonActionTypes.FetchPokemonTypesSuccess, payload });
  } catch (e) {
    dispatch({ type: PokemonActionTypes.FetchPokemonTypesFailure });
  }
};

export type PokemonActions = FetchPokemonTypesAction | FetchPokemonTypesSuccessAction | FetchPokemonTypesFailureAction;
