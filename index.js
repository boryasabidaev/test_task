var express = require("express");
var fs = require("fs");

var app = express();


app.get('/', function (req, res) {
  let response = 'Hello, World!</p><a href="/env">Env</a>'
  res.send(response);
});

app.get('/env', function (req, res) {
  let env = process.env;
  let envJsonStr = JSON.stringify(env, null, 2);
  let filename = 'env.json';

  fs.writeFile(filename, envJsonStr, function(error){
    if(error){
      console.log('Error: Could not write file');
      res.write('Error: Could not write file');
    }
    res.writeHead(200, {"Content-Type" : "text/json"});

    fs.createReadStream(filename).pipe(res);
  });
});

app.listen(8080, function () {
  console.log('Test_task_app listening on port 8080');
});
