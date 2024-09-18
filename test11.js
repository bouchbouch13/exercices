const { usingThen, usingAwait, apiResponse } = require('./11_async');


usingThen(() => console.log('Callback exécuté après 2 secondes avec .then'));

usingAwait(() => console.log('Callback exécuté après 2 secondes avec await'));


apiResponse('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log('Réponse API:', data));  
