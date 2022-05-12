var express = require("express");
var app = express();
var port = 8000;
var bodyParser = require("body-parser");

app.use(bodyParser.json());

//routes

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile("start.html", {root: "public"});
});

app.get("/start", function(req, res) {
    res.sendFile("start.html", {root: "public"});
});

app.get("/search", function(req, res) {
    res.sendFile("search.html", {root: "public"});
});

app.get("/date", function(req, res) {
  /*  var arrival = req.query.ar;
    var departure = req.query.dep;
    var date = req.query.date;
    var date = req.query.price;*/
    res.sendFile("dateselect.html", {root: "public"});
});

app.get("/services", function(req, res) {
    res.sendFile("services.html", {root: "public"});
});

app.get("/payment", function(req, res) {
    res.sendFile("payment.html", {root: "public"});
});

//start server
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });