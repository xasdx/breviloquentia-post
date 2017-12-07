import express from "express"

export default class ExpressWebApplication {

  app = express()

  registerResource = (path, handler) => this.app.use(path, handler)

  registerMiddleware = (middleware) => this.app.use(middleware)

  createRouter = () => express.Router()

  requestListener = () => this.app
}
