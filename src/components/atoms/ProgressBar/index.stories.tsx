/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Component, { Props } from '.';

export default {
  title: 'Atoms/ProgressBar',
  component: Component,
  args: {
    color: '#1b8eb0',
    progress: 69,
  },
} as Meta<Props>;

export const Overview: Story<Props> = (args) => <Component {...args} />;
