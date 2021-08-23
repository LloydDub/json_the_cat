const request = require('request');






const fetchBreedDescription = function(breedName, callback) {
  let catBreedAPI = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;

  request(catBreedAPI, (error, response, body) => {
    if (error) { // handles error from connection
      callback(error, null);
    
    } else if (JSON.parse(body)[0] === undefined) {
      console.log(`The breed ${process.argv[2]} is not found`);
    } else {
    
      callback(null, JSON.parse(body)[0]['description']);
    }
  });

};


module.exports = { fetchBreedDescription };
