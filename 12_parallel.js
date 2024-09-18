/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 * 
 * urls:
 * - https://jsonplaceholder.typicode.com/todos/1
 * - https://jsonplaceholder.typicode.com/todos/2
 * - https://jsonplaceholder.typicode.com/todos/3
 * 
 * Retournez un tableau contenant les 3 résultats
 * */
 const {apiResponse} = require("./11_async");
 
 //documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all


const parallel = async () => {
  const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
  ];

  try {
    // Utilisation de Promise.all pour exécuter les appels API en parallèle
    const results = await Promise.all(urls.map(url => apiResponse(url)));
    
    // Retourner le tableau contenant les 3 résultats
    return results;
  } catch (error) {
    console.error('Erreur lors de l\'appel API:', error);
  }
};

module.exports = { parallel };
