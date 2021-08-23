const request = require('request');




let catBreedAPI = `https://api.thecatapi.com/v1/breeds/search/?q=${process.argv[2]}`;



request(catBreedAPI, (error, response, body) => {
  if (error) {
    console.log('error', error);
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log(`The breed ${process.argv[2]} is not found`);
  }
});

