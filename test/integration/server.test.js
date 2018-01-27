import { expect } from "chai"
import express from "express"
import WebServer from "~/adapter/rest/server"

let environment = (port) => {
  return {
    web: {
      app: {
        port: port || 3210
      }
    }
  }
}

export default {
  "start": {
    "starts a webserver": (f) => {
      let server = new WebServer({ requestListener: () => express() }, environment())
      server.start(() => server.stop(() => f()))
    },
    "throws an error when something bad happens": () => {
      let server = new WebServer({ requestListener: () => express() }, environment(-1))
      expect(server.start).to.throw()
    }
  }
}
