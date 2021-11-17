import React from "react";
import { render, screen } from '@testing-library/react';

import App from "./App";

describe('App component', () => {
  it('Show header', () => {
    render(<App />);
    expect(screen.getByText('Header')).toBeInTheDocument();
  })
}) 