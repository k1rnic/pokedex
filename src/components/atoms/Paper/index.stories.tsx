/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Component from '.';

export default {
  title: 'Atoms/Paper',
  component: Component,
} as Meta;

export const Overview: Story = (args) => <Component {...args} />;
