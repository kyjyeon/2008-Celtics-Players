mongoose = require('mongoose')

//Player info
var PlayerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    height:{
        type: String
    },
    pts:{
        type: String
    },
    ast:{
        type: String
    },
    FG:{
        type: String
    },
    FT:{
        type: String
    },
    ThreeP:{
        type: String
    },
    Description:{
        type: String
    }
});

var Player = module.exports = mongoose.model('Player', PlayerSchema)

// Get Players
module.exports.getPlayers = function(callback, limit){
    Player.find(callback).limit(limit);
}

module.exports.getPlayersID = function(id,callback){
    Player.findById(id,callback);
}

//Add players
module.exports.addPlayers = function(player, callback){
    Player.create(player, callback);
}
module.exports.updatePlayers = function(id, player, options, callback){
    var query = {id: id}
    var update = {
        name: player.name,
        position: player.position,
        height: player.height,
        pts: player.pts,
        ast: player.ast,
        FG: player.FG,
        FT: player.FT,
        ThreeP: player.ThreeP,
        Description: player.Description
    }
    Player.findOneAndUpdate(query, update, options, callback);
}