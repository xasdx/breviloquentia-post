import chai from "chai"
import chaiHttp from "chai-http"

chai.use(chaiHttp)

let { expect, request } = chai

let requestCallback = (cb) => (err, res) => {
  if (err) throw err
  cb(extendWithAssertions(res))
}

let extendWithAssertions = (res) => {
  res.is = {
    ok: () => expect(res).to.have.status(200),
    json: () => expect(res).to.have.header("content-type", /^application\/json/),
  }
  res.has = {
    body: {
      eql: (obj) => expect(res.body).to.eql(obj),
      containing: (obj) => expect(res.body).to.deep.include(obj)
    }
  }
  return res
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