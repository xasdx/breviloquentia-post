export default class PostService {
  
  constructor(environment, repository, messagePublisher) {
    this.env = environment
    this.repo = repository
    this.resourcesPublisher = messagePublisher.onExchange(environment.messaging.amqp.exchange.resources)
  }
  
  create = async (post) => {
    let postResource = await this.repo.create(post)
    this.resourcesPublisher.publish(postResource, "post.create")
    return postResource
  }
  
  findAll = async () => await this.repo.find()
}
