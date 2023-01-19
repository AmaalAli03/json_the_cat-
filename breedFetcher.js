const request = require('request');
const breedName = process.argv[2];

request('https://api.thecatapi.comj/v1/breeds/search?q=' + breedName, (error, response, body) => {
  console.log('error: Breed is NOT found', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('Type of body:', typeof body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  const breed = data[0];
  console.log(breed.description);

  // console.log('Type of body:', typeof data);
});