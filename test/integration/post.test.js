import { expect } from "chai"
import Api from "../util/request.util"
import DB from "../util/database.util"
import { jackrabbitMock } from "./mock"

let { server, terminate } = require("~")

let api = new Api(server.server, "/api/posts")
let db = new DB("posts")

let post = {
  userId: "asd",
  title: "Introduction to JUnit5",
  body: "Content goes here.",
  tags: ["testing", "introduction"]
}

let otherPost = {
  userId: "dsa",
  title: "Hexagonal architecture",
  body: "Content goes here.",
  tags: ["architecture"]
}

export default {
  "before": (f) => db.connect(f),
  "after": (f) => db.close(() => terminate(f)),
  "beforeEach": (f) => db.init(f),
  "POST": {
    "creates a post": (f) => {
      api.post(post, (res) => {
        res.is.ok()
        res.is.json()
        expect(res.body).to.deep.include(post)
        expect(res.body._id).to.be.a("string")
        expect(Date.parse(res.body.date)).to.be.a("number")
        
        let mockCalls = jackrabbitMock().calls()
        expect(mockCalls).to.have.lengthOf(1)
        expect(mockCalls[0].message).to.deep.include(post)
        expect(mockCalls[0].routing).to.deep.equal({ key: "post.create" })
        
        db.findAll((docs) => {
          expect(docs).to.have.lengthOf(1)
          expect(docs[0]._id.toString()).to.equal(res.body._id)
          f()
        })
      })
    }
  },
  "GET": {
    "returns posts": (f) => {
      db.put([
        Object.assign({}, post),
        Object.assign({}, otherPost)
      ], () => {
        api.get((res) => {
          res.is.ok()
          res.is.json()
          expect(res.body).to.be.an("array")
          expect(res.body).to.have.lengthOf(2)
          expect(res.body[0]).to.deep.include(post)
          expect(res.body[0]._id).to.be.a("string")
          expect(Date.parse(res.body[0].date)).to.be.a("number")
          expect(res.body[1]).to.deep.include(otherPost)
          f()
        })
      })
    }
  }
}
