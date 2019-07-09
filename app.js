express = require("express");
app = express();
bodyParser = require('body-parser');
mongoose = require('mongoose');
app.use(bodyParser.json())

var PORT = "My Port number";

Player = require('./models/players.js')

mongoose.connect('mongodb://localhost/Celtics');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Default page');
})

app.get('/api/players', function(req, res) {
    Player.getPlayers(function(err, players){
        if(err){
            throw err;
        }
        res.json(players)
    })
})

app.post('/api/players', function(req, res) {
    var player = req.body;
    Player.addPlayers(player,function(err, player){
        if(err){
            throw err;
        }
        res.json(player);
    })
})

app.put('/api/players/:id', function(req, res) {
    var id = req.params.id;
    var player = req.body;
    Player.updatePlayers(id, player, {}, function(err, player){
        if(err){
            throw err;
        }
        res.json(player);
    })
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`)
})
