const request = require('request');




let catBreedAPI = `https://api.thecatapi.com/v1/breeds/search/?q=${process.argv[2]}`







request(catBreedAPI, (error, response, body) => {
  if (error) {
    console.log('error', error);
  } else if (JSON.parse(body)[0] === undefined){
    console.log(`The breed ${process.argv[2]} is not found`);
  } else {
    console.log(JSON.parse(body)[0]['description']);
  }  
});

