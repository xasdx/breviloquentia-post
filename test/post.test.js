import chai from "chai"
import chaiHttp from "chai-http"

chai.use(chaiHttp)

let { expect, request } = chai

import server from "~"

let API_PATH = "/api/posts"

export default {
  "POST": {
    "creates a post": (done) => {
      let name = "john"
      request(server.server)
        .post(API_PATH)
        .send({ name: name })
        .end((err, res) => {
          if (err) throw err
          expect(res).to.have.status(200)
          expect(res.body.message).to.equal(name)
          done()
        })
    }
  }
}
