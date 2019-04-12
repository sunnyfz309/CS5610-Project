// prod mode: change server.js, environment.ts, model.js, widgets.server.service.js
// const baseUrl = 'https://cs5610-project.herokuapp.com/';
const baseUrl = 'http://localhost:4200';

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

var secret = "random";
if (process.env.SESSION_SECRET) {
  secret = process.env.SESSION_SECRET;
}
app.use(session({
  secret: secret,
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist/project')));
app.use('/assets/uploads', express.static(path.join(__dirname, '/src/assets/uploads')));


//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", baseUrl);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', "true");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);
const server = http.createServer(app);

// require("./assignment/app")(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});
