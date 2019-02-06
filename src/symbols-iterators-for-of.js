// iterators
// iterable

const txt = 'Ireland'; // iterable
const it = txt[Symbol.iterator](); // iterator
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
for (letter of txt) {
  console.log(letter);
  if (letter === 'a') break;
}
