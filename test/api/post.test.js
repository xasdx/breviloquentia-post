import { expect } from "chai"

import Api from "./util.request"

import server from "~"

let api = new Api(server.server, "/api/posts")

let post = {
  author: "asd",
  title: "Introduction to JUnit5",
  body: "Content goes here.",
  date: Date.now(),
  tags: ["testing", "introduction"]
}

export default {
  "after": (done) => server.stop(done),
  "POST": {
    "creates a post": (done) => {
      api.post(post, (res) => {
        res.is.ok()
        res.is.json()
        res.has.body(post)
        done()
      })
    }
  }
}
