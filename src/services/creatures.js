export async function fetchCreatures() {
  const resp = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures');
  const data = await resp.json();
  console.log(data);
  return data;
}

export async function fetchCreatureById(id) {
  const resp = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`);
  const data = await resp.json();
  return data;
}
