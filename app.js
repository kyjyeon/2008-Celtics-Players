express = require("express");
app = express();
bodyParser = require('body-parser');
mongoose = require('mongoose');
app.use(bodyParser.json())

Player = require('./models/players.js')

mongoose.connect('mongodb://localhost/Celtics');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Use /api/players to get restful api');
})

app.get('/api/players', function(req, res) {
    Player.getPlayers(function(err, players){
        if(err){
            throw err;
        }
        res.json(players)
    })
})

app.get('/api/players/:id', function(req, res) {
    Player.getPlayersID(req.params.id,function(err, player){
        if(err){
            throw err;
        }
        res.json(player)
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

app.listen(3010, () => {
    console.log("Listening at port 3010")
})
