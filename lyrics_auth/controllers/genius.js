const config = require('../config');
var Genius = require("node-genius");
var geniusClient = new Genius(config.config.access_token);

exports.song = function(req, res, next){
  var songid = req.headers.songid;

  geniusClient.getSong(songid, function (error, song) {
    if (error)
      console.error("Whops. Something went wrong:", error);
    else
      console.log("Hoorah. Here is the song: ", song);
      res.send(song);
  });
}

exports.search = function(req, res, next){
  var term = req.headers.term;

  geniusClient.search(term, function (error, results) {
    if (error)
      console.error("Whops. Something went wrong:", error);
    else
      console.log("Hoorah. Here is the song: ", results);
      res.send(results);
  });
}

