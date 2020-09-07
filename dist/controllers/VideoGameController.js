"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _VideoGame = require('../schemas/VideoGame'); var _VideoGame2 = _interopRequireDefault(_VideoGame);

class VideoGameController {
   async index (request, response) {
    const videogames = await _VideoGame2.default.find()
      .then(res => {
        if (res.length === 0) {
          return ({
            status: false,
            data: [{
              message: 'None console registered on database'
            }]
          })
        }

        return ({
          status: true,
          data: res
        })
      })
      .catch(
        err => {
          return ({
            status: false,
            data: err
          })
        }
      )
    return response.send(videogames)
  }

   async store (request, response) {
    const videogame = await _VideoGame2.default.create(request.body)
      .then(res => {
        return ({
          status: true,
          data: res
        })
      })
      .catch(
        err => {
          return ({
            status: false,
            data: err
          })
        }
      )
    return response.send(videogame)
  }

   async update (request, response) {
    const id = request.params.id
    const videogame = await _VideoGame2.default.findByIdAndUpdate(id, request.body)
      .then(res => {
        return ({
          status: false,
          data: res
        })
      })
      .catch(
        err => {
          return ({
            status: false,
            data: err
          })
        }
      )
    return response.send(videogame)
  }

   async videogameById (request, response) {
    const id = request.params.id
    const videogame = await _VideoGame2.default.findById(id)
      .then(res => {
        return ({
          status: false,
          data: res
        })
      })
      .catch(
        err => {
          return ({
            status: false,
            data: err,
            id: request.query.id
          })
        }
      )
    return response.send(videogame)
  }

   async delete (request, response) {
    const id = request.params.id
    const videogame = await _VideoGame2.default.findByIdAndDelete(id)
      .then(() => {
        return ({
          status: false,
          data: {
            message: `Delete success! id: ${id}`
          }
        })
      })
      .catch(
        err => {
          return ({
            status: false,
            data: err,
            id: request.params.id
          })
        }
      )
    return response.send(videogame)
  }
}

exports. default = new VideoGameController()
