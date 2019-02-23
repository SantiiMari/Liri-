
//requires the dotenv/spotify program

require("dotenv").config();
var Spotify = require('node-spotify-api');

//stores the spotify key in a variable
var keys = require("./key.js");

var spotify = new Spotify(keys.spotify);
var artist = new Artist();





// var Spotify = require('node-spotify-api');


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

