import http from "http"

export default class WebServer {

  constructor(application, environment) {
    this.server = http.createServer(application.requestListener())
    this.env = environment
  }

  start = (cb) => {
    let port = this.env.web.app.port
    return this.server.listen(port, (err) => {
      if (err) throw err
      console.log(`server up on port ${port}`)
      cb()
    })
  }

  stop = (cb) => this.server.close(cb)

  server = () => this.server
}
