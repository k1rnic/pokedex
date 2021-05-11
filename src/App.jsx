import cn from 'classnames';
import React from 'react';
import classes from './App.modules.scss';
import './custom.css';

export default () => (
  <div className={cn(classes.header, 'teal')}>This is App root</div>
);
