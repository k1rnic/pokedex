/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Component, { Props } from '.';
import useToggle from '../../../hooks/useToggle';

export default {
  title: 'Atoms/DropdownHeader',
  component: Component,
  args: {
    text: 'Type',
  },
} as Meta<Props>;

export const Overview: Story<Props> = (args) => {
  const [open, toggle] = useToggle();

  return <Component {...args} open={open} onToggle={toggle} />;
};
