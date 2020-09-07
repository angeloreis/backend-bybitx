import { Response, Request } from 'express'
import VideoGame from '../schemas/VideoGame'

class VideoGameController {
  public async index (request: Request, response: Response): Promise<Response> {
    const videogames = await VideoGame.find()
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

  public async store (request: Request, response: Response): Promise<Response> {
    const videogame = await VideoGame.create(request.body)
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

  public async update (request:Request, response:Response): Promise<Response> {
    const id = request.params.id
    const videogame = await VideoGame.findByIdAndUpdate(id, request.body)
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

  public async videogameById (request:Request, response:Response): Promise<Response> {
    const id = request.params.id
    const videogame = await VideoGame.findById(id)
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

  public async delete (request:Request, response:Response): Promise<Response> {
    const id = request.params.id
    const videogame = await VideoGame.findByIdAndDelete(id)
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

export default new VideoGameController()
