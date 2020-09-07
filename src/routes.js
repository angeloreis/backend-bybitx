import { Router } from 'express'

import VideoGameController from './controllers/VideoGameController'
import GameController from './controllers/GameController'

const routes = Router()

// VideoGame
routes.get('/videogame', VideoGameController.index)
routes.get('/videogame/:id', VideoGameController.videogameById)
routes.post('/videogame', VideoGameController.store)
routes.put('/videogame/:id', VideoGameController.update)
routes.delete('/videogame/:id', VideoGameController.delete)

// Game
routes.get('/game', GameController.index)
routes.get('/game/:id', GameController.gameById)
routes.get('/game/videogame/:id', GameController.gameByConsoleId)
routes.post('/game', GameController.store)
routes.put('/game/:id', GameController.update)
routes.delete('/game/:id', GameController.delete)

export default routes
