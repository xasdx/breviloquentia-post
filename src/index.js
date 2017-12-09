import environment from "~/../env.config"
import webApplication from "~/adapter/rest"
import postResource from "~/adapter/rest/resource/post"
import postService from "~/domain"

let { app, server } = webApplication(environment)
let { repository, service } = postService(environment)

app.registerResource("/api", postResource(app.createRouter(), service))

module.exports = { server, repository }
