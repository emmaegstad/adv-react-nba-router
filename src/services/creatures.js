export async function fetchCreatures() {
  const resp = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures');
  const data = await resp.json();
  return data;
}
