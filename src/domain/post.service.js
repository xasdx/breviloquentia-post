export default class PostService {
  
  constructor(environment, repository, messagePublisher) {
    this.env = environment
    this.repo = repository
    this.resourcesPublisher = messagePublisher.onExchange(environment.messaging.amqp.exchange.resources)
  }
  
  create = async (post) => {
    let post = await this.repo.create(post)
    this.resourcesPublisher.publish(post, "post.create")
  }
  
  findAll = async () => await this.repo.find()
}
