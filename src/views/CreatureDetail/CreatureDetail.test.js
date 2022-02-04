import { screen, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CreatureDetail from './CreatureDetail.jsx';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const data = {
  data: {
    category: 'creatures',
    common_locations: ['Great Hyrule Forest', 'Hyrule Ridge'],
    description:
      "These pigeons inhabit vast regions all throughout Hyrule, so they can often be found in forests, grasslands, or even villages. They don't have a very strong sense of awareness, so even less-skilled hunters can nab them pretty easily.",
    drops: ['raw bird drumstick'],
    id: 36,
    image: 'https://botw-compendium.herokuapp.com/api/v2/entry/wood_pigeon/image',
    name: 'wood pigeon',
  },
};

const server = setupServer(
  rest.get('https://botw-compendium.herokuapp.com/api/v2/entry/36', (req, res, ctx) => {
    return res(ctx.json(data));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('renders creature details', async () => {
  render(
    <MemoryRouter initialEntries={['/creature/36']}>
      <Route path="/creature/:id">
        <CreatureDetail />
      </Route>
    </MemoryRouter>
  );

  const pageTitle = await screen.findByRole('heading', { name: /Wood Pigeon/i });
  expect(pageTitle).toBeInTheDocument();
});
