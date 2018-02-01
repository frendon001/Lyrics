const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

router(app);

app.get('*', (req, res) => {
  // res.sendFile(__dirname + "/public/index.html");
  var testHtmlPath = path.resolve(__dirname, '..', 'lyrics', 'build', 'index.html');
  res.sendFile(testHtmlPath);
})

const port = process.env.PORT || 3030;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
