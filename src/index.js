
/**
 * require style imports
 */
const {getPlaces} = require('./api.js');

getPlaces().then((places) => {
  console.log('Here are all the places:');
  places.forEach(({name, id}) => {
    console.log(`id#${id} - ${name}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});
