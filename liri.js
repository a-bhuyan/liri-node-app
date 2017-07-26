var fs = require("fs");
var stuffINeed = require("./keys.js");
var Spotify = require('node-spotify-api');
var request = require("request");
/*
* Artist(s)

* The song's name

* A preview link of the song from Spotify

* The album that the song is from

* If no song is provided then your program will default to "The Sign" by Ace of Base.
*/
var a = process.argv;
var b = a[2];
var searchTerm = "";
if(process.argv[3]){searchTerm = process.argv[3];}

//spotify call
if(b === "spotify-this-song"){
  var spotify = new Spotify({
    id: "f191acdec32d45dda3100182ad41289b",
    secret: "5fb3dc9c259c48cf82a6379b578241c8"
  });
  spotify
    .search({ type: 'track', query: process.argv[3] })
    .then(function(response) {
      for(var i = 0; i < response.tracks.items[0].album.artists.length; i++){
        console.log("Artist name: " + response.tracks.items[0].album.artists[i].name);
      }
      console.log("Song name: " + response.tracks.items[0].name);
      console.log("Album name: " + response.tracks.items[0].album.name);
      console.log("A link to the song: " + response.tracks.items[0].album.href);
    })
    .catch(function(err) {
      console.log(err);
  });
}
//Twitter call: did not do due to phone number/api call issue
else if (b === 'my-tweet') {
  console.log("tada2");
//Movie/OMDB call
}else if (b === 'movie-this') {

}else if (b === 'do-what-it-says') {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    var output = data.split(",");
    b = output[0];
    searchTerm = output[1];

    //console.log(searchTerm);
});

};
