import webApplication from "~/adapter/rest"

import postResource from "~/adapter/rest/resource/post"
import postService from "~/domain"

let API_BASE_PATH = "/api"

let testEnvironment = {
  web: { app: { port: 3210 } },
  db: { url: "mongodb://127.0.0.1:27017" }
}

let { app, server } = webApplication(testEnvironment)

let { repository, service } = postService(testEnvironment)

app.registerResource(API_BASE_PATH, postResource(
  app.createRouter(),
  service
))

module.exports = { server, repository }
