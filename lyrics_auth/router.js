const Genius = require('./controllers/genius');
const config = require('./config');

module.exports = function(app){
  // app.get('/', (req, res) => {
  //   // res.sendFile(__dirname + "/public/index.html");
  //   // var testHtmlPath = path.resolve(__dirname, '..', 'lyrics', 'build', 'index.html');
  //   // res.sendFile(testHtmlPath);
  //   res.sendFile(path.join(__dirname, "../lyrics/build/index.html"));
  // });
  app.get('/song', Genius.song);
  app.get('/search', Genius.search);
  app.get('/lyrics', Genius.lyrics);
}