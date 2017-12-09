import { expect } from "chai"

import Api from "./util.request"

import server from "~"

let api = new Api(server.server, "/api/posts")

export default {
  "after": (done) => server.stop(done),
  "POST": {
    "creates a post": (done) => {
      let name = "john"
      api.post({ name: name }, (res) => {
        expect(res).to.have.status(200)
          expect(res.body.message).to.equal(name)
          done()
      })
    }
  }
}
