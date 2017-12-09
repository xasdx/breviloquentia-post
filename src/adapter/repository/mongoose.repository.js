import mongoose from "mongoose"

let databaseCallback = (ok, nope) => {
  return (err, res) => err ? nope(err) : ok(res)
}

let connection = {
  connected: 1,
  disconnected: 0
}

export default class MongooseRepository {
  
  constructor(environment, entity) {
    this.env = environment
    this.entity = entity
    this.connect()
  }
  
  connect = () => {
    if (mongoose.connection.readyState === connection.disconnected) {
      mongoose.Promise = global.Promise
      mongoose.connect(this.env.db.url, { useMongoClient: true })
        .then(() => console.log("connected to mongodb"))
    }
  }
  
  create = (object) => new Promise((ok, nope) => {
    let entity = new this.entity(object)
    entity.save(databaseCallback(ok, nope))
  })
  
  disconnect = (cb) => {
    if (mongoose.connection.readyState === connection.connected) {
      mongoose.connection.close(() => {
        console.log("disconnecting from mongodb")
        if (cb) cb()
      })
    }
  }
}