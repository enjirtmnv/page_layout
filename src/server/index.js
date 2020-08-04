var path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
