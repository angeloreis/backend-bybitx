"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');








const VideoGameSchema = new (0, _mongoose.Schema)({
  id: {
    type: _mongoose.Types.ObjectId
  },
  name: {
    type: String
  },
  company: {
    type: String
  }
}, {
  timestamps: true
})

VideoGameSchema.methods.fullname = function ()  {
  return (this.name.trim() + ' ' + this.company.trim())
}

const VideoGame = _mongoose.model('Videogame', VideoGameSchema)

exports. default = VideoGame
