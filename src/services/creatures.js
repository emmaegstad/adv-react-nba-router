export async function fetchAllCreatures() {
  const resp = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures');
  const data = await resp.json();
  const food = data.data.food;
  const nonfood = data.data.non_food;
  const all = [...nonfood, ...food];
  console.log(all);
  return all;
}

export async function fetchFoodCreatures() {
  const resp = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures');
  const data = await resp.json();
  return data.data.food;
}

export async function fetchNonFoodCreatures() {
  const resp = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures');
  const data = await resp.json();
  return data.data.non_food;
}

export async function fetchCreatureById(id) {
  const resp = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`);
  const data = await resp.json();
  return data;
}
