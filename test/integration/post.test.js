import { expect } from "chai"

import Api from "./request.util"

import server from "~"

let api = new Api(server.server, "/api/posts")

let post = {
  author: "asd",
  title: "Introduction to JUnit5",
  body: "Content goes here.",
  tags: ["testing", "introduction"]
}

export default {
  "after": (done) => server.stop(done),
  "POST": {
    "creates a post": (done) => {
      api.post(post, (res) => {
        res.is.ok()
        res.is.json()
        res.has.body.containing(post)
        expect(res.body._id).to.be.a("string")
        expect(Date.parse(res.body.date)).to.be.a("number")
        done()
      })
    }
  }
}
