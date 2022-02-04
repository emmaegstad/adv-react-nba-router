import { screen, render } from '@testing-library/react';
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

test('navigation???', async () => {});
