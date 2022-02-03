import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test('renders page title', async () => {
  render(<App />);
  await waitForElementToBeRemoved(await screen.findByText('Loading...'), { timeout: 3000 });
  const pageTitle = screen.getByRole('heading', { name: /Creatures of Hyrule/i });
  expect(pageTitle).toBeInTheDocument();
});

test('renders creature cards', async () => {
  render(<App />);
  await waitForElementToBeRemoved(await screen.findByText('Loading...'), { timeout: 3000 });
  const headings = await screen.findAllByRole('heading');
  expect(headings).toHaveLength(48);
});
