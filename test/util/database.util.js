import { MongoClient } from "mongodb"
import environment from "../../env.config"

let defaultDatabaseCallback = (f) => (err, res) => {
  if (err) throw err
  if (f) f()
}

export default class Database {
  
  constructor(collection) {
    this.db = null
    this.collection = null
    this.collectionName = collection
  }
  
  connect = (f) => MongoClient.connect(environment.db.url, (err, res) => {
    if (err) throw err
    this.db = res
    this.collection = this.db.collection(this.collectionName)
    if (f) f()
  })
  
  init = (f) => this.collection.deleteMany({}, defaultDatabaseCallback(f))
  
  close = (f) => this.db.close(defaultDatabaseCallback(f))
  
  findAll = (f) => this.collection.find({}).toArray((err, docs) => {
    if (err) throw err
    if (f) f(docs)
  })
  
  put = (entries, f) => this.collection.insertMany(
    entries,
    defaultDatabaseCallback(f)
  )
}
