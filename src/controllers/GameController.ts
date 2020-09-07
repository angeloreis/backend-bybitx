import { Response, Request } from 'express'
import Game from '../schemas/Game'
import { log } from 'debug'

class GameController {
  public async index (request: Request, response: Response): Promise<Response> {
    const games = await Game.find().populate('videogame', 'name')
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

  public async store (request: Request, response: Response): Promise<Response> {
    const game = await Game.create(request.body)
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

  public async update (request:Request, response:Response): Promise<Response> {
    const id = request.params.id
    const game = await Game.findByIdAndUpdate(id, request.body).populate('videogame', 'name')
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

  public async gameById (request:Request, response:Response): Promise<Response> {
    const id = request.params.id
    const game = await Game.findById(id)
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

  public async delete (request:Request, response:Response): Promise<Response> {
    const id = request.params.id
    const game = await Game.findByIdAndDelete(id)
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

  public async gameByConsoleId (request: Request, response: Response): Promise<Response> {
    log('api:games')
    const idConsole = request.params.id
    const games = await Game.find({ videogame: idConsole })
      .populate('videogame', 'name')
      .then(res => {
        log(res)
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

export default new GameController()
