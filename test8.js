const { getGroupName } = require('./08_chainingOperator');


console.log(getGroupName({
  name: "John",
  group: {
    name: "admin"
  }
}));


console.log(getGroupName({
  name: "John"
})); 
