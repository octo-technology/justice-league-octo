var express = require('express');

var app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/health', function (req, res) {
    res.send("OK !");
});

app.post('/event', function (req, res) {
    console.log(req.body);
    res.send("event received!");
});

app.get('/interventionPlan', function (req, res) {
    res.send([
        {
          "hero": "Batman",
          "location": "New York",
          "action": "saving"
        }
      ]);
});


app.listen(port, function () {
    console.log('API mocks app listening on port 3001!')
});