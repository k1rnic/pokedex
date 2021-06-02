/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Component, { Props } from '.';

export default {
  title: 'Atoms/CardProp',
  component: Component,
  args: {
    name: 'Defence',
    value: 69,
    compact: true,
  },
} as Meta<Props>;

export const Overview: Story<Props> = (args) => <Component {...args} />;
