/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Component, { Props } from '.';

export default {
  title: 'Atoms/CardPoint',
  component: Component,
  args: {
    name: 'Experience',
    value: 1000000,
    max: 10000000,
    color: '#1b8eb0',
  },
} as Meta<Props>;

export const Overview: Story<Props> = (args) => <Component {...args} />;
