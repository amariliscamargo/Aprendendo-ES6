const dados = [
  {
    name: 'Willian',
    age: 26,
    city: 'Dublin',
  },
  {
    name: 'Jonas',
    age: 22,
    city: 'Cologne',
  },
];
const sampleArray = [4, -5, 0, -1];
const underZero = sampleArray.find(x => x == 0);
const underZeroIndex = sampleArray.findIndex(x => x == 0);
console.log(underZero);
console.log(underZeroIndex);
const jonas = dados.find(person => person.name === 'Willian');
// const jonasIndex = dados.findIndex(person => person.name === 'Jonas');
console.log(jonas);
