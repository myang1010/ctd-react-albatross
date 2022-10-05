import * as React from 'react';
// import axios from 'axios';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

// jest.mock('axios');

describe('something truthy and falsy', () => {
  // test('true to be true', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
    expect(true).toBeTruthy();
  });

  // test('false to be false', () => {
  it('false to be false', () => {
    // expect(false).toBe(false);
    expect(false).toBeFalsy();
  });
});

  test('renders About link', () => {
    render(<App />);
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Task label', () => {
    render(<App />);
    const labelElement = screen.getByLabelText(/Task/i);
    expect(labelElement).toBeInTheDocument();
  });
