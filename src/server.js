let express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    path = require('path'),
    FileHandler = require('./file.handler'),
    fileHander = new FileHandler(),
    app = express();

app.use(bodyParser.json());

let counter = 0;

app.get('/css/:version', async (req, res) => {
    counter++;
    console.log('new request ' + counter + ' at: ' + new Date());
    let filePath = fileHander.GetPath('css', req.params.version, 'bootstrap.min.css');
    fileHander.ReadFile(filePath, res, counter);
});

app.get('/js/:version', async (req, res) => {
    console.log('new request at: ' + new Date());
    let filePath = fileHander.GetPath('js', req.params.version, 'angular.js');
    fileHander.ReadFile(filePath, res);
});

app.listen(3030, function() {
    console.log('app listening on port 3030');
})