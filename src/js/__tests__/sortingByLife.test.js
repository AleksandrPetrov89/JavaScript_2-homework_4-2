import sortingByLife from '../app';

test('Checking the sortingByLife function', () => {
  const arrayHeroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const exp = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  sortingByLife(arrayHeroes);
  expect(arrayHeroes).toEqual(exp);
});
