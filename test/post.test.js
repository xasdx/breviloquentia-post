import { expect, request } from "chai"

import server from "~"

let HOST = "http://localhost:3000"
let API_PATH = "/api/posts"

export default {
  "POST": {
    "creates a post": (done) => {
      let name = "john"
      request(server)
        .post(`${HOST}${API_PATH}`)
        .send(`{ "name": ${name} }`)
        .end((res) => {
          expect(res).to.have.status(200)
          expect(res.body.message).to.equal(name)
        })
    }
  }
}
