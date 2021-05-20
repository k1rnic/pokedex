import React from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import usePokemons from '../../hooks/usePokemons';
import s from './style.module.scss';

const Pokedex = () => {
  const pokemons = usePokemons();

  return (
    <Layout className={s.root}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Layout>
  );
};

export default Pokedex;
