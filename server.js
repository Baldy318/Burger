var express = require("express");
var methodOverride = require("method-override");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("The app is listening on the port")
});	