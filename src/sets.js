let mySet = new Set(['willian', 'jonas', 'godoy']);
mySet.add('marcio');
mySet.add('marcio');
mySet.add('marcio');
mySet.add('willian');
mySet.delete('willian');
console.log(mySet.has('willian'));
console.log(mySet.has('marcio'));
console.log(mySet[1]);
let it = mySet.values();

console.log(it.next());
for (name of it) {
    console.log(name);
}
