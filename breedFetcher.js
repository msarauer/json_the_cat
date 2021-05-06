const request = require('request');



const fetchBreedDescription = (name, callback) => {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;

  request(URL, (error, message, body) => {
    if (error) {
      callback(`Failed to obtain details:\n ${error}`, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, data[0].description);
    } else {
      callback(`Breed: ${name}, not found.`, null);
    }
  
  });
};

module.exports = { fetchBreedDescription };

