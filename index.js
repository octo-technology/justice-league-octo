var express = require('express');
var app = express();
const port = process.env.PORT || 3001;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/health', function (req, res) {
    res.send("OK !");
});

app.post('/registration', function (req, res) {
    let heroList = [];
    console.log(req, res);
    // sauvegarde le heros 
    res.send("registration !");
});

app.post('/preview', function (req, res) {
    res.send(API_PAYLOADS.GET_PREVIEWS.OK);
});

app.listen(port, function () {
    console.log('API mocks app listening on port 3001!')
});



// POST {api-root-url}/event

// GET {api-root-url}/interventionPlan