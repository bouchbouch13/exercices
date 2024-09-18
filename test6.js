const { concat, push, merge, setName } = require('./06_composition');


console.log(concat([1, 2, 3], [4, 5, 6])); 


console.log(push([1, 2, 3], 4)); 


console.log(merge({a: 1, b: 2}, {c: 3, d: 4})); 


console.log(setName({name: 'toto'}, 'titi')); 
