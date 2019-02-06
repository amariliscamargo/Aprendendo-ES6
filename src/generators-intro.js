function* genNames() {
  console.log('Chamando primeiro nome!');
  yield 'Willian';
  console.log('Chamando segundo nome!');
  yield 'Jonas';
  console.log('Chamando terceiro nome!');
  yield 'Gabriel';
}
const names = genNames();
console.log(names.next());
console.log(names.next());
console.log(names.next());
