var express = require("express");

var app = express();

app.get("/", (req, res) => {
  console.log(req.ip);
  fetch('https://api.ipify.org?format=json')
   .then(response => response.json())
   .then(data => res.status(200).json({ userIp: data.ip }));
});

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});