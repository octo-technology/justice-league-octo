var express = require('express');
const EventService = require('./eventService')
const HeroService = require('./heroService')

var app = express();
const port = process.env.PORT || 3001;
const eventService = new EventService()
const heroService = new HeroService()
let events = []
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
    console.log('Event: ',req.body);
    eventService.handleEvent(req.body)
    res.send("Event received!");
});

app.post('/registration', function (req, res) {
    console.log('registration: ',req.body);
    heroService.registerHero(req.body)
    res.send("Hero received!");
});


app.get('/interventionPlan', function (req, res) {
    
    res.send([
        {
          "hero": "Batman",
          "location": "New York",
          "action": "prevent"
        }
      ]);
});


app.listen(port, function () {
    console.log('API mocks app listening on port 3001!')
});
