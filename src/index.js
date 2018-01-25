import environment from "~/../env.config"
import webApplication from "~/adapter/rest"
import postResource from "~/adapter/rest/resource/post.resource"
import postService from "~/domain"

console.log(`Assembling application on ${environment.env} environment`)

let { app, server } = webApplication(environment)
let { service, cleanUp } = postService(environment)

app.registerResource("/api", postResource(app.createRouter(), service))

module.exports = {
	server,
	terminate: (f) => cleanUp(() => server.stop(() => f()))
}
