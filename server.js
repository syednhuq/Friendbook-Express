var express = require('express'); // npm install express
var bodyParser = require('body-parser'); // npm install bodyparser
var path = require('path'); 

var app = express();
var PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./api-routes.js')(app); 
require('./htmlroutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});