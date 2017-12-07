import postResource from "~/adapter/rest/resource/post"

import webApplication from "~/adapter/rest"

let API_BASE_PATH = "/api"

let { app, server } = webApplication({ web: { app: { port: 3210 } } })

app.registerResource(API_BASE_PATH, postResource(app.createRouter()))

export default server
