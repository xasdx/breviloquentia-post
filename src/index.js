import WebServer from "~/adapter/rest/server"
import WebApplication from "~/adapter/rest/express.application"
import postResourceRouter from "~/adapter/rest/resource/post"
import bodyParser from "~/adapter/rest/middleware/body-parser"

let app = new WebApplication()
app.registerMiddleware(bodyParser)
app.registerResource("/api", postResourceRouter(app.createRouter()))

let server = new WebServer(app, {
  web: {
    app: {
      port: 3210
    }
  }
})

export default server
