/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Component, { Props } from '.';
import DATA from '../../../assets/data/pokemons';

export default {
  title: 'Atoms/CardAvatar',
  component: Component,
} as Meta<Props>;

export const Overview: Story<Props> = () => {
  const { name, img } = DATA[Math.ceil(Math.random() * DATA.length - 1)];

  return <Component name={name} img={img} />;
};
