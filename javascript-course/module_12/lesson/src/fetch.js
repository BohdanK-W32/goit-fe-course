const axios = require('axios');


const fetch = () => {
  axios.get('https://api.apixu.com/v1/forecast.json?key=8692627850634df895d103122181209&q=kiev&days=10')
  .then( data => {console.log(data)} );
}

module.exports = {
  weather: fetch()
}