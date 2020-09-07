"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');








const GameSchema = new (0, _mongoose.Schema)({
  id: {
    type: _mongoose.Types.ObjectId
  },
  name: {
    type: String
  },
  videogame: {
    type: _mongoose.Types.ObjectId,
    ref: 'Videogame',
    required: true
  }
}, {
  timestamps: true
})

const Game = _mongoose.model('Game', GameSchema)

exports. default = Game
