import http from "http"

export default class WebServer {

  constructor(application, environment) {
    this.server = http.createServer(application.requestListener())
    this.env = environment
  }

  start = (f) => {
    let port = this.env.web.app.port
    return this.server.listen(port, (err) => {
      if (err) throw err
      console.log(`server up on port ${port}`)
      if (f) f()
    })
  }

  stop = (f) => this.server.close(f)
}
