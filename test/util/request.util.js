import chai from "chai"
import chaiHttp from "chai-http"

chai.use(chaiHttp)

let { expect, request } = chai

let requestCallback = (f) => (err, res) => {
  if (err) throw err
  f(extendWithAssertions(res))
}

let extendWithAssertions = (res) => {
  res.is = {
    ok: () => expect(res).to.have.status(200),
    json: () => expect(res).to.have.header("content-type", /^application\/json/),
  }
  return res
}

export default class Api {
  
  constructor(server, path) {
    this.server = server
    this.path = path
  }
  
  post = (body, done) => {
    request(this.server)
      .post(this.path)
      .send(body)
      .end(requestCallback(done))
  }
  
  get = (f) => {
    request(this.server)
      .get(this.path)
      .end(requestCallback(f))
  }
}