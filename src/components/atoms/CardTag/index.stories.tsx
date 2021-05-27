/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Component, { Props } from '.';

export default {
  title: 'Atoms/CardTag',
  component: Component,
} as Meta<Props>;

const colors = [
  'stile',
  'dark',
  'rock',
  'grass',
  'bug',
  'ice',
  'water',
  'fire',
  'fighting',
  'dragon',
  'normal',
  'gosth',
  'poison',
  'psychic',
  'fairy',
  'ghost',
  'ground',
  'electric',
];

export const Overview: Story<Props> = (args) => {
  return (
    <div>
      {colors.map((color) => (
        <Component key={color} color={color} {...args}>
          Badge
        </Component>
      ))}
    </div>
  );
};
