import { expect } from "chai"
import Api from "../util/request.util"
import DB from "../util/database.util"
import { server, repository } from "~"

let api = new Api(server.server, "/api/posts")
let db = new DB("posts")

let post = {
  author: "asd",
  title: "Introduction to JUnit5",
  body: "Content goes here.",
  tags: ["testing", "introduction"]
}

export default {
  "before": (f) => db.connect(f),
  "after": (f) => db.close(() => repository.disconnect(() => server.stop(f))),
  "beforeEach": (f) => db.init(f),
  "POST": {
    "creates a post": (f) => {
      api.post(post, (res) => {
        res.is.ok()
        res.is.json()
        expect(res.body).to.deep.include(post)
        expect(res.body._id).to.be.a("string")
        expect(Date.parse(res.body.date)).to.be.a("number")
        db.findAll((docs) => {
          expect(docs).to.have.lengthOf(1)
          expect(docs[0]._id.toString()).to.equal(res.body._id)
          f()
        })
      })
    }
  }
}
