"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _VideoGameController = require('./controllers/VideoGameController'); var _VideoGameController2 = _interopRequireDefault(_VideoGameController);
var _GameController = require('./controllers/GameController'); var _GameController2 = _interopRequireDefault(_GameController);

const routes = _express.Router.call(void 0, )

// VideoGame
routes.get('/videogame', _VideoGameController2.default.index)
routes.get('/videogame/:id', _VideoGameController2.default.videogameById)
routes.post('/videogame', _VideoGameController2.default.store)
routes.put('/videogame/:id', _VideoGameController2.default.update)
routes.delete('/videogame/:id', _VideoGameController2.default.delete)

// Game
routes.get('/game', _GameController2.default.index)
routes.get('/game/:id', _GameController2.default.gameById)
routes.get('/game/videogame/:id', _GameController2.default.gameByConsoleId)
routes.post('/game', _GameController2.default.store)
routes.put('/game/:id', _GameController2.default.update)
routes.delete('/game/:id', _GameController2.default.delete)

exports. default = routes
