import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import AfterSignIn from 'components/forms/AfterSignIn';

describe('AfterSignIn component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AfterSignIn></AfterSignIn>
      </MemoryRouter>
    );
  });

  it("it displays a message after an account has been created", () => {
    expect(screen.getByText(/Signed-in successfully./i)).toBeInTheDocument();
  });
});