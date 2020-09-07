import { Schema, model, Model, Document, Types } from 'mongoose'

interface VideoGameModel extends Document {
  id: Types.ObjectId,
  name: string,
  company: string,
  fullname(): string
}

const VideoGameSchema = new Schema({
  id: {
    type: Types.ObjectId
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

VideoGameSchema.methods.fullname = function () : string {
  return (this.name.trim() + ' ' + this.company.trim())
}

const VideoGame: Model<VideoGameModel> = model<VideoGameModel>('Videogame', VideoGameSchema)

export default VideoGame
