import environment from "~/../env.config"
import webApplication from "~/adapter/rest"
import postResource from "~/adapter/rest/resource/post.resource"
import postService from "~/domain"

console.log(`Assembling application on ${environment.env} environment`)

let { app, server } = webApplication(environment)
let { repository, service } = postService(environment)

app.registerResource("/api", postResource(app.createRouter(), service))

module.exports = { server, repository }
