import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import AfterCheckout from 'components/forms/AfterCheckout';

describe('AfterCheckout component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AfterCheckout></AfterCheckout>
      </MemoryRouter>
    );
  });

  it("displays the checkout message", () => {
    expect(screen.getByText(/You checked-out successfully./i)).toBeInTheDocument();
  });
});


