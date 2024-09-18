const { parallel } = require('./12_parallel');

parallel().then(results => {
  console.log('Résultats des appels API:', results);
}).catch(error => {
  console.error('Erreur dans parallel:', error);
});
