const obj = {
  name: 'Willian',
  age: 26,
};
const proxy = new Proxy(obj, {
  get(target, name) {
    console.log('Alguém está o pedindo o nome =D');
    return target[name];
  },
  set(target, name, value) {
    console.log('Alguém está mudando o nome!');
    target[name] = value.toUpperCase();
  },
});
