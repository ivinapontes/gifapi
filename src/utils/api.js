var axios = require('axios');

module.exports = {
  getGifs: function (s) {
      return axios.get('http://api.giphy.com/v1/gifs/search?q='+s+'&api_key=HJrg9B2yo9lkEanFn9lcPg6ZIzzltTuv&limit=20')
          .then(function (data) {
              return data.data.data;
          })
  }
}