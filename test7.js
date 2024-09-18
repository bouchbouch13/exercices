const { extractFirstTwo, extractRest, extractName, removePassword } = require('./07_destructuration');


console.log(extractFirstTwo([1, 2, 3])); 


console.log(extractRest([1, 2, 3])); 


console.log(extractName({name: "toto", age: 42})); 

console.log(removePassword({name: "toto", password: "1234"})); 
