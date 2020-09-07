"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Game = require('../schemas/Game'); var _Game2 = _interopRequireDefault(_Game);
var _debug = require('debug');

class GameController {
   async index (request, response) {
    const games = await _Game2.default.find().populate('videogame', 'name')
      .then(res => {
        if (res.length === 0) {
          return ({
            status: false,
            data: [{
              message: 'None games registered on database'
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
    return response.send(games)
  }

   async store (request, response) {
    const game = await _Game2.default.create(request.body)
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
    return response.send(game)
  }

   async update (request, response) {
    const id = request.params.id
    const game = await _Game2.default.findByIdAndUpdate(id, request.body).populate('videogame', 'name')
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
    return response.send(game)
  }

   async gameById (request, response) {
    const id = request.params.id
    const game = await _Game2.default.findById(id)
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
            data: err,
            id: request.query.id
          })
        }
      )
    return response.send(game)
  }

   async delete (request, response) {
    const id = request.params.id
    const game = await _Game2.default.findByIdAndDelete(id)
      .then(() => {
        return ({
          status: true,
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
            id: id
          })
        }
      )
    return response.send(game)
  }

   async gameByConsoleId (request, response) {
    _debug.log.call(void 0, 'api:games')
    const idConsole = request.params.id
    const games = await _Game2.default.find({ videogame: idConsole })
      .populate('videogame', 'name')
      .then(res => {
        _debug.log.call(void 0, res)
        return ({
          status: true,
          data: res
        })
      })
      .catch(
        err => {
          return ({
            status: false,
            data: err,
            id: idConsole
          })
        }
      )
    return response.send(games)
  }
}

exports. default = new GameController()
