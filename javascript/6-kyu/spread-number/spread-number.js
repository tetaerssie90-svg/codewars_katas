Number.prototype[Symbol.iterator] = function* () {
  for (let i = 1; i <= this; i++) {
    yield i;
  }
};
console.log([...1]);
console.log([...2]); 
console.log([...3]); 
console.log([...4]); 
console.log([...5]);