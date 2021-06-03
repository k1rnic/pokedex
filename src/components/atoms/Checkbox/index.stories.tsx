/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Component, { Props } from '.';

export default {
  title: 'Atoms/Checkbox',
  component: Component,
  args: {
    label: 'Electric',
  },
} as Meta<Props>;

export const Overview: Story<Props> = (args) => {
  const [checked, setChecked] = useState(true);

  return <Component {...args} checked={checked} onChange={setChecked} />;
};
