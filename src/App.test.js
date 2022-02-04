import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders page title', async () => {
  render(<App />);
  const pageTitle = await screen.findByRole('heading', { name: /Creatures of Hyrule/i });
  expect(pageTitle).toBeInTheDocument();
});

test('renders creature cards', async () => {
  render(<App />);
  const headings = await screen.findAllByRole('heading');
  expect(headings).toHaveLength(84);
});

test('should navigate to detail page', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headings = await screen.findAllByRole('heading');
  expect(headings).toHaveLength(84);

  const clickImg = screen.getAllByRole('img');
  userEvent.click(clickImg[3]);

  const heading = screen.getAllByRole('heading');
  expect(heading).toHaveLength(2);
});
