import webApplication from "~/adapter/rest"

import postResource from "~/adapter/rest/resource/post"
import postService from "~/domain"

let API_BASE_PATH = "/api"

let testEnvironment = {
    web: { app: { port: 3210 } },
    db: { url: "mongodb://localhost:27017" }
}

let { app, server } = webApplication(testEnvironment)

app.registerResource(API_BASE_PATH, postResource(
    app.createRouter(),
    postService(testEnvironment)
))

export default server
