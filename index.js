const {fetchBreedDescription} = require('./breedFetcher');

const args = process.argv.slice(2);
const name = args[0];

fetchBreedDescription(name, (error, desc) => {
  if (error) {
    console.log("err: ", error);
  } else {
    console.log(desc);
  }
});