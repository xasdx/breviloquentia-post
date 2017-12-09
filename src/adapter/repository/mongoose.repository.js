import mongoose from "mongoose"

let databaseCallback = (ok, nope) => {
  return (err, res) => err ? nope(err) : ok(res)
}

export default class MongooseRepository {
  
  connected = false
  
  constructor(environment, entity) {
    this.env = environment
    this.entity = entity
    
    if (!this.connected) {
      mongoose.Promise = global.Promise
      mongoose.connect(this.env.db.url, { useMongoClient: true })
              .then(() => { this.connected = true })
    }
  }
  
  create = (object) => new Promise((ok, nope) => {
    let entity = new this.entity(object)
    entity.save(databaseCallback(ok, nope))
  })
}