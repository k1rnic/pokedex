import React from 'react';

type Props = {
  id: string;
};

const PokemonDetails = ({ id }: Props) => {
  return <div>{id}</div>;
};

export default PokemonDetails;
