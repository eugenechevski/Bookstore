import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import OffCanvas from 'components/general/OffCanvas';
import dataFetch from 'src/utils/dataFetch';

describe("OffCanvas component", () => {
  const categories = dataFetch.getCategories();

  beforeEach(() => {
    render(
        <MemoryRouter>
          <OffCanvas></OffCanvas>            
        </MemoryRouter>
    )
  })

  it("renders category links", () => {
    for (let i = 0; i < categories.length; i++) {
      expect(screen.getByText(categories[i].getName())).toBeInTheDocument();
    }
  });

  it("redirects to a category page", () => {
    const redirect = jest.fn();
    for (let i = 0; i < categories.length; i++) {
      const link = screen.getByText(categories[i].getName());

      link.addEventListener("click", () => redirect());
      userEvent.click(link);

      expect(redirect).toHaveBeenCalled();
    }
  })
});