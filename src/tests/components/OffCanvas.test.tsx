import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { App } from 'components/App';
import DataObject from 'utils/DataObject';

describe("OffCanvas component", () => {
  const categories = DataObject.getCategories();

  beforeEach(() => {
    render(
        <MemoryRouter initialEntries={['/home']}>
          <App></App>            
        </MemoryRouter>
    )
  })
  
  it("renders category links", () => {

    for (let i = 0; i < categories.length; i++) {
      expect(screen.getAllByText(categories[i].getName()).length).toBeGreaterThan(0);
    }
  });

  it("redirects to a category page", () => {
    const redirect = jest.fn();

    for (let i = 0; i < categories.length; i++) {
      const link = screen.getAllByText(categories[i].getName())[0];

      link.addEventListener("click", () => redirect());
      userEvent.click(link);

      expect(redirect).toHaveBeenCalled();
    }
  })
});