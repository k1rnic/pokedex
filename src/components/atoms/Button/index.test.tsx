/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from './index';

describe('Button', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Button onClick={console.log} />, container);
    });

    expect(container?.innerHTML).toBeDefined();
  });

  it('should render text button', () => {
    act(() => {
      render(<Button onClick={console.log}>Hey ho</Button>, container);
    });

    expect(container?.textContent).toBe('Hey ho');
  });
});
