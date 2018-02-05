const path = require("path");
const Genius = require('./controllers/genius');
const config = require('./config');

module.exports = function(app){
  app.get('/', (req, res) => {
    // res.sendFile(__dirname + "/public/index.html");
    // var testHtmlPath = path.resolve(__dirname, '..', 'lyrics', 'build', 'index.html');
    // res.sendFile(testHtmlPath);
    res.sendFile(path.join(__dirname, "../lyrics/build/index.html"));
  });
  app.get('/static/js/main.4c9d4a35.js', (req, res) => {
    res.sendFile(path.join(__dirname, "../lyrics/build/static/js/main.4c9d4a35.js"));
  });
  app.get('/static/css/main.5022fc3c.css', (req, res) => {
    res.sendFile(path.join(__dirname, "../lyrics/build/static/css/main.5022fc3c.css"));
  });
  app.get('/song', Genius.song);
  app.get('/search', Genius.search);
  app.get('/lyrics', Genius.lyrics);
}