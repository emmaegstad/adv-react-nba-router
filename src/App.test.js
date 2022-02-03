import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const data = {
  food: [
    {
      category: 'creatures',
      common_locations: ['Hyrule Ridge', 'Gerudo Highlands'],
      cooking_effect: 'shock resistance',
      description:
        'This rare butterfly only shows itself when it rains. The organs in its body produce an insulating compound. When made into an elixir, it offers electrical resistance.',
      hearts_recovered: 0,
      id: 69,
      image: 'https://botw-compendium.herokuapp.com/api/v2/entry/thunderwing_butterfly/image',
      name: 'thunderwing butterfly',
    },
    {
      category: 'creatures',
      common_locations: ['West Necluda', 'Lanayru Great Spring'],
      cooking_effect: 'stealth up',
      description:
        'This large, glow-in-the-dark snail lives in fresh water. When cooked into a dish, it heightens your senses so you can move about silently.',
      hearts_recovered: 1,
      id: 61,
      image: 'https://botw-compendium.herokuapp.com/api/v2/entry/sneaky_river_snail/image',
      name: 'sneaky river snail',
    },
  ],
  nonfood: [
    {
      category: 'creatures',
      common_locations: ['Hyrule Field', 'Lanayru Great Spring'],
      description:
        "These female deer are often found alongside a male. They're very timid animals by nature, but they tend to let their guard down when eating apples, a favorite food. This tidbit of information can be useful to hunters.",
      drops: ['raw prime meat'],
      id: 15,
      image: 'https://botw-compendium.herokuapp.com/api/v2/entry/mountain_doe/image',
      name: 'mountain doe',
    },
    {
      category: 'creatures',
      common_locations: ['Lanayru Wetlands', 'Akkala Highlands'],
      description:
        "These wild cows come equipped with big, strong horns. They live off grass that grows near the waterfront. Their meat is considered to be high quality, so they're a common target among hunters. Fun Fact: the domesticated Hateno cow, often raised in villages, was bred through selective breeding using these.",
      drops: ['raw prime meat', 'raw gourmet meat'],
      id: 16,
      image: 'https://botw-compendium.herokuapp.com/api/v2/entry/water_buffalo/image',
      name: 'water buffalo',
    },
  ],
};

const server = setupServer(
  rest.get('https://botw-compendium.herokuapp.com/api/v2/category/creatures', (req, res, ctx) => {
    return res(ctx.json({ data: [data] }));
  })
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

test('renders page title', async () => {
  render(<App />);
  await waitForElementToBeRemoved(await screen.findByText('Loading...'), { timeout: 2000 });
  const pageTitle = screen.getByRole('heading', { name: /Creatures of Hyrule/i });
  expect(pageTitle).toBeInTheDocument();
});

test('renders creature cards', async () => {
  render(<App />);
  await waitForElementToBeRemoved(await screen.findByText('Loading...'), { timeout: 2000 });
  const headings = await screen.findAllByRole('heading');
  expect(headings).toHaveLength(84);
});
