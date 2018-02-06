const path = require("path");
const Genius = require('./controllers/genius');
const config = require('./config');

module.exports = function(app){
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../lyrics/build/index.html"));
  });
  app.get('/static/js/main.1bf743b8.js', (req, res) => {
    res.sendFile(path.join(__dirname, "../lyrics/build/static/js/main.1bf743b8.js"));
  });
  app.get('/static/css/main.6a37f161.css', (req, res) => {
    res.sendFile(path.join(__dirname, "../lyrics/build/static/css/main.6a37f161.css"));
  });
  app.get('/static/media/dj_set_index.87d8ee92.png', (req, res) => {
    res.sendFile(path.join(__dirname, "../lyrics/build/static/media/dj_set_index.87d8ee92.png"));
  });
  app.get('/static/media/no_album.6bba9800.png', (req, res) => {
    res.sendFile(path.join(__dirname, "../lyrics/build/static/media/no_album.6bba9800.png"));
  });
  app.get('/song', Genius.song);
  app.get('/song/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../lyrics/build/index.html"));
  });
  app.get('/search', Genius.search);
  app.get('/search/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../lyrics/build/index.html"));
  });
  app.get('/lyrics', Genius.lyrics);
  app.get('/lyrics/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../lyrics/build/index.html"));
  });
}
