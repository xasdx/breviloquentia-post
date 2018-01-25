import MongooseRepository from "~/adapter/repository/mongoose.repository"
import JackrabbitPublisher from "~/adapter/messaging/jackrabbit.publisher"
import PostModel from "~/domain/post.model"
import PostService from "~/domain/post.service"

export default (environment) => {
  let repository = new MongooseRepository(environment, PostModel)
  let messagePublisher = new JackrabbitPublisher(environment)
  return {
    service: new PostService(environment, repository, messagePublisher),
    cleanUp: (f) => {
      repository.disconnect(() => {
        messagePublisher.disconnect()
        f()
      })
    }
  }
}
