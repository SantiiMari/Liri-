
//requires the dotenv program
require("dotenv").config();
//stores the spotify key in a variable
var keys = require("./key");

var spotify = new Spotify(keys.spotify);
var artist = new Artist();

//grabs the user input 
var search = process.argv[2];
var concertThis = process.argv.slice(3).join(" ");

if (search === artist) {
    console.log("Finding ArtestInfo");
    tv.findArtist(term);
}