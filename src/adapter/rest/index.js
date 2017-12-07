import WebServer from "./server"
import WebApplication from "./express.application"

import middlewares from "./middleware"

let assembleWebApplication = () => {
  let app = new WebApplication()
  middlewares().forEach(app.registerMiddleware)
  return app
}

export default (env) => {
  let app = assembleWebApplication()
  let server = new WebServer(app, env)
  return { app, server }
}
