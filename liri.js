
//requires the dotenv/spotify program
// require("fs")
var request = require("request");
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

  function bandsInTown() {
      //key
      // The following URL can be used to search the bands api
    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"
    request(queryUrl, function (error, response, body)
     { if (!error) {
        var myBandData = JSON.parse(body);
        var bandEvent = myBandData[0];
        var date = bandEvent.datetime
        var queryUrlResults =
            "city: " + bandEvent.venue.city + "\n" +
            "Venue: " + bandEvent.venue.name + "\n" +
            "Date: " + date;
        return console.log("The next concert is..." + "\n" + queryUrlResults);
    } else {
        console.log("error: " + error);
        return;
    };
});
  };


  function movieThis() {
      //key
      // The following URL can be used to search the spotify api
var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=c321888e";
request(queryUrl, function (error, response, body)
{
    if (!input) {input =" Mr. Nobody"}; 
    var MovieData = JSON.parse(body);
    var queryUrlResults =
    "Title: " + MovieData.Title + "\n" +
    "Year Released: " + MovieData.Year + "\n" +
    "IMDB Rating: " + MovieData.Ratings[0].Value + "\n" +
    "Plot: " + MovieData.Plot + "\n" +
    "Actors / Actresses: " + MovieData.Actors
    console.log(queryUrlResults);
}
)};
    //   module.exports = spotifyThisSong;
