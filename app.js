const CONFIG  = require('./config');

const express = require('express');
const path = require('path');

const app = express();
let router = express.Router();

global.appRoot = path.resolve(__dirname);

app.use(express.static(__dirname + "/views"));

app.use(CONFIG.rootPath, router);
app.listen(CONFIG.port, function() {
    console.log('Server started at http://0.0.0.0:' + CONFIG.port + CONFIG.rootPath);
});