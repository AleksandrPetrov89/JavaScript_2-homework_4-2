export default function sortingByLife(arrayHeroes) {
  arrayHeroes.sort((a, b) => b.health - a.health);
}
