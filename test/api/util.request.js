import chai from "chai"
import chaiHttp from "chai-http"

chai.use(chaiHttp)

let { request } = chai

let requestCallback = (cb) => (err, res) => {
  if (err) throw err
  cb(res)
}

export default class Api {
  
  constructor(server, path) {
    this.server = server
    this.path = path
  }
  
  post = (body, cb) => {
    request(this.server)
      .post(this.path)
      .send(body)
      .end(requestCallback(cb))
  }
  
  get = (cb) => {
    request(this.server)
      .get(this.path)
      .end(requestCallback(cb))
  }
}