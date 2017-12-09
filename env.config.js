module.exports = {
  env: process.env.NODE_ENV || "test",
  envs: {
    prod: "prod",
    test: "test"
  },
  web: {
    app: {
      port: process.env.WEB_APP_PORT || 3210
    }
  },
  db: {
    url: process.env.DB_URL || "mongodb://127.0.0.1:27017"
  }
}
