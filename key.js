var axios = require("axios");
var fs = require("fs");


console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

function spotifyThisSong() {
  this.findArtist = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp" + term;
    axios({
      method: 'get',
      url: URL,
    })
      .then(function (response) {
        console.log(response.data.summary);

        fs.appendFile('log.txt', `\n\ Name: ${response.data.summary}`, function (err) {
          if (err) throw err;
          console.log('Updated!');
        });
      ;},
      )};
      }
        
      
    module.exports = spotifyThisSong;