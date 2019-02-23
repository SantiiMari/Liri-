
//requires the dotenv/spotify program
// require("fs")
require("dotenv").config();
var Spotify = require('node-spotify-api');

//stores the spotify key in a variable
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);




//grabs the user input 
var liriSearch = process.argv[2];
var input = process.argv.slice(3).join(" ");

//command options for user entry
switch (liriSearch) {
case "spotify-this-song":
        spotifyThisSong();
        break;
case "concert-this":
        bandsInTown();
        break;
case "do-what-it-says":
        doWhatItSays();
        break;
case "movie-this":
        movieThis();
        break;
default: console.log 
    + "Give Liri one of these Commands!" + "\n";
    + "spotify-this-song 'insert song title'" + "\n";
    + "concert-this" + "\n";
    + "do-what-it-says" + "\n";
    + "movie-this 'anymovie title'" + "\n";
};

function spotifyThisSong() {
    if (!input) { input = "the sign" };
    spotify.search({ type: "track", query: input, limit: 1 },
      // The following URL can be used to search the TV Maze API for a given show
      function (err, data) {
        if (err) { return console.log('Error occurred: ' + err); } else {
            let spotifyArr = data.tracks.items;
            for (i = 0; i < spotifyArr.length; i++) {
                console.log(" ");
                console.log(`Song: ${data.tracks.items[i].name}\nArtist(s): ${data.tracks.items[i].artists[0].name}\nAlbum: ${data.tracks.items[i].album.name}`)
                console.log(" ");
            }
        }
    })
  }
  
  
      module.exports = spotifyThisSong;
