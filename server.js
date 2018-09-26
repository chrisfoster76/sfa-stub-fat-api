var express = require("express");
var fs = require("fs");

var app = express();
var port = 80; //3300 for local dev?

//respond to all get requests
app.get("/providers/:ukprn", (req, res) => handler(req,res));

  function handler(req, res) {

    var ukprn = req.params["ukprn"];
      
    fs.readFile('data/provider.json', 'utf8', function (err,data) {

      data = data.replace(/@ukprn/g, ukprn);

      if (err) {
        return console.log(err);
      }
      res.status(201).send(data);

    });
};

app.listen(port, () => {
    console.log("Server listening on port " + port);
  });
 
