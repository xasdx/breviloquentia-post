import MongooseRepository from "~/adapter/repository/mongoose.repository"
import PostModel from "~/domain/post.model"
import PostService from "~/domain/post.service"

export default (environment) => {
  let repository = new MongooseRepository(environment, PostModel)
  return new PostService(repository)
}