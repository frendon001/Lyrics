const Genius = require('./controllers/genius');
const config = require('./config');

module.exports = function(app){
  app.get('/song', Genius.song);
  app.get('/search', Genius.search);
  app.get('/lyrics', Genius.lyrics)
}