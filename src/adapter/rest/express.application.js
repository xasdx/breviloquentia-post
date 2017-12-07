import express from "express"

export default class ExpressWebApplication {

  app = express()

  registerResource = (path, handler) => this.app.use(path, handler)

  createRouter = () => express.Router()

  requestListener = () => this.app
}
