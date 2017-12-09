import WebServer from "~/adapter/rest/server"
import WebApplication from "~/adapter/rest/express.application"
import middlewares from "~/adapter/rest/middleware"

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
