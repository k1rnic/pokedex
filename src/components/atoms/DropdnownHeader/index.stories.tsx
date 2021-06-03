/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Component, { Props } from '.';

export default {
  title: 'Atoms/DropdownHeader',
  component: Component,
  args: {
    text: 'Type',
  },
} as Meta<Props>;

export const Overview: Story<Props> = (args) => <Component {...args} onToggle={console.log} />;
