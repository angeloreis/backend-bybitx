import { Schema, Model, model, Document, Types } from 'mongoose'
import { GameInterface } from '../interfaces/Game'

export interface GameModel extends GameInterface, Document {
  id: Types.ObjectId,
  name: string,
  videogame: Types.ObjectId
}

const GameSchema = new Schema({
  id: {
    type: Types.ObjectId
  },
  name: {
    type: String
  },
  videogame: {
    type: Types.ObjectId,
    ref: 'Videogame',
    required: true
  }
}, {
  timestamps: true
})

const Game: Model<GameModel> = model<GameModel>('Game', GameSchema)

export default Game
